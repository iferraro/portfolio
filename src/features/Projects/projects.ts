class Project {
  title: string;
  description: string;
  stack: string[];
  imageLink: string;
  siteLink: string;
  gitHubLink: string;

  constructor(
    title: string,
    description: string,
    stack: string[],
    imageLink: string,
    siteLink: string,
    gitHubLink: string
  ) {
    this.title = title;
    this.description = description;
    this.stack = stack;
    this.imageLink = imageLink;
    this.siteLink = siteLink;
    this.gitHubLink = gitHubLink;
  }
}

const mancala: Project = new Project(
  "Mancala",
  "A recreation of the classic board game Mancala",
  ["Vanilla JavaScript", "HTML", "CSS"],
  "https://i.imgur.com/HhfyApD.png",
  "https://iferraro.github.io/mancala/",
  "https://github.com/iferraro/mancala"
);

const blogOfTheBeetle: Project = new Project(
  "Blog of the Beetle",
  "A beetle image upload site",
  ["Node", "Express", "MongoDB", "Passport", "Google API"],
  "https://i.imgur.com/JMkEoPK.png",
  "https://blog-of-the-beetle.herokuapp.com/home",
  "https://github.com/iferraro/blog-of-the-beetle"
);

const bightOfBytes: Project = new Project(
  "Bight of Bytes",
  "A smartphone info tool",
  ["Python", "Django", "PostgreSQL"],
  "https://i.imgur.com/fINTRrP.png",
  "https://bight-of-bytes.herokuapp.com/",
  "https://github.com/iferraro/bight-of-bytes"
);

const theMernBible: Project = new Project(
  "The MERN Bible",
  "A King James Version Bible reference",
  ["MongoDB", "Express", "React", "Node", "Tailwind CSS", "Headless UI"],
  "https://i.imgur.com/7YkID3P.png",
  "https://mern-bible.herokuapp.com/",
  "https://github.com/iferraro/mern-bible"
);

const customColorChart: Project = new Project(
  "Custom Color Chart",
  "My personal favorite colors, named by me",
  ["Vanilla JavaScript", "jQuery", "HTML", "CSS"],
  "https://i.imgur.com/SUK7MkJ.png",
  "https://iferraro.github.io/custom-color-chart/",
  "https://github.com/iferraro/custom-color-chart"
);

const projects = [
  theMernBible,
  bightOfBytes,
  blogOfTheBeetle,
  mancala,
  customColorChart,
];

export { projects };
