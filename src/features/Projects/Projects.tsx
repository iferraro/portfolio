interface Project {
  // iconLink: string;
  title: string;
  description: string;
  stack: string[];
  gitHubLink: string;
}

class CompletedProject {
  // iconLink: string;
  title: string;
  description: string;
  stack: string[];
  gitHubLink: string;

  constructor(
    // iconLink: string,
    title: string,
    description: string,
    stack: string[],
    gitHubLink: string
  ) {
    // this.iconLink = iconLink;
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.gitHubLink = gitHubLink;
  }
}

const mancala: Project = new CompletedProject(
  "Mancala",
  "A recreation of the classic board game Mancala",
  ["Vanilla JavaScript", "HTML", "CSS"],
  "https://github.com/iferraro/mancala"
);

const blogOfTheBeetle: Project = new CompletedProject(
  "Blog of the Beetle",
  "A beetle image upload site",
  ["Node", "Express", "MongoDB", "Passport", "Google API"],
  "https://github.com/iferraro/blog-of-the-beetle"
);

const bightOfBytes: Project = new CompletedProject(
  "Bight of Bytes",
  "A smartphone info tool",
  ["Python", "Django", "PostgreSQL"],
  "https://github.com/iferraro/bight-of-bytes"
);

const theMernBible: Project = new CompletedProject(
  "The MERN Bible",
  "A King James Version Bible reference",
  ["MongoDB", "Express", "React", "Node", "Tailwind CSS", "Headless UI"],
  "https://github.com/iferraro/mern-bible"
);

const customColorChart: Project = new CompletedProject(
  "Custom Color Chart",
  "My personal favorite colors, named by me",
  ["Vanilla JavaScript", "jQuery", "HTML", "CSS"],
  "https://github.com/iferraro/custom-color-chart"
);

const generalAssemblyProjects = [
  theMernBible,
  bightOfBytes,
  blogOfTheBeetle,
  mancala,
];

const personalProjects = [customColorChart];

const generalAssemblyProjectItems = generalAssemblyProjects.map((item, i) => (
  <div key={i}>
    <h1 className="text-xl font-bold">{item.title}</h1>
    <h2>{item.description} using:</h2>
    <ul>
      {item.stack.map((tech, j) => (
        <li key={j}>{tech}</li>
      ))}
    </ul>
    <p>
      <a href={item.gitHubLink} className="text-blue-500">
        GitHub link
      </a>
    </p>
  </div>
));

const personalProjectItems = personalProjects.map((item, i) => (
  <div key={i}>
    <h1 className="text-xl font-bold">{item.title}</h1>
    <h2>{item.description} using:</h2>
    <ul>
      {item.stack.map((tech, j) => (
        <li key={j}>{tech}</li>
      ))}
    </ul>
    <p>
      <a href={item.gitHubLink} className="text-blue-500">
        GitHub link
      </a>
    </p>
  </div>
));

// const personalProjectItems = personalProjects.map(item)

const Projects = () => {
  const handleScroll = () => {
    console.log(window.scrollY);
  };
  return (
    <div onScrollCapture={handleScroll}>
      <h1 className="text-3xl font-bold">Projects</h1>
      <div>
        <h1 className="text-2xl font-bold">General Assembly</h1>
        {generalAssemblyProjectItems}
      </div>
      <div>
        <h1 className="text-2xl font-bold">Personal</h1>
        {personalProjectItems}
      </div>
    </div>
  );
};

export default Projects;
