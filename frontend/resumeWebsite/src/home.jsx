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
import { useRef, useState } from "react";
import Canvas from "../src/lib/webCanvas.jsx";

function Home() {
  const containerRef = useRef(null);

  const mouseRef = useRef({ x: undefined, y: undefined });
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  return (
    <>
      {" "}
      <Navi></Navi>
      <div id="websiteContainer" onMouseMove={handleMouseMove}>
        <div id="noiseOverlay"> </div>
        <div ref={containerRef} className="homeOverContainer">
          <Canvas containerRef={containerRef} mouseRef={mouseRef}></Canvas>
          <section id="home">
            <HomepageHero></HomepageHero>
          </section>
        </div>
        <section id="about">
          <div id="aboutTimeline">
            <About></About>
          </div>
          <div id="aboutSkills">
            <AboutSkills></AboutSkills>
          </div>
        </section>
        <section id="projects">
          <Projects></Projects>
        </section>
        {/* <section id="resume"><Resume></Resume></section> */}
        <section id="contact">
          <ContactMe></ContactMe>
        </section>
      </div>
    </>
  );
}

export default Home;
