'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface HeroIntroSwipeProps {
  onDismiss: () => void;
  isOpen: boolean;
}

export default function HeroIntroSwipe({ onDismiss, isOpen }: HeroIntroSwipeProps) {
  const [dragStartY, setDragStartY] = useState<number | null>(null);
  const [dragOffsetY, setDragOffsetY] = useState<number>(0);
  const [isDismissed, setIsDismissed] = useState(!isOpen);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDismissed(!isOpen);
  }, [isOpen]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartY === null) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - dragStartY;
    // only allow dragging upwards
    if (diff < 0) {
      setDragOffsetY(diff);
    }
  };

  const handleTouchEnd = () => {
    if (dragOffsetY < -80) {
      triggerDismiss();
    } else {
      setDragOffsetY(0);
    }
    setDragStartY(null);
  };

  // Wheel handler for desktop scroll-away
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 30) {
      triggerDismiss();
    }
  };

  const triggerDismiss = () => {
    setDragOffsetY(-window.innerHeight);
    setTimeout(() => {
      setIsDismissed(true);
      onDismiss();
    }, 400);
  };

  if (isDismissed) return null;

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translateY(${dragOffsetY}px)`,
        transition: dragStartY !== null ? 'none' : 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="fixed inset-0 z-50 bg-[#FBFBFB] dark:bg-[#121212] flex items-center justify-center select-none overflow-hidden"
    >
      {/* 1. Top Navigation Bar */}
      <header className="absolute top-0 left-0 right-0 z-10 w-full px-6 md:px-10 lg:px-12 pt-6 pb-2 flex items-center justify-between text-[13px] font-medium text-[var(--figma-text-secondary)]">
        {/* Left Breadcrumb */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--figma-blue)]" />
          <span className="font-semibold text-[var(--figma-text)]">Jenni</span>
          <span className="text-[12px] opacity-60">/ Portfolio</span>
        </div>

        {/* Right Action Button */}
        <button
          type="button"
          onClick={triggerDismiss}
          className="px-3.5 py-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-[12px] hover:bg-neutral-300 dark:hover:bg-neutral-700 text-[var(--figma-text)] transition-colors flex items-center gap-1.5"
        >
          <span>Skip Intro</span>
          <span className="text-[11px]">→</span>
        </button>
      </header>

      {/* 2. Main Central Hero Section: Dead-center of the entire viewport */}
      <main className="w-full max-w-2xl px-6 flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center text-center max-w-2xl w-full gap-6 animate-fade-in-up">
          {/* Floating Avatar & Badge */}
          <div className="relative group cursor-pointer" onClick={triggerDismiss}>
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden border-2 border-neutral-300 dark:border-neutral-700 shadow-2xl p-1 bg-white dark:bg-neutral-800">
              <Image
                src="/jenni-avatar.webp"
                alt="Jenni"
                width={144}
                height={144}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="absolute -bottom-2.5 -right-2 px-2.5 py-1 bg-[var(--figma-blue)] text-white text-[11px] font-bold rounded-full shadow-lg">
              Figma Canvas
            </div>
          </div>

          {/* Headline & Description */}
          <div className="flex flex-col gap-2.5">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[var(--figma-text)] leading-tight">
              Hi, I’m Jenni.
            </h1>
            <p className="text-base md:text-xl text-[var(--figma-text-secondary)] font-medium max-w-lg mx-auto leading-relaxed">
              Product & Brand Designer building interfaces, generative tools, and tactile web experiences.
            </p>
          </div>

          {/* Interactive Enter Trigger */}
          <div className="flex flex-col items-center gap-3 mt-3">
            <button
              type="button"
              onClick={triggerDismiss}
              className="group px-7 py-3 rounded-full bg-[var(--figma-blue)] hover:bg-[#0088ee] text-white font-semibold text-[15px] shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>Enter Figma Workspace</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </button>
            <span className="text-[12px] text-[var(--figma-text-tertiary)] flex items-center gap-1">
              <span>Scroll or swipe up to reveal canvas</span>
              <span className="animate-bounce inline-block">↑</span>
            </span>
          </div>
        </div>
      </main>

      {/* 3. Swipe Indicator Pill at Bottom */}
      <footer className="absolute bottom-4 left-0 right-0 z-10 w-full flex flex-col items-center justify-center">
        <div
          onClick={triggerDismiss}
          className="cursor-pointer flex flex-col items-center gap-1 text-[var(--figma-text-tertiary)] hover:text-[var(--figma-text)] transition-colors"
        >
          <div className="w-10 h-1 rounded-full bg-neutral-400/50" />
          <span className="text-[11px] font-medium tracking-wide uppercase">Swipe Up</span>
        </div>
      </footer>
    </div>
  );
}
