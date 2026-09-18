'use client';

import React, { useState } from 'react';
import { TOOL_ITEMS } from '@/data/portfolioData';

import FigmaWorkspace from './FigmaWorkspace';
import FramerWorkspace from './FramerWorkspace';
import AntigravityWorkspace from './AntigravityWorkspace';
import ReactWorkspace from './ReactWorkspace';
import ViteWorkspace from './ViteWorkspace';
import ClaudeWorkspace from './ClaudeWorkspace';
import ChatGPTWorkspace from './ChatGPTWorkspace';
import GeminiWorkspace from './GeminiWorkspace';
import AdobeWorkspace from './AdobeWorkspace';
import CanvaWorkspace from './CanvaWorkspace';
import MiroWorkspace from './MiroWorkspace';
import ProcreateWorkspace from './ProcreateWorkspace';

interface ToolWorkspaceModalProps {
  toolId: string | null;
  onClose: () => void;
  onSelectTool: (id: string) => void;
}

export default function ToolWorkspaceModal({
  toolId,
  onClose,
  onSelectTool,
}: ToolWorkspaceModalProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!toolId) return null;

  const currentTool = TOOL_ITEMS.find(t => t.id === toolId) || TOOL_ITEMS[0];

  const renderToolComponent = () => {
    switch (toolId) {
      case 'figma':
        return <FigmaWorkspace onClose={onClose} />;
      case 'framer':
        return <FramerWorkspace onClose={onClose} />;
      case 'antigravity':
        return <AntigravityWorkspace onClose={onClose} />;
      case 'react':
        return <ReactWorkspace onClose={onClose} />;
      case 'vite':
        return <ViteWorkspace onClose={onClose} />;
      case 'claude':
        return <ClaudeWorkspace onClose={onClose} />;
      case 'chatgpt':
        return <ChatGPTWorkspace onClose={onClose} />;
      case 'gemini':
        return <GeminiWorkspace onClose={onClose} />;
      case 'adobe':
        return <AdobeWorkspace onClose={onClose} />;
      case 'canva':
        return <CanvaWorkspace onClose={onClose} />;
      case 'miro':
        return <MiroWorkspace onClose={onClose} />;
      case 'procreate':
        return <ProcreateWorkspace onClose={onClose} />;
      default:
        return <FigmaWorkspace onClose={onClose} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-2 sm:p-4 animate-in fade-in duration-200">
      <div
        className={`w-full flex flex-col bg-[#14151a] rounded-2xl border border-white/15 shadow-2xl overflow-hidden transition-all duration-300 ${
          isFullscreen ? 'h-full max-h-screen rounded-none' : 'h-[94vh] max-w-[1360px]'
        }`}
      >
        {/* Top Universal App Window Bar */}
        <div className="h-11 bg-[#1a1b22] border-b border-[#282a35] px-4 flex items-center justify-between shrink-0 select-none">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FF5F56] hover:brightness-90 transition-all flex items-center justify-center text-[8px] text-black/60 group"
              title="Close Workspace"
            >
              <span className="opacity-0 group-hover:opacity-100">✕</span>
            </button>
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:brightness-90 transition-all"
              title="Minimize"
            />
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-3 h-3 rounded-full bg-[#27C93F] hover:brightness-90 transition-all"
              title="Toggle Fullscreen"
            />
          </div>

          {/* Quick Tool Switcher Carousel */}
          <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar max-w-[65%] px-2">
            {TOOL_ITEMS.map(t => {
              const isActive = t.id === toolId;
              return (
                <button
                  key={t.id}
                  onClick={() => onSelectTool(t.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#282a36] text-white shadow-sm border border-white/10'
                      : 'text-[#888e9d] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#8253FF]' : 'bg-transparent'}`} />
                  <span>{t.name}</span>
                </button>
              );
            })}
          </div>

          {/* Return button */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-block text-[11px] text-[#717786] font-mono">
              {currentTool.tagline}
            </span>
            <button
              onClick={onClose}
              className="px-2.5 py-1 rounded-md bg-[#252733] hover:bg-[#323545] text-white text-xs font-medium transition-colors border border-white/10 flex items-center gap-1"
            >
              <span>Done</span>
              <span className="text-[10px] text-[#888e9d]">ESC</span>
            </button>
          </div>
        </div>

        {/* Mounted Tool Workspace Component */}
        <div className="flex-1 overflow-hidden relative">
          {renderToolComponent()}
        </div>
      </div>
    </div>
  );
}
