'use client';

import React, { useState } from 'react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'claude';
  text: string;
  thinking?: string;
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: '1',
    sender: 'user',
    text: 'How can I simplify the UX of a complex prediction market like Bento so first-time users don’t feel overwhelmed?',
    timestamp: '10:42 AM',
  },
  {
    id: '2',
    sender: 'claude',
    timestamp: '10:42 AM',
    thinking: `1. Deconstruct user friction: prediction markets usually fail because they present stock-ticker charts and order books to casual users.
2. Emphasize emotional framing: people predict outcomes because of fandom, pop-culture debates, and social validation, not dry probability calculus.
3. Formulate clear architectural UX recommendations:
   - Bento-box modular cards rather than dense data tables.
   - Plain-language question prompts ("Will X happen before Friday?").
   - Frictionless social sharing cards with visual outcome badges.`,
    text: `Here is how we can transform Bento into a delightful, approachable experience:

### 1. Shift from "Financial Trading" to "Social Consensus"
Traditional prediction markets overwhelm users with candlestick charts and liquidity depth. Instead, frame each market as an interactive community question:
* Use visual **bento tiles** with large voting chips rather than order books.
* Replace percentage spreads with straightforward Yes/No gauges.

### 2. High-Contrast, Tactile Visual Hierarchy
* Give each card a distinct personality through curated background hues (the orange, blue, and black tiles from your portfolio).
* Keep key statistics to 2 data points maximum: **Total Pool** and **Your Position**.

### 3. Shareable Outcome Cards
When users make a prediction, offer a 1-click exportable sticker or polaroid graphic for Instagram Stories and Farcaster. This turns their prediction into social currency!`,
  },
];

const PROMPT_SUGGESTIONS = [
  {
    label: '🎨 Critique Portfolio Hero UX',
    prompt: 'Critique the UX & visual hierarchy of my portfolio hero section. Where can I reduce friction?',
    thinking: 'Analyzing visual weight, above-the-fold CTA clarity, eye-path flow, and emotional resonance for design directors...',
    response: `### UX Critique of Your Portfolio Hero:

**Strengths:**
* **Instant Personality:** The Figma canvas aesthetic immediately sets you apart from generic templates. It demonstrates you live and breathe product design.
* **Tactile Stickers:** The interactive stickers give users a micro-reward for exploring.

**Opportunities to Elevate:**
1. **Direct Path to Proof:** Ensure hiring managers can jump straight to case studies (Bento, Velar) within 1 click if they don't want to navigate canvas coordinates.
2. **Clear Value Proposition:** Your bio is charming; pairing it with a bold 1-sentence superpower ("I turn complex crypto & AI products into tactile consumer apps") makes your positioning unmistakable.`,
  },
  {
    label: '✨ Web3 Onboarding Copy',
    prompt: 'Suggest 3 high-converting, human-friendly micro-copy options for onboarding Web3 beginners.',
    thinking: 'Translating cryptographic terminology (gas fees, seed phrases, wallets) into calm, friendly everyday mental models...',
    response: `Here are 3 human-centered micro-copy approaches:

1. **The Friendly Guide:**
   > *"No crypto experience needed. Create your account in 5 seconds with Google, and we'll handle the keys behind the scenes."*

2. **The Confident Pro:**
   > *"Step into onchain markets without the chaos. Clear trades, zero jargon, instant payouts."*

3. **The Playful Explorer:**
   > *"Ready to predict the future? Pick a topic, cast your vote, and climb the leaderboard with your friends."*`,
  },
  {
    label: '👁 Accessibility (a11y) Audit',
    prompt: 'What are the top 3 accessibility traps when building dark-mode neon design systems?',
    thinking: 'Evaluating WCAG 2.1 AA/AAA contrast ratios, chromatic aberration with saturated blues on pure black, and focus indicators...',
    response: `### 3 Critical Dark-Mode a11y Traps to Avoid:

1. **Low-Contrast Subtle Text (#555 on #111):**
   * While muted text looks sleek, it frequently fails the **4.5:1 WCAG AA ratio**. Use at least **#8E929D** for secondary copy.

2. **Pure Neon Blue (#0055FF) on Pure Black:**
   * Human eye lenses struggle to focus on pure saturated blue against black, causing visual vibration. Add a touch of cyan or desaturate slightly to **#38bdf8**.

3. **Missing Keyboard Focus Rings:**
   * Don't rely solely on hover effects. Ensure \`:focus-visible\` renders a distinct 2px offset ring so keyboard and screen-reader navigators never lose their place!`,
  },
];

