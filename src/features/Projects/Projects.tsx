import React from "react";
import { x } from "../constant";

interface Project {
  // iconLink: string;
  title: string;
  description: string;
  stack: string[];
  siteLink: string;
  gitHubLink: string;
}

class CompletedProject {
  // iconLink: string;
  title: string;
  description: string;
  stack: string[];
  siteLink: string;
  gitHubLink: string;

  constructor(
    // iconLink: string,
    title: string,
    description: string,
    stack: string[],
    siteLink: string,
    gitHubLink: string
  ) {
    // this.iconLink = iconLink;
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.siteLink = siteLink;
    this.gitHubLink = gitHubLink;
  }
}

const mancala: Project = new CompletedProject(
  "Mancala",
  "A recreation of the classic board game Mancala",
  ["Vanilla JavaScript", "HTML", "CSS"],
  "https://iferraro.github.io/mancala/",
  "https://github.com/iferraro/mancala"
);

const blogOfTheBeetle: Project = new CompletedProject(
  "Blog of the Beetle",
  "A beetle image upload site",
  ["Node", "Express", "MongoDB", "Passport", "Google API"],
  "https://blog-of-the-beetle.herokuapp.com/home",
  "https://github.com/iferraro/blog-of-the-beetle"
);

const bightOfBytes: Project = new CompletedProject(
  "Bight of Bytes",
  "A smartphone info tool",
  ["Python", "Django", "PostgreSQL"],
  "https://bight-of-bytes.herokuapp.com/",
  "https://github.com/iferraro/bight-of-bytes"
);

const theMernBible: Project = new CompletedProject(
  "The MERN Bible",
  "A King James Version Bible reference",
  ["MongoDB", "Express", "React", "Node", "Tailwind CSS", "Headless UI"],
  "https://mern-bible.herokuapp.com/",
  "https://github.com/iferraro/mern-bible"
);

const customColorChart: Project = new CompletedProject(
  "Custom Color Chart",
  "My personal favorite colors, named by me",
  ["Vanilla JavaScript", "jQuery", "HTML", "CSS"],
  "https://iferraro.github.io/custom-color-chart/",
  "https://github.com/iferraro/custom-color-chart"
);

const completedProjects = [
  theMernBible,
  bightOfBytes,
  blogOfTheBeetle,
  mancala,
  customColorChart,
];

const makeItems = (
  arr: Array<{
    title: string;
    description: string;
    stack: string[];
    siteLink: string;
    gitHubLink: string;
  }>
) => {
  return arr.map((item, i) => (
    <div key={i} style={{ width: x }} className="mx-6">
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <h2>{item.description} using:</h2>
      <ul className="list-disc">
        {item.stack.map((tech: string, j: number) => (
          <li key={j}>{tech}</li>
        ))}
      </ul>
      <p>
        <a href={item.siteLink} className="text-blue-500 font-bold">
          Go to Site
        </a>
        <br />
        <a href={item.gitHubLink} className="text-blue-500 font-bold">
          Go to GitHub Repo
        </a>
      </p>
      <br />
    </div>
  ));
};

const projectItems = makeItems(completedProjects);

const Projects = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="text-center text-4xl text-theme-dark font-bold">
        Projects
      </h1>
      <br />
      <div className="flex flex-wrap justify-center mx-auto" style={{ maxWidth: 2 * x + 96}}>
        {projectItems}
      </div>
    </div>
  );
};

export default Projects;
