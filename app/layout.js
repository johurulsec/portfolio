import Header from "@/components/Header";
import "./globals.css";
import { Inter,DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {	
	title: "Md Johurul Islam(Full-Stack Software Engineer)",
	description:
		"Portfolio of Md Johurul Islam, full-stack software engineer specializing in Python, Django, REST, C++, Qt, OpenAI, AI, ML, LLM, NLP, React, Next.js, and modern web technologies. View projects, read my blog, or get in touch.",
	icons: {
		icon: "/favicon.jpg",
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
