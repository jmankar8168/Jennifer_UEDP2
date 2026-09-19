import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import {
  VoicePromptBox,
  VoiceWaveVisualizer,
  VoicePromptVariant,
  VoicePromptMode,
  WaveFrame,
} from './VoicePromptBox';

const meta: Meta<typeof VoicePromptBox> = {
  title: 'Components/Voice Prompt Box',
  component: VoicePromptBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Names: **voice prompt block** (Node ID: \`53:6468\`) & **Group 32** Audio Wave Visualizer (Node ID: \`16:1948\`)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Component Name** | \`voice prompt block\` (Voice Prompt Box) |
| **Dimensions** | Width: \`342px\`, Auto Height (\`177px\` – \`289px\`) |
| **Soft Star** | \`62px × 62px\` curved 4-point star (\`#A3E635\` Dark / \`#4D7C0F\` Light) |
| **Audio Wave Visualizer** | 7 Equalizer pill bars (\`4px\` width, \`border-radius: 2px\`, \`gap: 3px\`) |
| **Wave Colors** | Curated palette: \`#315200\`, \`#B5FF47\`, \`#497B00\`, \`#B7FF4D\`, \`#68AE00\`, \`#80D700\`, \`#315200\` |
| **Wave Animation** | Smooth multi-stage CSS keyframe oscillation across all 4 Figma frames |
| **Variants** | \`Property 1\` (Default, 2 lines, no text, listening) × \`mode\` (default, Light) |
| **Typography** | Command Prompt: \`Space Mono\` 9px Regular (1.08px letter-spacing) \| Transcript: \`Source Sans 3\` 11px Regular |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#171717' },
        { name: 'canvas', value: '#252525' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
  argTypes: {
    property1: {
      control: { type: 'select' },
      options: ['Default', '2 lines', 'no text', 'listening'],
      description: 'Figma variant Property 1',
    },
    mode: {
      control: { type: 'select' },
      options: ['default', 'Light'],
      description: 'Figma variant mode',
    },
    animated: {
      control: 'boolean',
      description: 'Whether the equalizer wave bars animate',
    },
    typewriter: {
      control: 'boolean',
      description: 'Whether the transcript text streams with a typewriter animation',
    },
    typewriterSpeed: {
      control: { type: 'range', min: 10, max: 100, step: 5 },
      description: 'Typing speed in ms per character',
    },
    showCursor: {
      control: 'boolean',
      description: 'Whether to display the blinking typewriter cursor',
    },
    waveFrame: {
      control: { type: 'inline-radio' },
      options: [1, 2, 3, 4],
      description: 'Static wave frame when animation is disabled',
    },
    promptText: {
      control: 'text',
      description: 'Override status text',
    },
  },
  args: {
    property1: 'Default',
    mode: 'default',
    animated: true,
    typewriter: true,
    typewriterSpeed: 20,
    showCursor: true,
  },
};

export default meta;
type Story = StoryObj<typeof VoicePromptBox>;

/**
 * Default Single Line Transcript - Dark Mode (Node 35:556)
 */
export const DefaultDark: Story = {
  name: 'Default (1 Line, Dark)',
  args: {
    property1: 'Default',
    mode: 'default',
    animated: true,
  },
};

/**
 * Default Single Line Transcript - Light Mode (Node 53:6397)
 */
export const DefaultLight: Story = {
  name: 'Default (1 Line, Light)',
  args: {
    property1: 'Default',
    mode: 'Light',
    animated: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * 2 Lines Transcript - Dark Mode (Node 35:559)
 */
export const TwoLinesDark: Story = {
  name: '2 Lines (Dark Mode)',
  args: {
    property1: '2 lines',
    mode: 'default',
    animated: true,
  },
};

/**
 * 2 Lines Transcript - Light Mode (Node 53:6406)
 */
export const TwoLinesLight: Story = {
  name: '2 Lines (Light Mode)',
  args: {
    property1: '2 lines',
    mode: 'Light',
    animated: true,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * No Text / Idle State - Dark Mode (Node 35:578)
 */
export const NoTextDark: Story = {
  name: 'No Text (Idle State)',
  args: {
    property1: 'no text',
    mode: 'default',
    animated: true,
  },
};

/**
 * Listening State - Dark Mode (Node 35:597)
 */
export const ListeningDark: Story = {
  name: 'Listening State (Dark Mode)',
  args: {
    property1: 'listening',
    mode: 'default',
    animated: true,
  },
};

/**
 * Standalone Audio Wave Visualizer (Node 16:1948 - Group 32)
 * Demonstrating smooth live animation and the 4 static Figma keyframes
 */
export const StandaloneWaveVisualizer: Story = {
  name: 'Audio Wave Bars (Node 16:1948 Animation)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        padding: '24px',
        backgroundColor: '#1f1f23',
        borderRadius: '8px',
        width: 'fit-content',
        border: '1px solid #333',
      }}
    >
      <div>
        <div style={{ color: '#b7ff4d', fontFamily: 'Space Mono, monospace', fontSize: '11px', marginBottom: '8px' }}>
          ▶ LIVE OSCILLATING ANIMATION (SMOOTH LOOP)
        </div>
        <div style={{ padding: '16px 20px', backgroundColor: '#171717', borderRadius: '4px', width: 'fit-content' }}>
          <VoiceWaveVisualizer animated={true} />
        </div>
      </div>

      <div>
        <div style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px', marginBottom: '12px' }}>
          4 FIGMA STATIC FRAMES (NODE 16:1948)
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {([1, 2, 3, 4] as WaveFrame[]).map((f) => (
            <div key={f} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ padding: '12px 16px', backgroundColor: '#171717', borderRadius: '4px' }}>
                <VoiceWaveVisualizer animated={false} frame={f} />
              </div>
              <span style={{ color: '#aaa', fontFamily: 'Space Mono, monospace', fontSize: '10px' }}>
                Frame {f}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

/**
 * All Figma Variants Matrix (Node 53:6468)
 * Exact 1:1 replica of the user's provided Figma specification image
 */
export const AllFigmaVariantsMatrix: Story = {
  name: 'All Figma Variants (53:6468 Matrix)',
  render: () => {
    const variants: { label: string; p1: VoicePromptVariant }[] = [
      { label: 'Default (1 Line)', p1: 'Default' },
      { label: '2 Lines', p1: '2 lines' },
      { label: 'No Text', p1: 'no text' },
      { label: 'Listening...', p1: 'listening' },
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '36px 28px',
          backgroundColor: '#202020',
          maxWidth: '820px',
        }}
      >
        <div style={{ color: '#c084fc', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
          ❖ Component Set: voice prompt block (Node 53:6468) — 8 Variants with Live Wave Animation
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px 36px',
          }}
        >
          {/* Column 1: Dark Mode */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ color: '#aaa', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
              MODE = DEFAULT (DARK)
            </div>
            {variants.map(({ label, p1 }) => (
              <div key={`dark-${p1}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ color: '#666', fontFamily: 'Space Mono, monospace', fontSize: '10px' }}>
                  {label}
                </span>
                <VoicePromptBox property1={p1} mode="default" animated={true} />
              </div>
            ))}
          </div>

          {/* Column 2: Light Mode */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ color: '#aaa', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
              MODE = LIGHT
            </div>
            {variants.map(({ label, p1 }) => (
              <div key={`light-${p1}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ color: '#666', fontFamily: 'Space Mono, monospace', fontSize: '10px' }}>
                  {label}
                </span>
                <VoicePromptBox property1={p1} mode="Light" animated={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Interactive Live Speech Transcription Demo
 */
export const InteractiveSpeechDemo: Story = {
  name: 'Interactive Speech Recognition Demo',
  render: () => {
    const [isListening, setIsListening] = useState(true);
    const [transcripts, setTranscripts] = useState<string[]>([
      'furniture. To the right, there is a window letting in natural light, making the space feel bright, and near it hangs a small',
    ]);

    const sampleResponses = [
      'Scanning room layout. Identified wooden dining table and armchair 2 meters ahead.',
      'Clear unobstructed path detected towards the hallway door on your left.',
      'A small decorative hanging plant is suspended 1.8 meters above ground near the window.',
    ];

    const addTranscript = () => {
      const next = sampleResponses[transcripts.length % sampleResponses.length];
      setTranscripts((prev) => [...prev.slice(-1), next]);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            type="button"
            onClick={() => setIsListening(!isListening)}
            style={{
              padding: '8px 16px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              backgroundColor: isListening ? '#b7ff4d' : '#333',
              color: isListening ? '#000' : '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            {isListening ? 'PAUSE LISTENING' : 'RESUME LISTENING'}
          </button>
          <button
            type="button"
            onClick={addTranscript}
            style={{
              padding: '8px 16px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              backgroundColor: '#262626',
              color: '#fff',
              border: '1px solid #444',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            + SIMULATE SPEECH TRANSCRIPT
          </button>
        </div>

        <VoicePromptBox
          property1={isListening ? 'Default' : 'no text'}
          mode="default"
          animated={isListening}
          typewriter={true}
          promptText={isListening ? 'SPEAK A COMMAND' : 'MIC PAUSED'}
          transcripts={isListening ? transcripts : []}
        />
      </div>
    );
  },
};

/**
 * Dedicated Typewriter Animation Showcase with interactive restart & speed controls
 */
export const TypewriterAnimationShowcase: Story = {
  name: 'Typewriter Animation Showcase',
  render: () => {
    const [key, setKey] = useState(0);
    const [speed, setSpeed] = useState(25);

    const replay = () => setKey((k) => k + 1);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          padding: '20px',
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={replay}
            style={{
              padding: '8px 20px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              backgroundColor: '#b7ff4d',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            ↻ REPLAY TYPEWRITER
          </button>

          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#fff',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
            }}
          >
            SPEED:
            <select
              value={speed}
              onChange={(e) => {
                setSpeed(Number(e.target.value));
                replay();
              }}
              style={{
                backgroundColor: '#262626',
                color: '#b7ff4d',
                border: '1px solid #444',
                borderRadius: '4px',
                padding: '4px 8px',
                fontFamily: 'Space Mono, monospace',
                fontSize: '11px',
              }}
            >
              <option value={10}>Ultra Fast (10ms)</option>
              <option value={22}>Normal (22ms)</option>
              <option value={45}>Cinematic (45ms)</option>
              <option value={75}>Slow Typewriter (75ms)</option>
            </select>
          </label>
        </div>

        <VoicePromptBox
          key={key}
          property1="2 lines"
          mode="default"
          animated={true}
          typewriter={true}
          typewriterSpeed={speed}
          showCursor={true}
        />
      </div>
    );
  },
};

