import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Activity,
  Code2
} from "lucide-react";
import { projectsData } from "@/data/projects";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back Navigation */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Project Directory</span>
      </Link>

      {/* Case Study Hero */}
      <div className="space-y-6 border-b border-white/10 pb-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-white/10 text-cyan-300 border border-white/10">
            SYSTEM {project.number}
          </span>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
            {project.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-lg font-mono text-cyan-300/90">
          {project.subtitle}
        </p>

        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Quick Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>

        {/* Key Metrics Strip if available */}
        {project.stats && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            {project.stats.map((st) => (
              <div key={st.label} className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="block text-xl font-bold font-mono text-cyan-400">{st.value}</span>
                <span className="text-[11px] font-mono text-slate-400 uppercase">{st.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Deep-Dive Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Case Study Content */}
        <div className="md:col-span-2 space-y-10">
          {/* Problem Statement */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Problem Statement & Background</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed p-5 rounded-2xl bg-slate-900/60 border border-white/5">
              {project.problem}
            </p>
          </section>

          {/* Objective & Approach */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-cyan-400" />
              <span>Engineering Objective</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed p-5 rounded-2xl bg-slate-900/60 border border-white/5">
              {project.objective}
            </p>
          </section>

          {/* Implementation & Technical Execution */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-400" />
              <span>Implementation & Architecture</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed p-5 rounded-2xl bg-slate-900/60 border border-white/5">
              {project.implementation}
            </p>
          </section>

          {/* Architecture Pipeline Flow */}
          {project.architectureSteps && (
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Execution Pipeline</span>
              </h2>
              <div className="p-5 rounded-2xl bg-slate-950 border border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  {project.architectureSteps.map((step, idx) => (
                    <React.Fragment key={step}>
                      <div className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                        <span className="text-slate-500 mr-1.5 font-bold">{idx + 1}.</span>
                        <span>{step}</span>
                      </div>
                      {idx < project.architectureSteps.length - 1 && (
                        <span className="text-slate-600 font-mono">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Challenges & Solutions */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-rose-400" />
              <span>Technical Challenges Overcome</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed p-5 rounded-2xl bg-slate-900/60 border border-white/5">
              {project.challenges}
            </p>
          </section>

          {/* Future Improvements */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Roadmap & Future Extensions</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed p-5 rounded-2xl bg-slate-900/60 border border-white/5">
              {project.futureImprovements}
            </p>
          </section>
        </div>

        {/* Sidebar Specs & Key Features */}
        <div className="space-y-8">
          {/* Key Features */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Key Capabilities
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feat) => (
                <li key={feat} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-white/5 text-xs font-mono text-cyan-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Other Projects Navigation */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-slate-900 border border-cyan-500/20 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Explore More Systems
            </h3>
            <p className="text-xs text-slate-400">
              Browse other autonomous systems, AI pipelines, and web applications.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>View All Systems Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
