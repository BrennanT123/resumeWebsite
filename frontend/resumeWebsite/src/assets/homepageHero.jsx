import introStyles from "../styles/introStyles.module.css";

function HomepageHero() {


  const opener = ", I'm Brennan";

  const handleMouseLeave = (e) => {
    const element = e.target;
    if (!element) return;
    element.classList.add(introStyles.bouncing);
    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove(introStyles.bouncing);
      },
      { once: true }
    );
  };

  return (
    <div className={introStyles.homepageHeroContainer}>
      <h1 className={introStyles.homepageHero}>
        <span
          className={introStyles.homepageHeroLetter}
          onMouseLeave={handleMouseLeave}
        >
          &#128075;
        </span>
        {opener &&
          opener.split("").map((char, i) => {
            return (
              <span
                onMouseLeave={handleMouseLeave}
                className={introStyles.homepageHeroLetter}
                key={i}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
      </h1>
      <div className={introStyles.homepageHeroBody}>
        I'm an <b>engineer</b> who thrives in <b>fast-paced</b>,{" "}
        <b>techincal</b> environments . I combine <b>passion for learning</b>{" "}
        with strong <b>problem-solving skills</b> to build creative, impactful
        solutions across design and development.
      </div>
    </div>
  );
}

export default HomepageHero;
