import React, { PropsWithChildren, FC } from "react";

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  className,
  id,
}) => {
  return (
    <section className={"h-full w-full snap-start py-12 " + className} id={id}>
      {children}
    </section>
  );
};

export type SectionProps = {
  name?: string;
  id?: string;
  className?: string;
};
