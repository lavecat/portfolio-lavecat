import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "Music Activity",
	description: "See my current music listening activity",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function MusicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
