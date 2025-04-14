import Bonuses from "./components/Bonuses";
import Bootcamp from "./components/Bootcamp";
import CodingJourney from "./components/CodingJourney";
import Cohorts from "./components/Cohorts";
import ComparisonTable from "./components/CompareTable";
import Course from "./components/Course";
import CurriculumTable from "./components/CurriculumTable";
import AboutFounder from "./components/Founder";
import HandsOnCarousel from "./components/HandsOnCarousel";
import Hero from "./components/HeroSction";
import Hours from "./components/Hours";
import MoneyBack from "./components/MoneyBack";
import PriceCosts from "./components/PriceCosts";
import TeachingMethod from "./components/TeachingMethod";

export default function Home() {
  return (
    <>
      <Hero/>
      <Hours/>
      <AboutFounder/>
      <Cohorts/>
      <Bootcamp/>
      <Bonuses />
      <TeachingMethod/>
      <MoneyBack/>
      <HandsOnCarousel/>
      <Course/>
      <CodingJourney/>
      <ComparisonTable/>
      <CurriculumTable/>
      <PriceCosts/>
    </>
  )
}