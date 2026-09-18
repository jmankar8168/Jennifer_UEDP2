'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface SampleUI {
  id: string;
  name: string;
  imgSrc: string;
  category: string;
  analysis: {
    hierarchyScore: number;
    contrastScore: number;
    focalPoint: string;
    strengths: string[];
    opportunities: string[];
  };
}

const SAMPLE_UIS: SampleUI[] = [
  {
    id: 'bento',
    name: 'Bento Tournaments View',
    imgSrc: '/work/bento/all-tournaments.webp',
    category: 'Product Design',
    analysis: {
      hierarchyScore: 96,
      contrastScore: 92,
      focalPoint: 'Center-left Active Contest Card & Orange Tag Pill',
      strengths: [
        'High contrast between the dark backdrop and vivid orange/blue categorical tiles.',
        'Clear scannability: primary numbers (prize pool, participants) are easily digestible in under 2 seconds.',
        'Tactile rounded corners (16-24px) convey a friendly, consumer-first gaming demeanor.',
      ],
      opportunities: [
        'Ensure the secondary subtitle maintains at least 4.5:1 contrast against the dark background on mobile screens.',
        'Add micro-pulse indicator next to live events to emphasize real-time activity.',
      ],
    },
  },
  {
    id: 'crowwd',
    name: 'Crowwd Project Cards',
    imgSrc: '/work/crowwd/bento.webp',
    category: 'Visual & UX Design',
    analysis: {
      hierarchyScore: 94,
      contrastScore: 89,
      focalPoint: 'Hero Project Banner & Funding Progress Bar',
      strengths: [
        'Elimination of dense crypto terminology creates a calm, high-trust user journey.',
        'Modular card layout adapts effortlessly across desktop and mobile viewports.',
        'Strong white-space balance preventing cognitive fatigue during discovery.',
      ],
      opportunities: [
        'Elevate CTA button saturation slightly to create an unmistakable single primary target.',
        'Add a subtle tooltip explaining onchain verification for non-crypto natives.',
      ],
    },
  },
  {
    id: 'velar',
    name: 'Velar DEX Interface',
    imgSrc: '/work/velar/hero.webp',
    category: 'DeFi Product System',
    analysis: {
      hierarchyScore: 98,
      contrastScore: 95,
      focalPoint: 'Interactive Swap Terminal & Token Selector',
      strengths: [
        'Crisp precision typography reflects institutional-grade security for Bitcoin DeFi.',
        'Seamless dark-mode execution with minimal eye strain during extended sessions.',
        'Logical top-to-bottom transaction flow: Input asset → Slippage setting → Output estimation.',
      ],
      opportunities: [
        'Incorporate subtle audio or haptic cue upon transaction completion to enhance confidence.',
      ],
    },
  },
];

