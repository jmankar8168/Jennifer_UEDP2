'use client';

import React, { useState } from 'react';

interface CodeFile {
  name: string;
  path: string;
  language: string;
  code: string;
}

const PRESET_FILES: Record<string, CodeFile> = {
  'hero.tsx': {
    name: 'HeroBadge.tsx',
    path: 'src/components/HeroBadge.tsx',
    language: 'tsx',
    code: `import React from 'react';

export default function HeroBadge() {
  return (
    <div className="p-6 rounded-2xl bg-[#13141c] border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-3">
      <div className="px-3 py-1 rounded-full bg-[#8253FF]/20 border border-[#8253FF]/40 text-[#cbb6ff] text-xs font-semibold tracking-wide">
        ✦ Antigravity Autonomous Agent
      </div>
      <h2 className="text-xl font-bold text-white">
        Next-Gen Software Built in Seconds
      </h2>
      <p className="text-xs text-white/60 max-w-sm">
        Prompt the autonomous agent below to modify code, inject new styles, or overhaul this preview live.
      </p>
      <button className="px-4 py-2 rounded-xl bg-[#8253FF] text-white text-xs font-semibold shadow-lg hover:brightness-110 active:scale-95 transition-all">
        Deploy Changes →
      </button>
    </div>
  );
}`,
  },
  'theme.css': {
    name: 'theme.css',
    path: 'src/styles/theme.css',
    language: 'css',
    code: `:root {
  --primary-accent: #8253FF;
  --bg-surface: #13141c;
  --glow-color: rgba(130, 83, 255, 0.35);
  --border-radius: 16px;
}`,
  },
  'plan.md': {
    name: 'plan.md',
    path: 'brain/implementation_plan.md',
    language: 'markdown',
    code: `# Antigravity Autonomous Agent Plan
- [x] Scan workspace file trees
- [x] Listen to developer intent & prompts
- [ ] Generate real-time AST transformations
- [ ] Hot-reload live component preview`,
  },
};

interface AgentPromptOption {
  label: string;
  prompt: string;
  newCode: string;
  previewVariant: 'glow' | 'cyan' | 'minimal' | 'cyber';
}

