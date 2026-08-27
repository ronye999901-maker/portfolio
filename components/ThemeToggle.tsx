"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun, Terminal } from "lucide-react";

export type ThemeMode = "dark" | "light" | "terminal";

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("sayan_portfolio_theme") as ThemeMode;
    if (saved && ["dark", "light", "terminal"].includes(saved)) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const cycleTheme = () => {
    let next: ThemeMode = "dark";
    if (theme === "dark") next = "light";
    else if (theme === "light") next = "terminal";
    else next = "dark";

    setTheme(next);
    localStorage.setItem("sayan_portfolio_theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={cycleTheme}
      className="relative p-2 rounded-xl border border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 transition-all duration-200 text-slate-300 hover:text-cyan-400 flex items-center justify-center group"
      title={`Theme: ${theme.toUpperCase()} (Click to toggle)`}
      aria-label="Toggle visual theme"
    >
      {theme === "dark" && <Moon className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />}
      {theme === "light" && <Sun className="w-4 h-4 text-amber-500 group-hover:rotate-45 transition-transform" />}
      {theme === "terminal" && <Terminal className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />}
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
