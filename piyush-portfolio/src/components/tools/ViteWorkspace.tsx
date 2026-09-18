'use client';

import React, { useState } from 'react';

export default function ViteWorkspace({ onClose }: { onClose?: () => void }) {
  const [isRunning, setIsRunning] = useState(true);
  const [coldStartTime, setColdStartTime] = useState(38);
  const [hmrTime, setHmrTime] = useState(7);
  const [isRestarting, setIsRestarting] = useState(false);
  const [isBenchmarking, setIsBenchmarking] = useState(false);
  const [benchmarkProgress, setBenchmarkProgress] = useState<{ vite: number; legacy: number } | null>(null);

  const [logs, setLogs] = useState<string[]>([
    '  VITE v6.1.0  ready in 38 ms',
    '',
    '  ➜  Local:   http://localhost:5173/',
    '  ➜  Network: use --host to expose',
    '  ➜  press h + enter to show help',
    '',
    '[vite] (client) vite:ws connected',
    '[vite] (client) page reload /src/components/Hero.tsx',
  ]);

  const triggerHMR = () => {
    const randomMs = Math.floor(Math.random() * 8) + 4;
    setHmrTime(randomMs);
    setLogs(prev => [
      ...prev,
      `[vite] hmr update /src/styles/tokens.css (x${prev.length}) in ${randomMs}ms`,
    ]);
  };

  const restartServer = () => {
    setIsRestarting(true);
    setIsRunning(false);
    setLogs(prev => [...prev, '--- Shutting down server on port 5173 ---']);

    setTimeout(() => {
      const newCold = Math.floor(Math.random() * 15) + 32;
      setColdStartTime(newCold);
      setIsRunning(true);
      setIsRestarting(false);
      setLogs(prev => [
        ...prev,
        `  VITE v6.1.0  ready in ${newCold} ms`,
        '  ➜  Local:   http://localhost:5173/',
        '[vite] Ready for blazing fast development!',
      ]);
    }, 450);
  };

  const runBenchmark = () => {
    if (isBenchmarking) return;
    setIsBenchmarking(true);
    setBenchmarkProgress({ vite: 0, legacy: 0 });

    // Vite finishes in ~300ms
    setTimeout(() => {
      setBenchmarkProgress(prev => prev ? { ...prev, vite: 100 } : null);
    }, 350);

    // Legacy bundler finishes in ~2200ms
    const interval = setInterval(() => {
      setBenchmarkProgress(prev => {
        if (!prev) return null;
        if (prev.legacy >= 100) {
          clearInterval(interval);
          setIsBenchmarking(false);
          return { vite: 100, legacy: 100 };
        }
        return { ...prev, legacy: prev.legacy + 15 };
      });
    }, 200);
  };

  return (
    <div className="flex flex-col h-full bg-[#0c0e14] text-white select-none overflow-hidden font-sans">
      {/* Vite Header */}
      <div className="h-12 bg-[#12151f] border-b border-[#222736] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FFD62E] via-[#BD34FE] to-[#41D1FF] flex items-center justify-center font-bold text-xs shadow-md">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              Vite Speed Dashboard
              <span className="text-[10px] bg-[#BD34FE]/20 text-[#e49cff] px-1.5 py-0.5 rounded font-mono">v6.1</span>
            </span>
            <span className="text-[10px] text-[#717b8f]">Next-generation frontend tooling &amp; native ESM engine</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={restartServer}
            disabled={isRestarting}
            className="flex items-center gap-1.5 bg-[#1b202e] hover:bg-[#252c3f] border border-[#2b3347] text-white text-xs px-3 py-1.5 rounded-lg transition-colors"
          >
            <span>{isRestarting ? 'Restarting...' : '⚡ Cold Restart'}</span>
          </button>
          <button
            onClick={triggerHMR}
            className="bg-gradient-to-r from-[#BD34FE] to-[#41D1FF] hover:opacity-90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-opacity"
          >
            🔥 Trigger HMR
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#1b202e] hover:bg-[#252c3f] flex items-center justify-center text-[#999] hover:text-white transition-colors ml-1"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Stats & Speed Benchmark Panel (5 cols) */}
        <div className="lg:col-span-5 bg-[#0f111a] border-r border-[#1e2332] p-5 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
          {/* Status Metrics */}
          <div>
            <h3 className="text-xs font-semibold text-[#8b95a8] uppercase tracking-wider mb-3">Server Telemetry</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#151924] border border-[#242b3d]">
                <span className="text-[11px] text-[#7b8599] block mb-1">Cold Server Start</span>
                <div className="text-2xl font-black text-[#41D1FF] font-mono flex items-baseline gap-1">
                  <span>{isRunning ? coldStartTime : '--'}</span>
                  <span className="text-xs font-normal text-white/50">ms</span>
                </div>
                <span className="text-[10px] text-emerald-400 mt-1 block">~120x faster than Webpack</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#151924] border border-[#242b3d]">
                <span className="text-[11px] text-[#7b8599] block mb-1">HMR Update Speed</span>
                <div className="text-2xl font-black text-[#BD34FE] font-mono flex items-baseline gap-1">
                  <span>{isRunning ? hmrTime : '--'}</span>
                  <span className="text-xs font-normal text-white/50">ms</span>
                </div>
                <span className="text-[10px] text-emerald-400 mt-1 block">Sub-frame instant feedback</span>
              </div>
            </div>
          </div>

          {/* Interactive Benchmark Card */}
          <div className="p-4 rounded-xl bg-[#151924] border border-[#242b3d] space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>⏱</span> Bundler Speed Benchmark
              </h4>
              <button
                onClick={runBenchmark}
                disabled={isBenchmarking}
                className="text-[11px] bg-[#BD34FE]/20 hover:bg-[#BD34FE]/30 text-[#e49cff] border border-[#BD34FE]/40 px-2.5 py-1 rounded font-medium transition-colors disabled:opacity-50"
              >
                {isBenchmarking ? 'Simulating...' : 'Run Benchmark'}
              </button>
            </div>

            <p className="text-[11px] text-[#7b8599]">
              Simulating bundle execution for a 50-component interactive design system:
            </p>

            {/* Vite Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-white font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#41D1FF]" /> Vite (Native ESM)
                </span>
                <span className="font-mono text-[#41D1FF]">{benchmarkProgress ? (benchmarkProgress.vite === 100 ? '38 ms ✓' : 'Compiling...') : '38 ms'}</span>
              </div>
              <div className="h-2 bg-[#1f2536] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#BD34FE] to-[#41D1FF] transition-all duration-300 rounded-full"
                  style={{ width: benchmarkProgress ? `${benchmarkProgress.vite}%` : '100%' }}
                />
              </div>
            </div>

            {/* Legacy Progress bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-[#7b8599] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-500" /> Legacy Bundler (Webpack)
                </span>
                <span className="font-mono text-gray-400">{benchmarkProgress ? `${Math.min(benchmarkProgress.legacy * 35, 3450)} ms` : '3,450 ms'}</span>
              </div>
              <div className="h-2 bg-[#1f2536] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-500 transition-all duration-200 rounded-full"
                  style={{ width: benchmarkProgress ? `${benchmarkProgress.legacy}%` : '100%' }}
                />
              </div>
            </div>
          </div>

          {/* Jennifer's Workflow Quote */}
          <div className="mt-auto p-4 rounded-xl bg-gradient-to-br from-[#171a25] to-[#12141d] border border-white/5 space-y-2">
            <span className="text-[10px] text-[#BD34FE] font-bold uppercase tracking-wider block">Designer&apos;s Advantage</span>
            <p className="text-xs text-[#a0aabf] italic leading-relaxed">
              &quot;Instant HMR means I can tweak micro-animations, typography, and spacing with zero downtime. My creative flow never gets interrupted by long compilation stalls.&quot;
            </p>
            <span className="text-[11px] text-white font-medium block">— Jennifer Mankar</span>
          </div>
        </div>

        {/* Right Terminal Console (7 cols) */}
        <div className="lg:col-span-7 bg-[#07090e] flex flex-col overflow-hidden">
          <div className="h-9 bg-[#0e1118] border-b border-[#1b202c] px-4 flex items-center justify-between text-xs text-[#717b8f]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00B25D]" />
              <span className="font-mono text-white text-[11px]">zsh • vite-dev-server:5173</span>
            </div>
            <button
              onClick={() => setLogs(['[vite] Terminal cleared.', '  ➜  Local: http://localhost:5173/'])}
              className="hover:text-white transition-colors text-[10px]"
            >
              Clear Console
            </button>
          </div>

          {/* Terminal Output */}
          <div className="flex-1 p-4 font-mono text-xs text-[#b8c2d4] overflow-y-auto custom-scrollbar space-y-1">
            {logs.map((line, i) => (
              <div
                key={i}
                className={`leading-relaxed ${
                  line.includes('VITE') ? 'text-[#41D1FF] font-bold' :
                  line.includes('Local') ? 'text-[#00B25D] font-bold underline cursor-pointer' :
                  line.includes('[vite] hmr') ? 'text-[#BD34FE]' :
                  line.includes('Shutting down') ? 'text-amber-400' :
                  'text-[#8b95a8]'
                }`}
              >
                {line}
              </div>
            ))}
            {isRestarting && (
              <div className="text-amber-400 animate-pulse">
                ⚡ Initializing ESBuild pre-bundling modules...
              </div>
            )}
          </div>

          {/* Bottom Bar Info */}
          <div className="h-8 bg-[#0b0e14] border-t border-[#1b202c] px-4 flex items-center justify-between text-[10px] text-[#556075] font-mono">
            <span>Port: 5173 (TCP) • Vite HMR Active</span>
            <span>UTF-8 • Node v22.11.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
