import SpotifyStatus from "@/components/SpotifyStatus";

export default function MusicPage() {
	return (
		<div className="container mx-auto px-4 md:px-8 py-4 md:py-6 max-w-5xl">
			<h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide text-white">
				Music Activity
			</h1>
			<SpotifyStatus />
		</div>
	);
}
