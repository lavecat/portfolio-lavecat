import type { Metadata, Viewport } from "next";
import { Aldrich } from "next/font/google";
import "./globals.css";

//Stats
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Sakura from "@/components/Sakura";

const aldrich = Aldrich({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://lirus.vercel.app"),
	title: {
		default: "! Lirus",
		template: "%s",
	},
	description:
		"Hi! I'm Lirus, a passionate developer who loves anime & Gaming and COOOKIEEEESS welcome to my portfolio! 🍪",
	keywords: [
		"lirus_12345",
		"lirus",
		"Lirus",
		"Portfolio",
		"Developer",
		"Anime",
		"Gaming",
		"BackEnd Development",
		"Weeb",
	],
	authors: [{ name: "iaMJ, Lirus" }],
	creator: "iaMJ, Lirus",
	publisher: "Lirus",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://lirus.vercel.app",
		siteName: "Lirus Portfolio",
		title: "! Lirus",
		description:
			"Hi! I'm Lirus, a passionate developer who loves anime and COOOKIEEEESS welcome to my portfolio! 🍪",
		images: [
			{
				url: "/icon.png",
				width: 200,
				height: 200,
				alt: "Lirus Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "! Lirus",
		description:
			"Hi! I'm Lirus, a passionate developer who loves anime and COOOKIEEEESS welcome to my portfolio! 🍪",
		creator: "@MJ",
		images: ["/icon.png"],
	},
	alternates: {
		canonical: "https://lirus.vercel.app",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={aldrich.className}>
				<Sakura />
				<Navbar />
				<main className="px-4 pt-24 pb-24 min-h-screen overflow-x-hidden max-w-screen-lg mx-auto">
					{children}
					<Analytics />
					<SpeedInsights />
				</main>
				<div className="py-4" />
			</body>
		</html>
	);
}
