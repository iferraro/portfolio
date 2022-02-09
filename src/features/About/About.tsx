import React from "react";
import Northwest from "../Northwest/Northwest";
import { x } from "../constant";

const about = {
  education: [
    "General Assembly (2021), Certificate, Software Engineering Immersive",
    "Olympic College (2021), A.S., Electrical & Computer Engineering",
  ],
  motivations: [
    "Successes, both large and small",
    "Chances to formulate original solutions to problems",
    "Opportunities to use my skillset on front-end web functionality",
  ],
  hobbies: [
    "Creating vector graphics on Inkscape (such as my logo above)",
    "Running (usually 3-4 miles)",
    "Solving calculus problems (only when bored, I promise)",
  ],
  memorized: ["U.S. presidents", "U.S. state capitals", "Greek alphabet"],
};

const makeItems = (arr: string[]) => {
  return arr.map((item, i) => <li key={i}>{item}</li>);
};

const educationItems = makeItems(about.education);

const motivationItems = makeItems(about.motivations);

const hobbyItems = makeItems(about.hobbies);

const memorizedItems = makeItems(about.memorized);

const About = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="text-center text-4xl font-bold">About Me</h1>
      <br />
      <div className="flex flex-wrap justify-center">
        <div style={{ width: x }} className="mx-6">
          <h1 className="text-2xl font-bold">Education</h1>
          <ul className="list-disc">{educationItems}</ul>
          <br />
          <h1 className="text-2xl font-bold">What Motivates Me</h1>
          <ul className="list-disc">{motivationItems}</ul>
          <br />
        </div>
        <div style={{ width: x }} className="mx-6">
          <h1 className="text-2xl font-bold">Non-Coding Hobbies</h1>
          <ul className="list-disc">{hobbyItems}</ul>
          <br />
          <h1 className="text-2xl font-bold">Things I've Memorized</h1>
          <ul className="list-disc">{memorizedItems}</ul>
          <br />
        </div>
      </div>
      <Northwest />
    </div>
  );
};

export default About;
