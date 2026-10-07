"use client";

import React, { createContext, useContext, useEffect } from "react";

interface ThemeContextType {
  theme: "light";
  toggleTheme: () => void;
  setTheme: (theme: "light") => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Unconditionally force Light Mode on HTML and clear any old dark mode storage
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.documentElement.style.colorScheme = "light";
    }
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("portfolio-theme");
      localStorage.removeItem("portfolio_theme_v2");
      localStorage.removeItem("portfolio_theme_v3");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {}, setTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
