import resumeStyles from "../styles/resumeStyles.module.css";
import { useEffect } from "react";

function Resume() {


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Intersecting:", entry.target);
            entry.target.classList.add(resumeStyles.fadeIn);
          } else {
            entry.target.classList.remove(resumeStyles.fadeIn);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[resume]")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className={resumeStyles.resumeContainer} resume = "true">
      <h2>Download my resume by clicking below</h2>
      <a href="/github.png" download="BrennanTuriResume" target="_blank">
        <img src="/resumeScreenshot.png" alt="Resume preview" />
      </a>
    </div>
  );
}

export default Resume;
