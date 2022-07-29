import React, { FC } from "react";
import Navbar from "lib/components/Navbar";

const MainLayout: FC = ({ children }) => {
  return (
    <div className="relative h-full">
      <main className="snap-proximity md:snap-mandatory snap-y h-full min-h-full w-screen bg-gray-50 dark:bg-neutral-900 overflow-x-hidden overflow-y-scroll">
        {children}
      </main>
      <Navbar />
    </div>
  );
};

export default MainLayout;
