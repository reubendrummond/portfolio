import { HighlightedHeading } from "lib/components/Headings";
import React from "react";
import { Section, SectionProps } from "../Section";
import { CartesianGraph } from "./AnimatedGraphSVG/FunctionPlotter";
import { GraphAnimation } from "./CartesianGraph/GraphAnimation";
import { CodeLogo } from "./CodeLogo";
import { Typing } from "./Typing";

const ILike = (props: SectionProps) => {
  // const sizes = {
  //   sm: 250,
  //   md: 300,
  //   lg: 400,
  // };
  // this causes an error I believe
  // const sizesClass = `w-[${sizes.sm}px] md:w-[${sizes.md}px] lg:w-[${sizes.lg}px]`;
  const sizesClass = "w-[200px] md:w-[280px] lg:w-[350px] xl:w-[350px]";

  return (
    <Section className="w-full h-full px-8 py-12 md:pt-16 flex flex-col md:gap-y-0 items-center ">
      <HighlightedHeading>I like...</HighlightedHeading>
      <div className="flex flex-col h-full md:flex-row items-center w-fit justify-around md:gap-x-16 lg:gap-x-32">
        <div className="flex flex-col gap-y-4 items-center">
          <div className="flex flex-col justify-center items-center gap-y-1">
            <Typing content="software" className="font-mono text-2xl md:3xl" />
            <p>Frontend and backend web dev</p>
          </div>
          <CodeLogo className={sizesClass} />
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-center">Math</h2>
          {/* <GraphAnimation className={sizesClass} /> */}
          <CartesianGraph
            bounds={{
              x1: -1.5,
              x2: 1.5,
              y1: -1.5,
              y2: 1.5,
            }}
            axisFreq={{
              major: 5,
              minor: 1,
            }}
            className={sizesClass}
            plots={[
              {
                mathFunction: (x: number) => x * (x - 1) * (x + 1),
                plotClass: "",
                tangentClass: "",
                tangentBounds: {
                  x1: -1,
                  x2: 1,
                },
              },
            ]}
          />
        </div>
      </div>
    </Section>
  );
};

export default ILike;
