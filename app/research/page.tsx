"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Cpu,
  Layers,
  CheckCircle2,
  BookOpen,
  Activity,
  ArrowRight,
  FileDown
} from "lucide-react";

export default function ResearchPage() {
  const pipelineSteps = [
    {
      title: "01. Fabrication Parameters",
      desc: "Gate length, oxide thickness, nanoribbon chirality, and doping concentration inputs.",
    },
    {
      title: "02. Neural Surrogate Model",
      desc: "Multi-layer perceptron & gradient-boosted regressors trained on TCAD physical simulations.",
    },
    {
      title: "03. Parameter Optimization",
      desc: "Algorithmic search for maximum Ion/Ioff ratio and minimized subthreshold swing.",
    },
    {
      title: "04. Conductance Curve",
      desc: "Fast inference of electronic bandgap behavior and quantum ballistic transport curves.",
    },
    {
      title: "05. Device Simulation",
      desc: "Synthesized I-V characteristics and threshold voltage predictions under 10 milliseconds.",
    },
  ];

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

      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RESEARCH & PUBLICATIONS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Fabrication of GNR MOSFET using Machine Learning
        </h1>

        <p className="text-base sm:text-lg text-cyan-300 font-mono">
          Innovation & Entrepreneurship Development Cell (IEDC), IEM Kolkata
        </p>

        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 font-mono">
          <span className="text-slate-400">Research Mentors: </span>
          <span className="text-white font-semibold">Prof. (Dr.) Siddhartha Roy</span> &{" "}
          <span className="text-white font-semibold">Prof. Rangan Sarkar</span>
        </div>
      </div>

      {/* Executive Abstract */}
      <div className="p-8 rounded-3xl bg-slate-900/80 border border-cyan-500/30 space-y-4 shadow-2xl">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          <span>Executive Abstract</span>
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          As silicon MOSFET scaling approaches fundamental physical quantum limits, Graphene Nano-Ribbon (GNR) Field-Effect Transistors have emerged as a premier successor due to graphene's exceptional carrier mobility and tunable bandgap. However, conventional numerical Device Physics simulations (TCAD) require days of intensive supercomputing sweeps to iterate over multi-dimensional fabrication parameters.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          In this research, we engineered machine learning surrogate modeling pipelines that map fabrication input parameters (channel length, ribbon width, gate dielectric permittivity) directly to electronic conductance metrics and I-V curves. The resulting neural surrogates achieve high fidelity while accelerating simulation cycles by multiple orders of magnitude.
        </p>
      </div>

      {/* Architecture Pipeline Flow */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-cyan-400" />
          <span>Surrogate Modeling Workflow</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pipelineSteps.map((step, idx) => (
            <div
              key={step.title}
              className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold font-mono text-cyan-400 block mb-2">
                  {step.title}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Research Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 space-y-2">
          <span className="text-2xl font-black font-mono text-cyan-400">100x+</span>
          <h3 className="text-sm font-bold text-white">Inference Acceleration</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Replaced hours-long numerical Poisson-Schrödinger solvers with sub-second ML surrogate evaluations.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 space-y-2">
          <span className="text-2xl font-black font-mono text-blue-400">Sub-nm</span>
          <h3 className="text-sm font-bold text-white">Nanoscale Precision</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Modeled armchair and zigzag ribbon edge chiralities and their sensitivity to edge disorder.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 space-y-2">
          <span className="text-2xl font-black font-mono text-emerald-400">98.4%</span>
          <h3 className="text-sm font-bold text-white">I-V Curve Correlation</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            High validation score between neural surrogate predictions and benchmark simulation data.
          </p>
        </div>
      </div>

      {/* Contact for Research Queries */}
      <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">Interested in Collaborating on AI & Semiconductor Research?</h3>
          <p className="text-xs text-slate-300">
            Reach out to Sayan Das for research discussions, methodology reviews, or collaborative publications.
          </p>
        </div>

        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          <span>Contact Sayan</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
