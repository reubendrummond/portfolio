import React, { FC, ReactElement, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar: FC = (): ReactElement => {
  return (
    <nav className="absolute right-4 top-4">
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
