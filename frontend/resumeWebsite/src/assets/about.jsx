import Carousel from "react-bootstrap/Carousel";
import aboutStyles from "../styles/aboutStyles.module.css";

function About() {
  return (
    <>
      <div className={aboutStyles.carouselContainer}>
        <Carousel>
          <Carousel.Item interval={5000}>
            <div className={aboutStyles.slideContent}>
              <img
                className={aboutStyles.collegeSlideImg}
                src="/Ohio_State_Buckeyes_logo.svg"
                alt="Ohio State Logo"
              />

              <div className={aboutStyles.slideTextBlock}>
                <p>
                  I graduated from The Ohio State University in May 2023 with a
                  degree in Mechanical Engineering. During my time in college, I
                  focused on building strong coding skills, applying them across
                  a variety of technical projects. Some of these include...
                </p>
                <ul>
                  <li>Piezoelectric vibrational sensors</li>
                  <li>AI integrated recycling robot</li>
                  <li>Rubik's cube solving robot</li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className={aboutStyles.slideContent}>
              <img
                className={aboutStyles.collegeSlideImg}
                src="/Honda_Logo.svg"
                alt="Honda Logo"
              />

              <div className={aboutStyles.slideTextBlock}>
                <p>
                  For the last 2 years, I worked as a Design Engineer at Honda
                  R&D. During this time, I gained valuable experience operating
                  in a fast-paced, high-pressure environment that demanded
                  precision and attention to detail. Honda's culture of
                  excellence taught me how to uphold high standards in every
                  aspect of my work.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className={aboutStyles.slideContent}>
              <img
                className={aboutStyles.collegeSlideImg}
                src="/full_stack.svg"
                alt="Full Stack Image"
              />

              <div className={aboutStyles.slideTextBlock}>
                <p>
                  Over the past year, I've spent the majority of my free time
                  teaching myself full-stack application development. Driven by
                  a desire to continuously learn, I've built a strong foundation
                  in technologies like Node.js, React, PostgreSQL, Prisma, and
                  Express.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default About;
