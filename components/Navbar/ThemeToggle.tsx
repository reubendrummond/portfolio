import { MoonIcon, SunIcon, ColorSwatchIcon } from "@heroicons/react/outline";
import { useState, useCallback, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [nextDiv, setNextDiv] = useState<HTMLElement | null>(null);
  const themes = ["theme-space", "theme-weed", "theme-sunset"];

  useEffect(() => {
    setIsMounted(true);
    if (document) setNextDiv(document.getElementById("__next"));
  }, []);

  useEffect(() => console.log(theme === "dark"), [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const toggleColors = () => {
    themes.forEach((theme) => nextDiv?.classList.remove(theme));
    nextDiv?.classList.add(themes[Math.floor(Math.random() * themes.length)]);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="h-8 aspect-square [&>*]:stroke-gray-900 [&>*]:dark:stroke-gray-200"
      >
        {isMounted && (theme === "dark" ? <SunIcon /> : <MoonIcon />)}
      </button>
      <button
        onClick={toggleColors}
        className="h-8 aspect-square [&>*]:stroke-gray-900 [&>*]:dark:stroke-gray-200"
      >
        <ColorSwatchIcon />
      </button>
    </>
  );
};

export default ThemeToggle;
