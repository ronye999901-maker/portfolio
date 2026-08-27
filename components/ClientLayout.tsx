"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Terminal } from "./Terminal";
import { CommandPalette } from "./CommandPalette";
import { BackgroundEffects } from "./BackgroundEffects";
import { CustomCursor } from "./CustomCursor";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global hotkeys listener (Ctrl+K, Cmd+K, or Backtick for terminal)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Command Palette with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }

      // Quick toggle interactive terminal with Ctrl+` (or Ctrl+T)
      if ((e.ctrlKey || e.metaKey) && (e.key === "`" || e.key.toLowerCase() === "j")) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Background Visual Effects & Grid */}
      <BackgroundEffects />

      {/* Interactive Custom Mouse Follower */}
      <CustomCursor />

      {/* Fixed Header Navigation */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col pt-20">
        {children}
      </div>

      {/* Interactive Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Interactive Shell Terminal ($ CLI) */}
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Global Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />
    </>
  );
}
