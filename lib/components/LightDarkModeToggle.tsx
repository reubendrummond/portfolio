import React, { FC, useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

export const LightDarkModeToggle: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const initialDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(initialDarkMode);
  }, []);

  useEffect(() => {
    const rootElement = document.querySelector("#__next");
    if (darkMode) {
      rootElement?.classList.add("dark");
    } else {
      rootElement?.classList.remove("dark");
    }
  });

  return (
    <button onClick={toggleDarkMode} className="h-full py-6">
      {darkMode ? (
        <MoonIcon className="h-full text-slate-300" />
      ) : (
        <SunIcon className="h-full text-slate-400" />
      )}
    </button>
  );
};
