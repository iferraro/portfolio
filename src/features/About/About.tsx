import Northwest from "../Northwest/Northwest";
import x from "../constant";

const about = {
  education: [
    "General Assembly (2021), Certificate, Software Engineering Immersive",
    "Olympic College (2021), A.S.,Electrical & Computer Engineering",
  ],
  motivations: [
    "Successes, both large and small",
    "Chances to formulate original solutions to problems",
    "Opportunities to use my skillset on front-end web functionality",
  ],
  hobbies: [
    "Creating vector graphics on Inkscape",
    "Running (usually 3-4 miles)",
    "Solving calculus problems (only when bored)",
  ],
  memorized: ["U.S. presidents", "U.S. state capitals", "Greek alphabet"],
};

const educationItems = about.education.map((item, i) => (
  <li key={i}>{item}</li>
));

const motivationItems = about.motivations.map((item, i) => (
  <li key={i}>{item}</li>
));

const hobbyItems = about.hobbies.map((item, i) => <li key={i}>{item}</li>);

const memorizedItems = about.memorized.map((item, i) => (
  <li key={i}>{item}</li>
));

const About = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="text-center text-4xl text-theme-dark font-bold">About Me</h1>
      <br />
      <div className="flex flex-wrap justify-center">
        <div style={{ width: x }} className="mx-6">
          <h1 className="text-2xl font-bold">Education</h1>
          <ul>{educationItems}</ul>
          <h1 className="text-2xl font-bold">What Motivates Me</h1>
          <ul>{motivationItems}</ul>
        </div>
        <div style={{ width: x }} className="mx-6">
          <h1 className="text-2xl font-bold">Non-Coding Hobbies</h1>
          <ul>{hobbyItems}</ul>
          <h1 className="text-2xl font-bold">Things I've Memorized</h1>
          <ul>{memorizedItems}</ul>
        </div>
      </div>
      <Northwest />
    </div>
  );
};

export default About;
