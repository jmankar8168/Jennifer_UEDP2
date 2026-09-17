'use client';

import React, { useState } from 'react';
import {
  WORK_PROJECTS,
  BUILDS_PROJECTS,
  ABOUT_COLLAGE,
  BIO_SHORT,
  BIO_LONG,
  SOCIAL_LINKS,
  TAG_STYLES,
  WorkProject,
} from '@/data/portfolioData';
import BlockBlastGame from './BlockBlastGame';

interface MobileViewProps {
  onOpenProject: (p: WorkProject) => void;
}

export default function MobileView({ onOpenProject }: MobileViewProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'work' | 'builds' | 'playground'>('about');
  const [isLongBio, setIsLongBio] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="md:hidden flex flex-col min-h-screen bg-[var(--figma-bg)] text-[var(--figma-text)] pb-28">
      {/* Mobile Top Header & Navigation Tabs */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-[#1e1e1e]/95 backdrop-blur-md border-b border-[var(--figma-border)] px-4 pt-3">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-2">
            <img src="/jenni-avatar.webp" alt="Jenni" className="w-7 h-7 rounded-full border border-[var(--figma-border)]" />
            <span className="text-[14px] font-bold text-[var(--figma-text)]">Jenni</span>
          </div>
          <span className="text-[11px] font-semibold text-[var(--figma-blue)] bg-[var(--figma-blue)]/10 px-2.5 py-0.5 rounded-full">
            Designer
          </span>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1 border-t border-[var(--figma-border)]">
          {(['about', 'work', 'builds', 'playground'] as const).map(tab => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-center text-[13px] font-semibold capitalize border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-[var(--figma-blue)] text-[var(--figma-text)]'
                  : 'border-transparent text-[var(--figma-text-secondary)] hover:text-[var(--figma-text)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Main Tab Content */}
      <main className="flex-1 p-4">
        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="flex flex-col items-center gap-6 animate-fade-in-up">
            {/* Collage Preview Box */}
            <div className="relative w-full h-[280px] rounded-xl overflow-hidden bg-white dark:bg-neutral-900 border border-[var(--figma-border)] shadow-sm">
              {ABOUT_COLLAGE.map((item, idx) => (
                <img
                  key={item.id}
                  src={item.src}
                  alt=""
                  className="absolute drop-shadow-md pointer-events-none"
                  style={{
                    left: `${(idx % 4) * 25}%`,
                    top: `${Math.floor(idx / 4) * 45}%`,
                    width: item.width * 0.42,
                    transform: `rotate(${item.rotate}deg)`,
                  }}
                />
              ))}
            </div>

            {/* Bio Card */}
            <div className="w-full p-5 rounded-xl bg-white dark:bg-[#252525] border border-[var(--figma-border)] shadow-sm">
              <p className="text-[16px] leading-relaxed text-[var(--figma-text)]">
                {isLongBio ? BIO_LONG : BIO_SHORT}
              </p>
              <button
                type="button"
                onClick={() => setIsLongBio(!isLongBio)}
                className="mt-3 text-[13px] font-semibold text-[var(--figma-blue)] underline inline-flex items-center gap-1"
              >
                <span>{isLongBio ? 'tldr' : 'More'}</span>
                <span>{isLongBio ? '↑' : '→'}</span>
              </button>
            </div>
          </div>
        )}

        {/* WORK TAB */}
        {activeTab === 'work' && (
          <div className="flex flex-col gap-6 animate-fade-in-up">
            {WORK_PROJECTS.map(project => (
              <div
                key={project.id}
                onClick={() => onOpenProject(project)}
                className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#252525] border border-[var(--figma-border)] shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="w-full aspect-[488/382] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-bold text-[var(--figma-text)]">
                      {project.title}
                    </h3>
                    <span className="text-[12px] font-semibold text-[var(--figma-blue)]">View →</span>
                  </div>
                  <p className="mt-1 text-[13px] text-[var(--figma-text-secondary)] line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map(tag => {
                      const style = TAG_STYLES[tag] || { color: '#666', bg: 'rgba(0,0,0,0.05)' };
                      return (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-semibold"
                          style={{ color: style.color, backgroundColor: style.bg }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BUILDS TAB */}
        {activeTab === 'builds' && (
          <div className="flex flex-col gap-6 animate-fade-in-up">
            {BUILDS_PROJECTS.map(build => (
              <a
                key={build.id}
                href={build.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#252525] border border-[var(--figma-border)] shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="w-full aspect-[488/382] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img src={build.image} alt={build.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-bold text-[var(--figma-text)]">
                      {build.title}
                    </h3>
                    <span className="text-[13px] text-[var(--figma-blue)]">Open ↗</span>
                  </div>
                  <p className="mt-1 text-[13px] text-[var(--figma-text-secondary)] line-clamp-2">
                    {build.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* PLAYGROUND TAB */}
        {activeTab === 'playground' && (
          <div className="flex flex-col gap-3 animate-fade-in-up pb-16">
            <div className="p-4 rounded-xl bg-white dark:bg-[#252525] border border-[var(--figma-border)] shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-[17px] font-bold text-[var(--figma-text)] tracking-tight">Playground Puzzle</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#8253FF]/10 text-[#8253FF] text-[11px] font-semibold border border-[#8253FF]/20">
                  Block Blast
                </span>
              </div>
              <p className="text-[13px] text-[var(--figma-text-secondary)] mt-1">
                Drag and drop pieces onto the 8×8 grid to clear full rows and columns!
              </p>
            </div>
            <BlockBlastGame isMobile={true} />
          </div>
        )}
      </main>

      {/* Sticky Bottom Social Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#1e1e1e]/95 backdrop-blur-md border-t border-[var(--figma-border)] px-4 py-3 flex flex-col items-center gap-2">
        <div className="flex items-center justify-center gap-6 w-full text-[13px] font-semibold text-[var(--figma-text)]">
          {SOCIAL_LINKS.map(link => {
            if (link.email) {
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleCopyEmail(link.email!)}
                  className="hover:text-[var(--figma-blue)] transition-colors"
                >
                  Email
                </button>
              );
            }
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--figma-blue)] transition-colors"
              >
                {link.label.split(' ')[0]}
              </a>
            );
          })}
        </div>
        <span className="text-[10px] text-[var(--figma-text-tertiary)]">
          Made with ❤️ by Jenni
        </span>

        {copiedEmail && (
          <div className="absolute -top-10 px-3 py-1 bg-[#1e1e1e] text-white text-[11px] font-medium rounded-full shadow-lg pointer-events-none animate-fade-in-up">
            Email copied ✓
          </div>
        )}
      </footer>
    </div>
  );
}
