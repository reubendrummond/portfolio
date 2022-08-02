type HeadingProps = {
  children: React.ReactNode;
};

export const HighlightedHeading = ({ children }: HeadingProps) => {
  return (
    <div className="relative w-fit">
      <div
        className="absolute w-[calc(100%+2rem)] h-[55%] bg-secondary dark:bg-secondary-dark"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <h1 className="text-primary dark:text-primary relative w-fit">
        {children}
      </h1>
    </div>
  );
};