const PROMPT_SUGGESTIONS: AgentPromptOption[] = [
  {
    label: '✨ Add Neon Violet Glow',
    prompt: 'Add an animated pulsing glow and glassmorphism styling to the hero component.',
    previewVariant: 'glow',
    newCode: `import React from 'react';

export default function HeroBadge() {
  return (
    <div className="relative p-6 rounded-2xl bg-[#15102a]/80 backdrop-blur-xl border border-[#8253FF]/50 shadow-[0_0_40px_rgba(130,83,255,0.4)] flex flex-col items-center text-center space-y-3 animate-pulse">
      <div className="px-3 py-1 rounded-full bg-[#8253FF]/30 border border-[#8253FF] text-[#eeddff] text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(130,83,255,0.8)]">
        ✦ Ultra Glow Active
      </div>
      <h2 className="text-xl font-black text-white tracking-tight">
        Hyper-Charged Interface
      </h2>
      <p className="text-xs text-purple-200/80 max-w-sm">
        Autonomous agent refactored styles to deep violet with high-intensity atmospheric ambient lighting.
      </p>
      <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8253FF] to-[#FF2ADF] text-white text-xs font-bold shadow-[0_0_20px_rgba(255,42,223,0.5)] hover:scale-105 transition-transform">
        Explore Matrix 🚀
      </button>
    </div>
  );
}`,
  },
  {
    label: '⚡ Switch to Cyber Cyan',
    prompt: 'Refactor component theme to high-contrast tech cyan with mono typography & matrix vibes.',
    previewVariant: 'cyan',
    newCode: `import React from 'react';

export default function HeroBadge() {
  return (
    <div className="p-6 rounded-xl bg-[#06141d] border border-[#009EFF]/60 shadow-[0_0_30px_rgba(0,158,255,0.25)] flex flex-col items-center text-center space-y-3 font-mono">
      <div className="px-2.5 py-0.5 rounded bg-[#009EFF]/20 border border-[#009EFF] text-[#009EFF] text-[11px] font-bold">
        &gt; SYSTEM_READY: CYBER_CYAN
      </div>
      <h2 className="text-lg font-bold text-[#e0f4ff]">
        Zero-Latency Execution
      </h2>
      <p className="text-[11px] text-[#009EFF]/70 max-w-sm">
        Compiled with Antigravity subagent core running WebAssembly AST parser.
      </p>
      <button className="px-4 py-2 rounded bg-[#009EFF] hover:bg-[#0080d0] text-black font-bold text-xs shadow-md">
        Execute Task [ENTER]
      </button>
    </div>
  );
}`,
  },
  {
    label: '🌿 Organic Mint Minimalist',
    prompt: 'Simplify layout to clean, Scandinavian organic mint aesthetic with subtle borders.',
    previewVariant: 'minimal',
    newCode: `import React from 'react';

export default function HeroBadge() {
  return (
    <div className="p-7 rounded-3xl bg-[#0e1613] border border-[#00B25D]/30 shadow-xl flex flex-col items-center text-center space-y-3">
      <div className="px-3 py-1 rounded-full bg-[#00B25D]/10 text-[#00B25D] text-xs font-medium">
        🌱 Eco-Minimalist Core
      </div>
      <h2 className="text-xl font-medium text-emerald-50">
        Thoughtful &amp; Calm Software
      </h2>
      <p className="text-xs text-emerald-200/60 max-w-sm leading-relaxed">
        Stripped of all unnecessary noise. Focused strictly on high-impact clarity and typography.
      </p>
      <button className="px-4 py-2 rounded-full border border-[#00B25D] text-[#00B25D] hover:bg-[#00B25D] hover:text-white text-xs font-medium transition-all">
        Read Documentation
      </button>
    </div>
  );
}`,
  },
];

