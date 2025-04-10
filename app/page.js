import Bonuses from "./components/Bonuses";
import Bootcamp from "./components/Bootcamp";
import Cohorts from "./components/Cohorts";
import AboutFounder from "./components/Founder";
import Hero from "./components/HeroSction";
import Hours from "./components/Hours";

export default function Home() {
  return (
    <h1 className="">
      <Hero/>
      <Hours/>
      <AboutFounder/>
      <Cohorts/>
      <Bootcamp/>
      <Bonuses />
    </h1>
  )
}