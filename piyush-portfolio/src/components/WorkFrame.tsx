'use client';

import React from 'react';
import { WORK_PROJECTS, WorkProject, TAG_STYLES } from '@/data/portfolioData';

interface WorkFrameProps {
  onOpenProject: (project: WorkProject) => void;
  selectedCard: string | null;
  onSelectCard: (id: string) => void;
}

export default function WorkFrame({
  onOpenProject,
  selectedCard,
  onSelectCard,
}: WorkFrameProps) {
  return (
    <div className="absolute pointer-events-auto" style={{ left: 2150, top: 0, width: 1500, height: 1100 }}>
      {/* Frame Label */}
      <div className="absolute -top-7 left-12 text-[11px] font-semibold text-[var(--figma-text-secondary)] flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#FF5100] inline-block"/>
        <span>Selected Work (5 Projects)</span>
      </div>

      {WORK_PROJECTS.map(project => {
        const isSelected = selectedCard === project.id;

        return (
          <div
            key={project.id}
            onClick={e => {
              e.stopPropagation();
              onSelectCard(project.id);
              onOpenProject(project);
            }}
            className={`absolute group cursor-pointer transition-all duration-200 rounded-xl p-2 ${
              isSelected
                ? 'ring-2 ring-[var(--figma-blue)] bg-white/40 dark:bg-white/5'
                : 'hover:-translate-y-1'
            }`}
            style={{
              left: project.x - 2150,
              top: project.y,
              width: 430,
            }}
          >
            {/* Card Thumbnail Frame */}
            <div className="w-full aspect-[488/382] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-[var(--figma-border)] shadow-sm group-hover:shadow-xl transition-shadow relative">
              <img
                src={project.image}
                alt={project.title}
                draggable={false}
                className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Title & Description */}
            <div className="mt-3.5">
              <h3 className="text-[20px] font-bold text-[var(--figma-text)] tracking-tight leading-snug group-hover:text-[var(--figma-blue)] transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-[14px] text-[var(--figma-text-secondary)] leading-normal line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Tags with Authentic Figma Badge Styles */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map(tag => {
                const style = TAG_STYLES[tag] || { color: '#666', bg: 'rgba(0,0,0,0.05)' };
                return (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[12px] font-semibold tracking-tight"
                    style={{
                      color: style.color,
                      backgroundColor: style.bg,
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
