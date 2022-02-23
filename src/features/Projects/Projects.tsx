import React from "react";
import { x } from "../constant";
import { projects } from "./projects";

const makeItems = (
  arr: Array<{
    title: string;
    description: string;
    stack: string[];
    imageLink: string;
    siteLink: string;
    gitHubLink: string;
  }>
) => {
  return arr.map((item, i) => (
    <div key={i} style={{ width: x }} className="m-6">
      <img src={item.imageLink} alt={item.title} />
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

const projectItems = makeItems(projects);

const Projects = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="text-center text-4xl text-theme-dark font-bold">
        Projects
      </h1>
      <br />
      <div
        className="flex flex-wrap justify-center mx-auto"
        style={{ maxWidth: 2 * x + 96 }}
      >
        {projectItems}
      </div>
    </div>
  );
};

export default Projects;
