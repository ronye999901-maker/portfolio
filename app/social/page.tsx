"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  ExternalLink,
  Mail,
  Phone,
  Sparkles,
  ArrowRight,
  Globe
} from "lucide-react";
import { socialProfiles, SocialProfile } from "@/data/socials";

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

const renderSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "linkedin":
      return <LinkedinIcon className="w-5 h-5 text-cyan-400" />;
    case "github":
      return <GithubIcon className="w-5 h-5 text-cyan-400" />;
    case "mail":
      return <Mail className="w-5 h-5 text-cyan-400" />;
    case "phone":
      return <Phone className="w-5 h-5 text-cyan-400" />;
    default:
      return <Globe className="w-5 h-5 text-cyan-400" />;
  }
};

export default function SocialPage() {
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
          <Share2 className="w-3.5 h-3.5" />
          <span>NETWORKING & SOCIAL PRESENCE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Connect Across Channels
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          Official social profiles, developer channels, direct email, and phone contact for Sayan Das.
        </p>
      </div>

      {/* Social Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialProfiles.map((profile) => (
          <a
            key={profile.id}
            href={profile.url}
            target={profile.url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/30 transition-all flex items-start justify-between gap-4 backdrop-blur-md"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
                {renderSocialIcon(profile.icon)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.name}
                  </h3>
                  {profile.primary && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Primary
                    </span>
                  )}
                </div>
                <p className="text-xs font-mono text-cyan-400/80">{profile.username}</p>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {profile.description}
                </p>
              </div>
            </div>

            <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
          </a>
        ))}
      </div>
    </div>
  );
}
