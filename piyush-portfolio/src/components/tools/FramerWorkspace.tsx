'use client';

import React, { useState } from 'react';

interface SiteContent {
  brandName: string;
  badgeText: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  secondaryCtaText: string;
  themeColor: string;
  bgColor: string;
  cards: { title: string; desc: string; icon: string }[];
}

const DEFAULT_CONTENT: SiteContent = {
  brandName: 'Studio Jennifer',
  badgeText: '✨ Available for new projects Q4 2026',
  headline: 'Crafting digital experiences that spark delight & drive momentum.',
  subheadline: 'Product designer & creative technologist specializing in brand systems, modern web experiences, and tactile interfaces.',
  ctaText: 'Start a Project',
  secondaryCtaText: 'View Case Studies',
  themeColor: '#8253FF',
  bgColor: '#0d0e12',
  cards: [
    { title: 'Brand Architecture', desc: 'Distinctive visual identities built with intentional typography, color science, and tactile design.', icon: '🎨' },
    { title: 'Product & Web Apps', desc: 'Full-stack UI/UX from interactive prototypes to production-ready design tokens.', icon: '⚡' },
    { title: 'Playful Interactions', desc: 'Micro-interactions, dynamic transitions, and tactile user feedback that memorable brands need.', icon: '✨' },
  ],
};

