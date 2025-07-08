import React from "react";
import SkillsLottie from "./SkillsLottie";

const Skills = () => {
	return (
		<div className="w-full md:flex py-10">
			<div className="md:w-1/2 flex items-center justify-center order-2">
				<div className="space-y-5">
					<h1>What I do?</h1>
					<p>
						🚀 Enthusiastic Full Stack Developer Exploring the
						Entire Tech Ecosystem
					</p>
					<p>
						⚡ Crafting highly interactive and responsive user
						interfaces for web and mobile apps <br />⚡ Building
						Progressive Web Apps (PWAs) with modern SPA and
						multi-page stacks <br />⚡ Integrating third-party
						services like Firebase, AWS, and DigitalOcean for robust
						backend support
					</p>
				</div>
			</div>
			<div className="md:w-1/2 flex items-center justify-center order-1">
				<SkillsLottie />
			</div>
		</div>
	);
};

export default Skills;
