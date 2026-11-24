"use client";

import { createContext, ReactNode, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
interface ThemeContextType { theme: Theme; toggleTheme: () => void; }
const THEME_KEY = "ken-portfolio-theme";
const ThemeContext = createContext<ThemeContextType>({ theme: "light", toggleTheme: () => {} });
const subscribeSystem = (onChange: () => void) => {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};
function getStoredTheme(): Theme {
  try { const stored = localStorage.getItem(THEME_KEY); return stored === "light" || stored === "dark" ? stored : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } catch { return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; }
}
function getServerTheme(): Theme { return "light"; }
function subscribe(onChange: () => void) {
  const handleStorage = () => onChange();
  const unsubscribeSystem = subscribeSystem(onChange);
  window.addEventListener("storage", handleStorage);
  window.addEventListener("ken-theme-change", handleStorage);
  return () => {
    unsubscribeSystem();
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("ken-theme-change", handleStorage);
  };
}
export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getStoredTheme, getServerTheme);
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