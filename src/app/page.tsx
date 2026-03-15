import Image from "next/image";
import DiscordStatus from "@/components/DiscordStatus";

export default function Home() {
	return (
		<div className="container mx-auto px-4 md:px-8 py-4 md:py-6 max-w-7xl">
			<section className="mb-8 md:mb-12">
				<h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
					<span className="text-[#6a584c]">About</span>
					<span className="text-white"> Me</span>
					<span className="text-[#6a584c]"> 🐈</span>
				</h1>

				<div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
					<div className="flex-1 space-y-4 card-anime p-6">
						<h3 className="text-lg md:text-xl text-[#6a584c]">
							Discord Bot & BackEnd Developer
						</h3>

						<p className="text-gray-300 leading-relaxed">
							I am not a big Discord Bot Developer and a beginner BackEnd Developer
							who enjoys creating discord bots and api? I like to
							create weird and somewhat different things, oh and i like reverse engineering random things, sorry I&apos;m still a
							beginner.
						</p>

						<p className="text-gray-300 leading-relaxed">
							My favorite Programming Languages is python. And
							some time i work on random project like a python package/app or bot like CookieSong xD
						</p>

						<div className="pt-2">
							<button type="button" className="btn-anime">
								My Projects ➜
							</button>
						</div>
					</div>

					<div className="w-full lg:w-[400px] flex-shrink-0">
						<div className="card-anime p-4">
							<h3 className="text-lg font-medium text-[#6a584c] mb-4 tracking-wide text-center">
								Discord Status
							</h3>
							<DiscordStatus />
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
					{/* Backend */}
					<div className="card-anime p-4 md:p-6">
						<h4 className="text-lg font-medium text-[#6a584c] mb-4 tracking-wide">
							Backend ✧*。
						</h4>
						<div className="flex flex-wrap gap-3">
							<a
								href="https://fastapi.tiangolo.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=fastapi"
									alt="Fastapi"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
						</div>
					</div>

					{/* Languages */}
					<div className="card-anime p-4 md:p-6">
						<h4 className="text-lg font-medium text-[#6a584c] mb-4 tracking-wide">
							Languages ✧*。
						</h4>
						<div className="flex flex-wrap gap-3">
							<a
								href="https://python.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=python"
									alt="Python"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://www.lua.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=lua"
									alt="Lua"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
						</div>
					</div>

					{/* Ecosystem & Devops */}
					<div className="card-anime p-4 md:p-6">
						<h4 className="text-lg font-medium text-[#6a584c] mb-4 tracking-wide">
							Ecosystem & Devops ✧*。
						</h4>
						<div className="flex flex-wrap gap-3">
							<a
								href="https://briefcase.beeware.org/en/stable/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://briefcase.beeware.org/en/stable/images/briefcase.png"
									alt="Briefcase"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://git-scm.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=git"
									alt="Git"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://github.com/features/actions"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=githubactions"
									alt="GitHub Actions"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://vercel.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=vercel"
									alt="Vercel"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://www.linux.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=linux"
									alt="Linux"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://www.microsoft.com/windows"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=windows"
									alt="Windows"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
						</div>
					</div>

					{/* Toolstack */}
					<div className="card-anime p-4 md:p-6">
						<h4 className="text-lg font-medium text-[#6a584c] mb-4 tracking-wide">
							Toolstack ✧*。
						</h4>
						<div className="flex flex-wrap gap-3">
							<a
								href="https://www.jetbrains.com/fr-fr/pycharm/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=pycharm"
									alt="Pycharm"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://code.visualstudio.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=vscode"
									alt="VS Code"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://www.jetbrains.com/idea/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=idea"
									alt="IntelliJ IDEA"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://www.jetbrains.com/webstorm/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=webstorm"
									alt="WebStorm"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://github.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=github"
									alt="GitHub"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://create.roblox.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=robloxstudio"
									alt="Roblox Studio"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://www.figma.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=figma"
									alt="figma"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
						</div>
					</div>

					{/* Databases & ORM */}
					<div className="card-anime p-4 md:p-6">
						<h4 className="text-lg font-medium text-[#6a584c] mb-4 tracking-wide">
							Databases & ORM ✧*。
						</h4>
						<div className="flex flex-wrap gap-3">
							<a
								href="https://www.mysql.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=mysql"
									alt="MySQL"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
							<a
								href="https://sqlite.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
							>
								<Image
									src="https://skillicons.dev/icons?i=sqlite"
									alt="sqlite"
									width={40}
									height={40}
									unoptimized
									className="transition-transform group-hover:scale-110"
								/>
							</a>
						</div>
					</div>

						{/* Some Thing */}
						<div className="card-anime p-4 md:p-6">
							<h4 className="text-lg font-medium text-[#6a584c] mb-4 tracking-wide">
								Python package and some thing ✧*。
							</h4>
							<div className="flex flex-wrap gap-3">
								<a
									href="https://discordpy.readthedocs.io/en/latest/"
									target="_blank"
									rel="noopener noreferrer"
									className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
								>
									<Image
										src="https://i.namu.wiki/i/Bmws3Lut9SPDLijBh6RUMz9VtYxjrmXWjlZBF2dgeTYMOGAKntfH1VQnuinzwv7fmy2xoik3csUhyqrchSyKmQ.webp"
										alt="discordpy"
										width={40}
										height={40}
										unoptimized
										className="transition-transform group-hover:scale-110"
									/>
								</a>
								<a
									href="https://toga.beeware.org/en/stable/"
									target="_blank"
									rel="noopener noreferrer"
									className="group bg-[#1F1B2E] p-2 rounded-lg transition-transform hover:scale-105"
								>
									<Image
										src="https://toga.beeware.org/en/stable/images/toga.png"
										alt="toga"
										width={40}
										height={40}
										unoptimized
										className="transition-transform group-hover:scale-110"
									/>
								</a>
							</div>
						</div>
				</div>
			</section>
		</div>
	);
}
