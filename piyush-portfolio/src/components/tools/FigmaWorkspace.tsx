'use client';

import React, { useState, useRef, useEffect } from 'react';

interface CanvasElement {
  id: string;
  name: string;
  type: 'frame' | 'rectangle' | 'text' | 'button' | 'image';
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  borderRadius: number;
  opacity: number;
  text?: string;
  fontSize?: number;
  fontWeight?: string;
  textColor?: string;
  border?: string;
}

const INITIAL_ELEMENTS: CanvasElement[] = [
  {
    id: 'hero-card',
    name: 'Profile Card Frame',
    type: 'frame',
    x: 60,
    y: 40,
    width: 320,
    height: 380,
    fill: '#ffffff',
    borderRadius: 24,
    opacity: 100,
    border: '1px solid rgba(0,0,0,0.08)',
  },
  {
    id: 'avatar-rect',
    name: 'Cover Gradient',
    type: 'rectangle',
    x: 80,
    y: 60,
    width: 280,
    height: 120,
    fill: '#8253FF',
    borderRadius: 16,
    opacity: 100,
  },
  {
    id: 'title-text',
    name: 'Headline',
    type: 'text',
    x: 80,
    y: 200,
    width: 280,
    height: 36,
    fill: 'transparent',
    borderRadius: 0,
    opacity: 100,
    text: 'Jennifer Mankar',
    fontSize: 22,
    fontWeight: '700',
    textColor: '#111111',
  },
  {
    id: 'sub-text',
    name: 'Subtitle',
    type: 'text',
    x: 80,
    y: 236,
    width: 280,
    height: 48,
    fill: 'transparent',
    borderRadius: 0,
    opacity: 80,
    text: 'Communication & Product Designer crafting expressive experiences.',
    fontSize: 13,
    fontWeight: '400',
    textColor: '#555555',
  },
  {
    id: 'cta-button',
    name: 'Connect Button',
    type: 'button',
    x: 80,
    y: 300,
    width: 140,
    height: 42,
    fill: '#009EFF',
    borderRadius: 10,
    opacity: 100,
    text: 'Explore Work →',
    fontSize: 13,
    fontWeight: '600',
    textColor: '#ffffff',
  },
  {
    id: 'accent-badge',
    name: 'Status Badge',
    type: 'rectangle',
    x: 235,
    y: 304,
    width: 120,
    height: 34,
    fill: '#F3F4F6',
    borderRadius: 8,
    opacity: 100,
    border: '1px solid #E5E7EB',
    text: 'Available for work',
    fontSize: 11,
    fontWeight: '500',
    textColor: '#00B25D',
  },
];

