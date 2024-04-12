import { HighlightedHeading } from "lib/components/Headings";
import { Section } from "../Section";
import Image from "next/image";

const Technologies = () => {
  const technologies: { name: string; src: string; link?: string }[] = [
    { name: "TypeScript", src: "ts" },
    // { name: "React", src: "react" },
    { name: "NextJS", src: "next-js" },
    // { name: "TailwindCSS", src: "tailwind-css" },
    // { name: "JavaScript", src: "js" },
    // { name: "NodeJS", src: "node-js" },
    { name: "Python", src: "python" },
    { name: "SQL", src: "postgre-sql" },
    // { name: "C", src: "c" },
    { name: "C++", src: "cpp" },
    { name: "C#", src: "csharp" },
    { name: "Rust", src: "rust" },
    // { name: "HTML", src: "html" },
    // { name: "Firebase", src: "firebase" },
    { name: "Git", src: "git" },
    // { name: "GitHub", src: "github" },
  ];

  return (
    <Section
      className="px-8 py-12 md:pt-16 flex flex-col items-center gap-y-8 justify-center"
      id="technologies"
    >
      <HighlightedHeading>Technologies</HighlightedHeading>
      <p>My favourites and competencies</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> */}
        {technologies.map(
          ({ name, src }) =>
            src && (
              <div
                className="w-[75px] md:w-[100px] transition-transform duration-150 hover:scale-110"
                key={src}
              >
                <div className="relative">
                  {/* <div className="absolute h-[100%] aspect-square rounded-full bg-primary-light opacity-20 blur-md left-0 top-0" /> */}
                  <Image
                    height="100px"
                    width="100px"
                    layout="responsive"
                    className="grayscale opacity-[65%] dark:invert"
                    src={`/tech-logos/${src}.svg`}
                    alt={name}
                    loading="eager"
                  />
                </div>
                <p className="text-xs font-medium text-center mt-1">{name}</p>
              </div>
            )
        )}
      </div>
    </Section>
  );
};

export default Technologies;
