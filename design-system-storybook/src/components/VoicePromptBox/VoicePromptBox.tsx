import React, { useState, useEffect } from 'react';
import './VoicePromptBox.css';

export type VoicePromptVariant = 'Default' | '2 lines' | 'no text' | 'listening';
export type VoicePromptMode = 'default' | 'Light' | 'dark' | 'light';
export type WaveFrame = 1 | 2 | 3 | 4;
export type WaveVariant = 'Default' | 'Variant2' | 'Variant3' | 'Variant4';

/* ==========================================================================
   Exact 62x62 Soft Star Vector from Figma Node 53:6468 / 35:543
   ========================================================================== */

export const FIGMA_VOICE_STAR_PATH =
  'M30.1727 0.734891C30.2891 -0.244964 31.7109 -0.244964 31.8273 0.734891L32.8026 8.95498C34.0621 19.5693 42.4307 27.9379 53.0449 29.1974L61.265 30.1727C62.245 30.2891 62.245 31.7109 61.265 31.8273L53.0449 32.8026C42.4307 34.0621 34.0621 42.4307 32.8026 53.0449L31.8273 61.265C31.7109 62.245 30.2891 62.245 30.1727 61.265L29.1974 53.0449C27.9379 42.4307 19.5693 34.0621 8.95498 32.8026L0.734891 31.8273C-0.244964 31.7109 -0.244964 30.2891 0.734891 30.1727L8.95498 29.1974C19.5693 27.9379 27.9379 19.5693 29.1974 8.95498L30.1727 0.734891Z';

export const VoicePromptSoftStar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d={FIGMA_VOICE_STAR_PATH} fill="currentColor" />
  </svg>
);

/* ==========================================================================
   Audio Wave Bars Visualizer (Node 16:1948 - Group 32)
   ========================================================================== */

export interface VoiceWaveVisualizerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the bars smoothly oscillate/animate across keyframes */
  animated?: boolean;
  /** Static frame number (1 = Default, 2 = Variant2, 3 = Variant3, 4 = Variant4) */
  frame?: WaveFrame;
  /** Figma variant string */
  variant?: WaveVariant;
}

export const VoiceWaveVisualizer: React.FC<VoiceWaveVisualizerProps> = ({
  animated = true,
  frame = 1,
  variant,
  className = '',
  ...rest
}) => {
  // Map variant name to frame number
  let activeFrame = frame;
  if (variant) {
    if (variant === 'Default') activeFrame = 1;
    if (variant === 'Variant2') activeFrame = 2;
    if (variant === 'Variant3') activeFrame = 3;
    if (variant === 'Variant4') activeFrame = 4;
  }

  const animationClass = animated
    ? 'uedp-voice-wave--animated'
    : `uedp-voice-wave--frame-${activeFrame}`;

  return (
    <div
      className={`uedp-voice-wave ${animationClass} ${className}`.trim()}
      role="img"
      aria-label="Audio voice wave visualizer"
      {...rest}
    >
      <div className="uedp-voice-wave__bar uedp-voice-wave__bar--1" />
      <div className="uedp-voice-wave__bar uedp-voice-wave__bar--2" />
      <div className="uedp-voice-wave__bar uedp-voice-wave__bar--3" />
      <div className="uedp-voice-wave__bar uedp-voice-wave__bar--4" />
      <div className="uedp-voice-wave__bar uedp-voice-wave__bar--5" />
      <div className="uedp-voice-wave__bar uedp-voice-wave__bar--6" />
      <div className="uedp-voice-wave__bar uedp-voice-wave__bar--7" />
    </div>
  );
};

export const AudioWaveBars = VoiceWaveVisualizer;
export const Group32 = VoiceWaveVisualizer;

/* ==========================================================================
   Typewriter Text Component
   ========================================================================== */

