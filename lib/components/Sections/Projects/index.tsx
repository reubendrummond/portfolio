import { Section } from "../Section";
import { Project, projects } from "lib/projects";
import Image from "next/image";
import { FC, useState } from "react";
import { ArrowRightIcon, XIcon } from "@heroicons/react/outline";

const Projects = () => {
  return (
    <Section
      className="flex flex-col gap-y-8 pt-8 pb-16 px-4 md:px-8 items-center h-min-fit h-fit snap justify-center"
      id="projects"
    >
      <h1>Projects</h1>
      <div className="relative flex flex-wrap w-fit max-w-3xl gap-6 justify-center h-fit">
        <div
          style={{
            animationDelay: "2000ms",
          }}
          className="absolute bg-primary-dark w-[22rem] md:w-[26rem] aspect-square rounded-full mix-blend-multiply dark:mix-blend-plus-lighter filter blur-lg animate-blob opacity-50 -right-8 md:right-16 -top-20"
        />
        <div
          style={{
            animationDelay: "4000ms",
          }}
          className="absolute bg-primary w-[22rem] md:w-[26rem] aspect-square rounded-full mix-blend-multiply dark:mix-blend-plus-lighter filter blur-lg animate-blob opacity-60 inset-auto -left-16 top-[30%]"
        />
        <div className="absolute bg-primary-light w-[22rem] md:w-[22rem] aspect-square rounded-full mix-blend-multiply dark:mix-blend-plus-lighter filter blur-lg animate-blob opacity-50 -bottom-20 md:right-20" />
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
};

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const {
    title,
    mainImagePath,
    technologies,
    description,
    liveLink,
    githubLink,
  } = project;
  // const cardRef = useRef<HTMLDivElement>(null);
  const [descriptionShowing, setDescriptionShowing] = useState(false);
  const toggle = () => setDescriptionShowing((d) => !d);

  return (
    <div className="relative w-[360px] h-[240px] rounded-xl overflow-hidden shadow-lg">
      <Image
        src={mainImagePath}
        alt={mainImagePath}
        layout="fill"
        onClick={toggle}
        className="cursor-pointer"
        loading="eager"
      />

      <div
        className={`absolute px-4 py-4 w-full h-full left-0 top-0 bg-gray-800/90 overflow-hidden ${
          descriptionShowing ? "" : "hidden"
        }`}
      >
        <button className="w-8 block ml-auto" onClick={toggle}>
          <XIcon className="stroke-gray-200" />
        </button>
        <div className="flex flex-col h-[calc(100%-1rem)] items-center justify-between gap-y-2 -my-6">
          <div>
            <h3 className="text-gray-200 text-center">{title}</h3>
            <div className="flex gap-x-2 w-fit mx-auto opacity-80 invert mt-2">
              {technologies.map((t) => (
                <Image
                  key={t.path}
                  src={t.path}
                  alt={t.name}
                  width="32px"
                  height="32px"
                  loading="eager"
                />
              ))}
            </div>
          </div>
          <p className="text-gray-200 text-center">{description}</p>
          <div className="flex gap-x-2 w-fit">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                className="w-8 fill-gray-200 hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                </svg>
              </a>
            )}
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-1 bg-primary rounded-full px-4 py-1 hover:bg-primary/80 transition-colors group"
            >
              <p className="text-gray-200 font-bold">Live</p>{" "}
              <ArrowRightIcon className="w-6 stroke-gray-200 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToLiveButton: FC<{ url: string }> = ({ url }) => {
  return <a href={url}></a>;
};

export default Projects;
