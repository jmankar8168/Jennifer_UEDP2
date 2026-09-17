'use client';

import React, { useEffect } from 'react';
import { WorkProject, TAG_STYLES } from '@/data/portfolioData';

interface CaseStudyModalProps {
  project: WorkProject | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8 animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#1a1a1a] text-[var(--figma-text)] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto border border-[var(--figma-border)] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="sticky top-0 z-10 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md px-6 py-4 border-b border-[var(--figma-border)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg border border-[var(--figma-border)] overflow-hidden bg-neutral-100 dark:bg-neutral-800 p-1 flex items-center justify-center shrink-0">
              <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-[var(--figma-text)] leading-tight">
                {project.title}
              </h2>
              <span className="text-[12px] text-[var(--figma-text-secondary)]">
                {project.role}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[var(--figma-blue)] hover:bg-[#0088ee] text-white text-[12px] font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Live Site</span>
                <span className="text-[10px]">↗</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[var(--figma-hover)] flex items-center justify-center text-[var(--figma-text-secondary)] hover:text-[var(--figma-text)] text-[16px] transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 flex flex-col gap-8">
          {/* Main Hero Card */}
          <div className="w-full rounded-xl overflow-hidden border border-[var(--figma-border)] bg-neutral-100 dark:bg-neutral-800">
            <img src={project.image} alt={project.title} className="w-full h-auto block" />
          </div>

          {/* Description & Tags */}
          <div>
            <p className="text-[20px] font-medium leading-relaxed text-[var(--figma-text)]">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map(tag => {
                const style = TAG_STYLES[tag] || { color: '#666', bg: 'rgba(0,0,0,0.05)' };
                return (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[13px] font-semibold"
                    style={{ color: style.color, backgroundColor: style.bg }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Problem Section (if present) */}
          {project.problem && (
            <div className="p-6 rounded-xl bg-[var(--figma-bg)] border border-[var(--figma-border)]">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--figma-blue)]">
                The Challenge
              </span>
              <p className="mt-2 text-[16px] leading-relaxed text-[var(--figma-text)]">
                {project.problem}
              </p>
              {project.problemImage && (
                <div className="mt-5 rounded-lg overflow-hidden border border-[var(--figma-border)]">
                  <img src={project.problemImage} alt="Problem demonstration" className="w-full h-auto block" />
                </div>
              )}
            </div>
          )}

          {/* Approach Section */}
          {project.approach && project.approach.length > 0 && (
            <div>
              <h3 className="text-[18px] font-bold text-[var(--figma-text)] mb-3">
                Approach & Execution
              </h3>
              <ul className="flex flex-col gap-2.5">
                {project.approach.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] text-[var(--figma-text)]">
                    <span className="text-[var(--figma-blue)] font-bold mt-0.5">✓</span>
                    <span className="leading-normal">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-[18px] font-bold text-[var(--figma-text)]">
                Selected Screens & Artifacts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-[var(--figma-border)] bg-neutral-50 dark:bg-neutral-900">
                    <img src={img} alt={`Gallery item ${idx + 1}`} className="w-full h-auto block" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
