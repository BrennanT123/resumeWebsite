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

function Home() {
  const [count, setCount] = useState(0);

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
          <About></About>
        </section>
        <section id="projects">
          <Projects></Projects>
        </section>
        <section id="resume">Resume content</section>
        <section id="contact">Contact content</section>
      </div>
    </>
  );
}

export default Home;
