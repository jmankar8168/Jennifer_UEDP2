'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/data/portfolioData';

interface FigmaRightSidebarProps {
  selectedCard: string | null;
  canvasBg: string;
  onCanvasBgChange: (bg: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function FigmaRightSidebar({
  selectedCard,
  canvasBg,
  onCanvasBgChange,
  isDark,
  onToggleTheme,
}: FigmaRightSidebarProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const bgSwatches = [
    { label: 'Gray', value: '#f5f5f5' },
    { label: 'White', value: '#ffffff' },
    { label: 'Dark', value: '#1e1e1e' },
    { label: 'Blue', value: '#e6f4ff' },
  ];

  return (
    <aside className="fixed top-16 right-3 bottom-3 w-64 figma-sidebar rounded-lg z-30 flex flex-col overflow-hidden">
      {/* User Avatar & Status Header */}
      <div className="p-3 border-b border-[var(--figma-border)] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[var(--figma-border)] shrink-0">
            <Image
              src="/jenni-avatar.webp"
              alt="Jenni"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-bold text-[var(--figma-text)] leading-tight">
              Jenni
            </span>
            <span className="text-[10px] text-[var(--figma-text-secondary)]">
              Product & Brand Designer
            </span>
          </div>
        </div>

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={onToggleTheme}
          title="Toggle Light / Dark theme"
          className="w-7 h-7 rounded hover:bg-[var(--figma-hover)] text-[var(--figma-text-secondary)] hover:text-[var(--figma-text)] flex items-center justify-center transition-colors"
        >
          {isDark ? (
            /* Sun icon */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            /* Moon icon */
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Inspector Section */}
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-4 text-[12px]">
        {/* Canvas Background Settings */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-semibold text-[var(--figma-text-secondary)] uppercase tracking-wider">
            Canvas Background
          </span>
          <div className="flex items-center gap-2">
            {bgSwatches.map(swatch => (
              <button
                key={swatch.value}
                type="button"
                onClick={() => onCanvasBgChange(swatch.value)}
                title={swatch.label}
                className={`w-6 h-6 rounded-full border-2 transition-transform ${
                  canvasBg === swatch.value
                    ? 'scale-110 border-[var(--figma-blue)]'
                    : 'border-black/10 dark:border-white/20 hover:scale-105'
                }`}
                style={{ backgroundColor: swatch.value }}
              />
            ))}
          </div>
        </div>

        {/* Selected Frame Properties (Figma style coordinates) */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[var(--figma-border)]">
          <span className="text-[11px] font-semibold text-[var(--figma-text-secondary)] uppercase tracking-wider">
            Properties
          </span>
          {selectedCard ? (
            <div className="bg-[var(--figma-bg)] p-2.5 rounded border border-[var(--figma-border)] flex flex-col gap-2">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-[var(--figma-text-secondary)]">Selection:</span>
                <span className="font-semibold text-[var(--figma-blue)] capitalize">{selectedCard}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center gap-1.5 bg-white dark:bg-[#252525] px-2 py-1 rounded border border-[var(--figma-border)]">
                  <span className="text-[var(--figma-text-tertiary)]">W</span>
                  <span className="font-mono text-[var(--figma-text)]">420</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white dark:bg-[#252525] px-2 py-1 rounded border border-[var(--figma-border)]">
                  <span className="text-[var(--figma-text-tertiary)]">H</span>
                  <span className="font-mono text-[var(--figma-text)]">380</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-[11px] text-[var(--figma-text-tertiary)] italic p-1">
              Select a frame or card on canvas to view properties.
            </div>
          )}
        </div>

        {/* Connect & Social Links */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[var(--figma-border)]">
          <span className="text-[11px] font-semibold text-[var(--figma-text-secondary)] uppercase tracking-wider">
            Connect
          </span>
          <div className="flex flex-col gap-1">
            {SOCIAL_LINKS.map(link => {
              if (link.email) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleCopyEmail(link.email!)}
                    className="flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-[var(--figma-hover)] text-[var(--figma-text)] text-left transition-colors relative group"
                  >
                    <span className="font-medium text-[11px]">{link.label}</span>
                    <span className="text-[10px] text-[var(--figma-blue)]">
                      {copiedEmail ? 'Copied ✓' : 'Copy'}
                    </span>
                  </button>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-2.5 py-1.5 rounded hover:bg-[var(--figma-hover)] text-[var(--figma-text)] transition-colors group"
                >
                  <span className="font-medium text-[11px]">{link.label}</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[var(--figma-text-tertiary)] group-hover:text-[var(--figma-text)]">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copy Toast Indicator */}
      {copiedEmail && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#1e1e1e] text-white text-[11px] font-medium rounded-full shadow-lg pointer-events-none animate-fade-in-up">
          Email copied ✓
        </div>
      )}

      {/* Footer Branding */}
      <div className="p-2 border-t border-[var(--figma-border)] bg-[var(--figma-bg)] text-[10px] text-[var(--figma-text-tertiary)] text-center">
        Made with ❤️ by Jenni
      </div>
    </aside>
  );
}
