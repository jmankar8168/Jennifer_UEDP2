'use client';

import React, { useState } from 'react';

type ComponentType = 'button' | 'card' | 'badge' | 'toggle' | 'input';

export default function ReactWorkspace({ onClose }: { onClose?: () => void }) {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('button');

  // Button Props
  const [btnText, setBtnText] = useState('Explore Projects');
  const [btnVariant, setBtnVariant] = useState<'primary' | 'secondary' | 'outline' | 'ghost'>('primary');
  const [btnSize, setBtnSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [btnRadius, setBtnRadius] = useState<'rounded' | 'full' | 'none'>('rounded');
  const [btnIcon, setBtnIcon] = useState(true);
  const [btnClicks, setBtnClicks] = useState(0);

  // Card Props
  const [cardTitle, setCardTitle] = useState('Design System Architecture');
  const [cardDesc, setCardDesc] = useState('Atomic component library created with TypeScript and Tailwind design tokens.');
  const [cardGlow, setCardGlow] = useState(true);

  // Badge Props
  const [badgeText, setBadgeText] = useState('Production Ready');
  const [badgeVariant, setBadgeVariant] = useState<'violet' | 'cyan' | 'emerald' | 'orange'>('violet');

  // Toggle Switch Props
  const [toggleState, setToggleState] = useState(true);
  const [toggleLabel, setToggleLabel] = useState('Auto-sync with Figma tokens');

  // Input Props
  const [inputVal, setInputVal] = useState('jennifermankar000@gmail.com');
  const [inputPlaceholder, setInputPlaceholder] = useState('Enter design feedback...');

  // Copied feedback
  const [copied, setCopied] = useState(false);

  // Generate JSX string
  const generateJSX = () => {
    switch (activeComponent) {
      case 'button':
        return `<Button
  variant="${btnVariant}"
  size="${btnSize}"
  radius="${btnRadius}"${btnIcon ? '\n  icon={<ArrowRightIcon className="w-4 h-4" />}' : ''}
  onClick={() => console.log('Clicked!')}
>
  ${btnText}
</Button>`;
      case 'card':
        return `<Card
  glow={${cardGlow}}
  className="p-6 bg-[#181a20]"
>
  <CardHeader>
    <CardTitle>${cardTitle}</CardTitle>
  </CardHeader>
  <CardContent>
    <p>${cardDesc}</p>
  </CardContent>
</Card>`;
      case 'badge':
        return `<Badge
  variant="${badgeVariant}"
  dot
>
  ${badgeText}
</Badge>`;
      case 'toggle':
        return `<Switch
  checked={${toggleState}}
  onCheckedChange={setToggleState}
  label="${toggleLabel}"
/>`;
      case 'input':
        return `<Input
  value="${inputVal}"
  placeholder="${inputPlaceholder}"
  onChange={(e) => setValue(e.target.value)}
  clearable
/>`;
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(generateJSX());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-[#0b0c10] text-white select-none overflow-hidden font-sans">
      {/* Top Bar */}
      <div className="h-12 bg-[#12141a] border-b border-[#20232d] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#00D8FF]/20 border border-[#00D8FF]/40 flex items-center justify-center font-bold text-sm text-[#00D8FF] shadow-sm">
            ⚛
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              React Component Studio
              <span className="text-[10px] bg-[#00D8FF]/20 text-[#00D8FF] px-1.5 py-0.5 rounded font-mono">React 19</span>
            </span>
            <span className="text-[10px] text-[#717786]">Interactive UI component sandbox &amp; live JSX generator</span>
          </div>
        </div>

        {/* Component Switcher */}
        <div className="flex items-center bg-[#181a22] p-1 rounded-lg border border-[#262a36] text-xs">
          {(['button', 'card', 'badge', 'toggle', 'input'] as ComponentType[]).map(comp => (
            <button
              key={comp}
              onClick={() => setActiveComponent(comp)}
              className={`px-3 py-1 rounded capitalize transition-colors ${
                activeComponent === comp ? 'bg-[#262a36] text-white font-medium shadow-sm' : 'text-[#818797] hover:text-white'
              }`}
            >
              {comp}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 bg-[#00D8FF] hover:bg-[#00c2e6] text-black font-semibold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all"
          >
            <span>{copied ? '✓ Copied!' : 'Copy JSX'}</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#181a22] hover:bg-[#252836] flex items-center justify-center text-[#999] hover:text-white transition-colors"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Split */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Props Controller */}
        <div className="w-80 bg-[#0f1117] border-r border-[#1e222e] flex flex-col shrink-0 overflow-y-auto custom-scrollbar p-4 text-xs space-y-4">
          <div className="border-b border-[#1e222e] pb-2 flex items-center justify-between">
            <span className="font-semibold text-xs text-[#8c94a5] uppercase tracking-wider">Props Inspector</span>
            <span className="font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded text-[#00D8FF]">
              &lt;{activeComponent.toUpperCase()} /&gt;
            </span>
          </div>

          {activeComponent === 'button' && (
            <>
              <div>
                <label className="block text-[#7a8294] mb-1">Button Label</label>
                <input
                  type="text"
                  value={btnText}
                  onChange={e => setBtnText(e.target.value)}
                  className="w-full bg-[#171922] border border-[#252a38] rounded px-2.5 py-1.5 text-white outline-none focus:border-[#00D8FF]"
                />
              </div>

              <div>
                <label className="block text-[#7a8294] mb-1">Variant</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['primary', 'secondary', 'outline', 'ghost'] as const).map(v => (
                    <button
                      key={v}
                      onClick={() => setBtnVariant(v)}
                      className={`p-2 rounded border capitalize text-left transition-colors ${
                        btnVariant === v ? 'border-[#00D8FF] bg-[#1a202c] text-[#00D8FF]' : 'border-[#252a38] text-[#8c94a5]'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#7a8294] mb-1">Size</label>
                  <select
                    value={btnSize}
                    onChange={e => setBtnSize(e.target.value as any)}
                    className="w-full bg-[#171922] border border-[#252a38] rounded p-1.5 text-white outline-none"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#7a8294] mb-1">Radius</label>
                  <select
                    value={btnRadius}
                    onChange={e => setBtnRadius(e.target.value as any)}
                    className="w-full bg-[#171922] border border-[#252a38] rounded p-1.5 text-white outline-none"
                  >
                    <option value="rounded">Rounded</option>
                    <option value="full">Pill (Full)</option>
                    <option value="none">Square (0)</option>
                  </select>
                </div>
              </div>

              <label className="flex items-center gap-2 text-[#a8b0c0] cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={btnIcon}
                  onChange={e => setBtnIcon(e.target.checked)}
                  className="rounded border-[#252a38] text-[#00D8FF] focus:ring-0"
                />
                <span>Include trailing icon</span>
              </label>
            </>
          )}

          {activeComponent === 'card' && (
            <>
              <div>
                <label className="block text-[#7a8294] mb-1">Card Title</label>
                <input
                  type="text"
                  value={cardTitle}
                  onChange={e => setCardTitle(e.target.value)}
                  className="w-full bg-[#171922] border border-[#252a38] rounded px-2.5 py-1.5 text-white outline-none focus:border-[#00D8FF]"
                />
              </div>
              <div>
                <label className="block text-[#7a8294] mb-1">Card Description</label>
                <textarea
                  rows={3}
                  value={cardDesc}
                  onChange={e => setCardDesc(e.target.value)}
                  className="w-full bg-[#171922] border border-[#252a38] rounded px-2.5 py-1.5 text-white outline-none focus:border-[#00D8FF]"
                />
              </div>
              <label className="flex items-center gap-2 text-[#a8b0c0] cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={cardGlow}
                  onChange={e => setCardGlow(e.target.checked)}
                  className="rounded border-[#252a38] text-[#00D8FF] focus:ring-0"
                />
                <span>Enable ambient violet glow effect</span>
              </label>
            </>
          )}

          {activeComponent === 'badge' && (
            <>
              <div>
                <label className="block text-[#7a8294] mb-1">Badge Text</label>
                <input
                  type="text"
                  value={badgeText}
                  onChange={e => setBadgeText(e.target.value)}
                  className="w-full bg-[#171922] border border-[#252a38] rounded px-2.5 py-1.5 text-white outline-none focus:border-[#00D8FF]"
                />
              </div>
              <div>
                <label className="block text-[#7a8294] mb-1">Color Theme</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['violet', 'cyan', 'emerald', 'orange'] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setBadgeVariant(c)}
                      className={`p-2 rounded border capitalize text-left transition-colors ${
                        badgeVariant === c ? 'border-[#00D8FF] bg-[#1a202c] text-white' : 'border-[#252a38] text-[#8c94a5]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeComponent === 'toggle' && (
            <>
              <div>
                <label className="block text-[#7a8294] mb-1">Switch Label</label>
                <input
                  type="text"
                  value={toggleLabel}
                  onChange={e => setToggleLabel(e.target.value)}
                  className="w-full bg-[#171922] border border-[#252a38] rounded px-2.5 py-1.5 text-white outline-none focus:border-[#00D8FF]"
                />
              </div>
              <div>
                <label className="block text-[#7a8294] mb-1">Default Checked State</label>
                <button
                  onClick={() => setToggleState(!toggleState)}
                  className="px-3 py-1.5 rounded bg-[#171922] border border-[#252a38] text-white"
                >
                  Toggle Value: {toggleState ? 'TRUE' : 'FALSE'}
                </button>
              </div>
            </>
          )}

          {activeComponent === 'input' && (
            <>
              <div>
                <label className="block text-[#7a8294] mb-1">Input Value</label>
                <input
                  type="text"
                  value={inputVal}
                  onChange={e => setInputVal(e.target.value)}
                  className="w-full bg-[#171922] border border-[#252a38] rounded px-2.5 py-1.5 text-white outline-none focus:border-[#00D8FF]"
                />
              </div>
              <div>
                <label className="block text-[#7a8294] mb-1">Placeholder</label>
                <input
                  type="text"
                  value={inputPlaceholder}
                  onChange={e => setInputPlaceholder(e.target.value)}
                  className="w-full bg-[#171922] border border-[#252a38] rounded px-2.5 py-1.5 text-white outline-none focus:border-[#00D8FF]"
                />
              </div>
            </>
          )}

          <div className="pt-4 border-t border-[#1e222e] text-[11px] text-[#6d7586]">
            Jennifer uses TypeScript and Tailwind to build modular, type-safe design systems with accessible keyboard navigation.
          </div>
        </div>

        {/* Center Live Interactive Canvas & Generated Code */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#07080a]">
          {/* Live Stage */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Grid bg */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e222e_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

            <div className="z-10 flex flex-col items-center gap-4">
              {activeComponent === 'button' && (
                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => setBtnClicks(c => c + 1)}
                    className={`inline-flex items-center justify-center gap-2 font-semibold transition-all active:scale-95 shadow-xl ${
                      btnVariant === 'primary' ? 'bg-[#8253FF] text-white hover:bg-[#7442f5]' :
                      btnVariant === 'secondary' ? 'bg-[#202430] text-white hover:bg-[#2b3040] border border-white/10' :
                      btnVariant === 'outline' ? 'border-2 border-[#8253FF] text-[#8253FF] hover:bg-[#8253FF]/10' :
                      'bg-transparent text-white hover:bg-white/5'
                    } ${
                      btnSize === 'sm' ? 'px-3 py-1.5 text-xs' :
                      btnSize === 'lg' ? 'px-6 py-3.5 text-base' :
                      'px-4.5 py-2.5 text-sm'
                    } ${
                      btnRadius === 'full' ? 'rounded-full' :
                      btnRadius === 'none' ? 'rounded-none' :
                      'rounded-xl'
                    }`}
                  >
                    <span>{btnText}</span>
                    {btnIcon && <span>→</span>}
                  </button>
                  <span className="text-[11px] text-[#717786]">
                    Interactive test: clicked <span className="font-mono text-[#00D8FF]">{btnClicks}</span> times
                  </span>
                </div>
              )}

              {activeComponent === 'card' && (
                <div
                  className={`max-w-sm w-full p-6 rounded-2xl bg-[#12141c] border border-white/10 transition-all ${
                    cardGlow ? 'shadow-[0_0_35px_rgba(130,83,255,0.25)] border-[#8253FF]/40' : 'shadow-xl'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#8253FF]/20 flex items-center justify-center text-lg mb-3">
                    ✦
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">{cardTitle}</h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-4">{cardDesc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                    <span className="text-[#00D8FF] font-medium">Learn more →</span>
                    <span className="text-[10px] text-white/40">Tokens v2.0</span>
                  </div>
                </div>
              )}

              {activeComponent === 'badge' && (
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      badgeVariant === 'violet' ? 'bg-[#8253FF]/20 text-[#cbb6ff] border border-[#8253FF]/40' :
                      badgeVariant === 'cyan' ? 'bg-[#009EFF]/20 text-[#90d6ff] border border-[#009EFF]/40' :
                      badgeVariant === 'emerald' ? 'bg-[#00B25D]/20 text-[#a3f3ca] border border-[#00B25D]/40' :
                      'bg-[#FF5100]/20 text-[#ffb894] border border-[#FF5100]/40'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                    <span>{badgeText}</span>
                  </span>
                </div>
              )}

              {activeComponent === 'toggle' && (
                <div className="p-4 rounded-xl bg-[#12141c] border border-white/10 flex items-center gap-4">
                  <span className="text-xs text-white/80">{toggleLabel}</span>
                  <button
                    onClick={() => setToggleState(!toggleState)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
                      toggleState ? 'bg-[#00D8FF]' : 'bg-[#252a38]'
                    }`}
                  >
                    <div
                      className={`bg-black w-4 h-4 rounded-full shadow-md transform transition-transform ${
                        toggleState ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              )}

              {activeComponent === 'input' && (
                <div className="w-80 space-y-2">
                  <label className="text-xs text-white/70">Interactive Input Field</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={inputVal}
                      placeholder={inputPlaceholder}
                      onChange={e => setInputVal(e.target.value)}
                      className="w-full bg-[#12141c] border border-white/15 focus:border-[#00D8FF] rounded-xl px-3.5 py-2.5 text-xs text-white outline-none shadow-lg transition-colors"
                    />
                    {inputVal && (
                      <button
                        onClick={() => setInputVal('')}
                        className="absolute right-3 top-2.5 text-xs text-white/40 hover:text-white"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                  <span className="text-[10px] text-white/40 block">Character length: {inputVal.length}</span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Generated JSX Viewer */}
          <div className="h-44 bg-[#0d0e14] border-t border-[#1e222e] flex flex-col">
            <div className="h-8 bg-[#11131a] px-4 flex items-center justify-between text-xs text-[#7a8294]">
              <span className="font-mono text-[11px] text-[#00D8FF]">Generated JSX Code</span>
              <button
                onClick={copyCode}
                className="hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              >
                <span>{copied ? '✓ Copied' : '📋 Copy'}</span>
              </button>
            </div>
            <pre className="flex-1 p-4 font-mono text-xs text-[#a0aec0] overflow-auto select-text leading-relaxed">
              <code>{generateJSX()}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
