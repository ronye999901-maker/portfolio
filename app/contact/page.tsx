"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  MessageSquare
} from "lucide-react";
import { socialProfiles } from "@/data/socials";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("04sayandas@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+917872872833");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

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
          <MessageSquare className="w-3.5 h-3.5" />
          <span>DIRECT CONTACT</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Get in Touch with Sayan Das
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Open to full-time engineering opportunities, AI research initiatives, and autonomous robotics projects. Reach out via email, phone, or the interactive form below.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Direct Channels */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Direct Communication Channels</h2>

          {/* Email */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Primary Email</span>
              </span>
              <button
                onClick={copyEmail}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-mono text-slate-300 flex items-center gap-1 transition-colors"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <a
              href="mailto:04sayandas@gmail.com"
              className="text-base font-bold text-white hover:text-cyan-300 font-mono transition-colors block"
            >
              04sayandas@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Phone / WhatsApp</span>
              </span>
              <button
                onClick={copyPhone}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-mono text-slate-300 flex items-center gap-1 transition-colors"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPhone ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <a
              href="tel:+917872872833"
              className="text-base font-bold text-white hover:text-cyan-300 font-mono transition-colors block"
            >
              +91 7872872833
            </a>
          </div>

          {/* Location */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Location Base</span>
            </span>
            <span className="text-base font-bold text-white block">
              Kolkata, West Bengal, India
            </span>
          </div>

          {/* Social Links */}
          <div className="pt-2">
            <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
              Professional Profiles
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/sayan-das-b3739928a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 text-xs font-mono text-slate-200 hover:text-cyan-300 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href="https://github.com/ronye999901-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 text-xs font-mono text-slate-200 hover:text-cyan-300 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Form */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-2xl">
          <h3 className="text-xl font-bold text-white mb-2">Send Direct Message</h3>
          <p className="text-xs text-slate-400 mb-6">
            Leave a message and Sayan will get back to you within 24 hours.
          </p>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Message Transmitted!</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Thank you for your message! Sayan will reply to your email shortly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-4 py-2 rounded-xl bg-white/5 text-xs text-slate-300 font-mono hover:bg-white/10"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Connor"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1.5">Message / Inquiry</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your engineering role, project, or collaboration..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 font-mono transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
