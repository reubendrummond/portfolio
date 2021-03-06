import React, { PropsWithChildren, FC } from "react";

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  className,
}) => {
  return (
    <section className={"h-full w-full snap-start px-8 py-12 " + className}>
      {children}
    </section>
  );
};

export type SectionProps = {
  name?: string;
  id?: string;
  className?: string;
};
