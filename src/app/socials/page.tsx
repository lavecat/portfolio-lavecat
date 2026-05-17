import type { Metadata, Viewport } from "next";
import Link from "next/link";
import {
	FaDiscord,
	FaGithub,
	FaSteam
} from "react-icons/fa";

import { SiMatrix,SiRoblox } from "react-icons/si";


export const metadata: Metadata = {
	title: "Socials",
	description: "Connect with me on various social platforms",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

const socialLinks = [
	{
		name: "GitHub",
		icon: <FaGithub size={24} />,
		url: "https://github.com/lavecat",
		color:
			"bg-[#6e5494]/10 hover:bg-[#6e5494]/20 text-white border-[#6e5494]/30",
	},
	{
		name: "Steam",
		icon: <FaSteam size={24} />,
		url: "https://steamcommunity.com/profiles/76561199570825419/",
		color:
			"bg-[#1b2838]/10 hover:bg-[#1b2838]/20 text-white border-[#1b2838]/30",
	},
	{
		name: "Roblox",
		icon: <SiRoblox size={24} />,
		url: "https://www.roblox.com/users/2218745313",
		color:
			"bg-[#1b2838]/10 hover:bg-[#1b2838]/20 text-white border-[#1b2838]/30",
	},
	{
		name: "Matrix",
		icon: <SiMatrix size={24} />,
		url: "https://matrix.to/#/@lirus:matrix.org",
		color:
			"bg-[#1b2838]/10 hover:bg-[#1b2838]/20 text-white border-[#1b2838]/30",
	},
	{
		name: "Discord",
		icon: <FaDiscord size={24} />,
		url: "https://discord.com/users/1132574182270570557",
		color:
			"bg-[#5865F2]/10 hover:bg-[#5865F2]/20 text-[#5865F2] border-[#5865F2]/30",
	},
];

export default function SocialsPage() {
	return (
		<div className="container mx-auto px-4 md:px-8 py-4 md:py-6 max-w-7xl">
			<h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide text-white">
				My Socials <span className="text-[#6a584c]">x)</span>
			</h1>

			<p className="text-zinc-300 mb-8 max-w-2xl">
				Connect with me on various social media platforms. Feel free to reach
				out, follow, or just check out what I&apos;m up to!
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{socialLinks.map((social) => (
					<Link
						key={social.name}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`flex items-center gap-4 p-6 rounded-xl border transition-all hover:scale-105 ${social.color}`}
					>
						<div className="p-3 bg-white/10 rounded-full">{social.icon}</div>
						<div className="flex-1">
							<h3 className="text-xl font-medium">{social.name}</h3>
							<p className="text-sm opacity-70">
								Connect with me on {social.name}
							</p>
						</div>
						<div className="text-xl">→</div>
					</Link>
				))}
			</div>
		</div>
	);
}
