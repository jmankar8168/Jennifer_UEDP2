'use client';

import React, { useState } from 'react';

interface CanvaTemplate {
  id: string;
  name: string;
  headline: string;
  subhead: string;
  badge: string;
  footer: string;
  bgGradient: string;
  sticker: string;
}

const TEMPLATES: CanvaTemplate[] = [
  {
    id: 'launch',
    name: 'Portfolio Launch 2026',
    headline: 'Jennifer Mankar',
    subhead: 'Design Systems · Product Architecture · Tactile UI',
    badge: '✨ NEW WORK LIVE',
    footer: 'jennifer-portfolio-phi.vercel.app',
    bgGradient: 'from-[#7D2AE8] via-[#00C4CC] to-[#121217]',
    sticker: '🎨',
  },
  {
    id: 'workshop',
    name: 'Design Masterclass',
    headline: 'Tactile Interfaces',
    subhead: 'How to bring physical joy & micro-motion back to digital apps',
    badge: '🎟 COMMUNITY SESSION',
    footer: 'Inner Circle Community · Base',
    bgGradient: 'from-[#FF5100] via-[#FF2ADF] to-[#1e1026]',
    sticker: '⚡',
  },
  {
    id: 'prediction',
    name: 'Bento Feature Drop',
    headline: 'Playable Markets',
    subhead: 'Predict outcomes with friends. Zero crypto friction, 100% fun.',
    badge: '🏆 BENTO.FUN V2',
    footer: 'Designed by Jennifer Mankar',
    bgGradient: 'from-[#009EFF] via-[#00B25D] to-[#0c1a18]',
    sticker: '🍱',
  },
];

