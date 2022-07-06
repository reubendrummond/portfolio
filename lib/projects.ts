export interface Project {
  title: string;
  description: string;
  body: string;
  technologies: Technology[];
  mainImagePath: string;
  learningOutcomes: string[];
  liveLink: string;
  githubLink?: string;
}

interface Technology {
  name: string;
  path: string;
}
const basePath = "/tech-logos";
const technologies: { [key: string]: Technology } = {
  JS: {
    name: "JS",
    path: basePath + "/js.svg",
  },
  TS: {
    name: "TS",
    path: basePath + "/ts.svg",
  },
  NODE_JS: {
    name: "NodeJS",
    path: basePath + "/node-js.svg",
  },
  MY_SQL: {
    name: "MySQL",
    path: basePath + "/mysql.svg",
  },
  HTML: {
    name: "HTML",
    path: basePath + "/html.svg",
  },
  CSS: {
    name: "CSS",
    path: basePath + "/css.svg",
  },
  NEXT_JS: {
    name: "NextJS",
    path: basePath + "/next-js.svg",
  },
  TAILWIND: {
    name: "Tailwind",
    path: basePath + "/tailwind-css.svg",
  },
};

const sprkProject: Project = {
  title: "Tutor dashboard",
  description:
    "A webapp used track of tutoring sessions and payments - my first useful project. No framework used.",
  body: "Some body here",
  technologies: [
    technologies.JS,
    technologies.NODE_JS,
    technologies.MY_SQL,
    technologies.HTML,
    technologies.CSS,
  ],
  learningOutcomes: [
    "Frameworks are needed",
    "Deploying code and configuring DNS",
  ],
  mainImagePath: "/images/projects/sprk.png",
  liveLink: "https://portal.sprk.net.au",
};

const personalPortfolio: Project = {
  title: "Personal website",
  description: "ahhh",
  body: "Some body here",
  technologies: [technologies.TS, technologies.NEXT_JS, technologies.TAILWIND],
  learningOutcomes: [],
  mainImagePath: "/images/projects/portfolio.png",
  liveLink: "https://reubendrummond.com",
  githubLink: "https://github.com/reubendrummond/portfolio",
};

export const projects: Project[] = [sprkProject, personalPortfolio];
