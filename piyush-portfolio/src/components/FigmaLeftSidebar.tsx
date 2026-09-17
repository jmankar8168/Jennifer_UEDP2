'use client';

import React, { useState } from 'react';
import { PAGES, PageItem } from '@/data/portfolioData';

interface FigmaLeftSidebarProps {
  activePage: string;
  onSelectPage: (page: PageItem) => void;
  selectedCard: string | null;
  onSelectCard: (cardId: string) => void;
}

export default function FigmaLeftSidebar({
  activePage,
  onSelectPage,
  selectedCard,
  onSelectCard,
}: FigmaLeftSidebarProps) {
  const [search, setSearch] = useState('');
  const [pagesOpen, setPagesOpen] = useState(true);

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
      </div>

      {/* Sidebar Footer Tip */}
      <div className="p-2.5 border-t border-[var(--figma-border)] bg-[var(--figma-bg)] text-[10px] text-[var(--figma-text-tertiary)] text-center">
        Click a page to pan canvas
      </div>
    </aside>
  );
}
