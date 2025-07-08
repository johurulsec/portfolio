"use client";
import React, { useEffect, useRef, useState } from "react";

const SkillProgress = ({ title, value }) => {
	const [progress, setProgress] = useState(0);
	const progressRef = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
				}
			},
			{ threshold: 0.5 }
		);

		if (progressRef.current) observer.observe(progressRef.current);

		return () => {
			if (progressRef.current) observer.unobserve(progressRef.current);
		};
	}, []);

	useEffect(() => {
		if (visible && progress === 0) {
			let current = 0;
			const interval = setInterval(() => {
				if (current < value) {
					current += 1;
					setProgress(current);
				} else {
					clearInterval(interval);
				}
			}, 10);
		}
	}, [visible, value]);

	return (
		<div ref={progressRef} className="my-3">
			<div className="flex justify-between text-sm mb-1">
				<span>{title}</span>
				<span>{progress}%</span>
			</div>
			<progress
				className="progress accent-[#ACBCF9] w-full h-4 bg-gray-500"
				value={progress}
				max="100"
			/>
		</div>
	);
};

export default SkillProgress;
