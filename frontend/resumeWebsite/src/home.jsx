import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../src/app.css";
import Navi from "./assets/navi.jsx";
// import homeStyles from "./styles/homeStyles.module.css"
import Projects from "./assets/projects.jsx";
import HomepageHero from "./assets/homepageHero.jsx";
import "./styles/homeStyles.css";
import About from "./assets/about.jsx";
import ContactMe from "./assets/contact.jsx";
import Resume from "./assets/resume.jsx";
import AboutSkills from "./assets/aboutSkills.jsx";

function Home() {

  return (
    <>
      {" "}
      <Navi></Navi>
      <div id="websiteContainer">
        <div id="noiseOverlay"> </div>
        <section id="home">
          <HomepageHero></HomepageHero>
        </section>
        <section id="about">
          <div id= "aboutTimeline">
            <About></About>
          </div>
          <div id="aboutSkills"><AboutSkills></AboutSkills></div>
        </section>
        <section id="projects">
          <Projects></Projects>
        </section>
        {/* <section id="resume"><Resume></Resume></section> */}
        <section id="contact"><ContactMe></ContactMe></section>
      </div>
    </>
  );
}

export default Home;
