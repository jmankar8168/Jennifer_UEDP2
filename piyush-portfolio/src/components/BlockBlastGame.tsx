'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

// Block Shape Definition
export interface BlockShape {
  id: string;
  name: string;
  matrix: number[][]; // 2D array of 0s and 1s
  color: string;
  glowColor: string;
  squaresCount: number;
}

// 18 classic shapes with vibrant Figma-inspired palette colors
const SHAPE_DEFINITIONS: Array<{ name: string; matrix: number[][]; color: string; glowColor: string }> = [
  // Singles & Dots
  { name: 'dot', matrix: [[1]], color: '#FFAA00', glowColor: 'rgba(255, 170, 0, 0.4)' },

  // 2-square
  { name: 'h2', matrix: [[1, 1]], color: '#009EFF', glowColor: 'rgba(0, 158, 255, 0.4)' },
  { name: 'v2', matrix: [[1], [1]], color: '#009EFF', glowColor: 'rgba(0, 158, 255, 0.4)' },

  // 3-square
  { name: 'h3', matrix: [[1, 1, 1]], color: '#00B25D', glowColor: 'rgba(0, 178, 93, 0.4)' },
  { name: 'v3', matrix: [[1], [1], [1]], color: '#00B25D', glowColor: 'rgba(0, 178, 93, 0.4)' },

  // 4-square Line
  { name: 'h4', matrix: [[1, 1, 1, 1]], color: '#8253FF', glowColor: 'rgba(130, 83, 255, 0.4)' },
  { name: 'v4', matrix: [[1], [1], [1], [1]], color: '#8253FF', glowColor: 'rgba(130, 83, 255, 0.4)' },

  // 5-square Line (occasional reward)
  { name: 'h5', matrix: [[1, 1, 1, 1, 1]], color: '#FF2ADF', glowColor: 'rgba(255, 42, 223, 0.4)' },
  { name: 'v5', matrix: [[1], [1], [1], [1], [1]], color: '#FF2ADF', glowColor: 'rgba(255, 42, 223, 0.4)' },

  // Squares
  { name: 'square2', matrix: [[1, 1], [1, 1]], color: '#FF5100', glowColor: 'rgba(255, 81, 0, 0.4)' },
  { name: 'square3', matrix: [[1, 1, 1], [1, 1, 1], [1, 1, 1]], color: '#E11D48', glowColor: 'rgba(225, 29, 72, 0.4)' },

  // Small Corners (2x2)
  { name: 'corner-tl', matrix: [[1, 1], [1, 0]], color: '#00D2B4', glowColor: 'rgba(0, 210, 180, 0.4)' },
  { name: 'corner-tr', matrix: [[1, 1], [0, 1]], color: '#00D2B4', glowColor: 'rgba(0, 210, 180, 0.4)' },
  { name: 'corner-bl', matrix: [[1, 0], [1, 1]], color: '#00D2B4', glowColor: 'rgba(0, 210, 180, 0.4)' },
  { name: 'corner-br', matrix: [[0, 1], [1, 1]], color: '#00D2B4', glowColor: 'rgba(0, 210, 180, 0.4)' },

  // L-Shapes (3x2)
  { name: 'L-1', matrix: [[1, 0], [1, 0], [1, 1]], color: '#8253FF', glowColor: 'rgba(130, 83, 255, 0.4)' },
  { name: 'L-2', matrix: [[0, 1], [0, 1], [1, 1]], color: '#8253FF', glowColor: 'rgba(130, 83, 255, 0.4)' },
  { name: 'L-3', matrix: [[1, 1, 1], [1, 0, 0]], color: '#8253FF', glowColor: 'rgba(130, 83, 255, 0.4)' },
  { name: 'L-4', matrix: [[1, 1, 1], [0, 0, 1]], color: '#8253FF', glowColor: 'rgba(130, 83, 255, 0.4)' },

  // T-Shapes (3x2)
  { name: 'T-down', matrix: [[1, 1, 1], [0, 1, 0]], color: '#009EFF', glowColor: 'rgba(0, 158, 255, 0.4)' },
  { name: 'T-up', matrix: [[0, 1, 0], [1, 1, 1]], color: '#009EFF', glowColor: 'rgba(0, 158, 255, 0.4)' },

  // Z & S shapes
  { name: 'Z', matrix: [[1, 1, 0], [0, 1, 1]], color: '#FF5100', glowColor: 'rgba(255, 81, 0, 0.4)' },
  { name: 'S', matrix: [[0, 1, 1], [1, 1, 0]], color: '#00B25D', glowColor: 'rgba(0, 178, 93, 0.4)' },
];

