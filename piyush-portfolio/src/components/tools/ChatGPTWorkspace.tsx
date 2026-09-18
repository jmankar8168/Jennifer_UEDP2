'use client';

import React, { useState } from 'react';

interface ChatItem {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
}

const PRESET_CHATS: ChatItem[] = [
  {
    id: '1',
    sender: 'user',
    content: 'Give me 5 catchy tagline concepts for Jennifer\'s design portfolio.',
  },
  {
    id: '2',
    sender: 'assistant',
    content: `Here are 5 punchy tagline concepts for your portfolio:

1. **The Tactile Maker:**
   *"Interfaces you can practically feel through the glass."*

2. **The Product Problem-Solver:**
   *"Turning complex protocols into effortless everyday habits."*

3. **The Playful Visionary:**
   *"Where strict product architecture meets unrestrained visual charm."*

4. **The Momentum Builder:**
   *"High-craft design systems built for products with high ambition."*

5. **The Short & Bold:**
   *"Design that looks good, feels right, and ships fast."*`,
  },
];

const QUICK_ACTIONS = [
  {
    label: '💡 Name a Creator Store',
    prompt: 'Brainstorm 5 memorable brand names for a creator-owned digital asset store like Farfield.',
    response: `Here are 5 creative brand name ideas for Farfield:

1. **Farfield** (Current winner) — Evokes expansive creative horizons and open frontiers.
2. **Kiosk.run** — Fast, tactile, digital corner-store for creators.
3. **Artifacto** — Celebrates the tangible craft of digital design assets.
4. **VibeMarket** — Casual, community-first creator commerce.
5. **MintDrop** — Clean, onchain-friendly and instantly recognizable.`,
  },
  {
    label: '🎨 Palette for Fintech',
    prompt: 'Create a high-trust, modern color palette for a Bitcoin DeFi app like Velar.',
    response: `Here is a signature palette designed for confidence and modern energy:

• **Obsidian Deep (#0A0B0E):** Grounding foundation that creates maximum focus.
• **Bitcoin Electric Gold (#F7931A):** Legacy cryptocurrency authority without looking dated.
• **Cyan Accent (#00D8FF):** High-tech contrast for executed trades and active states.
• **Slate Mist (#8E94A5):** Low-strain typography hierarchy.

**Design Principle:** Never use pure saturated red for volatility; use deep coral (#FF5F56) to reduce user anxiety.`,
  },
  {
    label: '✨ Playful Error Messages',
    prompt: 'Rewrite standard 404 & form errors into delightful, charming micro-copy.',
    response: `### Delightful Micro-Copy Replacements:

* **Instead of:** *"404 Page Not Found"*
  ↳ **Use:** *"Oops! This canvas seems blank. Let's snap you back to the center of the artboard."*

* **Instead of:** *"Invalid Email Address"*
  ↳ **Use:** *"Hmm, that email is missing something... maybe an @ or a dot?"*

* **Instead of:** *"Network Connection Failed"*
  ↳ **Use:** *"Looks like the wifi took a quick coffee break. Retrying in 3, 2, 1..."*`,
  },
];

export default function ChatGPTWorkspace({ onClose }: { onClose?: () => void }) {
  const [messages, setMessages] = useState<ChatItem[]>(PRESET_CHATS);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text: string, directResponse?: string) => {
    if (!text.trim() || isTyping) return;

    const userMsg: ChatItem = {
      id: Date.now().toString(),
      sender: 'user',
      content: text,
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const gptMsg: ChatItem = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        content: directResponse || `That's a fantastic design challenge!\n\nFor "${text}", the most effective approach is to combine high visual clarity with playful micro-moments that reward user exploration.`,
      };
      setMessages(prev => [...prev, gptMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="flex flex-col h-full bg-[#202123] text-white select-none overflow-hidden font-sans">
      {/* Header */}
      <div className="h-12 bg-[#2a2b32] border-b border-[#3e3f4b] px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#10A37F] flex items-center justify-center font-bold text-sm shadow-md">
            ✦
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5">
              ChatGPT Design Copilot
              <span className="text-[10px] bg-[#10A37F]/20 text-[#2dd4bf] px-1.5 py-0.5 rounded font-mono">GPT-4o</span>
            </span>
            <span className="text-[10px] text-[#9ca3af]">Rapid design brainstorming, micro-copy &amp; strategy</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMessages(PRESET_CHATS)}
            className="px-2.5 py-1 rounded bg-[#343541] hover:bg-[#40414f] text-xs text-[#d1d5db] transition-colors border border-[#4d4d5e]"
          >
            New Topic
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-lg bg-[#343541] hover:bg-[#40414f] flex items-center justify-center text-[#999] hover:text-white transition-colors"
              title="Close Workspace"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 space-y-4 max-w-3xl w-full mx-auto">
        {messages.map(msg => (
          <div key={msg.id} className="space-y-1">
            {msg.sender === 'user' ? (
              <div className="flex justify-end">
                <div className="bg-[#343541] text-white text-xs sm:text-sm px-4 py-3 rounded-2xl max-w-lg border border-[#4d4d5e] shadow-sm">
                  {msg.content}
                </div>
              </div>
            ) : (
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-lg bg-[#10A37F] flex items-center justify-center text-xs text-white shrink-0 font-bold mt-1 shadow-sm">
                  ✦
                </div>
                <div className="flex-1 bg-[#2a2b32] border border-[#3e3f4b] p-4 sm:p-5 rounded-2xl text-xs sm:text-sm text-[#e5e7eb] leading-relaxed whitespace-pre-wrap select-text shadow-md">
                  {msg.content}
                </div>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 items-center text-xs text-[#10A37F] animate-pulse pl-1">
            <span className="w-2 h-2 rounded-full bg-[#10A37F]" />
            <span>ChatGPT is drafting creative ideas...</span>
          </div>
        )}
      </div>

      {/* Quick Action Chips & Input */}
      <div className="p-4 bg-[#2a2b32] border-t border-[#3e3f4b] max-w-3xl w-full mx-auto">
        <div className="flex flex-wrap gap-2 mb-3">
          {QUICK_ACTIONS.map((action, i) => (
            <button
              key={i}
              disabled={isTyping}
              onClick={() => sendMessage(action.prompt, action.response)}
              className="text-[11px] bg-[#343541] hover:bg-[#40414f] text-[#d1d5db] px-2.5 py-1.5 rounded-lg border border-[#4d4d5e] transition-colors disabled:opacity-50"
            >
              {action.label}
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
            placeholder="Ask ChatGPT to brainstorm ideas, write copy, or explore themes..."
            disabled={isTyping}
            className="flex-1 bg-[#343541] border border-[#4d4d5e] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-[#9ca3af] outline-none focus:border-[#10A37F] transition-colors"
          />
          <button
            type="submit"
            disabled={isTyping || !inputVal.trim()}
            className="bg-[#10A37F] hover:bg-[#0e8a6c] text-white px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-md disabled:opacity-40"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
