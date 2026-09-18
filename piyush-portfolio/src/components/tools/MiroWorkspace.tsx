'use client';

import React, { useState, useRef } from 'react';

interface StickyNote {
  id: string;
  x: number;
  y: number;
  color: string;
  text: string;
  author: string;
}

const INITIAL_STICKIES: StickyNote[] = [
  { id: '1', x: 80, y: 80, color: '#FFF9B1', text: 'Pain Point: Users drop off during wallet connection due to intimidating crypto warnings.', author: 'Jenni' },
  { id: '2', x: 80, y: 240, color: '#FFF9B1', text: 'Pain Point: Order books and financial charts intimidate non-traders on Bento.', author: 'Jenni' },
  { id: '3', x: 340, y: 80, color: '#D5F692', text: 'Design Solution: Replace stock ticker charts with Yes/No community prediction cards.', author: 'Jenni' },
  { id: '4', x: 340, y: 240, color: '#CEF0FF', text: 'Design Solution: Social shareable badges so players show off wins on Twitter & Farcaster.', author: 'Jenni' },
  { id: '5', x: 600, y: 80, color: '#F5D6FE', text: 'Validation: 85% of test users preferred friendly bento tiles over traditional tables.', author: 'Research' },
  { id: '6', x: 600, y: 240, color: '#FFD8C9', text: 'Next Step: Implement micro-haptics when placing prediction tokens.', author: 'Jenni' },
];

const STICKY_COLORS = [
  { name: 'Yellow', val: '#FFF9B1' },
  { name: 'Mint', val: '#D5F692' },
  { name: 'Sky', val: '#CEF0FF' },
  { name: 'Lavender', val: '#F5D6FE' },
  { name: 'Peach', val: '#FFD8C9' },
];

