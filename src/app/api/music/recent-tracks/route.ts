import { NextResponse } from "next/server";

const LASTFM_RECENT_TRACKS_URL =
	"https://portfolio-api-hehe.vercel.app/api/lastfm/recent-tracks";

interface LastFmTrack {
	name: string;
	url: string;
	artist?: {
		"#text"?: string;
	};
	album?: {
		"#text"?: string;
	};
	image?: Array<{
		size: string;
		"#text"?: string;
	}>;
	date?: {
		uts?: string;
		"#text"?: string;
	};
	"@attr"?: {
		nowplaying?: string;
	};
}

function getBestImage(track: LastFmTrack) {
	if (!Array.isArray(track.image)) {
		return "";
	}

	const preferredSizes = ["extralarge", "large", "medium", "small"];
	for (const size of preferredSizes) {
		const found = track.image.find((img) => img.size === size && img["#text"]);
		if (found?.["#text"]) {
			return found["#text"];
		}
	}

	return track.image.find((img) => Boolean(img["#text"]))?.["#text"] || "";
}

function mapTrack(track: LastFmTrack) {
	return {
		name: track.name,
		artists: [{ name: track.artist?.["#text"] || "Unknown Artist" }],
		album: {
			name: track.album?.["#text"] || "Unknown Album",
			images: [{ url: getBestImage(track) }],
		},
		duration_ms: null,
		external_urls: {
			spotify: track.url,
		},
	};
}

function toIsoDate(uts?: string) {
	if (!uts) {
		return new Date().toISOString();
	}

	const timestamp = Number(uts);
	if (Number.isNaN(timestamp)) {
		return new Date().toISOString();
	}

	return new Date(timestamp * 1000).toISOString();
}

export async function GET() {
	try {
		const response = await fetch(LASTFM_RECENT_TRACKS_URL, {
			headers: {
				"Content-Type": "application/json",
			},
			cache: "no-store",
		});

		if (!response.ok) {
			throw new Error("Failed to fetch latest recent tracks");
		}

		const data = await response.json();
		const tracks: LastFmTrack[] = data?.recenttracks?.track || [];

		const nowPlayingTrack = tracks.find(
			(track) => track?.["@attr"]?.nowplaying === "true",
		);

		const currentlyPlaying = nowPlayingTrack
			? {
					item: mapTrack(nowPlayingTrack),
					is_playing: true,
					progress_ms: 0,
				}
			: { item: null, is_playing: false, progress_ms: 0 };

		const recentTracks = tracks
			.filter((track) => track?.["@attr"]?.nowplaying !== "true")
			.map((track) => ({
				track: mapTrack(track),
				played_at: toIsoDate(track.date?.uts),
			}));

		return NextResponse.json({
			currentlyPlaying,
			recentTracks,
		});
	} catch (error) {
		console.error("Error fetching music tracks:", error);
		return NextResponse.json(
			{ error: "Failed to fetch music tracks" },
			{ status: 500 },
		);
	}
}
