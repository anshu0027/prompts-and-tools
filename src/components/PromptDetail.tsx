
import React, { useState } from 'react';
import { PromptEntry } from '../utils/types';

interface PromptDetailProps {
  prompt: PromptEntry;
}

export const PromptDetail: React.FC<PromptDetailProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 md:px-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-2">
          <span>{prompt.part}</span>
          <span className="text-slate-300">•</span>
          <span>Prompt {prompt.id}</span>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{prompt.title}</h2>
        <p className="text-lg text-slate-600 leading-relaxed">{prompt.description}</p>
      </div>

      <div className="relative bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              copied 
                ? 'bg-green-100 text-green-700 ring-1 ring-green-200' 
                : 'bg-white text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border border-slate-200'
            }`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy Prompt
              </>
            )}
          </button>
        </div>
        <div className="p-6 overflow-x-auto bg-[#fafafa]">
          <pre className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap selection:bg-indigo-100">
            {prompt.content}
          </pre>
        </div>
      </div>

      <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
        <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Implementation Tip
        </h4>
        <p className="text-indigo-800 text-sm leading-relaxed">
          Use this prompt as a starting point. Replace bracketed text like <code className="bg-indigo-100 px-1 rounded">[Project Name]</code> with your actual project details for best results with AI IDEs or coding assistants.
        </p>
      </div>
    </div>
  );
};