export default function FigmaWorkspace({ onClose }: { onClose?: () => void }) {
  const [elements, setElements] = useState<CanvasElement[]>(INITIAL_ELEMENTS);
  const [history, setHistory] = useState<CanvasElement[][]>([INITIAL_ELEMENTS]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>('hero-card');
  const [activeTab, setActiveTab] = useState<'layers' | 'pages' | 'assets'>('layers');
  const [activeTool, setActiveTool] = useState<'move' | 'frame' | 'text' | 'rectangle' | 'hand'>('move');
  const [zoom] = useState(100);
  const [canvasBg, setCanvasBg] = useState('#f8f9fa');
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ mouseX: number; mouseY: number; elemX: number; elemY: number } | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const selectedElement = elements.find(el => el.id === selectedId);

  const pushHistory = (newElems: CanvasElement[]) => {
    const nextHistory = history.slice(0, historyIndex + 1);
    nextHistory.push(newElems);
    setHistory(nextHistory);
    setHistoryIndex(nextHistory.length - 1);
    setElements(newElems);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setElements(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setElements(history[historyIndex + 1]);
    }
  };

  const updateSelected = (updates: Partial<CanvasElement>) => {
    if (!selectedId) return;
    const next = elements.map(el => (el.id === selectedId ? { ...el, ...updates } : el));
    pushHistory(next);
  };

  const handleDelete = () => {
    if (!selectedId) return;
    const next = elements.filter(el => el.id !== selectedId);
    pushHistory(next);
    setSelectedId(null);
  };

  const handleDuplicate = () => {
    if (!selectedElement) return;
    const dup: CanvasElement = {
      ...selectedElement,
      id: `elem-${Date.now()}`,
      name: `${selectedElement.name} (copy)`,
      x: selectedElement.x + 20,
      y: selectedElement.y + 20,
    };
    const next = [...elements, dup];
    pushHistory(next);
    setSelectedId(dup.id);
  };

  const handleAddElement = (type: 'rectangle' | 'text' | 'frame' | 'button') => {
    const id = `${type}-${Date.now()}`;
    let newElem: CanvasElement;

    if (type === 'rectangle') {
      newElem = {
        id,
        name: 'New Rectangle',
        type: 'rectangle',
        x: 120,
        y: 120,
        width: 140,
        height: 100,
        fill: '#FF5100',
        borderRadius: 12,
        opacity: 100,
      };
    } else if (type === 'text') {
      newElem = {
        id,
        name: 'New Text',
        type: 'text',
        x: 120,
        y: 120,
        width: 180,
        height: 32,
        fill: 'transparent',
        borderRadius: 0,
        opacity: 100,
        text: 'Type text here...',
        fontSize: 16,
        fontWeight: '600',
        textColor: '#111111',
      };
    } else if (type === 'button') {
      newElem = {
        id,
        name: 'New Button',
        type: 'button',
        x: 120,
        y: 120,
        width: 130,
        height: 40,
        fill: '#009EFF',
        borderRadius: 10,
        opacity: 100,
        text: 'Click me',
        fontSize: 13,
        fontWeight: '600',
        textColor: '#ffffff',
      };
    } else {
      newElem = {
        id,
        name: 'New Frame',
        type: 'frame',
        x: 100,
        y: 100,
        width: 260,
        height: 200,
        fill: '#ffffff',
        borderRadius: 16,
        opacity: 100,
        border: '1px solid #E5E7EB',
      };
    }

    pushHistory([...elements, newElem]);
    setSelectedId(id);
    setActiveTool('move');
  };

  // Dragging logic
  const handleMouseDown = (e: React.MouseEvent, id: string) => {
    if (activeTool === 'hand') return;
    e.stopPropagation();
    setSelectedId(id);
    setIsDragging(true);

    const elem = elements.find(el => el.id === id);
    if (!elem) return;

    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      elemX: elem.x,
      elemY: elem.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragStart.current || !selectedId) return;
      const dx = e.clientX - dragStart.current.mouseX;
      const dy = e.clientY - dragStart.current.mouseY;

      setElements(prev =>
        prev.map(el =>
          el.id === selectedId
            ? {
                ...el,
                x: Math.max(0, Math.round(dragStart.current!.elemX + dx)),
                y: Math.max(0, Math.round(dragStart.current!.elemY + dy)),
              }
            : el
        )
      );
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        dragStart.current = null;
        pushHistory(elements);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, selectedId, elements]);

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-[#e0e0e0] select-none text-xs">
      {/* Top Design Toolbar */}
      <div className="h-10 px-3 bg-[#2c2c2c] border-b border-[#3c3c3c] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTool('move')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors flex items-center gap-1.5 ${
              activeTool === 'move' ? 'bg-[#009EFF] text-white' : 'hover:bg-[#3c3c3c] text-[#bbb]'
            }`}
            title="Move Tool (V)"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2l16 11-7.5 1.5L8 21 4 2z"/>
            </svg>
            <span>Move</span>
          </button>

          <button
            type="button"
            onClick={() => handleAddElement('frame')}
            className="px-2.5 py-1 rounded text-[11px] font-medium hover:bg-[#3c3c3c] text-[#bbb] transition-colors flex items-center gap-1.5"
            title="Add Frame"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/>
              <line x1="9" y1="4" x2="9" y2="20"/><line x1="15" y1="4" x2="15" y2="20"/>
            </svg>
            <span>Frame</span>
          </button>

          <button
            type="button"
            onClick={() => handleAddElement('rectangle')}
            className="px-2.5 py-1 rounded text-[11px] font-medium hover:bg-[#3c3c3c] text-[#bbb] transition-colors flex items-center gap-1.5"
            title="Add Shape"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
            </svg>
            <span>Shape</span>
          </button>

          <button
            type="button"
            onClick={() => handleAddElement('text')}
            className="px-2.5 py-1 rounded text-[11px] font-medium hover:bg-[#3c3c3c] text-[#bbb] transition-colors flex items-center gap-1.5"
            title="Add Text"
          >
            <span className="font-serif font-bold text-xs">T</span>
            <span>Text</span>
          </button>

          <button
            type="button"
            onClick={() => handleAddElement('button')}
            className="px-2.5 py-1 rounded text-[11px] font-medium hover:bg-[#3c3c3c] text-[#bbb] transition-colors flex items-center gap-1.5"
            title="Add Button"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="6" width="20" height="12" rx="4"/>
            </svg>
            <span>Button</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTool(activeTool === 'hand' ? 'move' : 'hand')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors flex items-center gap-1.5 ${
              activeTool === 'hand' ? 'bg-[#009EFF] text-white' : 'hover:bg-[#3c3c3c] text-[#bbb]'
            }`}
            title="Hand Tool (H)"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v7M10 10.5V6a2 2 0 0 0-4 0v8a7 7 0 0 0 14 0v-3a2 2 0 0 0-2-2z"/>
            </svg>
            <span>Hand</span>
          </button>
        </div>

        {/* Zoom & History Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleUndo}
            disabled={historyIndex <= 0}
            className="p-1 rounded hover:bg-[#3c3c3c] disabled:opacity-30 text-[#bbb]"
            title="Undo"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/></svg>
          </button>
          <button
            type="button"
            onClick={handleRedo}
            disabled={historyIndex >= history.length - 1}
            className="p-1 rounded hover:bg-[#3c3c3c] disabled:opacity-30 text-[#bbb]"
            title="Redo"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"/></svg>
          </button>
          <button
            type="button"
            onClick={handleDuplicate}
            disabled={!selectedId}
            className="px-2 py-1 rounded bg-[#383838] hover:bg-[#444] disabled:opacity-30 text-[10px] font-semibold"
            title="Duplicate (Ctrl+D)"
          >
            Duplicate
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={!selectedId}
            className="px-2 py-1 rounded bg-rose-900/40 hover:bg-rose-900/70 text-rose-300 disabled:opacity-30 text-[10px] font-semibold"
            title="Delete (Del)"
          >
            Delete
          </button>
          <div className="w-px h-4 bg-[#444] mx-1"/>
          <span className="text-[11px] font-mono font-medium text-[#888]">{zoom}%</span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="w-6 h-6 ml-2 rounded bg-[#333] hover:bg-[#444] flex items-center justify-center text-[#999] hover:text-white text-xs transition-colors"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main 3-Column Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Layers, Pages, Assets */}
        <div className="w-56 bg-[#252525] border-r border-[#3c3c3c] flex flex-col shrink-0">
          <div className="flex border-b border-[#3c3c3c]">
            {(['layers', 'pages', 'assets'] as const).map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-[11px] font-semibold uppercase tracking-wider capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-[#009EFF] text-white bg-[#2e2e2e]'
                    : 'text-[#888] hover:text-[#ddd]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {activeTab === 'layers' && (
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-semibold text-[#777] uppercase px-2 py-1">Canvas Layers</span>
                {elements.map(el => (
                  <button
                    key={el.id}
                    type="button"
                    onClick={() => setSelectedId(el.id)}
                    className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-left text-[11px] transition-colors ${
                      selectedId === el.id
                        ? 'bg-[#009EFF] text-white font-medium'
                        : 'hover:bg-[#333] text-[#ccc]'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="opacity-70 text-[10px]">
                        {el.type === 'frame' && '◫'}
                        {el.type === 'rectangle' && '■'}
                        {el.type === 'text' && 'T'}
                        {el.type === 'button' && '▢'}
                      </span>
                      <span className="truncate">{el.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'pages' && (
              <div className="flex flex-col gap-1 p-1 text-[11px] text-[#aaa]">
                <div className="p-2 rounded bg-[#009EFF]/10 text-[#009EFF] font-medium">● Page 1 — Portfolio UI</div>
                <div className="p-2 rounded hover:bg-[#333] text-[#777]">+ New Page</div>
              </div>
            )}

            {activeTab === 'assets' && (
              <div className="flex flex-col gap-2 p-1 text-[11px]">
                <span className="text-[10px] text-[#777] uppercase font-semibold">Design System Tokens</span>
                <div className="p-2 rounded bg-[#333] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#8253FF] inline-block"/>
                  <span>Figma Purple (#8253FF)</span>
                </div>
                <div className="p-2 rounded bg-[#333] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#009EFF] inline-block"/>
                  <span>Accent Blue (#009EFF)</span>
                </div>
                <div className="p-2 rounded bg-[#333] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00B25D] inline-block"/>
                  <span>Success Green (#00B25D)</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-2.5 border-t border-[#3c3c3c] bg-[#1e1e1e] text-[10px] text-[#777]">
            Canvas Background:
            <input
              type="color"
              value={canvasBg}
              onChange={e => setCanvasBg(e.target.value)}
              className="w-full h-6 rounded mt-1 bg-transparent cursor-pointer border border-[#444]"
            />
          </div>
        </div>

        {/* Center Canvas */}
        <div
          ref={canvasRef}
          onClick={() => setSelectedId(null)}
          className="flex-1 overflow-auto relative p-8 cursor-default flex items-center justify-center"
          style={{
            backgroundColor: canvasBg,
            backgroundImage: `radial-gradient(#999 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        >
          <div className="relative w-[500px] h-[480px] bg-transparent">
            {elements.map(el => {
              const isSelected = selectedId === el.id;
              return (
                <div
                  key={el.id}
                  onMouseDown={e => handleMouseDown(e, el.id)}
                  style={{
                    position: 'absolute',
                    left: el.x,
                    top: el.y,
                    width: el.width,
                    height: el.height,
                    backgroundColor: el.fill,
                    borderRadius: el.borderRadius,
                    opacity: el.opacity / 100,
                    border: el.border || (isSelected ? '2px solid #009EFF' : '1px solid transparent'),
                    outline: isSelected ? '2px solid #009EFF' : 'none',
                    outlineOffset: isSelected ? '2px' : '0px',
                    color: el.textColor || '#111',
                    fontSize: el.fontSize ? `${el.fontSize}px` : undefined,
                    fontWeight: el.fontWeight || undefined,
                  }}
                  className={`cursor-grab active:cursor-grabbing select-none transition-shadow flex items-center justify-center ${
                    isSelected ? 'shadow-lg ring-2 ring-[#009EFF]/50' : 'hover:outline hover:outline-1 hover:outline-[#009EFF]/40'
                  }`}
                >
                  {el.text && (
                    <span className="px-3 leading-snug text-center pointer-events-none">
                      {el.text}
                    </span>
                  )}

                  {/* Selection Resize Dots */}
                  {isSelected && (
                    <>
                      <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#009EFF] rounded-sm pointer-events-none"/>
                      <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#009EFF] rounded-sm pointer-events-none"/>
                      <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#009EFF] rounded-sm pointer-events-none"/>
                      <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#009EFF] rounded-sm pointer-events-none"/>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Inspector: Properties Panel */}
        <div className="w-64 bg-[#252525] border-l border-[#3c3c3c] flex flex-col shrink-0 p-3 overflow-y-auto">
          {selectedElement ? (
            <div className="flex flex-col gap-4">
              <div className="border-b border-[#3c3c3c] pb-2">
                <span className="text-[10px] uppercase font-bold text-[#888] tracking-wider">Design Inspector</span>
                <h4 className="text-sm font-semibold text-white mt-0.5">{selectedElement.name}</h4>
              </div>

              {/* Position & Dimensions */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold text-[#888] uppercase">Transform</span>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center gap-1.5 bg-[#1e1e1e] px-2 py-1 rounded border border-[#3c3c3c]">
                    <span className="text-[#666] font-mono">X</span>
                    <input
                      type="number"
                      value={selectedElement.x}
                      onChange={e => updateSelected({ x: Number(e.target.value) })}
                      className="w-full bg-transparent outline-none text-white text-right font-mono"
                    />
                  </label>
                  <label className="flex items-center gap-1.5 bg-[#1e1e1e] px-2 py-1 rounded border border-[#3c3c3c]">
                    <span className="text-[#666] font-mono">Y</span>
                    <input
                      type="number"
                      value={selectedElement.y}
                      onChange={e => updateSelected({ y: Number(e.target.value) })}
                      className="w-full bg-transparent outline-none text-white text-right font-mono"
                    />
                  </label>
                  <label className="flex items-center gap-1.5 bg-[#1e1e1e] px-2 py-1 rounded border border-[#3c3c3c]">
                    <span className="text-[#666] font-mono">W</span>
                    <input
                      type="number"
                      value={selectedElement.width}
                      onChange={e => updateSelected({ width: Math.max(20, Number(e.target.value)) })}
                      className="w-full bg-transparent outline-none text-white text-right font-mono"
                    />
                  </label>
                  <label className="flex items-center gap-1.5 bg-[#1e1e1e] px-2 py-1 rounded border border-[#3c3c3c]">
                    <span className="text-[#666] font-mono">H</span>
                    <input
                      type="number"
                      value={selectedElement.height}
                      onChange={e => updateSelected({ height: Math.max(10, Number(e.target.value)) })}
                      className="w-full bg-transparent outline-none text-white text-right font-mono"
                    />
                  </label>
                </div>
              </div>

              {/* Appearance: Radius & Opacity */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold text-[#888] uppercase">Appearance</span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#aaa] text-[11px]">Radius</span>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={selectedElement.borderRadius}
                    onChange={e => updateSelected({ borderRadius: Number(e.target.value) })}
                    className="w-24 accent-[#009EFF]"
                  />
                  <span className="font-mono text-[11px] w-8 text-right">{selectedElement.borderRadius}px</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[#aaa] text-[11px]">Opacity</span>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={selectedElement.opacity}
                    onChange={e => updateSelected({ opacity: Number(e.target.value) })}
                    className="w-24 accent-[#009EFF]"
                  />
                  <span className="font-mono text-[11px] w-8 text-right">{selectedElement.opacity}%</span>
                </div>
              </div>

              {/* Fill Color */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold text-[#888] uppercase">Fill</span>
                <div className="flex items-center gap-2 bg-[#1e1e1e] p-1.5 rounded border border-[#3c3c3c]">
                  <input
                    type="color"
                    value={selectedElement.fill.startsWith('#') ? selectedElement.fill : '#8253FF'}
                    onChange={e => updateSelected({ fill: e.target.value })}
                    className="w-7 h-7 rounded border-none cursor-pointer bg-transparent"
                  />
                  <input
                    type="text"
                    value={selectedElement.fill}
                    onChange={e => updateSelected({ fill: e.target.value })}
                    className="w-full bg-transparent outline-none text-white font-mono text-xs"
                  />
                </div>
              </div>

              {/* Text Properties (if text/button) */}
              {selectedElement.text !== undefined && (
                <div className="flex flex-col gap-2 border-t border-[#3c3c3c] pt-2">
                  <span className="text-[10px] font-semibold text-[#888] uppercase">Content & Typography</span>
                  <textarea
                    value={selectedElement.text}
                    onChange={e => updateSelected({ text: e.target.value })}
                    className="w-full h-16 bg-[#1e1e1e] p-2 rounded border border-[#3c3c3c] text-white text-xs outline-none focus:border-[#009EFF]"
                  />
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#aaa] text-[11px]">Font Size</span>
                    <input
                      type="number"
                      min="9"
                      max="48"
                      value={selectedElement.fontSize || 14}
                      onChange={e => updateSelected({ fontSize: Number(e.target.value) })}
                      className="w-16 bg-[#1e1e1e] px-2 py-1 rounded text-right border border-[#3c3c3c] text-white font-mono"
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center text-[#666] p-4">
              <span className="text-2xl mb-2">✦</span>
              <p className="text-[11px]">Click any element on canvas to inspect and edit properties.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
