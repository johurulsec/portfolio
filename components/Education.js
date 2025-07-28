"use client";
import Image from "next/image";
import React from "react";

const Education = () => {
	const educations = [
		{
			icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYCUrs6fYr3VGLt4mS0ftRPbvrIgfeab3Bg&s",
			institution: "Digpait D.K. High SCHOOL",
			department: "Science",
			from: "",
			to: "",
			completed: "2010",
			project: "",
			research: "",
		},
		{
			icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEnXHn-v9nfFzMQsY2F13YkTaMkovWUsI2A&s",
			institution: "Shahid Syed Nazrul Islam COLLEGE",
			department: "Science",
			from: "2011",
			to: "2013",
			project: "",
			research: "",
		},
		{
			icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9yXhZNGhLZ06a7dVJwDzInbNM8w6Re0t-zA&s",
			institution: "Shahjalal University Of Science & Technology. Ins.(Sylhet Engineering College)",
			department: "COMPUTER SCIENCE AND ENGINEERING",
			from: "2014",
			to: "2019",
			project: "Programmer, also C++, Python, Django",
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
							className='rounded-2xl'
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
