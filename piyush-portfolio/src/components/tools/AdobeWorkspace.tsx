'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

type AdobeApp = 'photoshop' | 'illustrator' | 'aftereffects';

export default function AdobeWorkspace({ onClose }: { onClose?: () => void }) {
  const [activeApp, setActiveApp] = useState<AdobeApp>('photoshop');

  // Photoshop States
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(105);
  const [saturate, setSaturate] = useState(120);
  const [hueRotate, setHueRotate] = useState(0);
  const [blur, setBlur] = useState(0);
  const [sepia, setSepia] = useState(0);

  // Illustrator States
  const [activeShape, setActiveShape] = useState<'star' | 'polygon' | 'circle' | 'blob'>('star');
  const [strokeWidth, setStrokeWidth] = useState(4);
  const [fillColor, setFillColor] = useState('#8253FF');
  const [strokeColor, setStrokeColor] = useState('#00D8FF');

  // After Effects States
  const [isPlaying, setIsPlaying] = useState(false);
  const [timelineTime, setTimelineTime] = useState(0); // 0 to 100%

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimelineTime(t => (t >= 100 ? 0 : t + 2));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const applyPreset = (preset: 'vibrant' | 'noir' | 'cyber' | 'reset') => {
    switch (preset) {
      case 'vibrant':
        setBrightness(110);
        setContrast(125);
        setSaturate(160);
        setHueRotate(15);
        setBlur(0);
        setSepia(0);
        break;
      case 'noir':
        setBrightness(95);
        setContrast(150);
        setSaturate(0);
        setHueRotate(0);
        setBlur(0);
        setSepia(10);
        break;
      case 'cyber':
        setBrightness(115);
        setContrast(140);
        setSaturate(180);
        setHueRotate(140);
        setBlur(0);
        setSepia(0);
        break;
      case 'reset':
        setBrightness(100);
        setContrast(100);
        setSaturate(100);
        setHueRotate(0);
        setBlur(0);
        setSepia(0);
        break;
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#181818] text-[#cccccc] select-none overflow-hidden font-sans">
      {/* Adobe Header Bar */}
      <div className="h-12 bg-[#202020] border-b border-[#303030] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveApp('photoshop')}
              className={`w-7 h-7 rounded font-black text-xs flex items-center justify-center transition-all ${
                activeApp === 'photoshop' ? 'bg-[#31A8FF] text-[#001E36] ring-2 ring-white/50 scale-105' : 'bg-[#001E36] text-[#31A8FF]'
              }`}
              title="Adobe Photoshop"
            >
              Ps
            </button>
            <button
              onClick={() => setActiveApp('illustrator')}
              className={`w-7 h-7 rounded font-black text-xs flex items-center justify-center transition-all ${
                activeApp === 'illustrator' ? 'bg-[#FF9A00] text-[#331C00] ring-2 ring-white/50 scale-105' : 'bg-[#331C00] text-[#FF9A00]'
              }`}
              title="Adobe Illustrator"
            >
              Ai
            </button>
            <button
              onClick={() => setActiveApp('aftereffects')}
              className={`w-7 h-7 rounded font-black text-xs flex items-center justify-center transition-all ${
                activeApp === 'aftereffects' ? 'bg-[#9999FF] text-[#00005B] ring-2 ring-white/50 scale-105' : 'bg-[#00005B] text-[#9999FF]'
              }`}
              title="Adobe After Effects"
            >
              Ae
            </button>
          </div>

          <div className="flex flex-col pl-2 border-l border-white/10">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              Adobe Creative Studio
              <span className="text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded font-mono uppercase">
                {activeApp}
              </span>
            </span>
            <span className="text-[10px] text-[#888888]">
              {activeApp === 'photoshop' && 'Raster image grading & visual texture effects'}
              {activeApp === 'illustrator' && 'Precision vector curves & brand geometric artboards'}
              {activeApp === 'aftereffects' && 'Scrubbable motion choreography & keyframe curves'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded bg-[#2c2c2c] hover:bg-[#383838] flex items-center justify-center text-[#999] hover:text-white transition-colors"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main App Switcher Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* ================= 1. PHOTOSHOP MODE ================= */}
        {activeApp === 'photoshop' && (
          <div className="flex-1 flex overflow-hidden">
            {/* Left Filter Controls */}
            <div className="w-72 bg-[#222222] border-r border-[#303030] p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar text-xs shrink-0">
              <div className="flex items-center justify-between pb-2 border-b border-[#303030]">
                <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Adjustments &amp; Color</span>
                <span className="font-mono text-[10px] text-[#31A8FF]">PHOTO.PSD</span>
              </div>

              {/* Presets */}
              <div>
                <label className="block text-[#888] mb-1.5 text-[11px]">Film Presets</label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => applyPreset('vibrant')}
                    className="p-1.5 rounded bg-[#2c2c2c] hover:bg-[#383838] text-white text-[11px]"
                  >
                    ✨ Vibrant Pop
                  </button>
                  <button
                    onClick={() => applyPreset('noir')}
                    className="p-1.5 rounded bg-[#2c2c2c] hover:bg-[#383838] text-white text-[11px]"
                  >
                    🎞 Film Noir
                  </button>
                  <button
                    onClick={() => applyPreset('cyber')}
                    className="p-1.5 rounded bg-[#2c2c2c] hover:bg-[#383838] text-white text-[11px]"
                  >
                    👾 Cyberpunk
                  </button>
                  <button
                    onClick={() => applyPreset('reset')}
                    className="p-1.5 rounded bg-[#2c2c2c] hover:bg-[#383838] text-[#999] text-[11px]"
                  >
                    ↺ Reset
                  </button>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#aaa]">Brightness</span>
                    <span className="font-mono text-white">{brightness}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="180"
                    value={brightness}
                    onChange={e => setBrightness(Number(e.target.value))}
                    className="w-full accent-[#31A8FF]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#aaa]">Contrast</span>
                    <span className="font-mono text-white">{contrast}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    value={contrast}
                    onChange={e => setContrast(Number(e.target.value))}
                    className="w-full accent-[#31A8FF]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#aaa]">Saturation</span>
                    <span className="font-mono text-white">{saturate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="250"
                    value={saturate}
                    onChange={e => setSaturate(Number(e.target.value))}
                    className="w-full accent-[#31A8FF]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#aaa]">Hue Shift</span>
                    <span className="font-mono text-white">{hueRotate}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={hueRotate}
                    onChange={e => setHueRotate(Number(e.target.value))}
                    className="w-full accent-[#31A8FF]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#aaa]">Warm Sepia</span>
                    <span className="font-mono text-white">{sepia}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sepia}
                    onChange={e => setSepia(Number(e.target.value))}
                    className="w-full accent-[#31A8FF]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#aaa]">Lens Softness / Blur</span>
                    <span className="font-mono text-white">{blur}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="8"
                    value={blur}
                    onChange={e => setBlur(Number(e.target.value))}
                    className="w-full accent-[#31A8FF]"
                  />
                </div>
              </div>
            </div>

            {/* Photoshop Canvas Preview */}
            <div className="flex-1 bg-[#121212] flex items-center justify-center p-8 overflow-hidden relative">
              <div className="p-4 bg-[#1e1e1e] rounded-2xl shadow-2xl border border-white/5 flex flex-col items-center">
                <div className="relative w-80 h-96 rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/about/polaroid-mountain.webp"
                    alt="Photoshop Canvas"
                    fill
                    className="object-cover transition-all"
                    style={{
                      filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%) hue-rotate(${hueRotate}deg) sepia(${sepia}%) blur(${blur}px)`,
                    }}
                  />
                </div>
                <div className="pt-3 text-[11px] text-[#888] font-mono flex items-center justify-between w-full">
                  <span>Polaroid_Graded.psd</span>
                  <span>100% • RGB/8</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. ILLUSTRATOR MODE ================= */}
        {activeApp === 'illustrator' && (
          <div className="flex-1 flex overflow-hidden">
            {/* Left Vector Toolset */}
            <div className="w-72 bg-[#222222] border-r border-[#303030] p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar text-xs shrink-0">
              <div className="flex items-center justify-between pb-2 border-b border-[#303030]">
                <span className="font-semibold text-white uppercase tracking-wider text-[11px]">Vector Geometry</span>
                <span className="font-mono text-[10px] text-[#FF9A00]">BRAND_ICON.AI</span>
              </div>

              <div>
                <label className="block text-[#888] mb-1.5">Select Vector Path</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['star', 'polygon', 'circle', 'blob'] as const).map(shape => (
                    <button
                      key={shape}
                      onClick={() => setActiveShape(shape)}
                      className={`p-2 rounded capitalize text-left transition-colors ${
                        activeShape === shape ? 'bg-[#FF9A00] text-black font-semibold' : 'bg-[#2c2c2c] text-[#ccc]'
                      }`}
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-[#aaa]">Stroke Width</span>
                  <span className="font-mono text-white">{strokeWidth}px</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={strokeWidth}
                  onChange={e => setStrokeWidth(Number(e.target.value))}
                  className="w-full accent-[#FF9A00]"
                />
              </div>

              <div>
                <label className="block text-[#aaa] mb-1">Fill Color</label>
                <div className="flex gap-2">
                  {['#8253FF', '#009EFF', '#FF5100', '#00B25D', '#FF2ADF', 'transparent'].map(c => (
                    <button
                      key={c}
                      onClick={() => setFillColor(c)}
                      style={{ backgroundColor: c === 'transparent' ? '#333' : c }}
                      className={`w-6 h-6 rounded-full border-2 ${fillColor === c ? 'border-white scale-110' : 'border-transparent'}`}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#aaa] mb-1">Stroke Color</label>
                <div className="flex gap-2">
                  {['#00D8FF', '#ffffff', '#FF9A00', '#FF2ADF', '#00B25D'].map(c => (
                    <button
                      key={c}
                      onClick={() => setStrokeColor(c)}
                      style={{ backgroundColor: c }}
                      className={`w-6 h-6 rounded-full border-2 ${strokeColor === c ? 'border-white scale-110' : 'border-transparent'}`}
                      title={c}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Illustrator Canvas Preview */}
            <div className="flex-1 bg-[#151515] flex items-center justify-center p-8 overflow-hidden relative">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center">
                <svg width="280" height="280" viewBox="0 0 200 200" className="transition-all duration-300">
                  {activeShape === 'star' && (
                    <polygon
                      points="100,10 125,75 195,78 138,122 160,190 100,148 40,190 62,122 5,78 75,75"
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinejoin="round"
                    />
                  )}
                  {activeShape === 'polygon' && (
                    <polygon
                      points="100,15 175,55 175,145 100,185 25,145 25,55"
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeLinejoin="round"
                    />
                  )}
                  {activeShape === 'circle' && (
                    <circle
                      cx="100"
                      cy="100"
                      r="80"
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                    />
                  )}
                  {activeShape === 'blob' && (
                    <path
                      d="M100,20 C150,20 180,60 180,100 C180,150 140,180 100,180 C50,180 20,140 20,100 C20,50 60,20 100,20 Z"
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                    />
                  )}
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* ================= 3. AFTER EFFECTS MODE ================= */}
        {activeApp === 'aftereffects' && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* AE Viewport */}
            <div className="flex-1 bg-[#101010] flex items-center justify-center p-6 relative">
              <div className="p-8 rounded-2xl bg-[#191919] border border-white/10 shadow-2xl flex flex-col items-center justify-center w-80 h-72 relative">
                {/* Animated motion element linked to timelineTime */}
                <div
                  className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#9999FF] to-[#FF2ADF] flex items-center justify-center font-bold text-white text-xl shadow-xl transition-all"
                  style={{
                    transform: `rotate(${timelineTime * 3.6}deg) scale(${0.8 + Math.sin(timelineTime / 15) * 0.4})`,
                    opacity: 0.4 + (timelineTime / 100) * 0.6,
                  }}
                >
                  ✦
                </div>
                <div className="absolute bottom-3 text-[11px] font-mono text-[#888]">
                  Frame: {Math.round(timelineTime * 0.6)} / 60 fps
                </div>
              </div>
            </div>

            {/* Scrubbable Timeline Track */}
            <div className="h-44 bg-[#1e1e1e] border-t border-[#303030] p-4 flex flex-col justify-between">
              {/* Transport Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="px-4 py-1.5 rounded bg-[#9999FF] hover:bg-[#8585f5] text-[#00005B] font-bold text-xs shadow-md transition-colors"
                  >
                    {isPlaying ? '⏸ Pause' : '▶ Play'}
                  </button>
                  <button
                    onClick={() => { setIsPlaying(false); setTimelineTime(0); }}
                    className="px-2.5 py-1.5 rounded bg-[#2a2a2a] text-[#aaa] hover:text-white text-xs"
                  >
                    ⏮ Start
                  </button>
                </div>
                <div className="font-mono text-xs text-[#9999FF]">
                  00:00:0{Math.floor(timelineTime / 33)}:{(timelineTime % 30).toString().padStart(2, '0')}
                </div>
              </div>

              {/* Scrub Line */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] text-[#777] font-mono">
                  <span>0s</span>
                  <span>1s</span>
                  <span>2s</span>
                  <span>3s</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={timelineTime}
                  onChange={e => {
                    setIsPlaying(false);
                    setTimelineTime(Number(e.target.value));
                  }}
                  className="w-full accent-[#9999FF]"
                />
              </div>

              {/* Layer Tracks */}
              <div className="p-2 bg-[#161616] rounded border border-[#2d2d2d] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9999FF]" />
                  <span className="font-mono text-white text-[11px]">Layer 1: Motion_Sticker.shape</span>
                </div>
                <span className="text-[10px] text-[#777] font-mono">Easing: Cubic-Bezier (0.4, 0, 0.2, 1)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