export default function MiroWorkspace({ onClose }: { onClose?: () => void }) {
  const [stickies, setStickies] = useState<StickyNote[]>(INITIAL_STICKIES);
  const [selectedColor, setSelectedColor] = useState(STICKY_COLORS[0].val);
  const [zoom, setZoom] = useState(100);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const dragOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const addSticky = () => {
    const newSticky: StickyNote = {
      id: Date.now().toString(),
      x: 150 + Math.random() * 200,
      y: 120 + Math.random() * 150,
      color: selectedColor,
      text: 'Click to edit your UX discovery insight...',
      author: 'Jenni',
    };
    setStickies(prev => [...prev, newSticky]);
  };

  const updateText = (id: string, text: string) => {
    setStickies(prev => prev.map(s => (s.id === id ? { ...s, text } : s)));
  };

  const deleteSticky = (id: string) => {
    setStickies(prev => prev.filter(s => s.id !== id));
  };

  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setDraggingId(id);
    const sticky = stickies.find(s => s.id === id);
    if (sticky) {
      dragOffset.current = {
        x: e.clientX - sticky.x,
        y: e.clientY - sticky.y,
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggingId) return;
    setStickies(prev =>
      prev.map(s => {
        if (s.id === draggingId) {
          return {
            ...s,
            x: Math.max(10, e.clientX - dragOffset.current.x),
            y: Math.max(10, e.clientY - dragOffset.current.y),
          };
        }
        return s;
      })
    );
  };

  const handleMouseUp = () => {
    setDraggingId(null);
  };

  return (
    <div
      className="flex flex-col h-full bg-[#f8f9fa] text-[#222] select-none overflow-hidden font-sans"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Top Bar */}
      <div className="h-12 bg-white border-b border-[#e1e4e8] px-4 flex items-center justify-between z-20 shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#FFD02F] flex items-center justify-center font-black text-xs text-[#050038] shadow-sm">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-[#050038] tracking-wide flex items-center gap-1.5">
              Miro Collaborative Whiteboard
              <span className="text-[10px] bg-[#FFD02F]/30 text-[#614d00] px-1.5 py-0.5 rounded font-mono">UX Board</span>
            </span>
            <span className="text-[10px] text-[#717682]">Affinity mapping, user journeys &amp; product architecture</span>
          </div>
        </div>

        {/* Color Palette & Add Button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-[#f1f3f5] p-1 rounded-lg border border-[#e1e4e8]">
            {STICKY_COLORS.map(c => (
              <button
                key={c.val}
                onClick={() => setSelectedColor(c.val)}
                style={{ backgroundColor: c.val }}
                className={`w-5 h-5 rounded-md border transition-transform ${
                  selectedColor === c.val ? 'border-[#050038] scale-110 shadow-sm' : 'border-black/10'
                }`}
                title={c.name}
              />
            ))}
          </div>

          <button
            onClick={addSticky}
            className="flex items-center gap-1 bg-[#050038] hover:bg-[#1a1554] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors"
          >
            <span>+ Sticky Note</span>
          </button>

          {/* Zoom controls */}
          <div className="flex items-center bg-[#f1f3f5] rounded-lg border border-[#e1e4e8] text-xs font-mono text-[#555]">
            <button
              onClick={() => setZoom(z => Math.max(70, z - 10))}
              className="px-2 py-1 hover:bg-gray-200 rounded-l"
            >
              -
            </button>
            <span className="px-2 text-[11px]">{zoom}%</span>
            <button
              onClick={() => setZoom(z => Math.min(130, z + 10))}
              className="px-2 py-1 hover:bg-gray-200 rounded-r"
            >
              +
            </button>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#f1f3f5] hover:bg-gray-200 flex items-center justify-center text-[#666] hover:text-[#000] transition-colors ml-1"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Infinite Grid Canvas */}
      <div
        className="flex-1 relative overflow-auto bg-[#fafbfc] cursor-default"
        style={{
          backgroundImage: 'radial-gradient(#d3d8df 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        {/* Whiteboard Column Guides */}
        <div className="absolute top-4 left-16 flex gap-48 pointer-events-none opacity-40">
          <div className="w-56 text-center border-b-2 border-[#050038] pb-1 font-bold text-xs uppercase tracking-wider text-[#050038]">
            1. User Pain Points
          </div>
          <div className="w-56 text-center border-b-2 border-[#050038] pb-1 font-bold text-xs uppercase tracking-wider text-[#050038]">
            2. Design Solutions
          </div>
          <div className="w-56 text-center border-b-2 border-[#050038] pb-1 font-bold text-xs uppercase tracking-wider text-[#050038]">
            3. Research Validation
          </div>
        </div>

        {/* Sticky Notes */}
        {stickies.map(sticky => (
          <div
            key={sticky.id}
            onMouseDown={e => handleMouseDown(e, sticky.id)}
            style={{
              left: `${sticky.x}px`,
              top: `${sticky.y}px`,
              backgroundColor: sticky.color,
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top left',
            }}
            className={`absolute w-52 min-h-44 p-3.5 rounded-lg shadow-md border border-black/10 flex flex-col justify-between cursor-move transition-shadow duration-150 ${
              draggingId === sticky.id ? 'shadow-2xl z-30 ring-2 ring-[#050038]/40 rotate-1' : 'hover:shadow-lg z-10'
            }`}
          >
            <div className="flex justify-between items-center text-[10px] text-black/50 mb-1">
              <span className="font-semibold uppercase tracking-wider">{sticky.author}</span>
              <button
                onClick={e => {
                  e.stopPropagation();
                  deleteSticky(sticky.id);
                }}
                className="hover:text-red-600 font-bold px-1"
                title="Delete note"
              >
                ✕
              </button>
            </div>

            <textarea
              value={sticky.text}
              onChange={e => updateText(sticky.id, e.target.value)}
              className="w-full flex-1 bg-transparent resize-none outline-none font-sans text-xs text-[#222] leading-relaxed cursor-text"
              rows={4}
            />

            <div className="pt-2 text-[9px] text-black/40 text-right font-mono">
              drag to reposition
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
