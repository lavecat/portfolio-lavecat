"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
	FaChartBar,
	FaCode,
	FaComments,
	FaDiscord,
	FaFile,
	FaGithub,
	FaHome,
	FaMusic,
	FaSteam,
	FaTv,
} from "react-icons/fa";

export default function Navbar() {
	const pathname = usePathname();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const navItems = [
		{ href: "/", icon: <FaHome size={20} />, title: "Home" },
		{ href: "/project", icon: <FaCode size={20} />, title: "Projects" },
		{ href: "/music", icon: <FaMusic size={20} />, title: "Music" },
		{ href: "/anime", icon: <FaTv size={20} />, title: "Anime" },
		{ href: "/steam", icon: <FaSteam size={20} />, title: "Steam" },
		{ href: "/stats", icon: <FaChartBar size={20} />, title: "Stats" },
		{ href: "/socials", icon: <FaComments size={20} />, title: "Socials" },
	];

	return (
		<>
			{/* Floating Left Header */}
			<div className="fixed top-6 left-6 z-50 bg-[#13111C]/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-[#6a584c]/20 flex items-center space-x-2">
				<Image
					src="/icon.png"
					alt="Lirus icon"
					width={26}
					height={26}
					className="rounded-full"
				/>
				<h1 className="text-lg font-bold text-[#6a584c] tracking-wide truncate">
					! Lirus
				</h1>
			</div>

			{/* Floating Right Header */}
			<div className="fixed top-6 right-6 z-50 bg-[#13111C]/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-[#6a584c]/20 flex items-center gap-5">
				<a
					href="https://discord.gg/GTJTG8RcpV"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#6a584c]/70 hover:text-[#6a584c] hover:scale-125 transition-all duration-300"
					aria-label="Discord"
				>
					<FaDiscord size={24} />
				</a>
				<a
					href="https://github.com/lavecat"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#6a584c]/70 hover:text-[#6a584c] hover:scale-125 transition-all duration-300"
					aria-label="GitHub"
				>
					<FaGithub size={24} />
				</a>
				<a
					href="https://github.com/lavecat/portfolio-lavecat"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[#6a584c]/70 hover:text-[#6a584c] hover:scale-125 transition-all duration-300"
					aria-label="Website"
				>
					<FaFile size={24} />
				</a>
			</div>

			{/* Floating Bottom Nav */}
			<nav
				className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#13111C]/95 border border-[#6a584c]/20 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-1 backdrop-blur-md"
				style={{ minWidth: "fit-content" }}
			>
				{navItems.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						aria-label={item.title}
						onClick={(e) => {
							e.currentTarget.blur();
							if (window.innerWidth < 768) {
								window.scrollTo(0, 0);
							}
						}}
						className={`relative flex flex-col items-center group focus:outline-none mx-1 transition-all duration-300 ${
							pathname === item.href
								? "text-[#6a584c]"
								: "text-[#6a584c]/70 hover:text-[#6a584c]/90"
						}`}
					>
						<div
							className={`transition-all duration-200 group-hover:scale-125 group-focus:scale-125 flex items-center justify-center ${
								pathname === item.href
									? "bg-[#ffb6c1]/20 p-2 rounded-xl animate-pulse"
									: "p-2"
							}`}
						>
							{item.icon}
							<span className="sr-only">{item.title}</span>
						</div>
						{/* Tooltip label */}
						<span
							className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-zinc-900 text-xs text-[#6a584c] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg z-20"
							aria-hidden="true"
						>
							{item.title}
						</span>
						{pathname === item.href && (
							<div className="absolute bottom-0 w-5 h-0.5 bg-[#6a584c] rounded-t-md" />
						)}
					</Link>
				))}
			</nav>
		</>
	);
}
