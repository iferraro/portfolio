import React from "react";
import { x } from "../constant";
import { projectList } from "./projectList";

const projectItems = projectList.map((item, i) => (
  <div key={i} style={{ width: x }} className="p-4">
    <img src={item.imageUrl} alt={item.title} className="mb-4"/>
    <h1 className="text-2xl font-bold">{item.title}</h1>
    <h2>{item.description} using:</h2>
    <ul className="list-disc mb-2">
      {item.stack.map((tech: string, j: number) => (
        <li key={j}>{tech}</li>
      ))}
    </ul>
    <p>
      <button className="px-2 mb-2 text-lg font-semibold text-theme-light bg-blue-500 border-4 border-blue-500 rounded-full hover:bg-theme-light hover:text-blue-500 in-expo duration-150">
        <a href={item.siteUrl} target="_blank">
          Go to Site
        </a>
      </button>
      <br />
      <button className="px-2 text-lg font-semibold text-theme-light bg-blue-500 border-4 border-blue-500 rounded-full hover:bg-theme-light hover:text-blue-500 in-expo duration-150">
        <a href={item.githubUrl} target="_blank">
          Go to GitHub Repo
        </a>
      </button>
    </p>
    <br />
  </div>
));

const ProjectGallery = () => {
  return (
    <section className="py-4">
      <h1 className="text-center text-4xl text-theme-dark font-bold">
        Projects
      </h1>
      <div
        className="flex flex-wrap justify-center mx-auto"
        style={{ maxWidth: 2 * x + 96 }}
      >
        {projectItems}
      </div>
    </section>
  );
};

export default ProjectGallery;
