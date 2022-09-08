interface Project {
  title: string;
  description: string;
  stack: string[];
  imageUrl: string;
  siteUrl: string;
  githubUrl: string;
}

const projectList: Project[] = [
  {
    title: "Mancala",
    description: "A recreation of the classic board game Mancala",
    stack: ["Vanilla JavaScript", "HTML", "CSS"],
    imageUrl: "https://i.imgur.com/HhfyApD.png",
    siteUrl: "https://iferraro.github.io/mancala/",
    githubUrl: "https://github.com/iferraro/mancala",
  },
  {
    title: "Blog of the Beetle",
    description: "A beetle image upload site",
    stack: ["Node", "Express", "MongoDB", "Passport", "Google API"],
    imageUrl: "https://i.imgur.com/JMkEoPK.png",
    siteUrl: "https://blog-of-the-beetle.herokuapp.com/home",
    githubUrl: "https://github.com/iferraro/blog-of-the-beetle",
  },
  {
    title: "Bight of Bytes",
    description: "A smartphone info tool",
    stack: ["Python", "Django", "PostgreSQL"],
    imageUrl: "https://i.imgur.com/fINTRrP.png",
    siteUrl: "https://bight-of-bytes.herokuapp.com/",
    githubUrl: "https://github.com/iferraro/bight-of-bytes",
  },
  {
    title: "The MERN Bible",
    description: "A King James Version Bible reference",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Tailwind CSS",
      "Headless UI",
    ],
    imageUrl: "https://i.imgur.com/7YkID3P.png",
    siteUrl: "https://mern-bible.herokuapp.com/",
    githubUrl: "https://github.com/iferraro/mern-bible",
  },
  {
    title: "Isaac's Custom Colors",
    description: "My personal favorite colors, named by me",
    stack: ["TypeScript", "React", "Tailwind CSS"],
    imageUrl: "https://i.imgur.com/LURMAA2.png",
    siteUrl: "https://www.isaacscolors.io/",
    githubUrl: "https://github.com/iferraro/isaacs-colors",
  },
];

export { projectList };