export default function FramerWorkspace({ onClose }: { onClose?: () => void }) {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [published, setPublished] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'theme' | 'cards'>('hero');

  const handleCardChange = (index: number, field: 'title' | 'desc', val: string) => {
    const nextCards = [...content.cards];
    nextCards[index] = { ...nextCards[index], [field]: val };
    setContent({ ...content, cards: nextCards });
  };

  const getContainerWidth = () => {
    switch (device) {
      case 'mobile': return 'max-w-[375px]';
      case 'tablet': return 'max-w-[720px]';
      case 'desktop': return 'w-full max-w-[1060px]';
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0a0c] text-white select-none overflow-hidden font-sans">
      {/* Framer Top Bar */}
      <div className="h-12 bg-[#121316] border-b border-[#23252b] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#8253FF] to-[#009EFF] flex items-center justify-center font-bold text-xs shadow-md">
            F
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              Framer Responsive Canvas
              <span className="text-[10px] bg-[#8253FF]/20 text-[#cbb6ff] px-1.5 py-0.5 rounded font-mono">v26.4</span>
            </span>
            <span className="text-[10px] text-[#717682]">Interactive site preview & responsive breakpoints</span>
          </div>
        </div>

        {/* Breakpoint Switcher */}
        <div className="flex items-center bg-[#1a1c23] p-1 rounded-lg border border-[#2b2e38] text-xs">
          <button
            onClick={() => setDevice('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors ${device === 'desktop' ? 'bg-[#2b2e38] text-white font-medium shadow-sm' : 'text-[#888e9b] hover:text-white'}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setDevice('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors ${device === 'tablet' ? 'bg-[#2b2e38] text-white font-medium shadow-sm' : 'text-[#888e9b] hover:text-white'}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M12 18h.01"/></svg>
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            onClick={() => setDevice('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded transition-colors ${device === 'mobile' ? 'bg-[#2b2e38] text-white font-medium shadow-sm' : 'text-[#888e9b] hover:text-white'}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01"/></svg>
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <div className="flex bg-[#1a1c23] p-0.5 rounded-lg border border-[#2b2e38] text-xs">
            <button
              onClick={() => setMode('edit')}
              className={`px-3 py-1 rounded transition-all ${mode === 'edit' ? 'bg-[#8253FF] text-white font-medium' : 'text-[#888e9b] hover:text-white'}`}
            >
              Edit
            </button>
            <button
              onClick={() => setMode('preview')}
              className={`px-3 py-1 rounded transition-all ${mode === 'preview' ? 'bg-[#8253FF] text-white font-medium' : 'text-[#888e9b] hover:text-white'}`}
            >
              Preview
            </button>
          </div>

          <button
            onClick={() => setPublished(true)}
            className="flex items-center gap-1.5 bg-gradient-to-r from-[#009EFF] to-[#00B25D] hover:opacity-90 text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow-sm transition-opacity"
          >
            <span>Publish</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 ml-2 rounded-lg bg-[#1a1c23] hover:bg-[#252833] flex items-center justify-center text-[#999] hover:text-white transition-colors"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Workspace Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Inspector / Content Editor (when in Edit mode) */}
        {mode === 'edit' && (
          <div className="w-80 bg-[#121316] border-r border-[#23252b] flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
            <div className="p-3 border-b border-[#23252b] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#888e9b] uppercase tracking-wider">Site Customizer</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab('hero')}
                  className={`px-2 py-0.5 rounded text-[11px] ${activeTab === 'hero' ? 'bg-[#23252b] text-white' : 'text-[#717682]'}`}
                >
                  Hero
                </button>
                <button
                  onClick={() => setActiveTab('cards')}
                  className={`px-2 py-0.5 rounded text-[11px] ${activeTab === 'cards' ? 'bg-[#23252b] text-white' : 'text-[#717682]'}`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setActiveTab('theme')}
                  className={`px-2 py-0.5 rounded text-[11px] ${activeTab === 'theme' ? 'bg-[#23252b] text-white' : 'text-[#717682]'}`}
                >
                  Theme
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4 text-xs">
              {activeTab === 'hero' && (
                <>
                  <div>
                    <label className="block text-[#888e9b] mb-1">Brand / Logo Name</label>
                    <input
                      type="text"
                      value={content.brandName}
                      onChange={e => setContent({ ...content, brandName: e.target.value })}
                      className="w-full bg-[#1a1c23] border border-[#2b2e38] rounded px-2.5 py-1.5 text-white focus:border-[#8253FF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#888e9b] mb-1">Badge Announcement</label>
                    <input
                      type="text"
                      value={content.badgeText}
                      onChange={e => setContent({ ...content, badgeText: e.target.value })}
                      className="w-full bg-[#1a1c23] border border-[#2b2e38] rounded px-2.5 py-1.5 text-white focus:border-[#8253FF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#888e9b] mb-1">Main Headline</label>
                    <textarea
                      rows={3}
                      value={content.headline}
                      onChange={e => setContent({ ...content, headline: e.target.value })}
                      className="w-full bg-[#1a1c23] border border-[#2b2e38] rounded px-2.5 py-1.5 text-white focus:border-[#8253FF] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#888e9b] mb-1">Subheadline</label>
                    <textarea
                      rows={3}
                      value={content.subheadline}
                      onChange={e => setContent({ ...content, subheadline: e.target.value })}
                      className="w-full bg-[#1a1c23] border border-[#2b2e38] rounded px-2.5 py-1.5 text-white focus:border-[#8253FF] outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[#888e9b] mb-1">Primary CTA</label>
                      <input
                        type="text"
                        value={content.ctaText}
                        onChange={e => setContent({ ...content, ctaText: e.target.value })}
                        className="w-full bg-[#1a1c23] border border-[#2b2e38] rounded px-2 py-1.5 text-white focus:border-[#8253FF] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#888e9b] mb-1">Secondary CTA</label>
                      <input
                        type="text"
                        value={content.secondaryCtaText}
                        onChange={e => setContent({ ...content, secondaryCtaText: e.target.value })}
                        className="w-full bg-[#1a1c23] border border-[#2b2e38] rounded px-2 py-1.5 text-white focus:border-[#8253FF] outline-none"
                      />
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'cards' && (
                <div className="space-y-3">
                  <span className="text-[11px] text-[#717682]">Edit value cards shown in the preview</span>
                  {content.cards.map((card, idx) => (
                    <div key={idx} className="bg-[#1a1c23] p-3 rounded-lg border border-[#2b2e38] space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{card.icon}</span>
                        <input
                          type="text"
                          value={card.title}
                          onChange={e => handleCardChange(idx, 'title', e.target.value)}
                          className="flex-1 bg-[#121316] border border-[#2b2e38] rounded px-2 py-1 text-white font-medium"
                        />
                      </div>
                      <textarea
                        rows={2}
                        value={card.desc}
                        onChange={e => handleCardChange(idx, 'desc', e.target.value)}
                        className="w-full bg-[#121316] border border-[#2b2e38] rounded px-2 py-1 text-[#bbb] text-[11px]"
                      />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'theme' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[#888e9b] mb-1.5">Accent Color</label>
                    <div className="flex items-center gap-2">
                      {['#8253FF', '#009EFF', '#FF5100', '#00B25D', '#FF2ADF'].map(col => (
                        <button
                          key={col}
                          onClick={() => setContent({ ...content, themeColor: col })}
                          style={{ backgroundColor: col }}
                          className={`w-6 h-6 rounded-full border-2 transition-transform ${content.themeColor === col ? 'scale-110 border-white' : 'border-transparent'}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#888e9b] mb-1.5">Background Atmosphere</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { label: 'Obsidian Dark', val: '#0d0e12' },
                        { label: 'Deep Violet', val: '#110d1c' },
                        { label: 'Midnight Blue', val: '#0b111e' },
                        { label: 'Onyx Studio', val: '#18191d' },
                      ].map(theme => (
                        <button
                          key={theme.val}
                          onClick={() => setContent({ ...content, bgColor: theme.val })}
                          className={`p-2 rounded border text-left text-[11px] transition-colors ${content.bgColor === theme.val ? 'border-[#8253FF] bg-[#1a1c23] text-white' : 'border-[#2b2e38] text-[#888e9b] hover:text-white'}`}
                        >
                          <div className="w-3 h-3 rounded-full mb-1 border border-white/20" style={{ backgroundColor: theme.val }} />
                          {theme.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="p-3 bg-[#181920] rounded-lg border border-[#262833] text-[11px] text-[#888e9b] flex items-center gap-2">
                <span className="text-[#8253FF] text-base">✦</span>
                <span>Click &quot;Preview&quot; in the top bar to test live animations and responsiveness!</span>
              </div>
            </div>
          </div>
        )}

        {/* Center Preview Canvas */}
        <div className="flex-1 bg-[#060709] flex flex-col items-center justify-start p-4 sm:p-8 overflow-auto">
          {/* Viewport Frame */}
          <div
            className={`w-full ${getContainerWidth()} transition-all duration-300 ease-out rounded-2xl shadow-2xl border border-[#2b2e38] overflow-hidden flex flex-col shrink-0`}
            style={{ backgroundColor: content.bgColor, minHeight: '560px' }}
          >
            {/* Fake Browser Top (if desktop/tablet) */}
            <div className="h-9 bg-black/40 backdrop-blur border-b border-white/5 px-4 flex items-center justify-between text-xs text-[#717682]">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="bg-white/5 px-4 py-1 rounded-full text-[10px] text-white/60 font-mono flex items-center gap-1">
                <span>🔒</span> {content.brandName.toLowerCase().replace(/\s+/g, '')}.framer.website
              </div>
              <div className="text-[10px] uppercase font-mono tracking-wider">{device}</div>
            </div>

            {/* Simulated Live Website Content */}
            <div className="p-6 sm:p-10 flex flex-col flex-1">
              {/* Site Nav */}
              <div className="flex items-center justify-between pb-8 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white"
                    style={{ backgroundColor: content.themeColor }}
                  >
                    {content.brandName[0]}
                  </div>
                  <span className="font-semibold text-sm tracking-tight text-white">{content.brandName}</span>
                </div>

                <div className="hidden sm:flex items-center gap-6 text-xs text-white/70">
                  <span className="hover:text-white cursor-pointer transition-colors">Work</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Philosophy</span>
                  <span className="hover:text-white cursor-pointer transition-colors">About</span>
                  <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
                </div>

                <button
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
                  style={{ backgroundColor: content.themeColor }}
                >
                  {content.ctaText}
                </button>
              </div>

              {/* Hero Section */}
              <div className="py-12 sm:py-16 text-center max-w-2xl mx-auto space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/80 font-medium">
                  {content.badgeText}
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {content.headline}
                </h1>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed max-w-xl mx-auto">
                  {content.subheadline}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-1.5"
                    style={{ backgroundColor: content.themeColor }}
                  >
                    <span>{content.ctaText}</span>
                    <span>→</span>
                  </button>
                  <button className="px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                    {content.secondaryCtaText}
                  </button>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-t border-white/5">
                {content.cards.map((card, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg mb-3 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-sm text-white mb-1.5">{card.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
                <span>© 2026 {content.brandName}. Powered by Framer.</span>
                <span className="flex items-center gap-1 text-white/60">
                  <span>Built with passion & precision</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Published Modal Toast */}
      {published && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#181920] border border-[#303340] rounded-2xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-14 h-14 bg-gradient-to-tr from-[#00B25D] to-[#009EFF] rounded-full flex items-center justify-center text-2xl mx-auto shadow-lg">
              🎉
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Your Site is Published!</h3>
              <p className="text-xs text-[#888e9b] mt-1">
                Framer has compiled your responsive layout with ultra-fast edge delivery.
              </p>
            </div>
            <div className="p-2.5 bg-[#121316] rounded-lg border border-[#262833] font-mono text-xs text-[#009EFF] flex items-center justify-between">
              <span>https://{content.brandName.toLowerCase().replace(/\s+/g, '')}.framer.website</span>
              <span className="text-[10px] bg-[#009EFF]/20 text-[#009EFF] px-2 py-0.5 rounded">LIVE</span>
            </div>
            <button
              onClick={() => setPublished(false)}
              className="w-full bg-[#8253FF] hover:bg-[#713fe6] text-white font-semibold py-2 rounded-lg text-xs transition-colors"
            >
              Continue Editing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
