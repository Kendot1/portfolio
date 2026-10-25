"use client";

import { createContext, ReactNode, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
interface ThemeContextType { theme: Theme; toggleTheme: () => void; }
const THEME_KEY = "ken-portfolio-theme";
const ThemeContext = createContext<ThemeContextType>({ theme: "light", toggleTheme: () => {} });
function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
}
function subscribe(onChange: () => void) {
  const handleStorage = () => onChange();
  window.addEventListener("storage", handleStorage);
  window.addEventListener("ken-theme-change", handleStorage);
  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("ken-theme-change", handleStorage);
  };
}
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getStoredTheme, (): Theme => "light");
  useEffect(() => { document.documentElement.setAttribute("data-theme", theme); }, [theme]);
  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event("ken-theme-change"));
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);