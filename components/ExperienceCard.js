import Image from "next/image";
import React from "react";

const ExperienceCard = ({ exp }) => {
	const { logo, company, position, duration, description } = exp;
	return (
		<div className="card bg-base-100 w-96 shadow-sm hover:shadow-lg hover:shadow-gray-700 transition duration-200 cursor-pointer">
			<figure className="w-full h-50 bg-white">
				<Image
					src={logo}
					alt="Logo"
					width={400}
					height={100}
					className="object-fill"
					sizes="100vw"
				/>
			</figure>
			<div className="card-body bg-[#1D232A] text-white">
				<h2 className="card-title">
					{company}
					<span className="text-[12px] mt-4">{position}</span>
				</h2>
				<p>
					<span className="font-bold">Duration:</span> {duration}
				</p>
				<span className="text-[12px] text-justify">{description}</span>
			</div>
		</div>
	);
};

export default ExperienceCard;
