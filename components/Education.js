"use client";
import Image from "next/image";
import React from "react";

const Education = () => {
	const educations = [
		{
			icon: "https://i.ibb.co/5h7hp8kC/GAR.png",
			institution: "GHUNIPARA ABDUR RASHID SCHOOL AND COLLEGE",
			department: "Science",
			from: "",
			to: "",
			completed: "2015",
			project: "",
			research: "",
		},
		{
			icon: "https://i.ibb.co/tpfGBWzT/RLC-removebg-preview-1.png",
			institution: "RESIDENTIAL LABORATORY COLLEGE",
			department: "Science",
			from: "2017",
			to: "2019",
			project: "",
			research: "",
		},
		{
			icon: "https://i.ibb.co/XrtQnrpy/city-University.png",
			institution: "CITY UNIVERSITY",
			department: "COMPUTER SCIENCE AND ENGINEERING",
			from: "2018",
			to: "2022",
			project: "Online Auction System - Python, Django",
			research: "",
		},
	];
	console.log(educations[0]);
	return (
		<div id="education" className="w-full md:px-10 py-8 text-white space-y-5">
			<h2 className="font-bold">Education</h2>
			<div className="space-y-10">
				{educations?.map((edu, idx) => (
					<div className="group space-y-3 md:space-y-5" key={idx}>
						<Image
							src={edu?.icon}
							alt={edu?.institution}
							width={80}
							height={80}
						/>
						<h4>{edu?.institution}</h4>
						<p>{edu?.department}</p>
						<p>{edu?.completed}</p>
						{edu?.from && (
							<p>
								{edu?.from}-{edu?.to}
							</p>
						)}
						{edu?.project && <p>{edu?.project}</p>}
						<div className="w-3/4 group-hover:w-full border-b border-gray-400 mt-4 transition-all duration-300" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
