"use client";
import Education from "./Education";
import SkillsLottie from "./SkillsLottie";
import Image from "next/image";

const Skills = () => {
	const skills = [
		{
			title: "HTML",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		},
		{
			title: "CSS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		},
		{
			title: "JavaScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		},
		{
			title: "TypeScript",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		},
		{
			title: "React",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		},
		{
			title: "Next.js",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		},
		{
			title: "Node.js",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		},
		{
			title: "Express",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
		},
		{
			title: "MongoDB",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		},
		{
			title: "PostgreSQL",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		},
		{
			title: "Prisma",
			icon: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/prisma.png",
		},
		{
			title: "Tailwind CSS",
			icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
		},
		{
			title: "Git",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		},
		{
			title: "GitHub",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
		},
		{
			title: "Firebase",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
		},
		{
			title: "Vercel",
			icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vercel.png",
		},
	];
	return (
		<div className="w-full">
			<div className="w-full md:flex py-10 text-white">
				<div className="md:w-1/2   order-2">
					<div className="space-y-5">
						<h1 className="font-bold">What I do?</h1>
						<p>
							🚀 Enthusiastic Full Stack Developer Exploring the
							Entire Tech Ecosystem
						</p>
						<div className="grid grid-cols-4 gap-5">
							{skills.map((skill, idx) => (
								<div
									className="cursor-pointer text-center bg-[#272a32] rounded-2xl p-3 transition duration-200 hover:shadow-lg hover:shadow-gray-700"
									key={idx}
								>
									<Image
										src={skill.icon}
										alt={skill.title}
										width={40}
										height={40}
										className="object-contain m-2 mx-auto"
									/>
									<h6 className="text-[10px]">
										{skill.title}
									</h6>
								</div>
							))}
						</div>
						<p>
							⚡ Crafting highly interactive and responsive user
							interfaces for web and mobile apps <br />⚡ Building
							Progressive Web Apps (PWAs) with modern SPA and
							multi-page stacks <br /><span id="education">⚡ Integrating third-party
							services like Firebase, AWS, and DigitalOcean for
							robust backend support</span>
						</p>
					</div>
				</div>
				<div className="md:w-1/2 order-1">
					<SkillsLottie />
				</div>
			</div>
			
		</div>
	);
};

export default Skills;