export default function AntigravityWorkspace({ onClose }: { onClose?: () => void }) {
  const [activeFileKey, setActiveFileKey] = useState<string>('hero.tsx');
  const [files, setFiles] = useState(PRESET_FILES);
  const [userPrompt, setUserPrompt] = useState('');
  const [isAgentRunning, setIsAgentRunning] = useState(false);
  const [agentLogs, setAgentLogs] = useState<string[]>([
    'Antigravity IDE v2.4 initialized.',
    'Loaded workspace: jennifer-portfolio-phi',
    'AI Pair Programming Agent: Ready for instructions.',
  ]);
  const [currentVariant, setCurrentVariant] = useState<'default' | 'glow' | 'cyan' | 'minimal' | 'cyber'>('default');

  const executePrompt = (promptText: string, variant?: 'glow' | 'cyan' | 'minimal' | 'cyber') => {
    if (!promptText.trim() || isAgentRunning) return;
    setIsAgentRunning(true);

    const chosenVariant = variant || (promptText.toLowerCase().includes('cyan') ? 'cyan' : promptText.toLowerCase().includes('mint') || promptText.toLowerCase().includes('minimal') ? 'minimal' : 'glow');

    const matchingOption = PROMPT_SUGGESTIONS.find(o => o.previewVariant === chosenVariant) || PROMPT_SUGGESTIONS[0];

    // Simulate Agent Step Sequence
    setAgentLogs(prev => [
      ...prev,
      `> User prompt received: "${promptText}"`,
      `[Agent: Planner] Searching semantic codebase for matching UI symbols...`,
    ]);

    setTimeout(() => {
      setAgentLogs(prev => [
        ...prev,
        `[Agent: CodeEdit] Applying AST transformations to src/components/HeroBadge.tsx`,
      ]);
    }, 600);

    setTimeout(() => {
      setFiles(prev => ({
        ...prev,
        'hero.tsx': {
          ...prev['hero.tsx'],
          code: matchingOption.newCode,
        },
      }));
      setCurrentVariant(chosenVariant);
      setAgentLogs(prev => [
        ...prev,
        `[Agent: Compiler] Hot-reload dispatched successfully. 0 errors, 0 warnings.`,
        `[Agent: Status] Ready for next prompt.`,
      ]);
      setIsAgentRunning(false);
      setUserPrompt('');
    }, 1300);
  };

  const handleReset = () => {
    setFiles(PRESET_FILES);
    setCurrentVariant('default');
    setAgentLogs([
      'Antigravity IDE v2.4 initialized.',
      'Workspace reset to default branch (main).',
    ]);
  };

  return (
    <div className="flex flex-col h-full bg-[#0d0f14] text-white select-none overflow-hidden font-sans">
      {/* Antigravity Header */}
      <div className="h-12 bg-[#12151d] border-b border-[#212633] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FF5100] via-[#8253FF] to-[#009EFF] flex items-center justify-center font-black text-xs shadow-md">
            ✦
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              Antigravity 2.0 Studio
              <span className="text-[10px] bg-[#009EFF]/20 text-[#009EFF] px-1.5 py-0.5 rounded font-mono">Agentic IDE</span>
            </span>
            <span className="text-[10px] text-[#788296]">Autonomous coding agent with real-time UI synthesis</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-2.5 py-1 rounded bg-[#1c2230] hover:bg-[#252c3d] text-xs text-[#8e9bb0] hover:text-white transition-colors border border-[#2b3345]"
          >
            Reset Code
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#1c2230] hover:bg-[#252c3d] flex items-center justify-center text-[#999] hover:text-white transition-colors"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Workspace Split */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left File Tree */}
        <div className="w-52 bg-[#0e1017] border-r border-[#1e2330] flex flex-col shrink-0 text-xs">
          <div className="p-3 border-b border-[#1e2330] text-[10px] font-bold text-[#626d82] uppercase tracking-wider flex items-center justify-between">
            <span>Explorer</span>
            <span className="font-mono text-[9px] bg-white/5 px-1 rounded">WORKSPACE</span>
          </div>
          <div className="p-2 space-y-1">
            <div className="text-[11px] text-[#535d70] px-2 py-1 flex items-center gap-1 font-mono">
              <span>▾</span> <span>src / components</span>
            </div>
            {Object.entries(files).map(([key, file]) => (
              <button
                key={key}
                onClick={() => setActiveFileKey(key)}
                className={`w-full text-left px-3 py-1.5 rounded flex items-center gap-2 transition-colors font-mono text-[11px] ${
                  activeFileKey === key ? 'bg-[#1e2536] text-[#64b5f6] font-medium' : 'text-[#8892a4] hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{key.endsWith('.tsx') ? '⚛' : key.endsWith('.css') ? '🎨' : '📄'}</span>
                <span className="truncate">{file.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-auto p-3 border-t border-[#1e2330] bg-[#0b0d12]">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isAgentRunning ? 'bg-amber-400 animate-ping' : 'bg-[#00B25D]'}`} />
              <span className="text-[10px] text-[#8e9bb0]">
                {isAgentRunning ? 'Agent working...' : 'Agent standby'}
              </span>
            </div>
          </div>
        </div>

        {/* Center Code Editor */}
        <div className="flex-1 bg-[#10131b] flex flex-col overflow-hidden border-r border-[#1e2330]">
          {/* Editor Tab Header */}
          <div className="h-9 bg-[#0b0d12] border-b border-[#1e2330] flex items-center px-3 gap-2 text-xs">
            <div className="bg-[#10131b] border-t border-x border-[#1e2330] px-3 py-1.5 rounded-t text-white flex items-center gap-2">
              <span className="text-blue-400 font-mono">TSX</span>
              <span className="text-xs font-mono">{files[activeFileKey].name}</span>
              {isAgentRunning && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
            </div>
          </div>

          {/* Code Area with line numbers */}
          <div className="flex-1 p-3 overflow-auto font-mono text-xs text-[#d1d7e0] leading-relaxed flex">
            {/* Line numbers */}
            <div className="select-none text-[#404b61] pr-4 text-right border-r border-[#1e2330] font-mono shrink-0 space-y-0.5">
              {files[activeFileKey].code.split('\n').map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            {/* Code Content */}
            <pre className="pl-4 flex-1 whitespace-pre-wrap font-mono text-[11px] sm:text-xs">
              <code>{files[activeFileKey].code}</code>
            </pre>
          </div>

          {/* Terminal / Agent Logs Drawer */}
          <div className="h-28 bg-[#090b0f] border-t border-[#1e2330] p-2 font-mono text-[10px] text-[#717e94] overflow-y-auto custom-scrollbar flex flex-col justify-end">
            <div className="text-[9px] uppercase tracking-wider text-[#49546b] pb-1 border-b border-white/5 mb-1 flex items-center justify-between">
              <span>Agent Process Console</span>
              <span>bash - antigravity-subagent</span>
            </div>
            <div className="space-y-0.5">
              {agentLogs.map((log, i) => (
                <div key={i} className={log.startsWith('>') ? 'text-[#009EFF] font-semibold' : log.includes('Compiler') ? 'text-[#00B25D]' : ''}>
                  {log}
                </div>
              ))}
              {isAgentRunning && (
                <div className="text-amber-400 animate-pulse flex items-center gap-1">
                  <span>✦ Synthesizing AST nodes & writing changes...</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Live Preview & Prompt Console */}
        <div className="w-96 bg-[#0c0e14] flex flex-col shrink-0 overflow-hidden">
          <div className="h-9 bg-[#11141d] border-b border-[#1e2330] px-3 flex items-center justify-between text-xs text-[#717e94]">
            <span className="font-semibold text-white flex items-center gap-1.5">
              <span>👁</span> Live Hot-Reload Preview
            </span>
            <span className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-emerald-400">
              3000 • Active
            </span>
          </div>

          {/* Rendered Live Component */}
          <div className="flex-1 p-5 flex items-center justify-center bg-[#07080c] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1e2536_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

            {/* Simulated Live Component rendering based on current variant */}
            <div className="w-full z-10">
              {currentVariant === 'default' && (
                <div className="p-5 rounded-2xl bg-[#13141c] border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-3">
                  <div className="px-3 py-1 rounded-full bg-[#8253FF]/20 border border-[#8253FF]/40 text-[#cbb6ff] text-xs font-semibold tracking-wide">
                    ✦ Antigravity Autonomous Agent
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    Next-Gen Software Built in Seconds
                  </h2>
                  <p className="text-xs text-white/60">
                    Prompt the autonomous agent below to modify code, inject new styles, or overhaul this preview live.
                  </p>
                  <button className="px-4 py-2 rounded-xl bg-[#8253FF] text-white text-xs font-semibold shadow-lg hover:brightness-110 active:scale-95 transition-all">
                    Deploy Changes →
                  </button>
                </div>
              )}

              {currentVariant === 'glow' && (
                <div className="relative p-6 rounded-2xl bg-[#15102a]/90 backdrop-blur-xl border border-[#8253FF]/60 shadow-[0_0_40px_rgba(130,83,255,0.45)] flex flex-col items-center text-center space-y-3 animate-pulse">
                  <div className="px-3 py-1 rounded-full bg-[#8253FF]/30 border border-[#8253FF] text-[#eeddff] text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(130,83,255,0.8)]">
                    ✦ Ultra Glow Active
                  </div>
                  <h2 className="text-lg font-black text-white tracking-tight">
                    Hyper-Charged Interface
                  </h2>
                  <p className="text-xs text-purple-200/80">
                    Autonomous agent refactored styles to deep violet with high-intensity atmospheric ambient lighting.
                  </p>
                  <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#8253FF] to-[#FF2ADF] text-white text-xs font-bold shadow-[0_0_20px_rgba(255,42,223,0.5)] hover:scale-105 transition-transform">
                    Explore Matrix 🚀
                  </button>
                </div>
              )}

              {currentVariant === 'cyan' && (
                <div className="p-5 rounded-xl bg-[#06141d] border border-[#009EFF]/60 shadow-[0_0_30px_rgba(0,158,255,0.25)] flex flex-col items-center text-center space-y-3 font-mono">
                  <div className="px-2.5 py-0.5 rounded bg-[#009EFF]/20 border border-[#009EFF] text-[#009EFF] text-[11px] font-bold">
                    &gt; SYSTEM_READY: CYBER_CYAN
                  </div>
                  <h2 className="text-base font-bold text-[#e0f4ff]">
                    Zero-Latency Execution
                  </h2>
                  <p className="text-[11px] text-[#009EFF]/70">
                    Compiled with Antigravity subagent core running WebAssembly AST parser.
                  </p>
                  <button className="px-4 py-2 rounded bg-[#009EFF] text-black font-bold text-xs shadow-md">
                    Execute Task [ENTER]
                  </button>
                </div>
              )}

              {currentVariant === 'minimal' && (
                <div className="p-6 rounded-3xl bg-[#0e1613] border border-[#00B25D]/30 shadow-xl flex flex-col items-center text-center space-y-3">
                  <div className="px-3 py-1 rounded-full bg-[#00B25D]/10 text-[#00B25D] text-xs font-medium">
                    🌱 Eco-Minimalist Core
                  </div>
                  <h2 className="text-base font-medium text-emerald-50">
                    Thoughtful &amp; Calm Software
                  </h2>
                  <p className="text-xs text-emerald-200/60 leading-relaxed">
                    Stripped of all unnecessary noise. Focused strictly on high-impact clarity and typography.
                  </p>
                  <button className="px-4 py-1.5 rounded-full border border-[#00B25D] text-[#00B25D] hover:bg-[#00B25D] hover:text-white text-xs font-medium transition-all">
                    Read Documentation
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* AI Prompt Input Bar */}
          <div className="p-3 bg-[#11141c] border-t border-[#1e2330] flex flex-col gap-2">
            <div className="text-[10px] text-[#717e94] font-medium flex items-center justify-between">
              <span>Prompt AI Agent:</span>
              <span className="text-[#8253FF]">✦ Antigravity Engine</span>
            </div>

            {/* Suggestion Chips */}
            <div className="flex flex-wrap gap-1.5">
              {PROMPT_SUGGESTIONS.map((sug, i) => (
                <button
                  key={i}
                  disabled={isAgentRunning}
                  onClick={() => executePrompt(sug.prompt, sug.previewVariant)}
                  className="text-[10px] bg-[#1a1f2c] hover:bg-[#262e42] text-[#abb6c9] px-2 py-1 rounded border border-[#262e42] transition-colors disabled:opacity-50"
                >
                  {sug.label}
                </button>
              ))}
            </div>

            <form
              onSubmit={e => {
                e.preventDefault();
                executePrompt(userPrompt);
              }}
              className="flex gap-1.5 mt-1"
            >
              <input
                type="text"
                value={userPrompt}
                onChange={e => setUserPrompt(e.target.value)}
                placeholder="Ask Antigravity to write code or tweak UI..."
                disabled={isAgentRunning}
                className="flex-1 bg-[#0b0d13] border border-[#232938] rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-[#515c72] outline-none focus:border-[#8253FF]"
              />
              <button
                type="submit"
                disabled={isAgentRunning || !userPrompt.trim()}
                className="bg-gradient-to-r from-[#8253FF] to-[#009EFF] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:opacity-90 active:scale-95 transition-all disabled:opacity-40"
              >
                {isAgentRunning ? '...' : 'Run'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
