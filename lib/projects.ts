export interface Project {
  title: string;
  description: string;
  body: string;
  technologies: Technology[];
  learningOutcomes: string[];
  liveLink: string;
  githubLink?: string;
  mainImagePath: string;
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
  PRISMA: {
    name: "Prisma",
    path: basePath + "/prisma.svg",
  },
  GIT: {
    name: "git",
    path: basePath + "/git.svg",
  },
  NPM: {
    name: "npm",
    path: basePath + "/npm.svg",
  },
};

const sprkProject: Project = {
  title: "Tutor dashboard",
  description:
    "A webapp used to track tutoring sessions and payments - my first useful project. No framework used.",
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
  description: "This is a bit meta.",
  body: "Some body here",
  technologies: [technologies.TS, technologies.NEXT_JS, technologies.TAILWIND],
  learningOutcomes: [],
  mainImagePath: "/images/projects/portfolio.png",
  liveLink: "https://reubendrummond.com",
  githubLink: "https://github.com/reubendrummond/portfolio",
};

const socalMediaClone: Project = {
  title: "Social media clone",
  description:
    "A social media application where I am experimenting with technologies such as Prisma, NextAuth.js, and SWR.",
  body: "Some body here",
  technologies: [
    technologies.TS,
    technologies.NEXT_JS,
    technologies.TAILWIND,
    technologies.PRISMA,
  ],
  learningOutcomes: [],
  mainImagePath: "/images/projects/socials.png",
  liveLink: "https://socials-reubendrummond.vercel.app",
  githubLink: "https://github.com/reubendrummond/socials",
};

const nextTapi: Project = {
  title: "Next tAPI",
  description:
    "Published on npm, Next tAPI is an abstaction of Next.js API routes. It provides awesome features to ensure type safety.",
  body: "",
  learningOutcomes: [],
  technologies: [
    technologies.TS,
    technologies.NEXT_JS,
    technologies.GIT,
    technologies.NPM,
  ],
  mainImagePath: "/images/projects/next-tapi.png",
  liveLink: "https://www.npmjs.com/package/next-tapi",
  githubLink: "https://github.com/reubendrummond/next-tapi",
};

export const projects: Project[] = [
  sprkProject,
  nextTapi,
  socalMediaClone,
  personalPortfolio,
];
