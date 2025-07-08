"use client";
import Lottie from 'lottie-react';
import React from 'react';
import skillsAnimation from "@/public/skills_lottie.json";
const SkillsLottie = () => {
    return <Lottie animationData={skillsAnimation} loop={true}/>;
};

export default SkillsLottie;