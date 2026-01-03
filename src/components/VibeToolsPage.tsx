import React from "react";
import { VIBE_TOOLS_DATA } from "../utils/vibeTools";

export const VibeToolsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
      <header className="mb-12 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Vibe Coding Directory
            </h1>
            <p className="text-slate-500 mt-1 font-medium italic">
              A curated list of tools for collaborating with AI
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VIBE_TOOLS_DATA.map((section) => (
          <div
            key={section.category}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full hover:border-indigo-300 transition-colors"
          >
            <div className="bg-slate-50 px-5 py-4 border-b border-slate-200">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                {section.category}
              </h3>
            </div>
            <div className="p-5 flex-1">
              <ul className="space-y-2">
                {section.tools.map((tool) => (
                  <li key={tool.name}>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-1 text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                      <span className="font-medium">{tool.name}</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">What is Vibe Coding?</h2>
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            &quot;There&apos;s a new kind of coding I call &apos;vibe
            coding&apos;, where you fully give in to the vibes, embrace
            exponentials, and forget that the code even exists... I&apos;m
            building a project or webapp, but it&apos;s not really coding - I
            just see stuff, say stuff, run stuff, and copy paste stuff, and it
            mostly works&quot;
          </p>
          <div className="mt-6 font-semibold text-indigo-400">
            — Andrej Karpathy
          </div>
        </div>
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};
