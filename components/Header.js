"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const menu = ["Skills", "Education", "Work Experience", "Resume", "Contact Me"];

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 80) {
				// Scrolling down and past top
				setShowHeader(false);
			} else {
				// Scrolling up
				setShowHeader(true);
			}
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);

	return (
		<div
			className={`fixed top-0 z-50 w-full transition-transform duration-300 ${
				showHeader ? "translate-y-0" : "-translate-y-full"
			} navbar bg-[#1D232A] text-white shadow-sm`}
		>
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-gray-500 rounded-box z-10 mt-3 w-52 p-2 shadow font-inter"
					>
						{menu.map((item, index) => (
							<li key={index}>
								<a
									href={`#${item
										.toLowerCase()
										.replace(/\s+/g, "-")}`}
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
				<Link href="/" className="btn btn-ghost text-2xl">
					LA Mridul
				</Link>
			</div>
			<div className="navbar hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-xl gap-4">
					{menu.map((item, index) => (
						<li
							className="hover:bg-[#E2E2E2] rounded hover:text-[#18181B]"
							key={index}
						>
							<a
								href={`#${item
									.toLowerCase()
									.replace(/\s+/g, "-")}`}
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Header;
