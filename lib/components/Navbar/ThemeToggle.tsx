import { MoonIcon, SunIcon, ColorSwatchIcon } from "@heroicons/react/outline";
import { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const LOCAL_STORAGE_KEY = "current-color-theme";
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [nextDiv, setNextDiv] = useState<HTMLElement | null>(null);
  const colorThemes = useMemo(
    () => ["theme-space", "theme-weed", "theme-sunset"] as const,
    []
  );

  type ColorThemes = typeof colorThemes[number];

  const [colorTheme, setColorTheme] = useState<ColorThemes>("theme-space");

  useEffect(() => {
    setIsMounted(true);

    if (document) {
      const targetDiv = document.getElementById("__next");
      setNextDiv(() => targetDiv);
      const currentColorTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (
        currentColorTheme &&
        (colorThemes as any as string[]).includes(currentColorTheme)
      ) {
        setColorTheme(() => currentColorTheme as ColorThemes);
        targetDiv?.classList.add(currentColorTheme);
      }
    }
  }, [colorThemes]);

  useEffect(() => {
    const onStorageChange = () => {
      const newColorTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (
        newColorTheme &&
        (colorThemes as any as string[]).includes(newColorTheme)
      )
        addColor(newColorTheme as ColorThemes);
    };

    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  });

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const toggleColors = () => {
    // get next index or loop around
    const newThemeIndex =
      (colorThemes.indexOf(colorTheme) + 1) % colorThemes.length;
    const newColorTheme = colorThemes[newThemeIndex];
    addColor(newColorTheme);
    setColorTheme(() => newColorTheme);
  };

  const addColor = (newColorTheme: ColorThemes) => {
    colorThemes.forEach((theme) => nextDiv?.classList.remove(theme));
    window.localStorage.setItem(LOCAL_STORAGE_KEY, newColorTheme);
    nextDiv?.classList.add(newColorTheme);
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
