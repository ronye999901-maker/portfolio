"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TermIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projects";
import { skillCategories } from "../data/skills";
import { socialProfiles } from "../data/socials";
import { certificationsData } from "../data/certifications";
import { experienceData } from "../data/experience";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="text-cyan-400 space-y-1">
          <p className="font-bold text-white">SayanOS Interactive Engineering Shell [v2.6.0]</p>
          <p className="text-slate-400">Type <span className="text-green-400">help</span> to view available commands.</p>
        </div>
      ),
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let outputNode: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-semibold mb-1">Available System Commands:</p>
            <p><span className="text-green-400 font-bold">whoami</span>    - Bio, identity, and personal brand</p>
            <p><span className="text-green-400 font-bold">projects</span>  - Engineering projects & live stats</p>
            <p><span className="text-green-400 font-bold">skills</span>    - Categorized tech stack & tools</p>
            <p><span className="text-green-400 font-bold">research</span>  - GNR MOSFET AI simulation research</p>
            <p><span className="text-green-400 font-bold">socials</span>   - Social profile handles & links</p>
            <p><span className="text-green-400 font-bold">certs</span>     - Official credentials & certificates</p>
            <p><span className="text-green-400 font-bold">contact</span>   - Email, phone, and outreach channels</p>
            <p><span className="text-green-400 font-bold">resume</span>    - Resume download location</p>
            <p><span className="text-green-400 font-bold">clear</span>     - Clear terminal screen</p>
            <p><span className="text-green-400 font-bold">exit</span>      - Close terminal mode</p>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="space-y-2 text-slate-200">
            <p className="text-white font-bold text-sm">Sayan Das</p>
            <p className="text-cyan-300 font-mono text-xs">4th Year B.Tech CSE Undergrad (IEM Kolkata)</p>
            <p className="text-slate-400 text-xs">
              AI/ML • Autonomous UAV Systems • Computer Vision • Full-Stack Development
            </p>
            <p className="text-xs text-slate-300">
              "I build intelligent systems and autonomous robotics pipelines that solve real-world problems."
            </p>
            <div className="text-[11px] text-slate-400 font-mono bg-white/5 p-2 rounded border border-white/5">
              🎓 4th-Year B.Tech Computer Science & Engineering (IEM Kolkata) | CGPA: 8.15/10<br />
              🔒 Specializations: Cyber Security, Blockchain, IoT
            </div>
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="space-y-3">
            <p className="text-cyan-400 font-semibold text-xs">Major Engineering Projects:</p>
            {projectsData.map((p) => (
              <div key={p.id} className="border-l-2 border-cyan-500/50 pl-2 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-bold text-xs">{p.title}</span>
                  <span className="text-[10px] text-slate-400">[{p.category}]</span>
                </div>
                <p className="text-slate-300 text-xs">{p.subtitle}</p>
                <p className="text-[11px] text-slate-400">Tech: {p.technologies.join(", ")}</p>
                <p className="text-[11px] text-cyan-300 font-mono">Result: {p.keyResult}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="space-y-2">
            <p className="text-cyan-400 font-semibold text-xs">Technical Proficiency Matrix:</p>
            {skillCategories.map((cat) => (
              <div key={cat.title} className="text-xs">
                <span className="text-green-400 font-mono font-bold">{cat.title}: </span>
                <span className="text-slate-300">{cat.skills.map((s) => s.name).join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "research":
        outputNode = (
          <div className="space-y-1.5 text-xs text-slate-200">
            <p className="text-cyan-400 font-bold">Research Internship @ IEDC, IEM Kolkata</p>
            <p className="text-slate-300 font-medium">Topic: Fabrication of GNR MOSFET using Machine Learning</p>
            <p className="text-slate-400">Mentors: Prof. (Dr.) Siddhartha Roy & Prof. Rangan Sarkar</p>
            <p className="text-slate-400">Tech: Python, TensorFlow, PyTorch, Scikit-Learn</p>
            <div className="bg-white/5 p-2 rounded border border-white/5 text-[11px] font-mono text-cyan-300">
              Pipeline: Fabrication Parameters → Machine Learning → Parameter Optimization → Material Behavior Prediction → Device Simulation
            </div>
          </div>
        );
        break;

      case "socials":
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-semibold">Social & Engineering Profiles:</p>
            {socialProfiles.map((s) => (
              <p key={s.id}>
                <span className="text-green-400 font-mono font-bold">{s.name}: </span>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-200">
                  {s.username}
                </a>
                <span className="text-slate-400 text-[11px]"> - {s.description}</span>
              </p>
            ))}
          </div>
        );
        break;

      case "certs":
        outputNode = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-semibold">Verified Certifications:</p>
            {certificationsData.map((c) => (
              <div key={c.id} className="text-slate-300">
                • <span className="text-white font-medium">{c.title}</span> — {c.issuer} ({c.date})
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">Direct Communication Channels:</p>
            <p>📧 Email: <a href="mailto:04sayandas@gmail.com" className="text-cyan-300 underline">04sayandas@gmail.com</a></p>
            <p>📱 Phone: <a href="tel:+917872872833" className="text-cyan-300 underline">+91-7872872833</a></p>
            <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/sayan-das-b3739928a" target="_blank" className="text-cyan-300 underline">sayan-das-b3739928a</a></p>
          </div>
        );
        break;

      case "resume":
        outputNode = (
          <div className="text-xs text-slate-300">
            <p className="text-green-400">CV Ready for download.</p>
            <p>Navigate to <span className="text-cyan-300 font-mono">/#resume</span> or click the top navbar Resume button.</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        onClose();
        setInput("");
        return;

      default:
        outputNode = (
          <p className="text-red-400 text-xs">
            Command not recognized: <span className="text-white font-mono">{cleanCmd}</span>. Type <span className="text-green-400 font-mono font-bold">help</span> to list commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: outputNode }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className={`relative w-full ${
            isExpanded ? "max-w-5xl h-[85vh]" : "max-w-2xl h-[550px]"
          } rounded-2xl bg-slate-950 border border-green-500/30 shadow-2xl shadow-green-950/40 flex flex-col overflow-hidden font-mono z-10 transition-all duration-300`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-white/10 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:opacity-80" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer hover:opacity-80" onClick={() => setHistory([])} title="Clear" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer hover:opacity-80" onClick={() => setIsExpanded(!isExpanded)} title="Expand" />
              <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
                <TermIcon className="w-3.5 h-3.5 text-green-400" />
                sayan@dev-box:~$
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                title={isExpanded ? "Minimize" : "Maximize"}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs font-mono">
            {history.map((h, i) => (
              <div key={i} className="space-y-1">
                {h.command !== "welcome" && (
                  <div className="flex items-center gap-2 text-green-400">
                    <span>sayan@dev-box:~$</span>
                    <span className="text-white font-bold">{h.command}</span>
                  </div>
                )}
                <div className="pl-2">{h.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Prompt Input Form */}
          <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-slate-900/90 border-t border-white/10">
            <span className="text-green-400 mr-2 text-xs font-bold font-mono">sayan@dev-box:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type help, whoami, projects, skills..."
              className="flex-1 bg-transparent text-xs text-green-300 placeholder-slate-600 focus:outline-none font-mono"
            />
            <button type="submit" className="p-1 text-slate-400 hover:text-green-400">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
