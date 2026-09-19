import React, { useState, useEffect } from 'react';
import './CameraControls.css';

export type CameraTypeVariant = 'Default' | 'Flip Hover' | 'End Hover';
export type CameraTheme = 'dark' | 'light';

export interface CameraControlsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Literal Figma Layer Name: "Camera" (Node ID: 16:1926) */
  className?: string;
  /** Figma variant: 'Default' | 'Flip Hover' | 'End Hover' */
  Type?: CameraTypeVariant;
  /** Theme: 'dark' (default) or 'light' */
  theme?: CameraTheme;
  /** Whether to show the simulated live video feed viewport */
  showViewport?: boolean;
  /** Camera mode: 'front' or 'back' */
  initialOrientation?: 'front' | 'back';
  /** Initial call duration in seconds */
  initialDurationSec?: number;
  /** Callback when flip camera button is clicked */
  onFlip?: (newOrientation: 'front' | 'back') => void;
  /** Callback when decline / end call button is clicked */
  onDecline?: () => void;
  /** Callback when microphone is toggled */
  onToggleMute?: (muted: boolean) => void;
  /** Callback when flashlight/torch is toggled */
  onToggleTorch?: (torchOn: boolean) => void;
  /** Custom children or HUD overlays */
  children?: React.ReactNode;
}

/* Figma exact icons */
const FlipCameraIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18ZM12 8V10.5C14.07 10.5 15.5 12.13 15.5 13.5C15.5 14.88 14.38 16 13 16C12.45 16 11.95 15.82 11.55 15.52L10.45 16.62C11.15 17.18 12.04 17.5 13 17.5C15.48 17.5 17.5 15.48 17.5 13C17.5 10.52 15.48 8.5 13 8.5V6L9.5 9.5L12 12V8Z"
      fill="currentColor"
    />
  </svg>
);

const CrossDeclineIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.11 5.7C6.72 5.31 6.09 5.31 5.7 5.7C5.31 6.09 5.31 6.72 5.7 7.11L10.59 12L5.7 16.89C5.31 17.28 5.31 17.91 5.7 18.3C6.09 18.69 6.72 18.69 7.11 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
      fill="currentColor"
    />
  </svg>
);

const MicIcon: React.FC<{ muted?: boolean; size?: number }> = ({ muted = false, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {muted ? (
      <path
        d="M19 11H17.3C17.3 11.74 17.14 12.43 16.87 13.05L18.18 14.36C18.69 13.38 19 12.23 19 11ZM14.98 11.17C14.99 10.95 15 10.73 15 10.5V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V5.18L14.98 11.17ZM4.27 3L3 4.27L7.01 8.28C7 8.52 7 8.76 7 9V10.5C7 13.26 9.24 15.5 12 15.5C12.72 15.5 13.4 15.34 14.02 15.06L17.73 18.77C16.92 19.38 15.98 19.82 14.95 20.06V22H11.05V20.06C7.55 19.55 5 16.54 5 13H3.3C3.3 16.93 6.18 20.17 10 20.88V22H14V20.88C15.17 20.66 16.27 20.19 17.24 19.52L19.73 22L21 20.73L4.27 3Z"
        fill="currentColor"
      />
    ) : (
      <path
        d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM19 10V11C19 14.53 16.39 17.44 13 17.93V21H11V17.93C7.61 17.44 5 14.53 5 11V10H3.3C3.3 14.42 6.55 18.06 10.7 18.66V22H13.3V18.66C17.45 18.06 20.7 14.42 20.7 10H19Z"
        fill="currentColor"
      />
    )}
  </svg>
);

const TorchIcon: React.FC<{ on?: boolean; size?: number }> = ({ on = false, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 2H6C4.9 2 4 2.9 4 4V7C4 8.66 5.34 10 7 10V20C7 21.1 7.9 22 9 22H15C16.1 22 17 21.1 17 20V10C18.66 10 20 8.66 20 7V4C20 2.9 19.1 2 18 2ZM15 4V5H9V4H15ZM15 7V8H9V7H15ZM15 20H9V12H15V20Z"
      fill={on ? '#B7FF4D' : 'currentColor'}
    />
  </svg>
);

/**
 * CameraControls Component
 * Exact recreation from Figma (Node ID: 16:1926)
 * Supports Flip, Decline, Mute, and Torch controls with interactive video feed.
 */
export const CameraControls: React.FC<CameraControlsProps> = ({
  className = '',
  Type = 'Default',
  theme = 'dark',
  showViewport = true,
  initialOrientation = 'back',
  initialDurationSec = 252, // 04:12
  onFlip,
  onDecline,
  onToggleMute,
  onToggleTorch,
  children,
  ...rest
}) => {
  const [orientation, setOrientation] = useState<'front' | 'back'>(initialOrientation);
  const [duration, setDuration] = useState<number>(initialDurationSec);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isTorchOn, setIsTorchOn] = useState<boolean>(false);
  const [isCallEnded, setIsCallEnded] = useState<boolean>(false);

  // Timer simulation
  useEffect(() => {
    if (isCallEnded) return;
    const interval = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCallEnded]);

  const formatTimer = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleFlip = () => {
    const next = orientation === 'back' ? 'front' : 'back';
    setOrientation(next);
    onFlip?.(next);
  };

  const handleDecline = () => {
    setIsCallEnded(true);
    onDecline?.();
  };

  const handleToggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    onToggleMute?.(next);
  };

  const handleToggleTorch = () => {
    const next = !isTorchOn;
    setIsTorchOn(next);
    onToggleTorch?.(next);
  };

  return (
    <div className={`uedp-camera-wrapper ${className}`} {...rest}>
      {showViewport && (
        <div className={`uedp-camera-viewport uedp-camera-viewport--${theme}`}>
          {/* Torch Light Glow Layer */}
          {isTorchOn && <div className="uedp-camera-torch-glow" />}

          {/* Viewport HUD */}
          <div className="uedp-camera-hud-top">
            <div className="uedp-camera-live-badge">
              <span className="uedp-camera-live-dot" />
              {isCallEnded ? 'CALL ENDED' : 'LIVE ASSIST'}
            </div>
            <div className="uedp-camera-timer">
              {formatTimer(duration)}
            </div>
          </div>

          {/* Simulated Viewfinder */}
          <div className={`uedp-camera-feed ${orientation === 'front' ? 'uedp-camera-feed--flipped' : ''}`}>
            <div className="uedp-camera-corners" />
            <div className="uedp-camera-crosshair">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 4V10M16 22V28M4 16H10M22 16H28" stroke="#B7FF4D" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="16" cy="16" r="4" stroke="#B7FF4D" strokeWidth="1" />
              </svg>
            </div>
            <div style={{ textAlign: 'center', zIndex: 2, color: theme === 'dark' ? '#94A3B8' : '#475569', fontSize: 13 }}>
              {isCallEnded ? (
                <span style={{ color: '#EF4444', fontWeight: 600 }}>Session Terminated</span>
              ) : (
                <>
                  <div>{orientation === 'back' ? 'Ultra-wide Assist Camera' : 'Front Selfie Camera'}</div>
                  <div style={{ fontSize: 11, fontFamily: 'Space Mono', color: '#B7FF4D', marginTop: 4 }}>
                    AI Object Detection Active
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Exact Figma Control Bar (16:1926) */}
      <div className={`uedp-camera-control-bar uedp-camera-control-bar--${theme}`}>
        {/* Secondary Torch Toggle */}
        <button
          type="button"
          className={`uedp-camera-pill uedp-camera-pill--secondary ${isTorchOn ? 'uedp-camera-pill--active' : ''}`}
          onClick={handleToggleTorch}
          aria-label={isTorchOn ? 'Turn Torch Off' : 'Turn Torch On'}
          title="Torch"
        >
          <TorchIcon on={isTorchOn} />
          <span className="uedp-camera-pill-label">TORCH</span>
        </button>

        {/* Primary Flip Button (Exact Figma 16:1931) */}
        <button
          type="button"
          className={`uedp-camera-pill uedp-camera-pill--flip ${Type === 'Flip Hover' ? 'uedp-camera-pill--flip-hover' : ''}`}
          onClick={handleFlip}
          aria-label="Flip Camera"
          title="Flip Camera"
        >
          <FlipCameraIcon size={26} />
          <span className="uedp-camera-pill-label">FLIP</span>
        </button>

        {/* Primary Decline Button (Exact Figma 16:1928) */}
        <button
          type="button"
          className={`uedp-camera-pill uedp-camera-pill--decline ${Type === 'End Hover' ? 'uedp-camera-pill--end-hover' : ''}`}
          onClick={handleDecline}
          aria-label="End Call"
          title="End Call"
        >
          <CrossDeclineIcon size={26} />
          <span className="uedp-camera-pill-label">END</span>
        </button>

        {/* Secondary Mute Toggle */}
        <button
          type="button"
          className={`uedp-camera-pill uedp-camera-pill--secondary ${isMuted ? 'uedp-camera-pill--active' : ''}`}
          onClick={handleToggleMute}
          aria-label={isMuted ? 'Unmute Microphone' : 'Mute Microphone'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          <MicIcon muted={isMuted} />
          <span className="uedp-camera-pill-label">{isMuted ? 'MUTED' : 'MIC'}</span>
        </button>
      </div>

      {children}
    </div>
  );
};
