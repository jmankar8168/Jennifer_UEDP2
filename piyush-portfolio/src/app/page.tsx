'use client';

import React, { useState, useEffect } from 'react';
import FigmaTopBar from '@/components/FigmaTopBar';
import FigmaLeftSidebar from '@/components/FigmaLeftSidebar';
import FigmaRightSidebar from '@/components/FigmaRightSidebar';
import FigmaCanvas from '@/components/FigmaCanvas';
import CaseStudyModal from '@/components/CaseStudyModal';
import MobileView from '@/components/MobileView';
import HeroIntroSwipe from '@/components/HeroIntroSwipe';
import { WorkProject, PageItem, PAGES } from '@/data/portfolioData';

export default function Home() {
  const [heroOpen, setHeroOpen] = useState(true);
  const [activeTool, setActiveTool] = useState<'move' | 'hand'>('move');
  const [scale, setScale] = useState<number>(0.75);
  const [activePage, setActivePage] = useState<string>('about');
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);
  const [canvasBg, setCanvasBg] = useState<string>('#f5f5f5');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [targetCoords, setTargetCoords] = useState<{ x: number; y: number } | null>(null);
  const [isPlayingTour, setIsPlayingTour] = useState(false);

  // Initialize theme from system or preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      setCanvasBg('#1e1e1e');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        setCanvasBg('#1e1e1e');
      } else {
        document.documentElement.classList.remove('dark');
        setCanvasBg('#f5f5f5');
      }
      return next;
    });
  };

  // Keyboard shortcut listeners for tools and navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      if (e.key === 'v' || e.key === 'V') {
        setActiveTool('move');
      } else if (e.key === 'h' || e.key === 'H') {
        setActiveTool('hand');
      } else if (e.key === '0') {
        setScale(1.0);
      } else if (e.key === '1') {
        setScale(0.75);
      } else if (e.key === '+' || e.key === '=') {
        setScale(prev => Math.min(prev * 1.15, 2.5));
      } else if (e.key === '-') {
        setScale(prev => Math.max(prev * 0.85, 0.25));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Map pages to canvas center coordinates
  const pageCoordinates: Record<string, { x: number; y: number }> = {
    about: { x: 650, y: 450 },
    work: { x: 2900, y: 700 },
    builds: { x: 4200, y: 2700 },
    playground: { x: 1600, y: 3900 },
  };

  const handleSelectPage = (page: PageItem) => {
    setActivePage(page.id);
    setSelectedCard(null);
    const coords = pageCoordinates[page.id];
    if (coords) {
      setTargetCoords({ ...coords });
    }
  };

  // Automated Tour Presentation
  const handlePlayTour = () => {
    if (isPlayingTour) return;
    setIsPlayingTour(true);
    const tourPages = ['about', 'work', 'builds', 'playground'];
    let idx = 0;

    const interval = setInterval(() => {
      if (idx >= tourPages.length) {
        clearInterval(interval);
        setIsPlayingTour(false);
        return;
      }
      const pId = tourPages[idx];
      setActivePage(pId);
      const coords = pageCoordinates[pId];
      if (coords) setTargetCoords({ ...coords });
      idx++;
    }, 2800);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[var(--figma-bg)] text-[var(--figma-text)]">
      {/* 1. Hero Intro Swipe Overlay */}
      <HeroIntroSwipe
        isOpen={heroOpen}
        onDismiss={() => setHeroOpen(false)}
      />

      {/* 2. Desktop Figma Workspace (Hidden on small screens) */}
      <div className="hidden md:block">
        {/* Infinite Figma Canvas */}
        <FigmaCanvas
          scale={scale}
          setScale={setScale}
          activeTool={activeTool}
          activePage={activePage}
          setActivePage={setActivePage}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          onOpenProject={proj => setSelectedProject(proj)}
          canvasBg={canvasBg}
          isDark={isDark}
          targetCoords={targetCoords}
        />

        {/* Top Floating Figma Navigation Bar */}
        <FigmaTopBar
          scale={scale}
          onZoomIn={() => setScale(prev => Math.min(prev * 1.15, 2.5))}
          onZoomOut={() => setScale(prev => Math.max(prev * 0.85, 0.25))}
          onZoomReset={() => setScale(1.0)}
          onZoomFit={() => {
            setScale(0.7);
            setTargetCoords({ x: 650, y: 450 });
          }}
          activeTool={activeTool}
          setActiveTool={setActiveTool}
          onPlay={handlePlayTour}
        />

        {/* Left Floating Pages & Layers Sidebar */}
        <FigmaLeftSidebar
          activePage={activePage}
          onSelectPage={handleSelectPage}
          selectedCard={selectedCard}
          onSelectCard={cardId => setSelectedCard(cardId)}
        />

        {/* Right Floating Properties & Inspector Sidebar */}
        <FigmaRightSidebar
          selectedCard={selectedCard}
          canvasBg={canvasBg}
          onCanvasBgChange={bg => setCanvasBg(bg)}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />

        {/* Bottom Status Tip */}
        <div className="fixed bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md border border-[var(--figma-border)] text-[11px] text-[var(--figma-text-secondary)] shadow-sm pointer-events-none z-20 flex items-center gap-2">
          <span>Hold <kbd className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-[10px] font-mono">Space</kbd> or click Hand to Pan</span>
          <span>•</span>
          <span><kbd className="px-1 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-[10px] font-mono">Ctrl</kbd> + Scroll to Zoom</span>
        </div>
      </div>

      {/* 3. Mobile Feed Experience (Rendered on mobile screens < 768px) */}
      <div className="block md:hidden">
        <MobileView onOpenProject={proj => setSelectedProject(proj)} />
      </div>

      {/* 4. Deep-dive Case Study Modal Drawer */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