function createRandomPiece(slotIdx: number): BlockShape {
  const def = SHAPE_DEFINITIONS[Math.floor(Math.random() * SHAPE_DEFINITIONS.length)];
  let squaresCount = 0;
  for (const row of def.matrix) {
    for (const cell of row) {
      if (cell === 1) squaresCount++;
    }
  }
  return {
    id: `${def.name}-${Date.now()}-${slotIdx}-${Math.random()}`,
    name: def.name,
    matrix: def.matrix,
    color: def.color,
    glowColor: def.glowColor,
    squaresCount,
  };
}

function checkCanFit(matrix: number[][], board: (string | null)[][]): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let r = 0; r <= 8 - rows; r++) {
    for (let c = 0; c <= 8 - cols; c++) {
      let fits = true;
      for (let mr = 0; mr < rows; mr++) {
        for (let mc = 0; mc < cols; mc++) {
          if (matrix[mr][mc] === 1 && board[r + mr][c + mc] !== null) {
            fits = false;
            break;
          }
        }
        if (!fits) break;
      }
      if (fits) return true;
    }
  }
  return false;
}

interface BlockBlastGameProps {
  isMobile?: boolean;
}

export default function BlockBlastGame({ isMobile = false }: BlockBlastGameProps) {
  // Board: 8x8 grid
  const [board, setBoard] = useState<(string | null)[][]>(() =>
    Array(8).fill(null).map(() => Array(8).fill(null))
  );

  // Tray containing 3 pieces
  const [tray, setTray] = useState<(BlockShape | null)[]>(() => [
    createRandomPiece(0),
    createRandomPiece(1),
    createRandomPiece(2),
  ]);

  // Scoring
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [scorePopup, setScorePopup] = useState<{ text: string; id: number } | null>(null);
  const [comboCount, setComboCount] = useState<number>(0);

  // Game status
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Clearing animation state
  const [clearingCells, setClearingCells] = useState<Set<string>>(new Set());

  // Drag & drop state
  const [activeDrag, setActiveDrag] = useState<{
    piece: BlockShape;
    slotIdx: number;
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
  } | null>(null);

  const [hoverTarget, setHoverTarget] = useState<{
    row: number;
    col: number;
    isValid: boolean;
  } | null>(null);

  const boardRef = useRef<HTMLDivElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize best score from localStorage
  useEffect(() => {
    try {
      const savedBest = localStorage.getItem('block_blast_best_score');
      if (savedBest) setBestScore(parseInt(savedBest, 10) || 0);

      const savedSound = localStorage.getItem('block_blast_sound');
      if (savedSound !== null) setSoundEnabled(savedSound === 'true');
    } catch {
      // Ignore
    }
  }, []);

  // Web Audio Synthesizer
  const playSound = useCallback(
    (type: 'pop' | 'clear' | 'combo' | 'gameover') => {
      if (!soundEnabled) return;
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          audioCtxRef.current = new AudioContextClass();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const now = ctx.currentTime;

        if (type === 'pop') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(320, now);
          osc.frequency.exponentialRampToValueAtTime(540, now + 0.07);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.07);
        } else if (type === 'clear') {
          // Major chord chime
          const notes = [523.25, 659.25, 783.99, 1046.5];
          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.04);
            gain.gain.setValueAtTime(0.15, now + idx * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.04);
            osc.stop(now + idx * 0.04 + 0.25);
          });
        } else if (type === 'combo') {
          // Energetic ascending arpeggio
          const notes = [440, 554.37, 659.25, 880, 1108.73];
          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.035);
            gain.gain.setValueAtTime(0.18, now + idx * 0.035);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.035 + 0.3);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.035);
            osc.stop(now + idx * 0.035 + 0.3);
          });
        } else if (type === 'gameover') {
          // Gentle minor tones
          const notes = [440, 415.3, 392, 349.23];
          notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.12);
            gain.gain.setValueAtTime(0.12, now + idx * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + idx * 0.12);
            osc.stop(now + idx * 0.12 + 0.35);
          });
        }
      } catch {
        // Audio error ignored
      }
    },
    [soundEnabled]
  );

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    try {
      localStorage.setItem('block_blast_sound', String(next));
    } catch {}
  };

  // Reset Game
  const resetGame = () => {
    setBoard(Array(8).fill(null).map(() => Array(8).fill(null)));
    setTray([createRandomPiece(0), createRandomPiece(1), createRandomPiece(2)]);
    setScore(0);
    setComboCount(0);
    setClearingCells(new Set());
    setGameOver(false);
    setActiveDrag(null);
    setHoverTarget(null);
  };

  // Drag Start
  const handleDragStart = (
    piece: BlockShape,
    slotIdx: number,
    clientX: number,
    clientY: number
  ) => {
    if (gameOver) return;
    setActiveDrag({
      piece,
      slotIdx,
      startX: clientX,
      startY: clientY,
      currentX: clientX,
      currentY: clientY,
    });
  };

  // Calculate target row & col on the 8x8 board from pointer coordinates
  const calculateBoardHover = useCallback(
    (clientX: number, clientY: number, piece: BlockShape) => {
      if (!boardRef.current) return null;
      const rect = boardRef.current.getBoundingClientRect();
      const cellSize = rect.width / 8;

      // Center the piece slightly above the fingertip/cursor for visibility
      const pieceW = piece.matrix[0].length * cellSize;
      const pieceH = piece.matrix.length * cellSize;

      const pieceLeft = clientX - pieceW / 2;
      const pieceTop = clientY - pieceH - 20;

      const col = Math.round((pieceLeft - rect.left) / cellSize);
      const row = Math.round((pieceTop - rect.top) / cellSize);

      // Check if target is at least partially in the vicinity of the board
      if (row < -1 || row > 8 || col < -1 || col > 8) {
        return null;
      }

      // Check validity: all 1s must fall within [0..7, 0..7] and be empty on board
      let isValid = true;
      for (let r = 0; r < piece.matrix.length; r++) {
        for (let c = 0; c < piece.matrix[0].length; c++) {
          if (piece.matrix[r][c] === 1) {
            const br = row + r;
            const bc = col + c;
            if (br < 0 || br >= 8 || bc < 0 || bc >= 8 || board[br][bc] !== null) {
              isValid = false;
              break;
            }
          }
        }
        if (!isValid) break;
      }

      return { row, col, isValid };
    },
    [board]
  );

  // Drag Move & End listeners
  useEffect(() => {
    if (!activeDrag) return;

    const handleMouseMove = (e: MouseEvent) => {
      setActiveDrag(prev => prev ? { ...prev, currentX: e.clientX, currentY: e.clientY } : null);
      const target = calculateBoardHover(e.clientX, e.clientY, activeDrag.piece);
      setHoverTarget(target);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setActiveDrag(prev => prev ? { ...prev, currentX: touch.clientX, currentY: touch.clientY } : null);
        const target = calculateBoardHover(touch.clientX, touch.clientY, activeDrag.piece);
        setHoverTarget(target);
      }
    };

    const handleDragEnd = () => {
      if (hoverTarget && hoverTarget.isValid && boardRef.current) {
        // Place piece onto board
        const newBoard = board.map(row => [...row]);
        const piece = activeDrag.piece;
        const targetR = hoverTarget.row;
        const targetC = hoverTarget.col;

        for (let r = 0; r < piece.matrix.length; r++) {
          for (let c = 0; c < piece.matrix[0].length; c++) {
            if (piece.matrix[r][c] === 1) {
              newBoard[targetR + r][targetC + c] = piece.color;
            }
          }
        }

        // Add placement score
        const placementPoints = piece.squaresCount * 10;
        let turnScore = placementPoints;

        // Check completed rows & columns
        const fullRows: number[] = [];
        const fullCols: number[] = [];

        for (let r = 0; r < 8; r++) {
          if (newBoard[r].every(cell => cell !== null)) {
            fullRows.push(r);
          }
        }

        for (let c = 0; c < 8; c++) {
          let colFull = true;
          for (let r = 0; r < 8; r++) {
            if (newBoard[r][c] === null) {
              colFull = false;
              break;
            }
          }
          if (colFull) fullCols.push(c);
        }

        const totalLines = fullRows.length + fullCols.length;

        if (totalLines > 0) {
          // Cells to clear
          const toClear = new Set<string>();
          for (const r of fullRows) {
            for (let c = 0; c < 8; c++) toClear.add(`${r}-${c}`);
          }
          for (const c of fullCols) {
            for (let r = 0; r < 8; r++) toClear.add(`${r}-${c}`);
          }

          setClearingCells(toClear);

          // Line score calculation
          let lineScore = 0;
          if (totalLines === 1) lineScore = 100;
          else if (totalLines === 2) lineScore = 300;
          else if (totalLines === 3) lineScore = 600;
          else lineScore = 1000 + (totalLines - 4) * 400;

          // Combo bonus
          const newCombo = comboCount + 1;
          setComboCount(newCombo);
          const comboBonus = newCombo > 1 ? (newCombo - 1) * 200 : 0;
          turnScore += lineScore + comboBonus;

          // Sound effect
          if (newCombo > 1 || totalLines > 1) {
            playSound('combo');
          } else {
            playSound('clear');
          }

          // Show score popup text
          const popupText = comboBonus > 0 ? `+${turnScore} (${newCombo}x Combo!)` : `+${turnScore}`;
          setScorePopup({ text: popupText, id: Date.now() });

          // Clear cells from board after 200ms animation
          setTimeout(() => {
            const clearedBoard = newBoard.map((row, r) =>
              row.map((cell, c) => (toClear.has(`${r}-${c}`) ? null : cell))
            );
            setBoard(clearedBoard);
            setClearingCells(new Set());
            finishTurn(clearedBoard, activeDrag.slotIdx);
          }, 200);
        } else {
          setComboCount(0);
          playSound('pop');
          setScorePopup({ text: `+${turnScore}`, id: Date.now() });
          setBoard(newBoard);
          finishTurn(newBoard, activeDrag.slotIdx);
        }

        // Update Score & Best Score
        setScore(prev => {
          const next = prev + turnScore;
          if (next > bestScore) {
            setBestScore(next);
            try {
              localStorage.setItem('block_blast_best_score', String(next));
            } catch {}
          }
          return next;
        });
      }

      setActiveDrag(null);
      setHoverTarget(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleDragEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [activeDrag, board, hoverTarget, calculateBoardHover, comboCount, bestScore, playSound]);

  // Finish turn: update tray and check game over
  const finishTurn = (currentBoard: (string | null)[][], usedSlotIdx: number) => {
    let nextTray = [...tray];
    nextTray[usedSlotIdx] = null;

    // Check if tray is empty -> deal 3 new blocks
    if (nextTray.every(p => p === null)) {
      nextTray = [createRandomPiece(0), createRandomPiece(1), createRandomPiece(2)];
    }
    setTray(nextTray);

    // Check if ANY remaining piece in tray can fit on the board
    let canMakeMove = false;
    for (const piece of nextTray) {
      if (piece !== null && checkCanFit(piece.matrix, currentBoard)) {
        canMakeMove = true;
        break;
      }
    }

    if (!canMakeMove) {
      setGameOver(true);
      playSound('gameover');
    }
  };

  // Preview cell calculation for hover
  const previewCells = new Map<string, boolean>(); // key: 'r-c', val: isValid
  if (activeDrag && hoverTarget) {
    const { row, col, isValid } = hoverTarget;
    const piece = activeDrag.piece;
    for (let r = 0; r < piece.matrix.length; r++) {
      for (let c = 0; c < piece.matrix[0].length; c++) {
        if (piece.matrix[r][c] === 1) {
          const br = row + r;
          const bc = col + c;
          if (br >= 0 && br < 8 && bc >= 0 && bc < 8) {
            previewCells.set(`${br}-${bc}`, isValid);
          }
        }
      }
    }
  }

  return (
    <div className={`flex flex-col items-center justify-center w-full select-none ${isMobile ? 'max-w-md mx-auto p-2' : 'p-4'}`}>
      {/* Top Header & Score Dashboard */}
      <div className="flex items-center justify-between w-full max-w-[420px] mb-3 px-2">
        {/* Score Display */}
        <div className="flex items-center gap-3">
          <div className="bg-white/80 dark:bg-[#1f1f1f]/80 backdrop-blur-md border border-[var(--figma-border)] px-4 py-1.5 rounded-xl shadow-sm text-center">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--figma-text-secondary)] block">Score</span>
            <span className="text-[20px] font-bold font-mono tracking-tight text-[var(--figma-text)] leading-none">{score}</span>
          </div>

          <div className="bg-white/80 dark:bg-[#1f1f1f]/80 backdrop-blur-md border border-[var(--figma-border)] px-4 py-1.5 rounded-xl shadow-sm text-center">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--figma-text-secondary)] block">Best</span>
            <span className="text-[20px] font-bold font-mono tracking-tight text-[#8253FF] leading-none">{bestScore}</span>
          </div>
        </div>

        {/* Action Controls: Sound & Restart */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={soundEnabled ? 'Mute game sound' : 'Unmute game sound'}
            className="w-8 h-8 rounded-xl bg-white/80 dark:bg-[#1f1f1f]/80 backdrop-blur-md border border-[var(--figma-border)] flex items-center justify-center text-[var(--figma-text-secondary)] hover:text-[var(--figma-text)] hover:scale-105 active:scale-95 transition-all shadow-sm"
            title={soundEnabled ? 'Sound: On' : 'Sound: Off'}
          >
            {soundEnabled ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2-1.23L7 6H3v12h4l5 4V2zm2 7.05v5.9c1.07-.63 1.8-1.75 1.8-3.05 0-1.3-.73-2.42-1.8-2.85z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            onClick={resetGame}
            aria-label="Restart puzzle"
            className="w-8 h-8 rounded-xl bg-white/80 dark:bg-[#1f1f1f]/80 backdrop-blur-md border border-[var(--figma-border)] flex items-center justify-center text-[var(--figma-text-secondary)] hover:text-[var(--figma-text)] hover:scale-105 active:scale-95 transition-all shadow-sm"
            title="Restart game"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating score popup notification */}
      {scorePopup && (
        <div
          key={scorePopup.id}
          className="absolute top-12 z-30 pointer-events-none text-[15px] font-bold text-[#8253FF] animate-bounce bg-white/95 dark:bg-[#181818]/95 px-3 py-1 rounded-full shadow-lg border border-[#8253FF]/30"
        >
          {scorePopup.text}
        </div>
      )}

      {/* 8x8 Game Board Container */}
      <div className="relative p-2.5 sm:p-3 rounded-2xl bg-white/70 dark:bg-[#18181a]/70 backdrop-blur-xl border border-[var(--figma-border)] shadow-xl">
        <div
          ref={boardRef}
          className="grid grid-cols-8 gap-1 sm:gap-1.5 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] p-1.5 sm:p-2 rounded-xl bg-neutral-100/90 dark:bg-[#101012]/90 border border-neutral-200/80 dark:border-neutral-800/80"
        >
          {board.map((row, r) =>
            row.map((cellColor, c) => {
              const cellKey = `${r}-${c}`;
              const isClearing = clearingCells.has(cellKey);
              const isPreview = previewCells.has(cellKey);
              const previewValid = previewCells.get(cellKey);

              let bgStyle = 'bg-neutral-200/50 dark:bg-neutral-800/50';
              let customStyle: React.CSSProperties = {};

              if (cellColor) {
                bgStyle = '';
                customStyle = {
                  backgroundColor: cellColor,
                  boxShadow: `0 2px 8px ${cellColor}40, inset 0 1px 1px rgba(255,255,255,0.4)`,
                };
              } else if (isPreview) {
                if (previewValid && activeDrag) {
                  customStyle = {
                    backgroundColor: `${activeDrag.piece.color}bb`,
                    boxShadow: `0 0 12px ${activeDrag.piece.color}80, inset 0 1px 2px rgba(255,255,255,0.6)`,
                  };
                } else {
                  customStyle = {
                    backgroundColor: 'rgba(239, 68, 68, 0.4)',
                    boxShadow: '0 0 8px rgba(239, 68, 68, 0.6)',
                  };
                }
              }

              return (
                <div
                  key={cellKey}
                  style={customStyle}
                  className={`w-full h-full rounded-[6px] sm:rounded-[8px] transition-all duration-150 relative ${bgStyle} ${
                    isClearing ? 'scale-0 opacity-0 bg-white rotate-12' : 'scale-100 opacity-100'
                  } ${cellColor ? 'border border-black/15' : 'border border-transparent'}`}
                />
              );
            })
          )}
        </div>

        {/* Game Over Modal Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center animate-fade-in z-20">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
            <h3 className="text-[22px] font-extrabold tracking-tight text-white mb-1">GAME OVER</h3>
            <p className="text-[13px] text-neutral-400 mb-4">No remaining moves available!</p>

            <div className="bg-white/10 rounded-xl p-3 w-full max-w-[200px] mb-5 border border-white/10">
              <div className="flex justify-between text-[12px] text-neutral-300 mb-1">
                <span>Final Score</span>
                <span className="font-bold text-white font-mono">{score}</span>
              </div>
              <div className="flex justify-between text-[12px] text-neutral-300">
                <span>Best Score</span>
                <span className="font-bold text-[#8253FF] font-mono">{bestScore}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={resetGame}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#8253FF] to-[#FF2ADF] text-white font-semibold text-[14px] shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      {/* Block Tray at Bottom (3 Pieces) */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-[380px] sm:max-w-[420px] mt-4 min-h-[90px] sm:min-h-[105px]">
        {tray.map((piece, slotIdx) => (
          <div
            key={piece ? piece.id : `empty-${slotIdx}`}
            className="flex items-center justify-center p-2 rounded-xl bg-white/40 dark:bg-[#1a1a1c]/40 border border-[var(--figma-border)]/60 min-h-[85px] sm:min-h-[100px] relative transition-transform"
          >
            {piece && (
              <div
                onMouseDown={e => {
                  e.preventDefault();
                  handleDragStart(piece, slotIdx, e.clientX, e.clientY);
                }}
                onTouchStart={e => {
                  if (e.touches.length > 0) {
                    const touch = e.touches[0];
                    handleDragStart(piece, slotIdx, touch.clientX, touch.clientY);
                  }
                }}
                className={`cursor-grab active:cursor-grabbing p-1 hover:scale-105 transition-transform flex flex-col items-center justify-center ${
                  activeDrag?.slotIdx === slotIdx ? 'opacity-20 scale-95' : 'opacity-100'
                }`}
                title={`Drag ${piece.name} piece`}
              >
                <div
                  className="grid gap-1"
                  style={{
                    gridTemplateColumns: `repeat(${piece.matrix[0].length}, minmax(0, 1fr))`,
                  }}
                >
                  {piece.matrix.map((row, r) =>
                    row.map((val, c) => (
                      <div
                        key={`${r}-${c}`}
                        style={
                          val === 1
                            ? {
                                backgroundColor: piece.color,
                                boxShadow: `0 2px 6px ${piece.color}40, inset 0 1px 1px rgba(255,255,255,0.4)`,
                              }
                            : undefined
                        }
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-[4px] sm:rounded-[5px] ${
                          val === 1 ? 'border border-black/15' : 'bg-transparent'
                        }`}
                      />
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Dragged Piece Ghost */}
      {activeDrag && (
        <div
          className="fixed pointer-events-none z-50 transition-none"
          style={{
            left: `${activeDrag.currentX}px`,
            top: `${activeDrag.currentY - 60}px`,
            transform: 'translate(-50%, -50%) scale(1.15)',
          }}
        >
          <div
            className="grid gap-1.5 p-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 shadow-2xl"
            style={{
              gridTemplateColumns: `repeat(${activeDrag.piece.matrix[0].length}, minmax(0, 1fr))`,
            }}
          >
            {activeDrag.piece.matrix.map((row, r) =>
              row.map((val, c) => (
                <div
                  key={`ghost-${r}-${c}`}
                  style={
                    val === 1
                      ? {
                          backgroundColor: activeDrag.piece.color,
                          boxShadow: `0 4px 12px ${activeDrag.piece.color}70, inset 0 1px 1px rgba(255,255,255,0.5)`,
                        }
                      : undefined
                  }
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-[6px] ${
                    val === 1 ? 'border border-black/20' : 'bg-transparent'
                  }`}
                />
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
