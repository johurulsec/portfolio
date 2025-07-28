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
            description:"Built and maintained scalable back-end features using C++, Qt, OpenAI, React.js and integrated them with Express and MongoDB-based backends. Focused on modular design, performance optimization, and user-friendly interfaces."
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
