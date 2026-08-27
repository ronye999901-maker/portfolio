"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Heart, ArrowUp, Mail, Phone, ExternalLink, Sparkles, Code2 } from "lucide-react";
import { socialProfiles } from "../data/socials";

interface FooterProps {
  onOpenTerminal?: () => void;
  onOpenCommandPalette?: () => void;
}

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

export function Footer({ onOpenTerminal, onOpenCommandPalette }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Featured Work", href: "/#work" },
    { name: "About & Education", href: "/#about" },
    { name: "Technical Skills", href: "/#skills" },
    { name: "Research & Papers", href: "/#research" },
    { name: "Social Presence", href: "/#social" },
    { name: "Contact Sayan", href: "/#contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl text-slate-400 overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Identity Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-base shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
                SD
              </div>
              <div>
                <span className="font-bold text-sm tracking-wider uppercase text-white group-hover:text-cyan-400 transition-colors">
                  Sayan Das
                </span>
                <p className="text-[11px] font-mono text-cyan-400/90">
                  4th Year B.Tech CSE Undergrad • IEM Kolkata
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Specialized in Machine Learning architectures, autonomous UAV systems, edge IoT inference, and scalable distributed backends.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400/90">
                Open for high-impact engineering roles
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500/50 text-[10px]">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social Profiles */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 mb-4 font-semibold">
              Connect & Code
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.linkedin.com/in/sayan-das-b3739928a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:04sayandas@gmail.com"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>04sayandas@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917872872833"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>+91 7872872833</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Shell & Quick Tools */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-200 font-semibold">
              Developer Tools
            </h4>
            <p className="text-xs text-slate-400">
              Interactive tools built into this portfolio:
            </p>

            <div className="flex flex-col gap-2 pt-1">
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-mono hover:bg-green-500/20 transition-all text-left"
                >
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Launch Terminal ($ CLI)</span>
                  </div>
                  <span className="text-[10px] text-green-500/70">Interactive</span>
                </button>
              )}

              {onOpenCommandPalette && (
                <button
                  onClick={onOpenCommandPalette}
                  className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono hover:bg-white/10 transition-all text-left"
                >
                  <span>Command Palette</span>
                  <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded border border-white/10">
                    ⌘K
                  </kbd>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Sayan Das. Engineered with Next.js, Tailwind & TypeScript.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-all text-[11px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
