import Education from "@/components/Education";
import AllExperiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<div className="w-11/12 mx-auto">
			<Hero/>
			<Skills/>
			<Education/>
			<AllExperiences/>
		</div>
	);
}
