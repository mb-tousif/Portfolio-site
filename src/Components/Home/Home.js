import React from "react";
import Skills from "../Skills/Skills";
import ContactForm from "./ContactForm";
import HomeBanner from "./HomeBanner";
import skill from "../../Assets/FeatureImages/skills.png";
import Project from "../Projects/Project";

const Home = () => {
  return (
    <div className="bg-accent m-0">
      <HomeBanner />
      <h1 className="text-2xl md:text-5xl text-center text-primary m-3 md:font-bold">
        My Recent Project
      </h1>
      <Project />
      <ContactForm />
      <h1 className="text-xl md:text-5xl mt-4 text-center font-bold text-primary">
        <span className="shadow-inner">My Skills</span>
      </h1>
      <div className="grid md:grid-cols-2 mx-auto my-auto">
        <img src={skill} alt="skill" className="mx-auto md:ml-6 my-auto" />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
