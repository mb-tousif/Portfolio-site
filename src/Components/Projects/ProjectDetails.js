import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import SelectedProject from './SelectedProject';


const ProjectDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [projectData, setProjectData] = useState([]);
    useEffect(() => {
      fetch("fakedb.json")
        .then((res) => res.json())
        .then((data) => setProjectData(data));
    }, [id]);
    const projectDetail = projectData.filter((project) => project.id === id);
    console.log(projectDetail);
    return (
      <div>
        {projectDetail.map((projectDetail) => (
          <SelectedProject
            key={projectDetail.id}
            projectDetail={projectDetail}
          />
        ))}
      </div>
    );
};

export default ProjectDetails;