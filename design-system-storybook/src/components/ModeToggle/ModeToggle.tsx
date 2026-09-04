import React, { useState } from 'react';
import './ModeToggle.css';

export interface ModeToggleProps {
  /** Literal Figma Layer Name: "mode toggle" */
  className?: string;
  /** Figma Variant State */
  State?: 'Default' | 'Selected' | 'Hover';
  /** Left option label */
  leftLabel?: string;
  /** Right option label */
  rightLabel?: string;
  /** Controlled active side ('left' | 'right') */
  activeSide?: 'left' | 'right';
  /** Change callback */
  onChange?: (active: 'left' | 'right') => void;
}

/**
 * ModeToggle (2-Way Segmented Control) Component
 * Preserved Figma Layer Name: "mode toggle" (Node ID: 30:125)
 */
export const ModeToggle: React.FC<ModeToggleProps> = ({
  className = '',
  State = 'Default',
  leftLabel = 'DARK',
  rightLabel = 'LIGHT',
  activeSide,
  onChange,
}) => {
  // If controlled, use activeSide; otherwise initialize based on Figma State variant (Selected = left active, Default = right active)
  const [internalActive, setInternalActive] = useState<'left' | 'right'>(
    State === 'Selected' ? 'left' : 'right'
  );

  const currentActive = activeSide !== undefined ? activeSide : internalActive;

  const handleSelect = (side: 'left' | 'right') => {
    if (activeSide === undefined) {
      setInternalActive(side);
    }
    if (onChange) {
      onChange(side);
    }
  };

  const stateClass = `uedp-mode-toggle--${State.toLowerCase()}`;

  return (
    <div className={`uedp-mode-toggle ${stateClass} ${className}`.trim()} role="group" aria-label="Mode Toggle">
      {/* Left Segment */}
      <button
        type="button"
        className={`uedp-mode-toggle-segment ${currentActive === 'left' ? 'uedp-mode-toggle-segment--active-light' : 'uedp-mode-toggle-segment--inactive-dark'}`}
        onClick={() => handleSelect('left')}
        aria-pressed={currentActive === 'left'}
      >
        <span className="uedp-mode-toggle-text">{leftLabel}</span>
      </button>

      {/* Right Segment */}
      <button
        type="button"
        className={`uedp-mode-toggle-segment ${currentActive === 'right' ? 'uedp-mode-toggle-segment--active-light' : 'uedp-mode-toggle-segment--inactive-dark'}`}
        onClick={() => handleSelect('right')}
        aria-pressed={currentActive === 'right'}
      >
        <span className="uedp-mode-toggle-text">{rightLabel}</span>
      </button>
    </div>
  );
};

export default ModeToggle;
