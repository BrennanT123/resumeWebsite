import { useEffect, useState } from "react";
import naviStyles from "../styles/naviStyles.module.css";
import axios from "axios";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Projects() {
    const [projects, setProjects] = useState(null);

    async function getProjects() {
        try{
            const response = await axios.get(`${backendUrl}/getProjects`);
            setProjects(response.data.projects);
            console.log(response.data.projects);
        
        }catch(err)
        {
            console.error(err);
        }
    }

    useEffect(() => {
        getProjects();
    },[]);


    return (
        <div>
            {projects && (projects.map((project)=>
            {
                return(
                    <div key={project.id}>
                        <div>{project.githubLink}</div>
                        <img src={project.media} alt="" />
                    </div>
                )
            }) 

            )}
            
        </div>
    )

}

export default Projects;