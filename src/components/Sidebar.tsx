import React from "react";
import { PromptEntry } from "../utils/types";

interface SidebarProps {
  prompts: PromptEntry[];
  activeId: number;
  onSelect: (id: number) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  currentView: "playbook" | "tools";
  onViewChange: (view: "playbook" | "tools") => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  prompts,
  activeId,
  onSelect,
  searchQuery,
  onSearchChange,
  currentView,
  onViewChange,
}) => {
  const grouped = prompts.reduce((acc, p) => {
    if (!acc[p.part]) acc[p.part] = [];
    acc[p.part].push(p);
    return acc;
  }, {} as Record<string, PromptEntry[]>);

  const parts = Object.keys(grouped);

  return (
    <div className="h-full flex flex-col bg-white border-r border-slate-200">
      <div className="p-4 border-b border-slate-200 bg-white sticky top-0 z-10">
        <h1 className="text-xl font-bold text-indigo-600 mb-6 flex items-center gap-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Dev Playbook
        </h1>

        <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
          <button
            onClick={() => onViewChange("playbook")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${
              currentView === "playbook"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Playbook
          </button>
          <button
            onClick={() => onViewChange("tools")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${
              currentView === "tools"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <svg
              className="w-4 h-4"
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
            Vibe Tools
          </button>
        </div>

        {currentView === "playbook" && (
          <div className="relative">
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
            <svg
              className="w-4 h-4 absolute left-3 top-3 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        )}
      </div>

      {currentView === "playbook" ? (
        <div className="flex-1 overflow-y-auto p-2 space-y-6 pb-20">
          {parts.map((part) => {
            const filteredPrompts = grouped[part].filter(
              (p) =>
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredPrompts.length === 0) return null;

            return (
              <div key={part}>
                <h3 className="px-3 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {part}
                </h3>
                <div className="space-y-1">
                  {filteredPrompts.map((prompt) => (
                    <button
                      key={prompt.id}
                      onClick={() => onSelect(prompt.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeId === prompt.id
                          ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200"
                          : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`shrink-0 w-6 h-6 rounded flex items-center justify-center text-[10px] ${
                            activeId === prompt.id
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {prompt.id}
                        </span>
                        <span className="leading-tight">{prompt.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-slate-50/50">
          <div className="text-indigo-500 mb-4 opacity-50">
            <svg
              className="w-16 h-16"
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
          <h4 className="text-slate-800 font-bold mb-2">Vibe Coding Tools</h4>
          <p className="text-slate-500 text-xs">
            Browse our curated list of AI coding assistants and resources.
          </p>
        </div>
      )}
    </div>
  );
};
