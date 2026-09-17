'use client';

import React from 'react';
import BlockBlastGame from './BlockBlastGame';

export default function PlaygroundFrame() {
  return (
    <div className="absolute pointer-events-auto" style={{ left: 900, top: 3450, width: 1400, height: 900 }}>
      {/* Frame Label */}
      <div className="absolute -top-7 left-10 text-[11px] font-semibold text-[var(--figma-text-secondary)] flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#8253FF] inline-block"/>
        <span>Playground (Block Blast Puzzle)</span>
      </div>

      <div className="p-8 rounded-2xl bg-white/60 dark:bg-[#202020]/60 border border-[var(--figma-border)] backdrop-blur-md shadow-xl w-full h-full flex flex-col items-center justify-between">
        {/* Header Section */}
        <div className="w-full flex items-center justify-between mb-2">
          <div>
            <h2 className="text-[24px] font-bold text-[var(--figma-text)] tracking-tight">
              Playground Puzzle
            </h2>
            <p className="text-[14px] text-[var(--figma-text-secondary)]">
              Drag & drop blocks onto the 8×8 board to clear full rows and columns.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#8253FF]/10 text-[#8253FF] text-[12px] font-semibold border border-[#8253FF]/20">
              Block Blast
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold border border-emerald-500/20">
              Interactive Easter Egg
            </span>
          </div>
        </div>

        {/* Center Game Arena */}
        <div className="flex-1 w-full flex items-center justify-center">
          <BlockBlastGame />
        </div>

        {/* Bottom Tip */}
        <div className="text-[12px] text-[var(--figma-text-secondary)] flex items-center gap-4">
          <span>Tip: Complete multiple rows or columns simultaneously for massive combo multipliers!</span>
          <span>•</span>
          <span>Game over occurs when no pieces in your tray can fit anywhere on the board.</span>
        </div>
      </div>
    </div>
  );
}
