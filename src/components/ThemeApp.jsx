import React, { useEffect, useState } from "react";
import ThemeBox from "./ThemeBox";

function ThemeApp() {
  const [theme, setTheme] = useState("light");
   // load the saved theme from the localStorage when component mount
    useEffect(() => {
      const storedTheme = localStorage.getItem("theme"); //get value from the localStorage
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }, []);
    // save theme to localStorage WHENEVER IT CHANGES
    useEffect(() => {
      localStorage.setItem("theme", theme); //store theme in localStorage
    }, [theme]); // run whenever theme changes

  const toggleTheme = () => {
   
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme == "light" ? "dark" : "light"} Theme
      </button>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <ThemeBox theme={theme} />
        <ThemeBox theme={theme} />
        <ThemeBox theme={theme} />
      </div>
    </div>
  );
}

export default ThemeApp;
