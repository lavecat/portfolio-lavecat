import type { LastFmTrack } from "@/types/music";

export function formatDuration(ms: number) {
	const minutes = Math.floor(ms / 60000);
	const seconds = Math.floor((ms % 60000) / 1000);
	return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function formatProgress(progress: number, duration: number) {
	if (!duration || duration <= 0) {
		return "0%";
	}

	const progressPercent = (progress / duration) * 100;
	return `${progressPercent}%`;
}

export function formatPlayedAt(playedAt: string) {
	const playedDate = new Date(playedAt);
	const now = new Date();
	const diffInMinutes = Math.floor(
		(now.getTime() - playedDate.getTime()) / (1000 * 60),
	);

	if (diffInMinutes < 1) return "Just now";
	if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
	if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
	return `${Math.floor(diffInMinutes / 1440)}d ago`;
}

export function getBestImage(track: LastFmTrack) {
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

export function mapLastFmTrack(track: LastFmTrack) {
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

export function toIsoDate(uts?: string) {
	if (!uts) {
		return new Date().toISOString();
	}

	const timestamp = Number(uts);
	if (Number.isNaN(timestamp)) {
		return new Date().toISOString();
	}

	return new Date(timestamp * 1000).toISOString();
}
