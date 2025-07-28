import React from "react";
import ExperienceCard from "./ExperienceCard";

const AllExperiences = () => {
	const experiences = [
		{			
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJl094H1O2sjus-VcXh_UYaW_pfqq6RNAQjA&s",
			company: "Sigmind.ai",
			position: "Senior Software Engineer",

			duration: "September 2019 - May 2025",
            description:"Computer vision-related task. Build client project Face Recognition, Vehicle Recognition & Classification base-code architecture design, Implementation, Testing, Debugging, and final deployment. There are using AI, ML, DL, ANN, OpenCV, OpenAI, LLM, LLama, NLP, C++, Qt, Python, Django, DeepStream SDK, GStreammer etc."
		},
		{
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtsV2QDL5XC2upDQf4TJFe6dTmFR3NyQkYg&s",
			company: "BulipeTech Limited",
			position: "Senior Software Engineer(Backend)",
			duration: "June 2025 - Continue",
            description:"Computer vision related task. Build client project architecture, base-code implementation, testing, debugging, and final deployment."
		},
		// {
		// 	logo: "https://celebrationsbd.net/wp-content/uploads/2024/03/Asset-12-8-1.png",
		// 	company: "CelebrationsBD",
		// 	position: "Graphic Designer",
		// 	duration: "February,2020 - August,2020",
        //     description:"Designed and delivered high-quality graphics for various media, ensuring brand consistency and visual appeal. Collaborated on creative concepts, executed revisions, and maintained up-to-date knowledge of design tools and trends."
		// },
		// {
		// 	logo: "https://sebpo.com/wp-content/uploads/2025/04/SEBPO-Logo-2025.jpg",
		// 	company: "SEBPO",
		// 	position: "Executive",
		// 	duration: "September,2022 - September,2023",
        //     description:"Developed and executed data-driven digital ad campaigns, focusing on audience targeting, budget optimization, and performance analysis. Ensured consistent brand messaging and maximized ROI across multiple digital channels."
		// },
		// {
		// 	logo: "https://www.flytonic.com/wp-content/themes/flytonicstore/images/logo.png",
		// 	company: "Flytonic",
		// 	position: "WordPress Designer",
		// 	duration: "October,2023 - June,2024",
        //     description:"Developed visually appealing and functional WordPress websites tailored to client requirements. Managed theme customization, plugin integration, and performance optimization to ensure a smooth user experience."
		// },
		
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
