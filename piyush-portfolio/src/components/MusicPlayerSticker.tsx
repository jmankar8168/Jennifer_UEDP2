'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

interface MusicPlayerStickerProps {
  className?: string;
}

export default function MusicPlayerSticker({ className = '' }: MusicPlayerStickerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const volumeBarRef = useRef<HTMLDivElement | null>(null);

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(78); // 1:18 matching reference
  const [duration, setDuration] = useState(215); // 3:35 matching reference
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.75);

  // Scrubbing & volume drag states
  const [isScrubbing, setIsScrubbing] = useState(false);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);

  // 1. Load saved preferences
  useEffect(() => {
    try {
      const saved = localStorage.getItem('vienna_player_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.volume === 'number') {
          setVolume(parsed.volume);
          setPrevVolume(parsed.volume);
        }
        if (typeof parsed.isMuted === 'boolean') {
          setIsMuted(parsed.isMuted);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // 2. Sync volume & mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
    try {
      localStorage.setItem('vienna_player_settings', JSON.stringify({ volume, isMuted }));
    } catch {
      // Ignore
    }
  }, [volume, isMuted]);

  // 3. Listen for remote toggle events from canvas hint labels
  useEffect(() => {
    const handleRemoteToggle = () => {
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
    };
    window.addEventListener('toggle-vienna-player', handleRemoteToggle);
    return () => {
      window.removeEventListener('toggle-vienna-player', handleRemoteToggle);
    };
  }, [isPlaying]);

  // 4. Broadcast live playing status to canvas
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('vienna-player-status', { detail: { isPlaying } }));
  }, [isPlaying]);

  // Format seconds to M:SS or -M:SS
  const formatTime = (secs: number, isRemaining: boolean = false) => {
    if (isNaN(secs) || secs < 0) secs = 0;
    const totalSecs = Math.floor(secs);
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    const paddedS = s < 10 ? `0${s}` : `${s}`;
    return isRemaining ? `-${m}:${paddedS}` : `${m}:${paddedS}`;
  };

  // Play / Pause toggle
  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  // Previous Track
  const handlePrevious = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    if (!isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  };

  // Next Track
  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  };

  // Mute / Unmute
  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (isMuted) {
      setIsMuted(false);
      setVolume(prevVolume > 0.05 ? prevVolume : 0.75);
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
    }
  };

  // AirPlay / Output handler
  const handleAirPlay = async (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;
    const audioEl = audioRef.current as HTMLAudioElement & {
      setSinkId?: (sinkId: string) => Promise<void>;
    };
    const mediaDevicesAny = typeof navigator !== 'undefined' ? (navigator.mediaDevices as any) : null;
    if (typeof audioEl.setSinkId === 'function' && mediaDevicesAny && typeof mediaDevicesAny.selectAudioOutput === 'function') {
      try {
        const device = await mediaDevicesAny.selectAudioOutput();
        await audioEl.setSinkId(device.deviceId);
      } catch {
        // User cancelled or not supported
      }
    } else {
      const tooltip = document.createElement('div');
      tooltip.textContent = 'Audio Output: Standard Speaker';
      tooltip.className = 'fixed bottom-12 right-12 bg-black/90 text-white text-xs px-3 py-1.5 rounded-full z-50 animate-fade-in shadow-xl border border-white/20';
      document.body.appendChild(tooltip);
      setTimeout(() => tooltip.remove(), 2000);
    }
  };

  // Seek logic
  const handleSeek = useCallback(
    (clientX: number) => {
      if (!progressBarRef.current || !audioRef.current) return;
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const targetTime = pos * duration;
      setCurrentTime(targetTime);
      audioRef.current.currentTime = targetTime;
    },
    [duration]
  );

  const handleSeekStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsScrubbing(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleSeek(clientX);
  };

  useEffect(() => {
    if (!isScrubbing) return;
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      handleSeek(clientX);
    };
    const handleEnd = () => {
      setIsScrubbing(false);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isScrubbing, handleSeek]);

  // Volume slider logic
  const handleVolumeChange = useCallback((clientX: number) => {
    if (!volumeBarRef.current) return;
    const rect = volumeBarRef.current.getBoundingClientRect();
    const newVol = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  }, [isMuted]);

  const handleVolumeStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDraggingVolume(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleVolumeChange(clientX);
  };

  useEffect(() => {
    if (!isDraggingVolume) return;
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      handleVolumeChange(clientX);
    };
    const handleEnd = () => {
      setIsDraggingVolume(false);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDraggingVolume, handleVolumeChange]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const volumePercent = isMuted ? 0 : volume * 100;
  const remainingTime = duration - currentTime;

  return (
    <div className={`relative w-full select-none ${className}`}>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        preload="metadata"
        onTimeUpdate={() => {
          if (!isScrubbing && audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
            setDuration(audioRef.current.duration);
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
          if (audioRef.current) audioRef.current.currentTime = 0;
        }}
      >
        <source src="/assets/vienna.m4a" type="audio/mp4" />
        <source src="/assets/vienna.mp3" type="audio/mpeg" />
      </audio>

      {/* Music Player Sticker Card */}
      <div
        className="w-full bg-[#0c0c0e]/95 backdrop-blur-2xl rounded-[28px] p-3.5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(255,255,255,0.04)] border border-white/10 relative transition-transform duration-200"
      >
        {/* Album Artwork */}
        <div className="w-full aspect-square rounded-[18px] overflow-hidden shadow-xl relative bg-neutral-900 mb-2.5 border border-white/5">
          <img
            src="/assets/vienna-cover.webp"
            alt="Billy Joel — The Stranger"
            draggable={false}
            className="w-full h-full object-cover pointer-events-none select-none"
          />
        </div>

        {/* Track Info */}
        <div className="px-1 mb-2.5">
          <p className="text-[10px] font-medium text-neutral-400 tracking-normal leading-tight">iPhone</p>
          <h4 className="text-[15px] font-semibold text-white tracking-tight leading-snug mt-0.5">Vienna</h4>
          <p className="text-[12px] font-normal text-neutral-400 leading-tight mt-0.5">Billy Joel</p>
        </div>

        {/* Scrubber / Progress Bar & Timestamps */}
        <div className="px-0.5 mb-3">
          <div
            ref={progressBarRef}
            data-interactive="true"
            onMouseDown={handleSeekStart}
            onTouchStart={handleSeekStart}
            className="w-full h-6 flex items-center cursor-pointer group/progress select-none py-2"
            role="slider"
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={currentTime}
            tabIndex={0}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === 'ArrowRight') {
                if (audioRef.current) audioRef.current.currentTime = Math.min(duration, currentTime + 5);
              } else if (e.key === 'ArrowLeft') {
                if (audioRef.current) audioRef.current.currentTime = Math.max(0, currentTime - 5);
              }
            }}
          >
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-white rounded-full transition-[width] duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Timestamps */}
          <div className="flex justify-between items-center text-[9px] tabular-nums font-medium text-neutral-400 -mt-1 px-0.5">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(remainingTime, true)}</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-between px-1 mb-3">
          <div className="flex items-center justify-center gap-5 flex-1">
            {/* Previous Button */}
            <button
              type="button"
              data-interactive="true"
              onClick={handlePrevious}
              onMouseDown={(e) => e.stopPropagation()}
              aria-label="Previous track"
              className="text-white hover:text-neutral-200 active:scale-90 transition-all p-1 focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg outline-none"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M11 17.5V6.5L3.5 12l7.5 5.5zm9 0V6.5L12.5 12l7.5 5.5z" />
              </svg>
            </button>

            {/* Play / Pause Button */}
            <button
              type="button"
              data-interactive="true"
              onClick={togglePlay}
              onMouseDown={(e) => e.stopPropagation()}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="w-9 h-9 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all p-1 focus-visible:ring-2 focus-visible:ring-white/40 rounded-full outline-none"
            >
              {isPlaying ? (
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <rect x="5.5" y="4.5" width="4" height="15" rx="1.5" />
                  <rect x="14.5" y="4.5" width="4" height="15" rx="1.5" />
                </svg>
              ) : (
                <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M7 4.5v15a1 1 0 001.55.84l12-7.5a1 1 0 000-1.68l-12-7.5A1 1 0 007 4.5z" />
                </svg>
              )}
            </button>

            {/* Next Button */}
            <button
              type="button"
              data-interactive="true"
              onClick={handleNext}
              onMouseDown={(e) => e.stopPropagation()}
              aria-label="Next track"
              className="text-white hover:text-neutral-200 active:scale-90 transition-all p-1 focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg outline-none"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M13 6.5v11l7.5-5.5L13 6.5zm-9 0v11l7.5-5.5L4 6.5z" />
              </svg>
            </button>
          </div>

          {/* AirPlay Output Button */}
          <button
            type="button"
            data-interactive="true"
            onClick={handleAirPlay}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label="Audio output"
            className="text-neutral-400 hover:text-white active:scale-90 transition-all p-1 focus-visible:ring-2 focus-visible:ring-white/40 rounded-full outline-none"
            title="AirPlay / Audio Output"
          >
            <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
              <path d="M12 16.5l-4.5 4.5h9l-4.5-4.5z" fill="currentColor" stroke="none" />
              <path d="M5 12.5a9.9 9.9 0 0114 0" strokeLinecap="round" />
              <path d="M8 15a5.7 5.7 0 018 0" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Volume Row */}
        <div className="flex items-center gap-2 px-0.5 pt-0.5">
          {/* Left Speaker / Mute Toggle */}
          <button
            type="button"
            data-interactive="true"
            onClick={toggleMute}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            className="text-neutral-400 hover:text-white transition-colors p-0.5 focus-visible:ring-2 focus-visible:ring-white/40 rounded outline-none"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M7 9v6h4l5 5V4L11 9H7z" />
              </svg>
            )}
          </button>

          {/* Volume Slider Track */}
          <div
            ref={volumeBarRef}
            data-interactive="true"
            onMouseDown={handleVolumeStart}
            onTouchStart={handleVolumeStart}
            className="flex-1 h-5 flex items-center cursor-pointer select-none group/vol"
            role="slider"
            aria-label="Volume"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(volumePercent)}
            tabIndex={0}
            onKeyDown={(e) => {
              e.stopPropagation();
              if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                const next = Math.min(1, volume + 0.05);
                setVolume(next);
                if (isMuted) setIsMuted(false);
              } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                const next = Math.max(0, volume - 0.05);
                setVolume(next);
              }
            }}
          >
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-white rounded-full transition-[width] duration-75"
                style={{ width: `${volumePercent}%` }}
              />
            </div>
          </div>

          {/* Right Speaker (High Volume Icon) */}
          <div className="text-neutral-400 p-0.5 pointer-events-none">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2-1.23L7 6H3v12h4l5 4V2zm2 7.05v5.9c1.07-.63 1.8-1.75 1.8-3.05 0-1.3-.73-2.42-1.8-2.85z" />
            </svg>
          </div>
        </div>

        {/* "currently listening" pill sticker matching the "currently reading" reference sticker */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#fbf5e6] text-[#222] text-[11px] font-sans font-medium tracking-tight px-3 py-0.5 rounded-full shadow-lg border border-amber-300/80 whitespace-nowrap rotate-[-2deg] pointer-events-none select-none flex items-center gap-1.5 z-10">
          <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-emerald-500 animate-ping' : 'bg-neutral-400'}`} />
          <span>currently listening</span>
        </div>
      </div>
    </div>
  );
}
