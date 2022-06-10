import React from 'react';
import { useNavigate } from "react-router-dom";

const ProjectCard = ({project}) => {
    const { id, name, title, img } = project;
    const navigate = useNavigate();
    const handleDetail =(id)=>{
    console.log(id)
    navigate(`/projects/${id}`)
    }
    return (
      <div className="card md:w-96 fluid bg-base-100 h-96 md:ml-4 mt-6 gap-3 shadow-2xl image-full">
        <figure>
          <img src={img} alt="Shoes" className="" />
        </figure>
        <div className="card-body mt-20">
          <h2 className="card-title justify-center">{name}</h2>
          <h2 className="card-title justify-center">{title}</h2>
          <div className="card-actions justify-center mt-6">
            <button onClick={() => handleDetail(id)} className="btn btn-wide btn-primary">
              Details
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProjectCard;