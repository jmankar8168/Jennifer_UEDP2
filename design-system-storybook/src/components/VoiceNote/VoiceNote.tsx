import React, { useState, useEffect } from 'react';
import './VoiceNote.css';

export type VoiceNoteState = 'Default' | 'selected' | 'Command selected' | 'default';
export type VoiceNoteTheme = 'dark' | 'light';

export interface VoiceNoteProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Literal Figma Layer Name: "voice note" (Node ID: 34:1171) */
  className?: string;
  /** Figma variant state */
  State?: VoiceNoteState;
  /** Theme mode */
  theme?: VoiceNoteTheme;
  /** Display label */
  label?: string;
  /** Audio note duration in seconds */
  durationSec?: number;
  /** Whether currently playing */
  isPlaying?: boolean;
  /** Whether currently in recording mode */
  isRecording?: boolean;
  /** Callback when playback starts/stops */
  onPlayToggle?: (playing: boolean) => void;
  /** Callback when voice note is clicked / selected */
  onSelect?: () => void;
}

/* Figma 34:1168: Soft Star Vector */
const SoftStarIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z"
      fill="currentColor"
    />
  </svg>
);

const PlayIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5V19L19 12L8 5Z" />
  </svg>
);

const PauseIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" />
  </svg>
);

/**
 * VoiceNote Component
 * Recreated from Figma Node ID: 34:1171 ("voice note")
 */
export const VoiceNote: React.FC<VoiceNoteProps> = ({
  className = '',
  State = 'Default',
  theme = 'dark',
  label = 'Voice note',
  durationSec = 28,
  isPlaying: controlledIsPlaying,
  isRecording = false,
  onPlayToggle,
  onSelect,
  ...rest
}) => {
  const [internalPlaying, setInternalPlaying] = useState<boolean>(false);
  const [elapsed, setElapsed] = useState<number>(0);

  const playing = controlledIsPlaying !== undefined ? controlledIsPlaying : internalPlaying;
  const isCompact = State === 'Command selected' || State === 'default';
  const isSelected = State === 'selected';

  // Dynamic waveform heights
  const waveHeights = [8, 14, 22, 12, 18, 24, 16, 20, 10, 18, 14, 8];

  // Playback timer ticker
  useEffect(() => {
    let timer: any;
    if (playing) {
      timer = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= durationSec) {
            setInternalPlaying(false);
            onPlayToggle?.(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [playing, durationSec, onPlayToggle]);

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !playing;
    setInternalPlaying(next);
    onPlayToggle?.(next);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="uedp-voice-note-wrapper">
      <div
        className={`uedp-voice-note uedp-voice-note--${theme} ${
          isSelected ? 'uedp-voice-note--selected' : ''
        } ${isCompact ? 'uedp-voice-note--compact' : ''} ${
          playing ? 'uedp-voice-note--playing' : ''
        } ${isRecording ? 'uedp-voice-note--recording' : ''} ${className}`}
        onClick={onSelect}
        role="region"
        aria-label="Voice Note Player"
        {...rest}
      >
        {/* Left Elements: Soft Star + Divider + Label */}
        <div className="uedp-voice-note-left">
          <div className="uedp-voice-note-star">
            {isRecording ? <div className="uedp-voice-note-rec-dot" /> : <SoftStarIcon size={22} />}
          </div>
          <div className="uedp-voice-note-divider" />
          <span className="uedp-voice-note-label">
            {isRecording ? 'Recording...' : label}
          </span>
        </div>

        {/* Waveform & Player Area */}
        {!isCompact && (
          <div className="uedp-voice-note-wave-container">
            {waveHeights.map((h, i) => (
              <div
                key={i}
                className="uedp-voice-note-bar"
                style={{
                  height: `${h}px`,
                  animationDelay: `${i * 0.08}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Playback Controls & Timestamp */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {!isCompact && (
            <span className="uedp-voice-note-time">
              {formatTime(playing ? elapsed : durationSec)}
            </span>
          )}

          <button
            type="button"
            className="uedp-voice-note-play-btn"
            onClick={handlePlayToggle}
            aria-label={playing ? 'Pause audio' : 'Play audio'}
            title={playing ? 'Pause' : 'Play'}
          >
            {playing ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
};
