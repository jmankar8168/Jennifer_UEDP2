import React from 'react';
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

      {/* Real-time Transcription Lines */}
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
              <p className="uedp-voice-prompt-box__text">{text}</p>
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
