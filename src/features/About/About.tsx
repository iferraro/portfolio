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
      "TypeScript",
      "JavaScript (ES6 and newer)",
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
      "Tailwind CSS",
      "SASS",
      "Material UI",
      "Headless UI",
      "Figma",
      "Inkscape",
    ],
  },
  {
    label: "Currently Learning",
    list: ["React Native", "Kotlin"],
  },
];

const skillset = skills.map((skill, i) => (
  <div key={i}>
    <strong className="text-xl font-bold">{skill.label}</strong>
    <br />
    {skill.list.map((item, i) =>
      i !== skill.list.length - 1 ? `${item} | ` : item
    )}
    <br />
  </div>
));

const About = () => {
  return (
    <div className="mx-auto" style={{ maxWidth: 2 * x + 96 }}>
      <section className="text-center py-4">
        <h1 className="text-4xl font-bold">Skills</h1>
        {skillset}
      </section>
      <section className="py-4">
        <h1 className="text-center text-4xl font-bold">About Me</h1>
        <p>
          I am a graduate of the General Assembly bootcamp (Certificate,
          Software Engineering Immersive [2021]), as well as Olympic College in
          Bremerton, WA (A.S., Computer & Electrical Engineering [2021].)
          <br />
          A few non-coding activities of mine include creating vector graphics
          on Inkscape, such as my logo above (and hidden icon below); running
          distances of 3-4 miles; serving at my church; and seeking out the best
          deals on gear that I don't need.
          <br />
          Some things I have memorized are The U.S. presidents in order, the
          U.S. state capitals, and the Greek alphabet.
        </p>
      </section>
      <section className="py-4">
        <Northwest />
      </section>
    </div>
  );
};

export default About;
