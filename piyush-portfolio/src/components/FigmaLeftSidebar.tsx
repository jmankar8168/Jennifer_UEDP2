'use client';

import React, { useState } from 'react';
import { PAGES, PageItem, TOOLS } from '@/data/portfolioData';

interface FigmaLeftSidebarProps {
  activePage: string;
  onSelectPage: (page: PageItem) => void;
  selectedCard: string | null;
  onSelectCard: (cardId: string) => void;
}

function getToolIcon(name: string) {
  switch (name) {
    case 'Figma':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/>
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/>
        </svg>
      );
    case 'Framer':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 2h14v7h-7l7 7h-7v6l-7-7h7V2z"/>
        </svg>
      );
    case 'Antigravity':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)"/>
        </svg>
      );
    case 'ReactJS':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="12" rx="9" ry="3.5"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        </svg>
      );
    case 'Vite':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      );
    case 'Claude AI':
    case 'Gemini':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"/>
        </svg>
      );
    case 'Chat GPT':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M8 12h8M12 8v8"/>
        </svg>
      );
    case 'Adobe Suite':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      );
    case 'Canva':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <circle cx="8" cy="11" r="1" fill="currentColor"/>
          <circle cx="12" cy="8" r="1" fill="currentColor"/>
          <circle cx="16" cy="11" r="1" fill="currentColor"/>
        </svg>
      );
    case 'Miro':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" rx="1"/>
          <rect x="14" y="3" width="7" height="5" rx="1"/>
          <rect x="14" y="12" width="7" height="9" rx="1"/>
          <rect x="3" y="16" width="7" height="5" rx="1"/>
        </svg>
      );
    case 'Procreate':
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2l4 4-14 14H4v-4L18 2z"/>
          <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"/>
        </svg>
      );
    default:
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      );
  }
}

