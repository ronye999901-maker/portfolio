"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Award,
  FileDown,
  Sparkles,
  Cpu,
  GraduationCap,
  Briefcase,
  Terminal as TermIcon,
  Shield,
  ArrowRight
} from "lucide-react";
import { experienceData } from "@/data/experience";
import { certificationsData } from "@/data/certifications";
import { achievementsData } from "@/data/achievements";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Overview</span>
      </Link>

      {/* Hero Header */}
      <div className="space-y-4 border-b border-white/10 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>BIOGRAPHY & BACKGROUND</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About Sayan Das
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
          I am a 4th-Year Computer Science & Engineering undergraduate at the Institute of Engineering & Management (IEM), Kolkata, dedicated to building autonomous aerial robotics, computer vision edge pipelines, deep learning models, and resilient software systems.
        </p>
      </div>

      {/* Core Engineering Philosophy */}
      <div className="p-8 rounded-3xl bg-slate-900/70 border border-white/10 space-y-4 backdrop-blur-xl">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <span>Engineering Philosophy</span>
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          I believe modern engineering thrives at the intersection of mathematical rigor, hardware-awareness, and clean software architecture. Whether it's training real-time YOLO detectors on constrained edge drones for forest fire mitigation or modeling nano-scale semiconductor device physics with neural surrogate networks, I focus on systems that solve real-world problems at scale.
        </p>
      </div>

      {/* Academic Milestones & Experience */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 text-cyan-400" />
            <span>Academic & Research Experience</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/30 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    {exp.role} • {exp.organization}
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 w-fit">
                  {exp.period}
                </span>
              </div>

              {exp.mentors && (
                <p className="text-xs font-mono text-slate-400">
                  <span className="text-slate-500">Mentors:</span> {exp.mentors}
                </p>
              )}

              <ul className="space-y-2.5 pt-2">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5 leading-relaxed">
                    <span className="text-cyan-400 mt-1">▪</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-mono text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Extracurriculars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Industry Certifications */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span>Certifications</span>
          </h2>

          <div className="space-y-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{cert.date}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{cert.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurriculars & Achievements */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span>Honors & Extracurriculars</span>
          </h2>

          <div className="space-y-4">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">{ach.title}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {ach.badge}
                  </span>
                </div>
                <p className="text-xs font-mono text-cyan-400/80">{ach.subtitle}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resume CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/30 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Looking for Sayan's Full Curriculum Vitae?</h3>
          <p className="text-xs text-slate-300">
            Download the comprehensive PDF resume including coursework, project architectures, and references.
          </p>
        </div>

        <a
          href="mailto:04sayandas@gmail.com?subject=Requesting%20Sayan%20Das%20CV"
          className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <FileDown className="w-4 h-4" />
          <span>Request / Download Resume</span>
        </a>
      </div>
    </div>
  );
}
