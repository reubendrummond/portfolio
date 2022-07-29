import { HighlightedHeading } from "lib/components/Headings";
import { AcademicCapIcon, TerminalIcon } from "@heroicons/react/outline";
import { FC, PropsWithChildren } from "react";
import { Section } from "../Section";

const AboutMe = () => {
  // return (
  //   <Section className="flex flex-col items-center gap-y-6">
  //     <div className="w-full h-full grid grid-cols-2">
  //       <div className="h-full w-full bg-primary">
  //         <h1 className="text-right ">Contact</h1>
  //       </div>
  //       <div className="h-full w-full ">
  //         <h1 className="text-primary dark:text-primary">Me</h1>
  //       </div>
  //     </div>
  //   </Section>
  // );

  return (
    <Section className="flex flex-col items-center gap-y-6">
      <h1>
        About <span className="text-primary">Me</span>
      </h1>
      <div className="flex flex-col max-w-md gap-y-4">
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-2 bg-primary rounded-xl px-6 py-4 opacity-100 bg-gradient-to-tr from-primary to-primary-light">
          <AcademicCapIcon className="w-12 shrink-0 text-gray-100" />
          <ul className="w-full text-justify text-gray-100">
            <li>Dean&#39s Scholar @ QUT</li>
            <li>Studing software engineering + maths</li>
            <li>ATAR 99.90</li>
            <li>QCE Distinguised Academic Achiever</li>
          </ul>
        </div>
        <div className="flex gap-x-4 bg-primary rounded-xl px-6 py-4 opacity-100 bg-gradient-to-bl from-primary-light to-primary">
          <TerminalIcon className="w-12 shrink-0 text-gray-100" />
          <p className="w-full text-justify text-gray-100">
            I have discovered a passion for software -- in particular, web
            development. I now want to learn industry best practices. In the
            future I want to run a business empowered by automation, technology,
            and good procedures.
          </p>
        </div>
      </div>
    </Section>
  );

  return (
    <Section className="flex flex-col items-center gap-y-6" id="about">
      <HighlightedHeading>About me</HighlightedHeading>
      <div className="max-w-md flex flex-col gap-y-6">
        <div className="flex flex-row gap-x-2 items-center">
          <div className="text-right h-fit text-2xl font-bold">
            <p className="text-primary dark:text-primary">Reuben</p>
            <p className="text-primary dark:text-primary">Drummond</p>
          </div>
          <div className="h-full w-[3px] bg-primary" />
          <p className="py-4 !text-primary font-semibold">
            I am an aspiring <strong>web developer</strong>. I want to use
            software as a tool to <strong>create</strong>.
          </p>
          {/* <button disabled={true}>Download resume</button> */}
        </div>
        <p className="text-justify">
          I achieved an <HighlightText>ATAR of 99.90</HighlightText> and was
          named a{" "}
          <ExternalLink href="/">
            QCE Distinguished Academic Achiever
          </ExternalLink>{" "}
          in 2020. I am currently studying a Software Engineering and
          Mathematics degree at QUT and am a Dean’s scholar.
        </p>
        <p className="text-justify">
          I am a driven individual with the desire to constantly improve in all
          areas. At this stage in my career, I want to learn{" "}
          <HighlightText>industry best practices</HighlightText>. In the future
          I want to run a business empowered by automation, technology, and good
          procedures.
        </p>
      </div>
    </Section>
  );
};

const HighlightText: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <span className="font-bold text-primary">{children}</span>;
};

const ExternalLink: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => {
  return (
    <a href={href} className="underline text-primary">
      {children}
    </a>
  );
};

export default AboutMe;
