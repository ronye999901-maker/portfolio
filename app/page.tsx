"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Terminal as TermIcon,
  FileDown,
  Sparkles,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Send,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  ChevronRight,
  Zap,
  Activity,
  Compass,
  Radio,
  Flame,
  Shield,
  Search,
  Copy,
  Check
} from "lucide-react";
import { projectsData, Project } from "../data/projects";
import { skillCategories } from "../data/skills";
import { experienceData } from "../data/experience";
import { certificationsData } from "../data/certifications";
import { achievementsData } from "../data/achievements";
import { socialProfiles } from "../data/socials";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const categories = ["ALL", "AI / ML", "DRONE", "IOT", "WEB DEVELOPMENT", "BACKEND"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projectsData
      : projectsData.filter((p) =>
          p.allCategories ? p.allCategories.includes(selectedCategory) : p.category === selectedCategory
        );

  const copyEmail = () => {
    navigator.clipboard.writeText("04sayandas@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="space-y-28 md:space-y-36 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 max-w-6xl mx-auto pt-8">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="font-semibold tracking-wide">
            4TH-YEAR B.TECH CSE UNDERGRAD • OPEN FOR 2026/2027 ROLES & RESEARCH
          </span>
        </motion.div>

        {/* Main Hero Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase">
            Sayan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Das</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl font-mono text-cyan-300/90 font-medium tracking-tight">
            4th-Year B.Tech CSE Undergrad | AI/ML & Autonomous Systems Developer
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed pt-2">
            Final-year Computer Science & Engineering student at IEM Kolkata passionate about building autonomous aerial telemetry pipelines, real-time computer vision inference systems, and scalable full-stack applications.
          </p>
        </motion.div>

        {/* Hero Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-10"
        >
          <a
            href="#work"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all hover:scale-105 backdrop-blur-md"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Contact Me</span>
          </a>

          <a
            href="#resume"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-mono text-sm transition-all hover:scale-105"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-16 pt-8 border-t border-white/10"
        >
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-cyan-400 font-mono">8.15</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">CGPA (4th Year CSE)</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-blue-400 font-mono">5+</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engineering Systems</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-indigo-400 font-mono">1</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Semiconductor ML Paper</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
            <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3+</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Certifications (UoL, IBM)</span>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED PROJECTS / SYSTEMS SHOWCASE */}
      {/* ========================================================================= */}
      <section id="work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Engineered Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mt-2 font-mono">
              High-performance solutions combining deep learning, real-time edge processing, and scalable distributed architectures.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300 backdrop-blur-xl"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white/10 text-cyan-300 border border-white/10">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Project Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architecture Pipeline Tags */}
                {project.architectureSteps && (
                  <div className="mb-6 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                      Architecture Pipeline
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                      {project.architectureSteps.map((step, sIdx) => (
                        <React.Fragment key={step}>
                          <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10 text-[11px]">
                            {step}
                          </span>
                          {sIdx < project.architectureSteps.length - 1 && (
                            <span className="text-cyan-500/60 text-[10px]">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Result Highlight */}
                <div className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 mb-6 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-cyan-200 leading-relaxed">
                    <span className="font-semibold text-white">Key Impact: </span>
                    {project.keyResult}
                  </p>
                </div>
              </div>

              {/* Card Footer: Tech Stack & Detail Link */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold group/link"
                >
                  <span>Deep Dive Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Callout */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-mono text-xs hover:border-cyan-500/40 transition-all hover:scale-105"
          >
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>Browse Full Technical Project Directory ({projectsData.length} Systems)</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TECHNICAL SKILLS & MATRIX */}
      {/* ========================================================================= */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering Disciplines
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-mono">
            Structured proficiencies across artificial intelligence, systems software, distributed servers, and edge platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                <h3 className="text-base font-bold text-white flex items-center justify-between mb-2">
                  <span>{category.title}</span>
                  <span className="text-[11px] font-mono text-cyan-400 font-normal">
                    {category.skills.length} skills
                  </span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                        skill.highlight
                          ? "bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-semibold"
                          : "bg-white/5 border border-white/10 text-slate-300"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. RESEARCH & INNOVATION SHOWCASE */}
      {/* ========================================================================= */}
      <section id="research" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl shadow-cyan-950/20">
          {/* Subtle background graphic */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACADEMIC & APPLIED RESEARCH</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Fabrication of GNR MOSFET using Machine Learning
            </h2>

            <p className="text-xs sm:text-sm font-mono text-cyan-400 mb-6">
              Research Fellowship @ Innovation & Entrepreneurship Development Cell (IEDC), IEM Kolkata
              <br />
              Mentored by <span className="text-white font-medium">Prof. (Dr.) Siddhartha Roy</span> &{" "}
              <span className="text-white font-medium">Prof. Rangan Sarkar</span>
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              Investigated Graphene Nano-Ribbon (GNR) Field-Effect Transistors by training machine learning surrogate models to predict nanoscale electronic conductance, I-V curves, and fabrication parameters. This machine learning methodology eliminates the massive computational bottleneck of iterative TCAD simulations.
            </p>

            {/* Visual ML Pipeline */}
            <div className="mb-8 p-5 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
                Research ML Surrogate Architecture
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-[11px] font-mono text-slate-400 mb-1">01. INPUT</span>
                  <span className="text-xs font-bold text-white">Fabrication Specs</span>
                </div>
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                  <span className="block text-[11px] font-mono text-cyan-400 mb-1">02. MODEL</span>
                  <span className="text-xs font-bold text-cyan-200">Neural Regression</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="block text-[11px] font-mono text-slate-400 mb-1">03. OPTIMIZE</span>
                  <span className="text-xs font-bold text-white">Parameter Tuning</span>
                </div>
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
                  <span className="block text-[11px] font-mono text-blue-400 mb-1">04. PREDICT</span>
                  <span className="text-xs font-bold text-blue-200">Conductance Curve</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <span className="block text-[11px] font-mono text-emerald-400 mb-1">05. OUTPUT</span>
                  <span className="text-xs font-bold text-emerald-200">I-V Simulation</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition-colors"
              >
                <span>Read Full Research Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT, EDUCATION & CERTIFICATIONS */}
      {/* ========================================================================= */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Academic & Education */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>EDUCATION & TIMELINE</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Academic Foundation & Engineering Career
              </h2>
            </div>

            {/* Timeline Cards */}
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/30 transition-all backdrop-blur-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {exp.organization} • {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-cyan-400 mt-1">▪</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Row */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Industry Certifications</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all"
                  >
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                      {cert.issuer}
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2">{cert.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                      {cert.description}
                    </p>
                    <span className="text-[10px] font-mono text-slate-500">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Achievements & Persona */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>ACHIEVEMENTS</span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Leadership & Extracurriculars
              </h2>
            </div>

            <div className="space-y-3.5">
              {achievementsData.map((ach) => (
                <div
                  key={ach.id}
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-xs font-bold text-white">{ach.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {ach.badge}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-cyan-400/80 mb-2">{ach.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>

            {/* Quick Profile Summary Card */}
            <div id="resume" className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-blue-950/20 border border-cyan-500/30 text-center">
              <h4 className="text-sm font-bold text-white mb-2">Curriculum Vitae (CV)</h4>
              <p className="text-xs text-slate-300 mb-4">
                Detailed technical resume with comprehensive coursework, research papers, and project breakdown.
              </p>
              <a
                href="mailto:04sayandas@gmail.com?subject=Requesting%20Sayan%20Das%20Resume"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                <span>Request / Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT & CONNECT HUB */}
      {/* ========================================================================= */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
                <Mail className="w-3.5 h-3.5" />
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Something High-Impact Together
              </h2>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Currently open for full-time engineering roles, AI research collaborations, autonomous UAV projects, and freelance architecture consulting.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href="mailto:04sayandas@gmail.com"
                      className="text-sm font-semibold text-white hover:text-cyan-300 font-mono transition-colors"
                    >
                      04sayandas@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                    <a
                      href="tel:+917872872833"
                      className="text-sm font-semibold text-white hover:text-cyan-300 font-mono transition-colors"
                    >
                      +91 7872872833
                    </a>
                  </div>
                </div>

                <a
                  href="tel:+917872872833"
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-mono text-cyan-300 transition-colors"
                >
                  Call Now
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location & Base</span>
                  <span className="text-sm font-semibold text-white">Kolkata, West Bengal, India</span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-3">
                Verified Social Profiles
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://www.linkedin.com/in/sayan-das-b3739928a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 text-xs text-slate-200 hover:text-cyan-300 transition-all font-mono"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 text-xs text-slate-200 hover:text-cyan-300 transition-all font-mono"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <Link
                  href="/social"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-400 hover:text-white transition-all font-mono"
                >
                  <span>All Channels ({socialProfiles.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Send Direct Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below or write directly to <span className="text-cyan-400 font-mono">04sayandas@gmail.com</span>.
            </p>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Transmitted!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Thank you for reaching out! Sayan will review your message and reply promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 text-xs text-slate-300 font-mono hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1.5">Project / Message Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, engineering role, or collaboration..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Sayan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
