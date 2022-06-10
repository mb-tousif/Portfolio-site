import React from 'react';
import useProject from '../../Hooks/useProject';
import ProjectCard from './ProjectCard';

const Project = () => {
  const [projects] = useProject([]) 
    return (
      <div className="grid md:grid-cols-3 grid-cols-1 mx-auto my-auto bg-accent pt-4 pb-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
};

export default Project;