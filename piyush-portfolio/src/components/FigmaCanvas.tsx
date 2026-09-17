'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import AboutFrame from './AboutFrame';
import WorkFrame from './WorkFrame';
import BuildsFrame from './BuildsFrame';
import PlaygroundFrame from './PlaygroundFrame';
import { WorkProject, PageItem } from '@/data/portfolioData';

interface FigmaCanvasProps {
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  activeTool: 'move' | 'hand';
  activePage: string;
  setActivePage: (pageId: string) => void;
  selectedCard: string | null;
  setSelectedCard: (cardId: string | null) => void;
  onOpenProject: (project: WorkProject) => void;
  canvasBg: string;
  isDark: boolean;
  targetCoords?: { x: number; y: number } | null;
}

export default function FigmaCanvas({
  scale,
  setScale,
  activeTool,
  activePage,
  setActivePage,
  selectedCard,
  setSelectedCard,
  onOpenProject,
  canvasBg,
  isDark,
  targetCoords,
}: FigmaCanvasProps) {
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [isSmoothPanning, setIsSmoothPanning] = useState(false);
  const dragStart = useRef<{ mouseX: number; mouseY: number; panX: number; panY: number } | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Pan to target coordinates
  const panTo = useCallback((targetX: number, targetY: number, targetScale: number = scale) => {
    if (typeof window === 'undefined') return;
    setIsSmoothPanning(true);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setPan({
      x: centerX - targetX * targetScale,
      y: centerY - targetY * targetScale,
    });

    setTimeout(() => {
      setIsSmoothPanning(false);
    }, 650);
  }, [scale]);

  // Handle programmatic target movement (e.g. clicking page in sidebar)
  useEffect(() => {
    if (targetCoords) {
      panTo(targetCoords.x, targetCoords.y);
    }
  }, [targetCoords, panTo]);

  // Initial centering on About frame
  useEffect(() => {
    panTo(650, 450, 0.75);
    setScale(0.75);
  }, []);

  // Listen to keyboard space bar for Hand pan mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !isSpacePressed && (e.target as HTMLElement).tagName !== 'INPUT') {
        e.preventDefault();
        setIsSpacePressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setIsSpacePressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isSpacePressed]);

  // Handle Mouse Down for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only pan if hand tool is active, or space is held, or middle click, or clicking directly on background
    const isHandMode = activeTool === 'hand' || isSpacePressed || e.button === 1 || e.button === 0;
    
    // Clear selection if clicking empty canvas
    if (e.target === canvasRef.current || (e.target as HTMLElement).classList.contains('canvas-surface')) {
      setSelectedCard(null);
    }

    if (activeTool === 'hand' || isSpacePressed || e.button === 1) {
      e.preventDefault();
      setIsDragging(true);
      dragStart.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        panX: pan.x,
        panY: pan.y,
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.mouseX;
    const dy = e.clientY - dragStart.current.mouseY;

    setPan({
      x: dragStart.current.panX + dx,
      y: dragStart.current.panY + dy,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragStart.current = null;
  };

  // Wheel handling: Pan (two finger) or Zoom (Ctrl/Cmd + wheel)
  const handleWheel = (e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      // Zoom centered at mouse position
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      const newScale = Math.min(Math.max(scale * zoomFactor, 0.25), 2.5);

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setPan(prev => ({
        x: mouseX - (mouseX - prev.x) * (newScale / scale),
        y: mouseY - (mouseY - prev.y) * (newScale / scale),
      }));

      setScale(newScale);
    } else {
      // Regular trackpad or mouse wheel pan
      setPan(prev => ({
        x: prev.x - e.deltaX,
        y: prev.y - e.deltaY,
      }));
    }
  };

  // Cursor style
  const cursorStyle = isDragging
    ? 'cursor-grabbing'
    : (activeTool === 'hand' || isSpacePressed)
    ? 'cursor-grab'
    : 'cursor-default';

  return (
    <div
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      style={{ backgroundColor: canvasBg }}
      className={`fixed inset-0 w-screen h-screen overflow-hidden select-none canvas-surface ${cursorStyle}`}
    >
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(${isDark ? '#555' : '#888'} 1px, transparent 1px)`,
          backgroundSize: `${24 * scale}px ${24 * scale}px`,
          backgroundPosition: `${pan.x}px ${pan.y}px`,
        }}
      />

      {/* Transform Container with Pan & Zoom */}
      <div
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
          transformOrigin: '0 0',
          transition: isSmoothPanning ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
        }}
        className="absolute left-0 top-0 pointer-events-none w-[6000px] h-[5000px]"
      >
        {/* Frame 1: About Collage & Bio */}
        <div style={{ position: 'absolute', left: 0, top: 0 }}>
          <AboutFrame scale={scale} />
        </div>

        {/* Frame 2: Selected Work (5 Projects) */}
        <div style={{ position: 'absolute', left: 0, top: 0 }}>
          <WorkFrame
            onOpenProject={onOpenProject}
            selectedCard={selectedCard}
            onSelectCard={id => {
              setSelectedCard(id);
              setActivePage('work');
            }}
          />
        </div>

        {/* Frame 3: Builds & Small Apps */}
        <div style={{ position: 'absolute', left: 0, top: 0 }}>
          <BuildsFrame
            selectedCard={selectedCard}
            onSelectCard={id => {
              setSelectedCard(id);
              setActivePage('builds');
            }}
          />
        </div>

        {/* Frame 4: Design Playground */}
        <div style={{ position: 'absolute', left: 0, top: 0 }}>
          <PlaygroundFrame />
        </div>
      </div>
    </div>
  );
}
