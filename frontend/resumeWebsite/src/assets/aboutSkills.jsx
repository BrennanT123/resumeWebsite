import aboutSkillsStyles from "../styles/aboutSkillsStyles.module.css";

function AboutSkills() {
  return (
    <>
      <div className={aboutSkillsStyles.skillsIntro}>
        <h2>My Skills</h2>
        {/* <p className={aboutSkillsStyles.summary}>
          Over the years, I've developed a wide range of coding skills—in areas
          such as{" "}
          <b>app development, robotics, game development, AI, and more</b>. In
          addition, my career as an <b>engineer </b>has equipped me with a
          diverse set of skills that are valuable in any professional
          environment. I'm driven by a commitment to <b>continuous learning</b>{" "}
          and consistently seek to expand both my <b>technical knowledge</b> and{" "}
          <b>problem-solving abilities</b>.
        </p> */}
      </div>
      <div className={aboutSkillsStyles.skillsContainer}>
        <div className={aboutSkillsStyles.allSkillsSections}>
          <div className={aboutSkillsStyles.codingSkillsSection}>
            <div className={aboutSkillsStyles.skillsSection}>
              <h3>App Development</h3>
              <ul className={aboutSkillsStyles.appDev}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>SQL</li>
                <li>React</li>
                <li>PostgreSQL</li>
                <li>Vite</li>
                <li>Express.js</li>
                <li>Prisma ORM</li>
                <li>JWT Auth</li>
                <li>Jest / Testing</li>
                <li>Axios</li>
                {/* <li>Session & Cookie Management</li> */}
                <li>Deployment: Railway, Render, Netlify, etc...</li>
              </ul>
            </div>
            <div className={aboutSkillsStyles.skillsSection}>
              <h3>Other Coding Skills</h3>
              <ul className={aboutSkillsStyles.otherDev}>
                <li>Linux</li>
                <li>Git / Github</li>
                <li>Bash</li>
                <li>C++</li>
                <li>C#</li>
                <li>Python</li>
                <li>MATLAB</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Neural networks</li>
                <li>ROS</li>
                <li>Arduino/ESP32/etc...</li>
                <li>Raspberry Pi</li>
                {/* <li>Serial Communication Protocols</li> */}
                <li>VSCode</li>
              </ul>
            </div>
          </div>

          <div className={aboutSkillsStyles.skillsSection}>
            <h3>Other Engineering Skills</h3>
            <ul className={aboutSkillsStyles.otherEng}>
              <li>Lean engineering</li>
              <li>R&D</li>
              <li>Root Cause Analysis</li>
              <li>Risk Analysis</li>
              <li>Cross functional collaboration</li>
              <li>Technical Communication</li>
              <li>Cost tracking/Analysis</li>
              <li>Six Sigma</li>
              <li>Kaizen</li>
              <li>Continuous Improvement</li>
              <li>BOM management</li>
              <li>CATIA</li>
              <li>3DExperience</li>
              <li>CAE</li>
              <li>FEA</li>
              <li>ANSYS</li>
              {/* <li>Maru Batsu (Decision Matrices)</li> */}
              {/* <li>Gemba walks</li> */}
              {/* <li>Maru Hatsu (Prototype evaluation)</li> */}
              {/* <li>Poka-Yoke (Mistake proofing) </li> */}
              {/* <li>Kanban</li> */}
              {/* <li>Yokoten</li> */}

              <li>Solidworks</li>
              <li>COMSOL</li>

              {/* <li>Piezoelectrics</li> */}
              <li>3D printing</li>
              <li>LabVIEW</li>
              {/* <li>DAQ</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSkills;
