import Education from "@/components/Education";
import AllExperiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Link from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Home() {
	return (
		<div className="w-11/12 mx-auto relative">
			<Hero/>
			<Skills/>
			<Education/>
			<div className="py-10" id="work-experience"></div>
			<AllExperiences/>
			<Footer/>
			<div className="text-[#ACBCF9] text-4xl fixed bottom-10 right-10">
				<Link href="#top"><FaArrowAltCircleUp /></Link>
			</div>
		</div>
	);
}
