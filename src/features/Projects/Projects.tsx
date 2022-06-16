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
      <h1 className="text-2xl font-black">{item.title}</h1>
      <h2>{item.description} using:</h2>
      <ul className="list-disc mb-2">
        {item.stack.map((tech: string, j: number) => (
          <li key={j}>{tech}</li>
        ))}
      </ul>
      <p>
        <button className="px-2 mb-2 text-lg font-semibold text-theme-light bg-blue-500 border-4 border-blue-500 rounded-full hover:bg-theme-light hover:text-blue-500 in-expo duration-150">
          <a href={item.siteLink} target="_blank">
            Go to Site
          </a>
        </button>
        <br />
        <button className="px-2 text-lg font-semibold text-theme-light bg-blue-500 border-4 border-blue-500 rounded-full hover:bg-theme-light hover:text-blue-500 in-expo duration-150">
          <a href={item.gitHubLink} target="_blank">
            Go to GitHub Repo
          </a>
        </button>
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
      <h1 className="text-center text-4xl text-theme-dark font-black">
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
