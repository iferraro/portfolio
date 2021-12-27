const about = {
  statement: [
    "General Assembly Software Engineering Immersive graduate (2021)",
    "Olympic College graduate (2021)",
    "Energized by results",
    "Ready to use my skillset to build and iterate upon web applications, especially on the front-end",
  ],
  hobbies: [
    "Creating vector graphics",
    "Distance running",
    "Solving calculus problems (only when bored)",
  ],
  memorized: ["U.S. presidents", "U.S. state capitals", "Greek alphabet"],
};

const statementItems = about.statement.map((item, i) => (
  <li key={i}>{item}</li>
));

const hobbyItems = about.hobbies.map((item, i) => <li key={i}>{item}</li>);

const memorizedItems = about.memorized.map((item, i) => (
  <li key={i}>{item}</li>
));

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">About Me</h1>
      <div>
        <h1 className="text-2xl font-bold">Background</h1>
        <ul>{statementItems}</ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Non-Coding Hobbies</h1>
        <ul>{hobbyItems}</ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Things I've Memorized</h1>
        <ul>{memorizedItems}</ul>
      </div>
    </div>
  );
};

export default About;
