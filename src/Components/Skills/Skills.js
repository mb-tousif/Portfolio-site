import React from 'react';
import SkillBar from "react-skillbars";

const Skills = () => {
   
const skills = [
  {
    type: "HTML",
    level: 90,
    color: {
      bar: "#525252",
      title: { text: "#fff", background: "#333333" },
    },
  },
  {
    type: "CSS",
    level: 70,
    color: {
      bar: "#3498db",
      title: { text: "#fff", background: "#2980b9" },
    },
  },
  {
    type: "Tailwind",
    level: 80,
    color: {
      bar: "#124e8c",
      title: { text: "#fff", background: "#4288d0" },
    },
  },
  {
    type: "Bootstrap",
    level: 90,
    color: {
      bar: "#5a68a5",
      title: { text: "#fff", background: "#46465e" },
    },
  },
  {
    type: "Javascript",
    level: 75,
    color: {
      bar: "#2c3e50",
      title: { text: "#fff", background: "#2c3e50" },
    },
  },
  {
    type: "React",
    level: 85,
    color: {
      bar: "#4288d0",
      title: { text: "#fff", background: "#124e8c" },
    },
  },
  {
    type: "Firebase",
    level: 60,
    color: {
      bar: "#f9ca24",
      title: { text: "#fff", background: "#FFC312" },
    },
  },
];
    return (
      <div className="p-2 w-full md:mt-8 mx-auto my-auto max-w-xs text-center">
        <SkillBar skills={skills} />
      </div>
    );
};

export default Skills;