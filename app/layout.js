import Header from "@/components/Header";
import "./globals.css";
import { Inter,DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
	title: "LA Mridul(Full-Stack Developer)",
	description:
		"Portfolio of LA Mridul, full-stack JavaScript developer specializing in React, Next.js, and modern web technologies. View projects, read my blog, or get in touch.",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header></Header>
				<div className="w-12/12 bg-[#171C28]">{children}</div>
			</body>
		</html>
	);
}
