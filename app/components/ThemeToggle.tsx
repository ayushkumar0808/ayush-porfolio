"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// Toggles a `dark` class on <html>. Since it's on the root element,
// the effect applies to the whole page, not just the navbar.
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`hover-zoom w-9 h-9 flex items-center justify-center rounded-full border transition-colors ${
        dark
          ? "border-white/15 text-yellow-300 hover:bg-white/10"
          : "border-black/10 text-gray-700 hover:bg-white/90"
      }`}
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
