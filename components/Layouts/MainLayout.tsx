import React, { FC } from "react";
import Navbar from "@components/Navbar";

const MainLayout: FC = ({ children }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden overflow-y-scroll">
      <Navbar />
      <div className="p-8 bg-slate-100 dark:bg-slate-800 grow">
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default MainLayout;
