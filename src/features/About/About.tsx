import React from "react";
import Northwest from "../Northwest/Northwest";
import { x } from "../constant";

interface Skill {
  label: string;
  list: string[];
}

const skills: Skill[] = [
  {
    label: "Languages",
    list: [
      "JavaScript (ES6 and newer)",
      "TypeScript",
      "Python 3",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Frameworks/Libraries",
    list: ["React", "Node", "Express", "Django"],
  },
  {
    label: "Databases",
    list: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools",
    list: [
      "MongoDB Atlas/Compass",
      "Mongoose",
      "GraphQL",
      "Apollo Client",
      "MaterialUI",
      "Tailwind CSS",
      "Headless UI",
      "Figma",
      "Inkscape",
      "Visual Studio Code",
    ],
  },
  {
    label: "Currently Learning",
    list: ["Rust"],
  },
];

const skillset = skills.map((skill, i) => (
  <div key={i}>
    <strong className="text-xl font-black">{skill.label}</strong>
    <br />
    {skill.list.map((item, i) =>
      i !== skill.list.length - 1 ? item + " | " : item
    )}
    <br />
  </div>
));

const About = () => {
  return (
    <div className="mx-auto my-6" style={{ maxWidth: 2 * x + 96 }}>
      <div className="text-center">
        <h1 className="text-4xl font-black">Skills</h1>
        {skillset}
      </div>
      <div className="h-6" />
      <h1 className="text-center text-4xl font-black">About Me</h1>
      <p>
        I am a graduate of the General Assembly bootcamp (Certificate, Software
        Engineering Immersive [2021]), as well as Olympic College in Bremerton,
        WA (A.S., Computer & Electrical Engineering [2021].)
        <br />
        A few non-coding activities of mine include creating vector graphics on
        Inkscape, such as my logo above (and hidden icon below); running
        distances of 3-4 miles; serving at my church; and seeking out the best
        deals on gear that I don't need.
        <br />
        Some things I have memorized are The U.S. presidents in order, the U.S.
        state capitals, and the Greek alphabet.
      </p>
      <div className="h-6" />
      <Northwest />
    </div>
  );
};

export default About;
