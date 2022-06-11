import React from 'react';

const SelectedProject = ({ project }) => {
  const { name, title, img, description, description2, description3, clientCode, serverCode, liveSite} = project;
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 fluid md:ml-4 pt-6">
      <figure>
        <img
          src={img}
          alt="website"
          className="rounded-2xl mb-4 mx-auto my-auto"
        />
      </figure>
      <div className="card mt-6 my-auto">
        <h2 className="card-title justify-center">{name}</h2>
        <h2 className="card-title justify-center">{title}</h2>
        <h2 className="text-center font-bold">Features and Functionality</h2>
        <ul>
          <li className="text-center">{description}</li>
          <li className="text-center">{description2}</li>
          <li className="text-center">{description3}</li>
        </ul>
        <div className="card-actions justify-center mt-6">
          <a href={liveSite} rel="noReferrer" target="_blank"  className="btn btn-wide btn-primary">Live Site</a>
        </div>
        <div className="card-actions justify-center mt-6">
          <a href={clientCode} rel="noReferrer" target="_blank" className="btn btn-primary">Client Github</a>
          <a href={serverCode} rel="noReferrer" target="_blank" className="btn btn-primary">Client Github</a>
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;