import { useEffect, useState } from "react";
import projectStyles from "../styles/projectStyles.module.css";
// import axios from "axios";
// import getGithubInfo from "../lib/githubFunctions";
import { Link } from "react-router-dom";
import { projects } from "../lib/projectsSetup";
import contactStyles from "../styles/contactStyles.module.css";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Projects() {
  // was used when i had the projects stored in the backend, however i decided to keep it all locally.

  //const [projects, setProjects] = useState([]);

  //   async function getProjects() {
  //     try {
  //       const response = await axios.get(`${backendUrl}/getProjects`);
  //       const updatedProjects = await Promise.all(
  //         response.data.projects.map(async (project) => {
  //           const info = await getGithubInfo(project.githubLink);
  //           return {
  //             ...project,
  //             title: info.title,
  //             readMe: info.readMe,
  //           };
  //         })
  //       );

  //       setProjects(updatedProjects);

  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }

  //   useEffect(() => {
  //     getProjects();
  //   }, []);
  //   const [active, setActive] = useState("home");
  //   const projectTitles = projects.map((project) => {
  //     return project.id;
  //   });

  //   useEffect(() => {
  //     const handleScroll = () => {

  //       let minOffset = window.innerHeight;

  //       projectTitles.forEach((id) => {
  //         const element = document.querySelector(`#project${id}`);

  //         if (!element) return;
  //         const rect = element.getBoundingClientRect();

  //         if (rect.bottom >= 0 && rect.top < minOffset) {
  //           console.log(id+"is active")
  //         }
  //       });
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     handleScroll();

  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(` ${entry.target.id} is active`);

            entry.target.classList.add(projectStyles.slideIn);
          } else {
            entry.target.classList.remove(projectStyles.slideIn);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[project]")
      .forEach((el) => observer.observe(el));
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {projects &&
        projects.map((project) => {
          {
            if (project.id === 0)
              return (
                <div
                  key={project.id}
                  id={"project" + project.id}
                  project="true"
                  className={projectStyles.projectContainer}
                >
                  <div className={projectStyles.infoContainer}>
                    <h2 className={projectStyles.projectTitle}>
                      {project.title}
                    </h2>
                    <pre className={projectStyles.projectReadme}>
                      {project.readMe}
                    </pre>
                    <div className={projectStyles.supplemental}>
                      <Link
                        to={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className={projectStyles.githubLinkImage}
                          role="img"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      </Link>
                      <div className={projectStyles.tags}>
                        {project.tags.map((tag) => {
                          return (
                            <div className={projectStyles.projectTag} key={tag}>
                              {tag}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className={projectStyles.videoContainer}>
                    <iframe
                      src="https://www.youtube.com/embed/MLUwZFfl92Y"
                      className={projectStyles.embededVideo}
                    ></iframe>
                  </div>
                  <img
                    src={project.media}
                    alt="Rubiks Cube Solver preview"
                    className={projectStyles.cubeSolverImg}
                  />
                  <div></div>
                </div>
              );
          }
          return (
            <div
              key={project.id}
              id={"project" + project.id}
              project="true"
              className={projectStyles.projectContainer}
            >
              <div className={projectStyles.infoContainer}>
                <h2 className={projectStyles.projectTitle}>{project.title}</h2>
                <pre className={projectStyles.projectReadme}>
                  {project.readMe}
                </pre>
                <div className={projectStyles.supplemental}>
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className={projectStyles.githubLinkImage}
                      role="img"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </Link>
                  <div className={projectStyles.tags}>
                    {project.tags.map((tag) => {
                      return (
                        <div className={projectStyles.projectTag} key={tag}>
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Link
                className={projectStyles.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                to={project.previewLink}
              >
                <div className={projectStyles.imageContainer}>
                  <img
                    src={project.media}
                    alt={`${project.title} preview`}
                    className={projectStyles.projectImg}
                  />
                </div>
                Click image for preview
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Projects;
