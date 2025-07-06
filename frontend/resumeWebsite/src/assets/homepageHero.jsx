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
    <>
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
        I'm an engineer who thrives in fast-paced, demanding environments. I
        combine passion for learning with strong problem-solving skills to build
        creative, impactful solutions across design and development.
      </div>
    </>
  );
}

export default HomepageHero;
