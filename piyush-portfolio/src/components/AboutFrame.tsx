'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ABOUT_COLLAGE, BIO_SHORT, BIO_LONG, CollageItem } from '@/data/portfolioData';
import MusicPlayerSticker from './MusicPlayerSticker';

interface AboutFrameProps {
  scale: number;
}

export default function AboutFrame({ scale }: AboutFrameProps) {
  const [items, setItems] = useState<CollageItem[]>(ABOUT_COLLAGE);
  const [isLongBio, setIsLongBio] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [highlightTarget, setHighlightTarget] = useState<'photos' | 'music' | 'right' | null>(null);
  const dragItem = useRef<{ id: string; startX: number; startY: number; itemX: number; itemY: number } | null>(null);

  // Sync with Vienna music player live playing status
  useEffect(() => {
    const handleAudioStatus = (e: Event) => {
      const customEvent = e as CustomEvent<{ isPlaying: boolean }>;
      if (customEvent.detail) {
        setIsPlayingAudio(Boolean(customEvent.detail.isPlaying));
      }
    };
    window.addEventListener('vienna-player-status', handleAudioStatus);
    return () => {
      window.removeEventListener('vienna-player-status', handleAudioStatus);
    };
  }, []);

  const triggerHighlight = (target: 'photos' | 'music' | 'right') => {
    setHighlightTarget(target);
    setTimeout(() => {
      setHighlightTarget(null);
    }, 1200);
  };

  const handleTakeCloserLook = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHighlight('photos');
  };

  const handleToggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHighlight('music');
    window.dispatchEvent(new CustomEvent('toggle-vienna-player'));
  };

  const handleDiscoverMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    triggerHighlight('right');
    setIsLongBio(prev => !prev);
  };

  const handleMouseDown = (e: React.MouseEvent, item: CollageItem) => {
    // If interacting with player controls, don't initiate card dragging
    if ((e.target as HTMLElement).closest('button, [role="slider"], [data-interactive="true"]')) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    dragItem.current = {
      id: item.id,
      startX: e.clientX,
      startY: e.clientY,
      itemX: item.x,
      itemY: item.y,
    };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!dragItem.current) return;
      const dx = (moveEvent.clientX - dragItem.current.startX) / scale;
      const dy = (moveEvent.clientY - dragItem.current.startY) / scale;

      setItems(prev =>
        prev.map(it =>
          it.id === dragItem.current?.id
            ? { ...it, x: dragItem.current.itemX + dx, y: dragItem.current.itemY + dy }
            : it
        )
      );
    };

    const handleMouseUp = () => {
      dragItem.current = null;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className="absolute select-none pointer-events-auto"
      style={{ left: 0, top: 0, width: 1300, height: 900 }}
    >
      {/* Frame Label */}
      <div className="absolute -top-7 left-0 text-[11px] font-semibold text-[var(--figma-text-secondary)] flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[var(--figma-blue)] inline-block"/>
        <span>About Collage</span>
      </div>

      {/* 1. Contextual Hint Label: Photo / Visual Collage Area (Top-Left) */}
      <button
        type="button"
        onClick={handleTakeCloserLook}
        className="absolute group flex items-center gap-2 py-1.5 px-2.5 rounded-md cursor-pointer select-none transition-all duration-200 text-left bg-transparent hover:bg-black/5 dark:hover:bg-white/5 z-10"
        style={{ left: 45, top: 42 }}
        title="Move things around on the canvas"
      >
        <span className="w-2 h-2 rounded-full bg-[var(--figma-blue)]/70 group-hover:bg-[var(--figma-blue)] group-hover:scale-125 transition-all duration-200 shrink-0" />
        <span className="text-[16px] font-normal tracking-tight text-[var(--figma-text-secondary)] group-hover:text-[var(--figma-blue)] transition-colors">
          Move things around
        </span>
        <span className="text-[16px] text-[var(--figma-text-secondary)] group-hover:text-[var(--figma-blue)] group-hover:translate-x-1 transition-all duration-200">
          →
        </span>
      </button>

      {/* 2. Contextual Hint Label: Music Player Area (Bottom-Left) */}
      <button
        type="button"
        onClick={handleToggleMusic}
        className="absolute group flex items-center gap-2 py-1.5 px-2.5 rounded-md cursor-pointer select-none transition-all duration-200 text-left bg-transparent hover:bg-black/5 dark:hover:bg-white/5 z-10"
        style={{ left: 55, top: 835 }}
        title="Press play to listen to Billy Joel - Vienna"
      >
        <span className={`w-2 h-2 rounded-full ${isPlayingAudio ? 'bg-emerald-500 animate-pulse' : 'bg-[var(--figma-blue)]/70 group-hover:bg-[var(--figma-blue)]'} group-hover:scale-125 transition-all duration-200 shrink-0`} />
        <span className="text-[16px] font-normal tracking-tight text-[var(--figma-text-secondary)] group-hover:text-[var(--figma-blue)] transition-colors">
          {isPlayingAudio ? 'Playing Vienna ♫' : 'Press play & listen'}
        </span>
        <span className={`text-[16px] text-[var(--figma-text-secondary)] group-hover:text-[var(--figma-blue)] ${isPlayingAudio ? 'group-hover:scale-110' : 'group-hover:-translate-y-1'} transition-all duration-200`}>
          {isPlayingAudio ? '⏸' : '↑'}
        </span>
      </button>

      {/* 3. Contextual Hint Label: Interactive Items Area (Right-Side) */}
      <button
        type="button"
        onClick={handleDiscoverMore}
        className="absolute group flex items-center gap-2 py-1.5 px-2.5 rounded-md cursor-pointer select-none transition-all duration-200 text-left bg-transparent hover:bg-black/5 dark:hover:bg-white/5 z-10"
        style={{ left: 1070, top: 240 }}
        title="Discover more details and interactive elements"
      >
        <span className="w-2 h-2 rounded-full bg-[var(--figma-blue)]/70 group-hover:bg-[var(--figma-blue)] group-hover:scale-125 transition-all duration-200 shrink-0" />
        <span className="text-[16px] font-normal tracking-tight text-[var(--figma-text-secondary)] group-hover:text-[var(--figma-blue)] transition-colors">
          Discover more
        </span>
        <span className="text-[16px] text-[var(--figma-text-secondary)] group-hover:text-[var(--figma-blue)] group-hover:translate-x-1 transition-all duration-200">
          →
        </span>
      </button>

      {/* Draggable Polaroid & Sticker Items */}
      {items.map(item => {
        const isPhotoItem = item.id === 'polaroid-me' || item.id === 'gilmore' || item.id === 'postcard';
        const isMusicItem = item.id === 'vienna-player';
        const isRightItem = item.id === 'dog' || item.id === 'polaroid-mountain';

        const isHighlighted =
          (highlightTarget === 'photos' && isPhotoItem) ||
          (highlightTarget === 'music' && isMusicItem) ||
          (highlightTarget === 'right' && isRightItem);

        return (
          <div
            key={item.id}
            onMouseDown={e => handleMouseDown(e, item)}
            className={`absolute cursor-grab active:cursor-grabbing select-none transition-all duration-300 ${
              item.sticker ? 'bg-white p-1 rounded-xl shadow-md border border-neutral-200' : 'drop-shadow-xl'
            } ${
              isHighlighted
                ? 'scale-105 z-30 ring-2 ring-[var(--figma-blue)] shadow-2xl'
                : ''
            }`}
            style={{
              left: item.x,
              top: item.y,
              width: item.width,
              transform: `rotate(${item.rotate}deg)${isHighlighted ? ' scale(1.04)' : ''}`,
              zIndex: isHighlighted ? 30 : item.zIndex,
            }}
          >
            {item.id === 'vienna-player' ? (
              <MusicPlayerSticker />
            ) : (
              <img
                src={item.src}
                alt={item.id}
                draggable={false}
                className="w-full h-auto block pointer-events-none rounded-lg"
              />
            )}
          </div>
        );
      })}

      {/* Bio Text Card in Center */}
      <div
        className="absolute p-7 rounded-2xl bg-white/90 dark:bg-[#202020]/95 backdrop-blur-md shadow-2xl border border-[var(--figma-border)] z-20"
        style={{
          left: 410,
          top: 395,
          width: 495,
        }}
        onClick={e => e.stopPropagation()}
      >
        <p className="text-[18px] leading-relaxed text-[var(--figma-text)] font-sans tracking-tight">
          {isLongBio ? BIO_LONG : BIO_SHORT}
        </p>

        <button
          type="button"
          onClick={() => setIsLongBio(!isLongBio)}
          className="mt-3 text-[14px] font-semibold text-[var(--figma-blue)] hover:underline inline-flex items-center gap-1"
        >
          <span>{isLongBio ? 'tldr' : 'More'}</span>
          <span>{isLongBio ? '↑' : '→'}</span>
        </button>
      </div>
    </div>
  );
}

