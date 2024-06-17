"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="text-black dark:text-gray-200 dark:bg-gray-500 transition-colors duration-300 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
