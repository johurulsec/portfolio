"use client";
import React from "react";
import HeroAnimation from "./HeroLottie";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Hero = () => {
	const socialLinks = [
		{
			title: "GitHUb",
			icon: <FaGithub />,
			link: "https://github.com/ahmad-mridul",
		},
		{
			title: "LinkedIn",
			icon: <FaLinkedin />,
			link: "https://www.linkedin.com/in/la-mridul/",
		},
		{
			title: "Gmail",
			icon: <IoMdMail />,
			link: "mailto:lamridul.leo@gmail.com",
		},
	];
	return (
		<div className="w-full md:flex py-10 text-white">
			<div className="md:w-1/2 flex items-center justify-center">
				<div className="space-y-5">
					<div className="space-y-5">
						<div className="space-y-5">
							<h1 className="font-bold">Hi all, I&#39;m LA Mridul 👋</h1>
							<p>
								🚀 A passionate Full Stack Developer
								specializing in building dynamic web apps with
								JavaScript, React.js, Next.js, and Node.js —
								blending clean code with modern UI for powerful
								digital experiences.
							</p>
						</div>
						<div className="flex text-4xl gap-2">
							{socialLinks.map((social, idx) => (
								<div key={idx}>
									<a className="text-white btn text-3xl bg-transparent hover:text-[#ACBCF9]" href={social.link} target="_blank">
										{social.icon}
									</a>
								</div>
							))}
						</div>
					</div>
					<div className="flex gap-5">
						<button className="btn bg-[#ACBCF9] hover:text-[#ACBCF9] hover:bg-transparent">Contact Me</button>
						<button className="btn bg-[#ACBCF9] hover:text-[#ACBCF9] hover:bg-transparent">Download My CV</button>
					</div>
				</div>
			</div>
			<div className="md:w-1/2 flex items-center justify-center">
				<HeroAnimation></HeroAnimation>
			</div>
		</div>
	);
};

export default Hero;