export default function CanvaWorkspace({ onClose }: { onClose?: () => void }) {
  const [activeTemplate, setActiveTemplate] = useState<CanvaTemplate>(TEMPLATES[0]);
  const [headline, setHeadline] = useState(TEMPLATES[0].headline);
  const [subhead, setSubhead] = useState(TEMPLATES[0].subhead);
  const [badge, setBadge] = useState(TEMPLATES[0].badge);
  const [stickerRotation, setStickerRotation] = useState(0);
  const [stickerScale, setStickerScale] = useState(1);
  const [showExportModal, setShowExportModal] = useState(false);

  const switchTemplate = (t: CanvaTemplate) => {
    setActiveTemplate(t);
    setHeadline(t.headline);
    setSubhead(t.subhead);
    setBadge(t.badge);
    setStickerRotation(0);
  };

  const shuffleSticker = () => {
    setStickerRotation(Math.floor(Math.random() * 60) - 30);
    setStickerScale(0.9 + Math.random() * 0.3);
  };

  return (
    <div className="flex flex-col h-full bg-[#0e1017] text-white select-none overflow-hidden font-sans">
      {/* Top Header */}
      <div className="h-12 bg-[#141824] border-b border-[#252b3d] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center font-bold text-xs shadow-md">
            C
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              Canva Quick Studio
              <span className="text-[10px] bg-[#00C4CC]/20 text-[#67e8f9] px-1.5 py-0.5 rounded font-mono">Card &amp; Poster Maker</span>
            </span>
            <span className="text-[10px] text-[#7884a2]">Rapid marketing graphics, event posters &amp; social cards</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={shuffleSticker}
            className="px-3 py-1.5 rounded-lg bg-[#1e2436] hover:bg-[#283047] text-xs text-[#cfd6e6] transition-colors border border-[#2e3752]"
          >
            🎲 Shuffle Sticker
          </button>
          <button
            onClick={() => setShowExportModal(true)}
            className="bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] hover:opacity-90 text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg shadow-md transition-opacity"
          >
            Export Graphic
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#1e2436] hover:bg-[#283047] flex items-center justify-center text-[#999] hover:text-white transition-colors ml-1"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Template & Customizer Sidebar */}
        <div className="w-80 bg-[#111420] border-r border-[#202638] p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar text-xs shrink-0">
          <div>
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] block mb-2">Design Templates</span>
            <div className="space-y-2">
              {TEMPLATES.map(t => (
                <button
                  key={t.id}
                  onClick={() => switchTemplate(t)}
                  className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                    activeTemplate.id === t.id
                      ? 'border-[#00C4CC] bg-[#1a1f33] ring-1 ring-[#00C4CC]'
                      : 'border-[#252c40] bg-[#151926] text-[#8e9bb5] hover:border-white/20'
                  }`}
                >
                  <div className="font-semibold text-white text-xs">{t.name}</div>
                  <div className="text-[10px] text-[#717e99] truncate mt-0.5">{t.headline}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-[#202638]">
            <span className="font-semibold text-white uppercase tracking-wider text-[11px] block">Customize Copy</span>
            <div>
              <label className="block text-[#828ea8] mb-1">Top Badge</label>
              <input
                type="text"
                value={badge}
                onChange={e => setBadge(e.target.value)}
                className="w-full bg-[#181d2c] border border-[#2b344d] rounded-lg px-2.5 py-1.5 text-white outline-none focus:border-[#00C4CC]"
              />
            </div>

            <div>
              <label className="block text-[#828ea8] mb-1">Headline Text</label>
              <input
                type="text"
                value={headline}
                onChange={e => setHeadline(e.target.value)}
                className="w-full bg-[#181d2c] border border-[#2b344d] rounded-lg px-2.5 py-1.5 text-white outline-none focus:border-[#00C4CC]"
              />
            </div>

            <div>
              <label className="block text-[#828ea8] mb-1">Description Subtitle</label>
              <textarea
                rows={3}
                value={subhead}
                onChange={e => setSubhead(e.target.value)}
                className="w-full bg-[#181d2c] border border-[#2b344d] rounded-lg px-2.5 py-1.5 text-white outline-none focus:border-[#00C4CC]"
              />
            </div>
          </div>

          <div className="mt-auto p-3 rounded-xl bg-[#171b29] border border-[#252c40] text-[11px] text-[#7d8aa6]">
            Canva allows fast turnarounds for promotional cards, launch banners, and social collateral.
          </div>
        </div>

        {/* Center Live Poster Canvas */}
        <div className="flex-1 bg-[#090a10] flex items-center justify-center p-6 overflow-hidden relative">
          <div className="w-[340px] sm:w-[380px] h-[520px] rounded-3xl shadow-2xl overflow-hidden border border-white/10 flex flex-col justify-between p-8 relative transition-all duration-500 bg-gradient-to-b">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeTemplate.bgGradient} opacity-90`} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/15 via-transparent to-black/40 pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-bold text-[11px] tracking-wider uppercase shadow-sm">
                {badge}
              </span>
            </div>

            {/* Center Sticker & Headline */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-4 my-auto">
              <div
                className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-4xl shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
                style={{
                  transform: `rotate(${stickerRotation}deg) scale(${stickerScale})`,
                }}
                onClick={shuffleSticker}
                title="Click to rotate sticker"
              >
                {activeTemplate.sticker}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md leading-tight">
                {headline}
              </h2>

              <p className="text-xs text-white/80 max-w-[280px] leading-relaxed drop-shadow">
                {subhead}
              </p>
            </div>

            {/* Footer URL */}
            <div className="relative z-10 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70 font-mono">
              <span className="truncate">{activeTemplate.footer}</span>
              <span className="bg-white/15 px-2 py-0.5 rounded text-[10px] text-white">2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#161a26] border border-[#2e3752] rounded-2xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] rounded-full flex items-center justify-center text-2xl mx-auto shadow-lg">
              ✨
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Graphic Ready to Export!</h3>
              <p className="text-xs text-[#8e9bb5] mt-1">
                Rendered at 1080 × 1920 with high-fidelity color profile (sRGB).
              </p>
            </div>
            <button
              onClick={() => setShowExportModal(false)}
              className="w-full bg-[#00C4CC] hover:bg-[#00b0b8] text-black font-bold py-2 rounded-lg text-xs transition-colors"
            >
              Download PNG
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
