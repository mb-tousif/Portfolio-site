import React from 'react';

const SelectedProject = ({ projectDetail }) => {
  const { name, title, img, description } = projectDetail;
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 text-2xl font-bold">{name}</h1>
          <h1 className="mb-4 text-xl font-semiBold">{title}</h1>
          <p className="mb-5">{description}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;