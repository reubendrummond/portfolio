type HeadingProps = {
  children: React.ReactNode;
};

export const HighlightedHeading = ({ children }: HeadingProps) => {
  return (
    <div className="relative">
      <div
        className="absolute -z-10 w-[120%] h-[55%] bg-secondary-color"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <h1 className="primary-color">{children}</h1>
    </div>
  );
};
