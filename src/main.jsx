import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./theme/theme.js";

function Root() {
  const [themeMode, setThemeMode] = useState(() => {
    const storedTheme = localStorage.getItem("themeMode");
    return storedTheme ? storedTheme : "light"; // Default to light mode if no stored theme
  });

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("themeMode", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("themeMode", "light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
   <div className="dark:bg-black">
     <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </ThemeProvider>
   </div>
  );
}


createRoot(document.getElementById("root")).render(<Root />);
