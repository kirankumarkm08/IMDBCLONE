"use client ";

import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currTheme === "dark" ? (
        <MdDarkMode
          className="hover:text-amber-500 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdOutlineWbSunny
          className=" hover:text-amber-500 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkMode;
