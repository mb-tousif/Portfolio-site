import React from 'react';
import project1 from '../../Assets/projectImage/project-1.png'
import project2 from '../../Assets/projectImage/project-2.png'
import project3 from '../../Assets/projectImage/project-3.png'
const Project = () => {
    const myProjects = [
      {
        id: 1,
        name: "ABC Hammer Manufacturing Ltd",
        description: [
          "Hammer Manufacturing website",
          "User and Admin log in and registration system",
          "User and Admin management system",
          "Site with Dashboard management systems",
        ],
        tech: "MongoDB, Express.js, React.js, React Form Hook, React Query, JWT,Firebase, Tailwind CSS.",
        img: project1,
      },
      {
        id: 2,
        name: "Neurosurgical Instruments Ltd",
        description: [
          "Neurosurgical Instruments warehouse-management website",
          "User log in and registration system",
          "Products management system",
        ],
        tech: "MongoDB, Heroku, Express.js, React.js, Firebase, Tailwind CSS",
        img: project2 ,
      },
      {
        id: 3,
        name: "Neurosurgeon",
        description: [
          "It’s a Neurosurgeon website",
          "Doctor’s treatment and social awareness blog",
          "Simple user log in and registration system",
        ],
        tech: "React.js, Firebase, JavaScript, Tailwind CSS, JSON",
        img: project3,
      },
    ];
    return (
      <div className="grid md:grid-cols-3 grid-cols-1 mx-auto my-auto">
        {myProjects.map((project) => (
          <div class="card md:w-96 fluid bg-base-100 h-96 md:ml-4 mt-6 gap-3 shadow-2xl image-full">
            <figure>
              <img src={project.img} alt="Shoes" className="" />
            </figure>
            <div class="card-body mt-20">
              <h2 class="card-title justify-center">{project.name}</h2>
              <div class="card-actions justify-center mt-6">
                <button class="btn btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Project;