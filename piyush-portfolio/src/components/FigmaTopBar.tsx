'use client';

import React, { useState } from 'react';

interface FigmaTopBarProps {
  scale: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  onZoomFit: () => void;
  activeTool: 'move' | 'hand';
  setActiveTool: (tool: 'move' | 'hand') => void;
  onPlay: () => void;
}

export default function FigmaTopBar({
  scale,
  onZoomIn,
  onZoomOut,
  onZoomReset,
  onZoomFit,
  activeTool,
  setActiveTool,
  onPlay,
}: FigmaTopBarProps) {
  const [zoomDropdownOpen, setZoomDropdownOpen] = useState(false);

  return (
    <header className="fixed top-3 left-3 right-3 h-[46px] figma-sidebar rounded-lg z-40 flex items-center justify-between px-3">
      {/* Left section: Figma logo + Document Title + Tools */}
      <div className="flex items-center gap-3">
        {/* Colorful Figma Logo */}
        <div className="flex items-center gap-2 pr-2 border-r border-[var(--figma-border)]">
          <svg width="18" height="27" viewBox="0 0 38 57" fill="none" className="shrink-0">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
          </svg>
          <span className="text-[13px] font-semibold text-[var(--figma-text)] tracking-tight">
            Jenni
          </span>
        </div>

        {/* Tools: Move (V) & Hand (H) */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTool('move')}
            title="Move tool (V)"
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              activeTool === 'move'
                ? 'bg-[var(--figma-blue)] text-white'
                : 'hover:bg-[var(--figma-hover)] text-[var(--figma-text)]'
            }`}
          >
            {/* Move pointer SVG */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2L20 12L12 14L8 22L4 2Z"/>
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setActiveTool('hand')}
            title="Hand tool (H) - Drag to pan"
            className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${
              activeTool === 'hand'
                ? 'bg-[var(--figma-blue)] text-white'
                : 'hover:bg-[var(--figma-hover)] text-[var(--figma-text)]'
            }`}
          >
            {/* Hand tool SVG */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-4 0v4"/>
              <path d="M14 10V4a2 2 0 0 0-4 0v7"/>
              <path d="M10 10.5V6a2 2 0 0 0-4 0v8"/>
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Center section: Document state */}
      <div className="hidden md:flex items-center text-[12px] font-medium text-[var(--figma-text-secondary)]">
        Portfolio / Figma Canvas View
      </div>

      {/* Right section: Zoom controls + Share + Present */}
      <div className="flex items-center gap-2 relative">
        {/* Zoom Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setZoomDropdownOpen(!zoomDropdownOpen)}
            className="px-2 h-7 rounded text-[12px] font-medium text-[var(--figma-text)] hover:bg-[var(--figma-hover)] flex items-center gap-1 transition-colors"
          >
            <span>{Math.round(scale * 100)}%</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          {zoomDropdownOpen && (
            <div
              className="absolute right-0 top-9 w-40 figma-sidebar rounded-md shadow-xl py-1 z-50 text-[12px] flex flex-col"
              onMouseLeave={() => setZoomDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => { onZoomIn(); setZoomDropdownOpen(false); }}
                className="px-3 py-1.5 text-left hover:bg-[var(--figma-hover)] flex justify-between items-center text-[var(--figma-text)]"
              >
                <span>Zoom In</span>
                <span className="text-[10px] text-[var(--figma-text-tertiary)]">+</span>
              </button>
              <button
                type="button"
                onClick={() => { onZoomOut(); setZoomDropdownOpen(false); }}
                className="px-3 py-1.5 text-left hover:bg-[var(--figma-hover)] flex justify-between items-center text-[var(--figma-text)]"
              >
                <span>Zoom Out</span>
                <span className="text-[10px] text-[var(--figma-text-tertiary)]">-</span>
              </button>
              <div className="my-1 border-t border-[var(--figma-border)]" />
              <button
                type="button"
                onClick={() => { onZoomReset(); setZoomDropdownOpen(false); }}
                className="px-3 py-1.5 text-left hover:bg-[var(--figma-hover)] flex justify-between items-center text-[var(--figma-text)]"
              >
                <span>Zoom to 100%</span>
                <span className="text-[10px] text-[var(--figma-text-tertiary)]">0</span>
              </button>
              <button
                type="button"
                onClick={() => { onZoomFit(); setZoomDropdownOpen(false); }}
                className="px-3 py-1.5 text-left hover:bg-[var(--figma-hover)] flex justify-between items-center text-[var(--figma-text)]"
              >
                <span>Zoom to Fit</span>
                <span className="text-[10px] text-[var(--figma-text-tertiary)]">1</span>
              </button>
            </div>
          )}
        </div>

        {/* Share Button */}
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert('Portfolio link copied to clipboard!');
          }}
          className="px-3 h-7 bg-[var(--figma-blue)] hover:bg-[#0088ee] text-white rounded text-[12px] font-semibold flex items-center gap-1.5 transition-colors"
        >
          <span>Share</span>
        </button>

        {/* Present / Play Button */}
        <button
          type="button"
          onClick={onPlay}
          title="Present (Tour all pages)"
          className="w-7 h-7 rounded hover:bg-[var(--figma-hover)] text-[var(--figma-text)] flex items-center justify-center transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </button>
      </div>
    </header>
  );
}
