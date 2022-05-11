// export main heading elements

type HeadingProps = {
  children: React.ReactNode;
};

export const HighlightedHeading = ({ children }: HeadingProps) => {
  return <h1>{children}</h1>;
};
