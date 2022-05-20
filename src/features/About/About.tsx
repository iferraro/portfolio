import React from "react";
import Northwest from "../Northwest/Northwest";
import { x } from "../constant";

const skills = [
  {
    label: "Languages",
    list: ["JavaScript (ES6 and newer)", "Python 3", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks/Libraries",
    list: ["React.js", "Node.js", "Express.js", "Django"],
  },
  {
    label: "Databases",
    list: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    list: [
      "MongoDB Atlas",
      "Mongoose",
      "Google Cloud Platform",
      "Passport.js",
      "Tailwind CSS",
      "Headless UI",
      "Figma",
      "Inkscape",
      "Visual Studio Code",
    ],
  },
  {
    label: "Currently Learning",
    list: ["TypeScript", "C#", "ASP.NET Core", "Azure App Service"],
  },
];

const makeSkillList = (arr: string[]) => {
  return arr.map((item, i) => (i !== arr.length - 1 ? item + " | " : item));
};

const makeSkillset = (skillset: Array<{ label: string; list: string[] }>) => {
  return skillset.map((skill, i) => (
    <div key={i}>
      <strong className="text-xl font-black">{skill.label}</strong>
      <br />
      {makeSkillList(skill.list)}
      <br />
    </div>
  ));
};

const About = () => {
  return (
    <div className="mx-auto my-6" style={{ maxWidth: 2 * x + 96 }}>
      <div className="text-center">
        <h1 className="text-4xl font-black">Skills</h1>
        {makeSkillset(skills)}
      </div>
      <div className="h-6"></div>
      <h1 className="text-center text-4xl font-black">About Me</h1>
      <p>
        I am a graduate of the General Assembly bootcamp (Certificate, Software
        Engineering Immersive [2021]), as well as Olympic College in Bremerton,
        WA (A.S., Electrical & Computer Engineering [2021].)
        <br />
        A few non-coding hobbies of mine include creating vector graphics on
        Inkscape, such as my logo above (and hidden icon below); running
        distances of 3-4 miles; and solving calculus and linear algebra problems
        (only when bored, I promise.)
        <br />
        Some things I have memorized are The U.S. presidents in order, the U.S.
        state capitals, and the Greek alphabet.
        <br />
        Primarily, I desire to create and and improve upon the front-end functionality of
        web applicatons. In addition, I would like to use my combined knowledge
        of programming and SVGs to create exceptional UIs.
      </p>
      <div className="h-6"></div>
      <Northwest />
    </div>
  );
};

export default About;
