'use client';

import React, { useRef, useState, useEffect } from 'react';

type BrushType = 'pencil' | 'ink' | 'marker' | 'eraser';

const ARTIST_PALETTE = [
  '#ffffff',
  '#8253FF',
  '#00D8FF',
  '#FF5100',
  '#00B25D',
  '#FF2ADF',
  '#FFD62E',
  '#111111',
];

export default function ProcreateWorkspace({ onClose }: { onClose?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushType, setBrushType] = useState<BrushType>('ink');
  const [color, setColor] = useState('#8253FF');
  const [size, setSize] = useState(6);
  const [opacity, setOpacity] = useState(100);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.parentElement?.clientWidth || 800;
    canvas.height = canvas.parentElement?.clientHeight || 600;

    ctx.fillStyle = '#161618';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Initial greeting sketch
    ctx.fillStyle = '#8253FF';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('✨ Jennifer’s Digital Sketchbook', 40, 60);

    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '13px sans-serif';
    ctx.fillText('Pick a brush and doodle on this canvas!', 40, 90);
  }, []);

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCoordinates(e);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (brushType === 'eraser') {
      ctx.strokeStyle = '#161618';
      ctx.lineWidth = size * 2.5;
      ctx.globalAlpha = 1;
    } else if (brushType === 'pencil') {
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(1, size * 0.5);
      ctx.globalAlpha = (opacity / 100) * 0.7;
    } else if (brushType === 'marker') {
      ctx.strokeStyle = color;
      ctx.lineWidth = size * 2;
      ctx.globalAlpha = (opacity / 100) * 0.35;
    } else {
      // Ink
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
      ctx.globalAlpha = opacity / 100;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#161618';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadSketch = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'jennifer-procreate-sketch.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col h-full bg-[#111113] text-white select-none overflow-hidden font-sans">
      {/* Top Header */}
      <div className="h-12 bg-[#1c1c1f] border-b border-[#2c2c30] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FF2ADF] via-[#8253FF] to-[#009EFF] flex items-center justify-center font-bold text-xs shadow-md">
            🖌
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              Procreate Digital Studio
              <span className="text-[10px] bg-[#FF2ADF]/20 text-[#f472b6] px-1.5 py-0.5 rounded font-mono">Sketchbook</span>
            </span>
            <span className="text-[10px] text-[#888892]">Freehand illustration, brush physics &amp; visual ideation</span>
          </div>
        </div>

        {/* Brush Presets */}
        <div className="flex items-center bg-[#242429] p-1 rounded-lg border border-[#323238] text-xs">
          {(['ink', 'pencil', 'marker', 'eraser'] as BrushType[]).map(b => (
            <button
              key={b}
              onClick={() => setBrushType(b)}
              className={`px-3 py-1 rounded capitalize transition-colors ${
                brushType === b ? 'bg-[#8253FF] text-white font-medium shadow-sm' : 'text-[#8c8c9a] hover:text-white'
              }`}
            >
              {b === 'eraser' ? '🧹 Eraser' : b === 'ink' ? '✒️ Ink' : b === 'pencil' ? '✏️ Pencil' : '🖍 Marker'}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={clearCanvas}
            className="px-2.5 py-1.5 rounded-lg bg-[#242429] hover:bg-[#303038] text-xs text-[#bbb] hover:text-white transition-colors border border-[#323238]"
          >
            Clear
          </button>
          <button
            onClick={downloadSketch}
            className="bg-gradient-to-r from-[#8253FF] to-[#FF2ADF] hover:opacity-90 text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg shadow-sm transition-opacity"
          >
            Save Artwork
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#242429] hover:bg-[#303038] flex items-center justify-center text-[#999] hover:text-white transition-colors ml-1"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Split */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Brush Controls */}
        <div className="w-64 bg-[#18181b] border-r border-[#2c2c30] p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar text-xs shrink-0">
          <div>
            <span className="font-semibold text-[#8c8c9a] uppercase tracking-wider text-[11px] block mb-2">Palette Colors</span>
            <div className="grid grid-cols-4 gap-2">
              {ARTIST_PALETTE.map(c => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  style={{ backgroundColor: c }}
                  className={`w-8 h-8 rounded-lg border-2 transition-transform ${
                    color === c ? 'border-white scale-110 shadow-md ring-1 ring-white/40' : 'border-white/10'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-[#2c2c30]">
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#8c8c9a]">Brush Size</span>
                <span className="font-mono text-white">{size}px</span>
              </div>
              <input
                type="range"
                min="2"
                max="36"
                value={size}
                onChange={e => setSize(Number(e.target.value))}
                className="w-full accent-[#8253FF]"
              />
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#8c8c9a]">Opacity</span>
                <span className="font-mono text-white">{opacity}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={opacity}
                onChange={e => setOpacity(Number(e.target.value))}
                className="w-full accent-[#8253FF]"
              />
            </div>
          </div>

          <div className="mt-auto p-3 rounded-xl bg-[#202024] border border-[#2e2e34] text-[11px] text-[#8c8c9a]">
            Jennifer uses Procreate for initial character sketches, stickers, and hand-drawn visual motifs before vectorization.
          </div>
        </div>

        {/* Center Canvas Area */}
        <div className="flex-1 relative overflow-hidden flex items-center justify-center p-3 bg-[#0a0a0c]">
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full h-full rounded-2xl shadow-2xl cursor-crosshair touch-none border border-white/5"
          />
        </div>
      </div>
    </div>
  );
}