export interface TypewriterTextProps {
  /** Full text string to type out */
  text: string;
  /** Typing speed in milliseconds per character (default: 22ms) */
  speed?: number;
  /** Initial delay in milliseconds before typing begins */
  delay?: number;
  /** Whether the typewriter animation is enabled (if false, shows text instantly) */
  enabled?: boolean;
  /** Whether to render the blinking cursor while typing */
  showCursor?: boolean;
  /** Callback fired when typing reaches the end */
  onComplete?: () => void;
  /** Additional CSS class */
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 22,
  delay = 0,
  enabled = true,
  showCursor = true,
  onComplete,
  className = '',
}) => {
  const [displayedCount, setDisplayedCount] = useState<number>(enabled ? 0 : text.length);
  const [hasStarted, setHasStarted] = useState<boolean>(delay === 0);

  useEffect(() => {
    if (!enabled) {
      setDisplayedCount(text.length);
      return;
    }

    setDisplayedCount(0);
    setHasStarted(delay === 0);

    let delayTimer: ReturnType<typeof setTimeout> | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;

    const startTyping = () => {
      setHasStarted(true);
      let current = 0;
      interval = setInterval(() => {
        current += 1;
        setDisplayedCount(current);
        if (current >= text.length) {
          if (interval) clearInterval(interval);
          onComplete?.();
        }
      }, speed);
    };

    if (delay > 0) {
      delayTimer = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      if (delayTimer) clearTimeout(delayTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay, enabled, onComplete]);

  const isComplete = displayedCount >= text.length;

  return (
    <span className={`uedp-typewriter-text ${className}`.trim()}>
      {text.slice(0, displayedCount)}
      {enabled && showCursor && !isComplete && hasStarted && (
        <span className="uedp-typewriter-cursor" aria-hidden="true" />
      )}
    </span>
  );
};

/* ==========================================================================
   Voice Prompt Box Component (Node 53:6468)
   ========================================================================== */

export const DEFAULT_TRANSCRIPT_LINE =
  'furniture. To the right, there is a window letting in natural light, making the space feel bright, and near it hangs a small';

export interface VoicePromptBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma variant Property 1: "Default" | "2 lines" | "no text" | "listening" */
  property1?: VoicePromptVariant;
  /** Figma variant mode: "default" (dark) | "Light" */
  mode?: VoicePromptMode;
  /** Whether the voice equalizer waves are smoothly animated */
  animated?: boolean;
  /** Whether the transcription text has typewriter animation */
  typewriter?: boolean;
  /** Typewriter typing speed in ms per character (default: 20ms) */
  typewriterSpeed?: number;
  /** Whether to show typewriter blinking cursor */
  showCursor?: boolean;
  /** Static wave frame when animation is disabled (1-4) */
  waveFrame?: WaveFrame;
  /** Custom status prompt text */
  promptText?: string;
  /** Custom transcripts array (overrides default variant text) */
  transcripts?: string[];
}

export const VoicePromptBox: React.FC<VoicePromptBoxProps> = ({
  property1 = 'Default',
  mode = 'default',
  animated = true,
  typewriter = true,
  typewriterSpeed = 20,
  showCursor = true,
  waveFrame = 1,
  promptText,
  transcripts,
  className = '',
  ...rest
}) => {
  const isLight = mode.toLowerCase() === 'light';
  const modeClass = isLight
    ? 'uedp-voice-prompt-box--mode-light'
    : 'uedp-voice-prompt-box--mode-default';

  // Determine prompt label
  const isListeningVariant = property1 === 'listening';
  const resolvedPromptText =
    promptText !== undefined
      ? promptText
      : isListeningVariant
      ? 'Listening...'
      : 'SPEAK A COMMAND';

  // Determine transcript lines
  let resolvedTranscripts: string[] = [];
  if (transcripts !== undefined) {
    resolvedTranscripts = transcripts;
  } else {
    if (property1 === 'Default') {
      resolvedTranscripts = [DEFAULT_TRANSCRIPT_LINE];
    } else if (property1 === '2 lines') {
      resolvedTranscripts = [DEFAULT_TRANSCRIPT_LINE, DEFAULT_TRANSCRIPT_LINE];
    } else {
      // 'no text' and 'listening' have no transcript lines
      resolvedTranscripts = [];
    }
  }

  return (
    <div
      role="region"
      aria-label="Voice Command Prompt"
      className={`uedp-voice-prompt-box ${modeClass} ${className}`.trim()}
      {...rest}
    >
      {/* Centered Graphic Header */}
      <div className="uedp-voice-prompt-box__header">
        {/* Soft Star 62x62 */}
        <div className="uedp-voice-prompt-box__star">
          <VoicePromptSoftStar />
        </div>

        {/* Animated Audio Wave Visualizer (Node 16:1948) */}
        <VoiceWaveVisualizer animated={animated} frame={waveFrame} />

        {/* Command Status Prompt */}
        <span className="uedp-voice-prompt-box__prompt">
          {resolvedPromptText}
        </span>
      </div>

      {/* Real-time Transcription Lines with Typewriter Animation */}
      {resolvedTranscripts.length > 0 && (
        <div className="uedp-voice-prompt-box__transcripts">
          {resolvedTranscripts.map((text, idx) => (
            <div
              key={idx}
              className="uedp-voice-prompt-box__transcript-row"
            >
              <div
                className="uedp-voice-prompt-box__divider"
                aria-hidden="true"
              />
              <p className="uedp-voice-prompt-box__text">
                <TypewriterText
                  text={text}
                  speed={typewriterSpeed}
                  delay={idx * 1400}
                  enabled={typewriter}
                  showCursor={showCursor}
                />
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Aliases
export const VoicePrompt = VoicePromptBox;
export const VoicePromptBlock = VoicePromptBox;

export default VoicePromptBox;

