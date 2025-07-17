"use client";

import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "@/public/hi_lottie.json"; // import JSON

const HeroAnimation = () => {
	return (
		<div className="w-full max-w-md">
			<Lottie animationData={heroAnimation} loop={true} />
		</div>
	);
};

export default HeroAnimation;
