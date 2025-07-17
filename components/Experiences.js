import React from "react";
import ExperienceCard from "./ExperienceCard";

const AllExperiences = () => {
	const experiences = [
		{
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTGqRVhLtG-pcadT05XplKou6hT-xvy4jRw&s",
			company: "Rayhan ICT",
			position: "Computer Trainer",
			duration: "March,2019 - January,2020",
            description:"Conducted structured computer training sessions covering MS Office, internet usage, and basic IT skills. Developed course materials and supported learners in applying digital tools confidently in real-world contexts."
		},
		{
			logo: "https://celebrationsbd.net/wp-content/uploads/2024/03/Asset-12-8-1.png",
			company: "CelebrationsBD",
			position: "Graphic Designer",
			duration: "February,2020 - August,2020",
            description:"Designed and delivered high-quality graphics for various media, ensuring brand consistency and visual appeal. Collaborated on creative concepts, executed revisions, and maintained up-to-date knowledge of design tools and trends."
		},
		{
			logo: "https://sebpo.com/wp-content/uploads/2025/04/SEBPO-Logo-2025.jpg",
			company: "SEBPO",
			position: "Executive",
			duration: "September,2022 - September,2023",
            description:"Developed and executed data-driven digital ad campaigns, focusing on audience targeting, budget optimization, and performance analysis. Ensured consistent brand messaging and maximized ROI across multiple digital channels."
		},
		{
			logo: "https://www.flytonic.com/wp-content/themes/flytonicstore/images/logo.png",
			company: "Flytonic",
			position: "WordPress Designer",
			duration: "October,2023 - June,2024",
            description:"Developed visually appealing and functional WordPress websites tailored to client requirements. Managed theme customization, plugin integration, and performance optimization to ensure a smooth user experience."
		},
		{
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtsV2QDL5XC2upDQf4TJFe6dTmFR3NyQkYg&s",
			company: "BulipeTech",
			position: "Software Engineer(Front-end)",
			duration: "June,2025 - Continue",
            description:"Built and maintained scalable front-end features using React.js and integrated them with Express and MongoDB-based backends. Focused on modular design, performance optimization, and user-friendly interfaces."
		}
	];
	return (
		<div className="">
			<h2 className="font-bold text-white">Experiences</h2>
			<div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
				{experiences.map((exp, idx) => (
					<ExperienceCard exp={exp} key={idx} />
				))}
			</div>
		</div>
	);
};

export default AllExperiences;
