import Bootcamp from "./components/Bootcamp";
import Cohorts from "./components/Cohorts";
import AboutFounder from "./components/Founder";
import Header from "./components/header";
import Hours from "./components/Hours";

export default function Home() {
  return (
    <h1 className="">
      <Header/>
      <Hours/>
      <AboutFounder/>
      <Cohorts/>
      <Bootcamp/>
    </h1>
  )
}