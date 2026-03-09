export interface Track {
	name: string;
	artists: { name: string }[];
	album: {
		name: string;
		images: { url: string }[];
	};
	duration_ms?: number | null;
	external_urls: {
		spotify: string;
	};
}

export interface RecentTrack {
	track: Track;
	played_at: string;
}

export interface CurrentlyPlaying {
	item: Track;
	is_playing: boolean;
	progress_ms: number;
}

export interface LastFmTrack {
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
