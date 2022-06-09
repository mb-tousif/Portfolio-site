import React from "react";
import Skills from "../Skills/Skills";
import ContactForm from "./ContactForm";
import HomeBanner from "./HomeBanner";
import skill from "../../Assets/FeatureImages/skills.png";

const Home = () => {
  return (
    <div className="bg-accent m-0">
      <HomeBanner />
      <ContactForm />
      <h1 className="text-xl md:text-2xl mt-4 font-bold text-primary">My Skills</h1>
      <div className="grid md:grid-cols-2 mx-auto my-auto">
        <img src={skill} alt="skill" className="mx-auto md:ml-6 my-auto" />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