export default function ClaudeWorkspace({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [expandedThinkingId, setExpandedThinkingId] = useState<string | null>('2');

  const sendMessage = (text: string, customThinking?: string, customResponse?: string) => {
    if (!text.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsThinking(true);

    setTimeout(() => {
      const claudeMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'claude',
        text: customResponse || `I've analyzed your design query: "${text}".\n\nWhen designing interfaces, keeping cognitive load low and sensory delight high is the secret to building products people genuinely love using every day.`,
        thinking: customThinking || 'Synthesizing UX principles, visual hierarchy tokens, and human behavioral psychology...',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, claudeMsg]);
      setExpandedThinkingId(claudeMsg.id);
      setIsThinking(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-full bg-[#181716] text-[#ede8e1] select-none overflow-hidden font-sans">
      {/* Top Header */}
      <div className="h-12 bg-[#1f1e1c] border-b border-[#2e2c29] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#D97706]/20 border border-[#D97706]/40 flex items-center justify-center font-serif font-bold text-sm text-[#D97706] shadow-sm">
            C
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              Claude AI
              <span className="text-[10px] bg-[#D97706]/20 text-[#f59e0b] px-1.5 py-0.5 rounded font-mono">3.7 Sonnet</span>
            </span>
            <span className="text-[10px] text-[#9c9589]">Thoughtful UX reasoning &amp; architectural design critique</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMessages(INITIAL_MESSAGES)}
            className="px-2.5 py-1 rounded bg-[#262421] hover:bg-[#33302c] text-xs text-[#a8a194] hover:text-white transition-colors border border-[#3b3833]"
          >
            Clear Thread
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#262421] hover:bg-[#33302c] flex items-center justify-center text-[#999] hover:text-white transition-colors"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-5 max-w-3xl w-full mx-auto">
        {messages.map(msg => (
          <div key={msg.id} className="space-y-2">
            {msg.sender === 'user' ? (
              <div className="flex justify-end">
                <div className="bg-[#2a2825] text-white text-xs sm:text-sm px-4 py-3 rounded-2xl max-w-lg border border-[#3b3834] shadow-sm">
                  {msg.text}
                </div>
              </div>
            ) : (
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-lg bg-[#D97706]/20 border border-[#D97706]/30 flex items-center justify-center text-xs text-[#D97706] shrink-0 font-serif font-bold mt-1">
                  C
                </div>
                <div className="flex-1 space-y-2">
                  {/* Collapsible Thinking Process Block */}
                  {msg.thinking && (
                    <div className="rounded-xl bg-[#211f1c] border border-[#36322d] overflow-hidden text-xs">
                      <button
                        onClick={() => setExpandedThinkingId(expandedThinkingId === msg.id ? null : msg.id)}
                        className="w-full px-3 py-1.5 flex items-center justify-between text-[#a39c8f] hover:text-white text-[11px] font-mono transition-colors"
                      >
                        <span className="flex items-center gap-1.5">
                          <span>💭</span>
                          <span>Thought Process (Reasoning Engine)</span>
                        </span>
                        <span>{expandedThinkingId === msg.id ? '▴ Hide' : '▾ Show'}</span>
                      </button>
                      {expandedThinkingId === msg.id && (
                        <div className="px-3.5 py-2.5 border-t border-[#2e2a25] text-[#918a7e] font-mono text-[11px] leading-relaxed whitespace-pre-wrap bg-[#1b1917]">
                          {msg.thinking}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Main Response Body */}
                  <div className="bg-[#1f1d1b] border border-[#2e2c29] p-4 sm:p-5 rounded-2xl text-xs sm:text-sm text-[#ddd7cc] leading-relaxed whitespace-pre-wrap space-y-2 select-text shadow-md">
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-[#787165] block pl-1 font-mono">{msg.timestamp}</span>
                </div>
              </div>
            )}
          </div>
        ))}

        {isThinking && (
          <div className="flex gap-3 items-center text-xs text-[#d97706] animate-pulse pl-1">
            <span className="text-base">✦</span>
            <span>Claude is synthesizing UX recommendations &amp; evaluating trade-offs...</span>
          </div>
        )}
      </div>

      {/* Suggestion Chips & Prompt Input */}
      <div className="p-4 bg-[#1b1917] border-t border-[#2c2a26] max-w-3xl w-full mx-auto">
        <div className="flex flex-wrap gap-2 mb-3">
          {PROMPT_SUGGESTIONS.map((sug, i) => (
            <button
              key={i}
              disabled={isThinking}
              onClick={() => sendMessage(sug.prompt, sug.thinking, sug.response)}
              className="text-[11px] bg-[#24221f] hover:bg-[#302d29] text-[#c9c2b5] px-2.5 py-1.5 rounded-lg border border-[#383530] transition-colors disabled:opacity-50"
            >
              {sug.label}
            </button>
          ))}
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            sendMessage(inputVal);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="Ask Claude to critique a design, review microcopy, or structure UX..."
            disabled={isThinking}
            className="flex-1 bg-[#23211e] border border-[#383530] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#787165] outline-none focus:border-[#D97706] transition-colors"
          />
          <button
            type="submit"
            disabled={isThinking || !inputVal.trim()}
            className="bg-[#D97706] hover:bg-[#b45309] text-white px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md disabled:opacity-40"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
