import React, { useState } from 'react';
import './ModeToggle.css';

export interface ModeToggleProps {
  /** Literal Figma Layer Name: "mode toggle" */
  className?: string;
  /** Figma Variant State */
  State?: 'Default' | 'Selected' | 'Hover';
  /** Text for left tab (Instance: "Background") */
  leftText?: string;
  /** Text for right tab (Instance: "Background+Border") */
  rightText?: string;
  /** Controlled active tab ('left' | 'right') */
  activeTab?: 'left' | 'right';
  /** Callback when a tab is clicked */
  onTabChange?: (tab: 'left' | 'right') => void;
}

/**
 * ModeToggle Component
 * Preserved Figma Layer Name: "mode toggle" (Node ID: 30:125)
 * Composed of Figma sub-instances: "Background" (30:113) + "Background+Border" (30:114)
 */
export const ModeToggle: React.FC<ModeToggleProps> = ({
  className = '',
  State = 'Default',
  leftText = 'TEXT',
  rightText = 'TEXT',
  activeTab,
  onTabChange,
}) => {
  const [internalActive, setInternalActive] = useState<'left' | 'right'>(
    State === 'Selected' ? 'right' : 'right'
  );

  const currentActive = activeTab !== undefined ? activeTab : internalActive;

  const handleTabClick = (tab: 'left' | 'right') => {
    if (activeTab === undefined) {
      setInternalActive(tab);
    }
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const stateClass = `uedp-modetoggle--state-${State.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return (
    <div
      className={`uedp-modetoggle ${stateClass} ${className}`.trim()}
      role="radiogroup"
      aria-label="mode toggle"
    >
      {/* Left Tab: Instance "Background" (Node 30:113) */}
      <button
        type="button"
        role="radio"
        aria-checked={currentActive === 'left'}
        className={`uedp-modetoggle-tab uedp-modetoggle-tab--left ${currentActive === 'left' ? 'uedp-modetoggle-tab--active' : 'uedp-modetoggle-tab--inactive'}`}
        onClick={() => handleTabClick('left')}
      >
        <span className="uedp-modetoggle-tab-text">{leftText}</span>
      </button>

      {/* Right Tab: Instance "Background+Border" (Node 30:114) */}
      <button
        type="button"
        role="radio"
        aria-checked={currentActive === 'right'}
        className={`uedp-modetoggle-tab uedp-modetoggle-tab--right ${currentActive === 'right' ? 'uedp-modetoggle-tab--active' : 'uedp-modetoggle-tab--inactive'}`}
        onClick={() => handleTabClick('right')}
      >
        <span className="uedp-modetoggle-tab-text">{rightText}</span>
      </button>
    </div>
  );
};

export default ModeToggle;
