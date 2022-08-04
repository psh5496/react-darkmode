import { useEffect, useState } from "react";
import { darkTheme, lightTheme, ThemeType } from "../styles/theme";

export const useDarkMode = () => {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);

  const toggleMode = () => {
    if (theme == lightTheme) {
      localStorage.setItem("mode", "dark");
      setTheme(darkTheme);
    } else {
      localStorage.setItem("mode", "light");
      setTheme(lightTheme);
    }
  };

  useEffect(() => {
    const localMode = localStorage.getItem("mode");
    if (localMode) {
      if (localMode === "dark") {
        setTheme(darkTheme);
      } else {
        setTheme(lightTheme);
      }
    }
  }, []);

  return { theme, toggleMode };
};
