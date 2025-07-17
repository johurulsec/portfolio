import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const SocialLinks = () => {
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
		<div className="flex text-4xl gap-2" id="skills">
			{socialLinks.map((social, idx) => (
				<div key={idx}>
					<a
						className="text-white btn text-3xl bg-transparent hover:text-[#ACBCF9]"
						href={social.link}
						target="_blank"
					>
						{social.icon}
					</a>
				</div>
			))}
		</div>
	);
};

export default SocialLinks;
