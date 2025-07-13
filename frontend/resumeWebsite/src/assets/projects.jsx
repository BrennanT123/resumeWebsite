import { useEffect, useState } from "react";
import projectStyles from "../styles/projectStyles.module.css";
// import axios from "axios";
// import getGithubInfo from "../lib/githubFunctions";
import { Link } from "react-router-dom";
import { projects } from "../lib/projectsSetup";

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
                    <img
                      className={projectStyles.githubLinkImage}
                      src="/github.png"
                      alt={project.title + " github Link"}
                    />
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
                    alt=""
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
