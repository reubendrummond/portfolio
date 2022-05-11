import { HighlightedHeading } from "@components/Headings";
import React, { StrictMode } from "react";
import { SectionProps } from "../SectionTypes";
import { CartesianGraph } from "./CartesianGraph";
import { CodeLogo } from "./CodeLogo";
import { Typing } from "./Typing";

export const ILike = (props: SectionProps) => {
  const sizes = {
    sm: 250,
    md: 300,
    lg: 400,
  };
  const sizesClass = `w-[${sizes.sm}px] md:w-[${sizes.md}px] lg:w-[${sizes.lg}px]`;

  return (
    <section
      id={props.id}
      className="w-full h-screen p-8 md:pt-16 flex flex-col gap-y-12 md:gap-y-24 items-center "
    >
      {/* <hi className="text-center">I like</h1> */}
      <HighlightedHeading>I like</HighlightedHeading>
      <div className="flex flex-col md:flex-row gap-y-16 items-center w-fit md:gap-x-16 lg:gap-x-32">
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-center">
            <Typing content="software" className="font-mono text-xl" />
          </div>
          <CodeLogo className={sizesClass} />
        </div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-center">Math</h2>
          <CartesianGraph className={sizesClass} />
        </div>
      </div>
    </section>
  );
};