export default function GeminiWorkspace({ onClose }: { onClose?: () => void }) {
  const [selectedUI, setSelectedUI] = useState<SampleUI>(SAMPLE_UIS[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [activeAnalysisView, setActiveAnalysisView] = useState<'overview' | 'accessibility' | 'flow'>('overview');

  const handleSelectUI = (ui: SampleUI) => {
    setIsAnalyzing(true);
    setSelectedUI(ui);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full bg-[#0d0f17] text-white select-none overflow-hidden font-sans">
      {/* Header */}
      <div className="h-12 bg-[#121624] border-b border-[#222940] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#1A73E8] via-[#9334E6] to-[#EA4335] flex items-center justify-center font-bold text-xs shadow-md">
            ✦
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              Gemini Multimodal Studio
              <span className="text-[10px] bg-[#9334E6]/20 text-[#d8b4fe] px-1.5 py-0.5 rounded font-mono">Gemini 2.5 Flash</span>
            </span>
            <span className="text-[10px] text-[#7d87a4]">Multimodal UI vision analysis, visual hierarchy &amp; UX audit</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#1a1f33] hover:bg-[#252b45] flex items-center justify-center text-[#999] hover:text-white transition-colors"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Split Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Image Viewport & Selector (6 cols) */}
        <div className="lg:col-span-6 bg-[#090b12] border-r border-[#1e2438] p-5 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#8b96b5] uppercase tracking-wider">Select UI Screen to Audit</span>
            <span className="text-[10px] text-[#7d87a4] font-mono">VISION MULTIMODAL</span>
          </div>

          {/* Sample Selectors */}
          <div className="grid grid-cols-3 gap-2">
            {SAMPLE_UIS.map(ui => (
              <button
                key={ui.id}
                onClick={() => handleSelectUI(ui)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  selectedUI.id === ui.id
                    ? 'border-[#9334E6] bg-[#1a1d30] shadow-md ring-1 ring-[#9334E6]'
                    : 'border-[#222940] bg-[#121624] text-[#8b96b5] hover:border-white/20'
                }`}
              >
                <div className="font-semibold text-xs text-white truncate">{ui.name}</div>
                <div className="text-[10px] text-[#7d87a4] truncate mt-0.5">{ui.category}</div>
              </button>
            ))}
          </div>

          {/* Image Display Frame with Vision Scan Effect */}
          <div className="relative rounded-2xl border border-[#222940] bg-[#121624] overflow-hidden flex items-center justify-center min-h-[300px] shadow-2xl group">
            {isAnalyzing && (
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#9334E6] border-t-transparent animate-spin" />
                <span className="text-xs text-[#d8b4fe] font-mono animate-pulse">Running Multimodal Vision Analysis...</span>
              </div>
            )}

            {/* Vision Reticle Overlays */}
            <div className="absolute top-3 left-3 z-20 bg-black/70 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-400 border border-emerald-400/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>VISION SCAN ACTIVE</span>
            </div>

            <div className="relative w-full h-[320px]">
              <Image
                src={selectedUI.imgSrc}
                alt={selectedUI.name}
                fill
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Custom Prompt Box */}
          <div className="mt-auto p-3.5 rounded-xl bg-[#121624] border border-[#222940] space-y-2">
            <span className="text-[11px] text-[#8b96b5] font-medium block">Ask Gemini a vision question about this UI:</span>
            <div className="flex gap-2">
              <input
                type="text"
                value={customPrompt}
                onChange={e => setCustomPrompt(e.target.value)}
                placeholder="e.g. Is the font scale readable on smaller viewports?"
                className="flex-1 bg-[#090b12] border border-[#222940] rounded-lg px-3 py-1.5 text-xs text-white placeholder-[#586280] outline-none focus:border-[#9334E6]"
              />
              <button
                onClick={() => {
                  if (!customPrompt.trim()) return;
                  setIsAnalyzing(true);
                  setTimeout(() => {
                    setIsAnalyzing(false);
                    setCustomPrompt('');
                  }, 800);
                }}
                className="bg-gradient-to-r from-[#1A73E8] to-[#9334E6] text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:opacity-90 transition-opacity"
              >
                Scan
              </button>
            </div>
          </div>
        </div>

        {/* Right Multimodal Audit Report (6 cols) */}
        <div className="lg:col-span-6 bg-[#0e111c] p-6 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
          {/* Header & Tabs */}
          <div className="flex items-center justify-between border-b border-[#222940] pb-3">
            <div>
              <h2 className="text-sm font-bold text-white flex items-center gap-2">
                <span>✦</span> Vision Audit: {selectedUI.name}
              </h2>
              <span className="text-[11px] text-[#7d87a4]">Analyzed with Gemini Multimodal UI Intelligence</span>
            </div>

            <div className="flex bg-[#121624] p-0.5 rounded-lg border border-[#222940] text-xs">
              <button
                onClick={() => setActiveAnalysisView('overview')}
                className={`px-2.5 py-1 rounded transition-colors ${activeAnalysisView === 'overview' ? 'bg-[#9334E6] text-white font-medium' : 'text-[#7d87a4] hover:text-white'}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveAnalysisView('accessibility')}
                className={`px-2.5 py-1 rounded transition-colors ${activeAnalysisView === 'accessibility' ? 'bg-[#9334E6] text-white font-medium' : 'text-[#7d87a4] hover:text-white'}`}
              >
                Contrast
              </button>
              <button
                onClick={() => setActiveAnalysisView('flow')}
                className={`px-2.5 py-1 rounded transition-colors ${activeAnalysisView === 'flow' ? 'bg-[#9334E6] text-white font-medium' : 'text-[#7d87a4] hover:text-white'}`}
              >
                Focal Point
              </button>
            </div>
          </div>

          {/* Scores Breakdown */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-[#141827] border border-[#222940]">
              <span className="text-[11px] text-[#7d87a4] block mb-1">Visual Hierarchy Score</span>
              <div className="text-2xl font-black text-[#9334E6] font-mono flex items-baseline gap-1">
                <span>{selectedUI.analysis.hierarchyScore}</span>
                <span className="text-xs font-normal text-white/50">/ 100</span>
              </div>
              <span className="text-[10px] text-emerald-400 mt-1 block">Optimal visual flow &amp; anchor elements</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141827] border border-[#222940]">
              <span className="text-[11px] text-[#7d87a4] block mb-1">Color Contrast Ratio</span>
              <div className="text-2xl font-black text-[#1A73E8] font-mono flex items-baseline gap-1">
                <span>{selectedUI.analysis.contrastScore}</span>
                <span className="text-xs font-normal text-white/50">/ 100</span>
              </div>
              <span className="text-[10px] text-emerald-400 mt-1 block">Passes WCAG 2.1 AA benchmarks</span>
            </div>
          </div>

          {/* Focal Point Indicator */}
          <div className="p-4 rounded-xl bg-[#141827] border border-[#222940] space-y-1">
            <span className="text-[11px] text-[#8b96b5] font-semibold uppercase tracking-wider block">Primary Focal Anchor</span>
            <div className="text-xs font-mono text-amber-300 flex items-center gap-2">
              <span>🎯</span>
              <span>{selectedUI.analysis.focalPoint}</span>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="text-emerald-400">✓</span> Design Strengths
            </h4>
            <div className="space-y-2">
              {selectedUI.analysis.strengths.map((str, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#121624] border border-[#222940] text-xs text-[#d1d7eb] leading-relaxed">
                  {str}
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities to Elevate */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              <span className="text-amber-400">⚡</span> Strategic Recommendations
            </h4>
            <div className="space-y-2">
              {selectedUI.analysis.opportunities.map((opp, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#121624] border border-[#222940] text-xs text-[#d1d7eb] leading-relaxed">
                  {opp}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