export default function FigmaLeftSidebar({
  activePage,
  onSelectPage,
  selectedCard,
  onSelectCard,
}: FigmaLeftSidebarProps) {
  const [search, setSearch] = useState('');
  const [pagesOpen, setPagesOpen] = useState(true);
  const [toolsOpen, setToolsOpen] = useState(true);

  const framesByPage: Record<string, { id: string; label: string }[]> = {
    about: [
      { id: 'about-collage', label: 'About Collage' },
      { id: 'about-bio', label: 'Bio & Overview' },
    ],
    work: [
      { id: 'bento', label: 'Bento.fun' },
      { id: 'inner-circle', label: 'Inner Circle' },
      { id: 'velar', label: 'Velar' },
      { id: 'emerge', label: 'First Dollar' },
      { id: 'crowwd', label: 'Crowwd' },
    ],
    builds: [
      { id: 'farfield', label: 'Farfield' },
      { id: 'dither-matrix', label: 'Dither Matrix' },
      { id: 'pixel-pop', label: 'Pixel Pop Tool' },
      { id: 'freetype-writer', label: 'Freetype Writer' },
      { id: 'myob', label: 'MYOB' },
    ],
    playground: [
      { id: 'playground-game', label: 'Block Blast Puzzle' },
    ],
  };

  const filteredPages = PAGES.filter(p =>
    p.label.toLowerCase().includes(search.toLowerCase())
  );

  const filteredTools = TOOLS.filter(t =>
    t.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="fixed top-16 left-3 bottom-3 w-60 figma-sidebar rounded-lg z-30 flex flex-col overflow-hidden">
      {/* Sidebar Header with Tabs */}
      <div className="flex items-center justify-between border-b border-[var(--figma-border)] px-3 h-10 shrink-0">
        <span className="text-[12px] font-semibold text-[var(--figma-text)]">
          Layers
        </span>
        <span className="text-[11px] text-[var(--figma-text-secondary)]">
          Figma Canvas
        </span>
      </div>

      {/* Search Input */}
      <div className="p-2 border-b border-[var(--figma-border)]">
        <div className="flex items-center gap-2 px-2 py-1 rounded bg-[var(--figma-bg)] text-[12px]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[var(--figma-text-tertiary)]">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search pages & frames..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-[var(--figma-text)] placeholder:text-[var(--figma-text-tertiary)] text-[11px]"
          />
        </div>
      </div>

      {/* Pages Section */}
      <div className="flex-1 overflow-y-auto py-2">
        <div className="px-3 py-1 flex items-center justify-between text-[11px] font-semibold text-[var(--figma-text-secondary)] uppercase tracking-wider">
          <div
            className="flex items-center gap-1.5 cursor-pointer hover:text-[var(--figma-text)]"
            onClick={() => setPagesOpen(!pagesOpen)}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`transition-transform ${pagesOpen ? 'rotate-90' : ''}`}
            >
              <path d="M9 18l6-6-6-6"/>
            </svg>
            <span>Pages</span>
          </div>
          <span className="text-[10px] font-normal lowercase">{filteredPages.length} pages</span>
        </div>

        {pagesOpen && (
          <div className="flex flex-col gap-0.5 px-1.5 mt-1">
            {filteredPages.map(page => {
              const isActive = activePage === page.id;
              const frames = framesByPage[page.id] || [];

              return (
                <div key={page.id} className="flex flex-col">
                  {/* Page Item */}
                  <button
                    type="button"
                    onClick={() => onSelectPage(page)}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded text-[12px] font-medium text-left transition-colors ${
                      isActive
                        ? 'bg-[var(--figma-blue)] text-white'
                        : 'hover:bg-[var(--figma-hover)] text-[var(--figma-text)]'
                    }`}
                  >
                    {/* Page Icon */}
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-80">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    <span className="truncate">{page.label}</span>
                  </button>

                  {/* Child Frames if active */}
                  {isActive && frames.length > 0 && (
                    <div className="flex flex-col gap-0.5 pl-6 pr-1 py-1 border-l-2 border-[var(--figma-blue)] ml-3 my-0.5">
                      {frames.map(frame => (
                        <button
                          key={frame.id}
                          type="button"
                          onClick={() => onSelectCard(frame.id)}
                          className={`flex items-center gap-2 px-2 py-1 rounded text-[11px] text-left transition-colors ${
                            selectedCard === frame.id
                              ? 'bg-[var(--figma-active)] text-[var(--figma-blue)] font-semibold'
                              : 'hover:bg-[var(--figma-hover)] text-[var(--figma-text-secondary)]'
                          }`}
                        >
                          {/* Frame Icon */}
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                            <line x1="4" y1="9" x2="20" y2="9"/>
                            <line x1="4" y1="15" x2="20" y2="15"/>
                            <line x1="10" y1="3" x2="8" y2="21"/>
                            <line x1="16" y1="3" x2="14" y2="21"/>
                          </svg>
                          <span className="truncate">{frame.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tools Section */}
        <div className="px-3 py-1 mt-3 pt-2.5 border-t border-[var(--figma-border)] flex items-center justify-between text-[11px] font-semibold text-[var(--figma-text-secondary)] uppercase tracking-wider">
          <div
            className="flex items-center gap-1.5 cursor-pointer hover:text-[var(--figma-text)] transition-colors select-none"
            onClick={() => setToolsOpen(!toolsOpen)}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className={`transition-transform ${toolsOpen ? 'rotate-90' : ''}`}
            >
              <path d="M9 18l6-6-6-6"/>
            </svg>
            <span>Tools</span>
          </div>
          <span className="text-[10px] font-normal lowercase">{filteredTools.length} tools</span>
        </div>

        {toolsOpen && (
          <div className="flex flex-col gap-0.5 px-1.5 mt-1">
            {filteredTools.map(tool => (
              <div
                key={tool}
                className="flex items-center gap-2 px-2.5 py-1.5 rounded text-[12px] font-medium text-[var(--figma-text)] hover:bg-[var(--figma-hover)] transition-colors group cursor-default"
              >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity shrink-0 text-[var(--figma-text-secondary)] group-hover:text-[var(--figma-blue)]">
                  {getToolIcon(tool)}
                </span>
                <span className="truncate">{tool}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar Footer Tip */}
      <div className="p-2.5 border-t border-[var(--figma-border)] bg-[var(--figma-bg)] text-[10px] text-[var(--figma-text-tertiary)] text-center">
        Click a page to pan canvas
      </div>
    </aside>
  );
}
