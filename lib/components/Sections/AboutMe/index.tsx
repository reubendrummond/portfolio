import { HighlightedHeading } from "lib/components/Headings";
import {
  AcademicCapIcon,
  DocumentDownloadIcon,
  TerminalIcon,
} from "@heroicons/react/outline";
import { FC, PropsWithChildren } from "react";
import { Section } from "../Section";
import { DownloadIcon } from "@heroicons/react/solid";

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
    <Section className="flex flex-col items-center justify-center gap-y-6">
      <h1 className="z-50">
        <span className="text-primary">About</span> Me
      </h1>
      <div className="flex flex-col w-full max-w-md gap-y-4 px-4 items-center">
        <div className="flex gap-x-4 gap-y-2 bg-gray-100 rounded-xl px-6 py-4 opacity-100 dark:bg-neutral-800">
          <TerminalIcon className="w-12 shrink-0 stroke-gray-900 dark:stroke-gray-100" />
          <p className="w-full text-justify text-gray-900 dark:text-gray-100">
            I am passionate about software, especially web development. I now
            want to learn industry best practices. In future I want to work in
            the start up space and create own a tech business.
          </p>
        </div>
        <div className="flex gap-x-4 gap-y-2 bg-gray-100 rounded-xl px-6 py-4 opacity-100 dark:bg-neutral-800">
          <AcademicCapIcon className="w-12 shrink-0 stroke-gray-900 dark:stroke-gray-100" />
          <p className="w-full text-justify text-gray-900 dark:text-gray-100">
            I am studing engineering (software) and maths at QUT where I am a
            Dean&#39;s Scholar. I graduated in 2020 with an ATAR of 99.90 and
            was named a{" "}
            <a
              href="https://www.qcaa.qld.edu.au/senior/certificates-and-qualifications/qce/qce-achievement-awards/past-winners/2020/stories"
              target="_blank"
              rel="noreferrer"
              className="underline text-primary"
            >
              QCE Distinguised Academic Achiever
            </a>
            .
          </p>
        </div>
        <a
          className="flex gap-x-2 bg-primary text-white items-center w-fit px-4 py-2 rounded-lg hover:opacity-80 transition-opacity hover:cursor-pointer"
          href="/rd_resume_public.pdf"
          download
        >
          Download resume <DocumentDownloadIcon className="h-8" />
        </a>
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
