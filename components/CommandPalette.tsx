"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, User, Briefcase, Cpu, FileCode2, Share2, Mail, FileDown, Terminal, X, ArrowRight, Globe, Code2 } from "lucide-react";
import { socialProfiles } from "../data/socials";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export function CommandPalette({ isOpen, onClose, onOpenTerminal }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Keyboard shortcut listener (Ctrl+K / Cmd+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    {
      id: "home",
      label: "Go to Home",
      icon: Home,
      category: "Navigation",
      action: () => { router.push("/"); onClose(); },
    },
    {
      id: "about",
      label: "Go to About & Education",
      icon: User,
      category: "Navigation",
      action: () => { router.push("/#about"); onClose(); },
    },
    {
      id: "projects",
      label: "Go to All Projects",
      icon: Briefcase,
      category: "Navigation",
      action: () => { router.push("/projects"); onClose(); },
    },
    {
      id: "skills",
      label: "Go to Tech Stack & Skills",
      icon: Cpu,
      category: "Navigation",
      action: () => { router.push("/#skills"); onClose(); },
    },
    {
      id: "research",
      label: "Go to Research & Innovation",
      icon: FileCode2,
      category: "Navigation",
      action: () => { router.push("/#research"); onClose(); },
    },
    {
      id: "social",
      label: "Go to Social Profiles",
      icon: Share2,
      category: "Navigation",
      action: () => { router.push("/#social"); onClose(); },
    },
    {
      id: "contact",
      label: "Go to Contact",
      icon: Mail,
      category: "Navigation",
      action: () => { router.push("/#contact"); onClose(); },
    },
    {
      id: "terminal",
      label: "Open Terminal Mode ($ CLI)",
      icon: Terminal,
      category: "Tools",
      action: () => { onClose(); onOpenTerminal(); },
    },
    {
      id: "resume",
      label: "Download Sayan's Resume (CV)",
      icon: FileDown,
      category: "Actions",
      action: () => { router.push("/#resume"); onClose(); },
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      icon: GithubIcon,
      category: "External",
      action: () => {
        const gh = socialProfiles.find((s) => s.id === "github");
        window.open(gh?.url || "https://github.com/", "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      icon: LinkedinIcon,
      category: "External",
      action: () => {
        const li = socialProfiles.find((s) => s.id === "linkedin");
        window.open(li?.url || "https://www.linkedin.com/in/sayan-das-b3739928a", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Command Palette Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-white/15 shadow-2xl shadow-cyan-950/30 overflow-hidden z-10"
        >
          {/* Header & Search Input */}
          <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-slate-950/50">
            <Search className="w-5 h-5 text-cyan-400 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sections, projects, profiles, commands..."
              className="flex-1 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none font-mono"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
            {filteredCommands.length === 0 ? (
              <div className="py-8 text-center text-xs text-slate-400 font-mono">
                No matching results found for "{query}".
              </div>
            ) : (
              filteredCommands.map((cmd) => {
                const Icon = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-cyan-500/10 text-slate-200 hover:text-cyan-300 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium">{cmd.label}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{cmd.category}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Info */}
          <div className="px-4 py-2 bg-slate-950/80 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">↑↓</span>
              <span>Navigate</span>
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">↵</span>
              <span>Select</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">ESC</span>
              <span>Close</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
