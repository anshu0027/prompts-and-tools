"use client";
import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { PromptDetail } from "../components/PromptDetail";
import { VibeToolsPage } from "../components/VibeToolsPage";
import { PLAYBOOK_DATA } from "../utils/content";

const App: React.FC = () => {
  const [activePromptId, setActivePromptId] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [view, setView] = useState<"playbook" | "tools">("playbook");

  const activePrompt =
    PLAYBOOK_DATA.find((p) => p.id === activePromptId) || PLAYBOOK_DATA[0];

const handleSelectPrompt = (id: number) => {
  setActivePromptId(id);

  // Close sidebar only on mobile
  if (window.innerWidth < 768) {
    setIsSidebarOpen(false);
  }
};


  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar - Desktop and Mobile wrapper */}
      <div
        className={`fixed inset-0 z-40 transition-transform transform md:relative md:translate-x-0 md:shrink-0 w-80 h-full ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          prompts={PLAYBOOK_DATA}
          activeId={activePromptId}
          onSelect={handleSelectPrompt}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          currentView={view}
          onViewChange={setView}
        />
        {/* Mobile close button */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden absolute top-4 -right-12 p-2 bg-indigo-600 text-white rounded-r-lg shadow-lg"
        >
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
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50 relative">
        {/* Top Navbar for Mobile */}
        <header className="md:hidden sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="font-bold text-indigo-600">
            {view === "playbook" ? "Playbook" : "Vibe Tools"}
          </div>
          <div className="w-10"></div> {/* Spacer */}
        </header>

        {view === "playbook" ? (
          activePrompt && <PromptDetail prompt={activePrompt} />
        ) : (
          <VibeToolsPage />
        )}

        {/* Footer info */}
        <footer className="py-12 px-8 border-t border-slate-200 mt-8 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <p>© 2024 DevPlaybook • Building for Scale</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
