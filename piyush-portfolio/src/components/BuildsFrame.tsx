'use client';

import React from 'react';
import { BUILDS_PROJECTS, BuildProject, TAG_STYLES } from '@/data/portfolioData';

interface BuildsFrameProps {
  selectedCard: string | null;
  onSelectCard: (id: string) => void;
}

export default function BuildsFrame({ selectedCard, onSelectCard }: BuildsFrameProps) {
  return (
    <div className="absolute pointer-events-auto" style={{ left: 3500, top: 1950, width: 1100, height: 1600 }}>
      {/* Frame Label */}
      <div className="absolute -top-7 left-24 text-[11px] font-semibold text-[var(--figma-text-secondary)] flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#00B25D] inline-block"/>
        <span>Builds & Small Apps</span>
      </div>

      {BUILDS_PROJECTS.map(build => {
        const isSelected = selectedCard === build.id;

        return (
          <a
            key={build.id}
            href={build.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => {
              e.stopPropagation();
              onSelectCard(build.id);
            }}
            className={`absolute group cursor-pointer transition-all duration-200 rounded-xl p-2 block ${
              isSelected
                ? 'ring-2 ring-[var(--figma-blue)] bg-white/40 dark:bg-white/5'
                : 'hover:-translate-y-1'
            }`}
            style={{
              left: build.x - 3500,
              top: build.y - 1950,
              width: 430,
            }}
          >
            {/* Card Thumbnail Frame */}
            <div className="w-full aspect-[488/382] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-[var(--figma-border)] shadow-sm group-hover:shadow-xl transition-shadow relative">
              <img
                src={build.image}
                alt={build.title}
                draggable={false}
                className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Title & Description */}
            <div className="mt-3.5 flex items-center justify-between">
              <h3 className="text-[20px] font-bold text-[var(--figma-text)] tracking-tight leading-snug group-hover:text-[var(--figma-blue)] transition-colors">
                {build.title}
              </h3>
              <span className="text-[14px] text-[var(--figma-blue)] opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </span>
            </div>
            <p className="mt-1 text-[14px] text-[var(--figma-text-secondary)] leading-normal line-clamp-2">
              {build.description}
            </p>

            {/* Tags with Authentic Figma Badge Styles */}
            <div className="mt-3 flex flex-wrap gap-2">
              {build.tags.map(tag => {
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
          </a>
        );
      })}
    </div>
  );
}
