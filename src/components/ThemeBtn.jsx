import React from "react";
import useTheme from "../theme/theme";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const toggleTheme = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <button
      className="text-[#00df9a] font-bold py-2 px-4 rounded"
      onClick={toggleTheme}
    >
      {themeMode === "light" ? (
        <FaMoon aria-hidden="true" className="size-6 text-white" />
      ) : (
        <FaSun aria-hidden="true" className="size-6 text-white" />
      )}
    </button>
  );
}

export default ThemeBtn;
