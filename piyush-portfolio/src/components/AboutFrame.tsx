'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ABOUT_COLLAGE, BIO_SHORT, BIO_LONG, CollageItem } from '@/data/portfolioData';
import MusicPlayerSticker from './MusicPlayerSticker';

interface AboutFrameProps {
  scale: number;
}

export default function AboutFrame({ scale }: AboutFrameProps) {
  const [items, setItems] = useState<CollageItem[]>(ABOUT_COLLAGE);
  const [isLongBio, setIsLongBio] = useState(false);
  const dragItem = useRef<{ id: string; startX: number; startY: number; itemX: number; itemY: number } | null>(null);

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

      {/* Draggable Polaroid & Sticker Items */}
      {items.map(item => (
        <div
          key={item.id}
          onMouseDown={e => handleMouseDown(e, item)}
          className={`absolute cursor-grab active:cursor-grabbing select-none transition-shadow ${
            item.sticker ? 'bg-white p-1 rounded-xl shadow-md border border-neutral-200' : 'drop-shadow-xl'
          }`}
          style={{
            left: item.x,
            top: item.y,
            width: item.width,
            transform: `rotate(${item.rotate}deg)`,
            zIndex: item.zIndex,
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
      ))}

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
