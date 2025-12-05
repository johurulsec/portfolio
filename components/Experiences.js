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
			duration: "June 2025 - Oct 2025",
            description:"Computer vision related task. Build client project architecture, base-code implementation, testing, debugging, and final deployment."
		},
		{
			logo: "https://www.google.com/search?sca_esv=3427d31d1497226b&sxsrf=AE3TifOABptSBvUBnOv4wQ7Qq9pMAJDN3w:1764916717247&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuYzzFkfneXafNx6OMdA4MQRJc_t_TQjwHYrzlkIauOK4mV84QoBrfDRZELH2lrDvtOiYYC-T-TR6DZp02MM5uD0lp5DhqYAbp3OfH75BdLIvoG0oA0Gn0UBpf3fbnGaQ1BR9F6icRJ8ItIu24Tt2Jt8LZ8OEzNJGgIBp_BfIi9T0N2Acw&q=credosense+image&sa=X&ved=2ahUKEwjik_WP66WRAxXDXGwGHb0YOagQtKgLegQIExAB&biw=1600&bih=689&dpr=1.2#sv=CAMSVhoyKhBlLWZNVEhnZ3hrcDdBUmtNMg5mTVRIZ2d4a3A3QVJrTToOVU5XYk95OHVfaE1iME0gBCocCgZtb3NhaWMSEGUtZk1USGdneGtwN0FSa00YADABGAcgie-0ygIwAkoKCAIQAhgCIAIoAg",
			company: "CredoSense Limited",
			position: "Full Stack Engineer",
			duration: "Nov 2025 - Continue",
            description:"Full IT Support."
		},
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
