import React, { useState } from 'react';
import './HelpTypeTouchTargets.css';

export type HelpTypeCategory = 'assist' | 'scan' | 'jobs' | 'support';
export type HelpTypeState = 'Default' | 'Hover' | 'Selected' | 'Disabled';
export type HelpTypeTheme = 'dark' | 'light';

export interface TouchTargetOption {
  id: HelpTypeCategory;
  tag: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TouchTargetCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  option: TouchTargetOption;
  selected?: boolean;
  theme?: HelpTypeTheme;
  onSelect?: (id: HelpTypeCategory) => void;
}

export interface HelpTypeTouchTargetsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Literal Figma Layer Name: "help type options — large touch targets" (Node ID: 16:841) */
  className?: string;
  theme?: HelpTypeTheme;
  selectedId?: HelpTypeCategory;
  onSelect?: (id: HelpTypeCategory) => void;
  options?: TouchTargetOption[];
}

/* Figma exact vector icons */
const AssistIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.5 6C15.7 6 11 10.7 11 16.5C11 20.3 13 23.6 16 25.4V29C16 29.6 16.4 30 17 30H26C26.6 30 27 29.6 27 29V25.4C30 23.6 32 20.3 32 16.5C32 10.7 27.3 6 21.5 6ZM25 24V28H18V24L16.8 23.2C14.4 21.7 13 19.2 13 16.5C13 11.8 16.8 8 21.5 8C26.2 8 30 11.8 30 16.5C30 19.2 28.6 21.7 26.2 23.2L25 24Z"
      fill="currentColor"
    />
    <circle cx="21.5" cy="16.5" r="4" fill="currentColor" />
  </svg>
);

const ScanIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 67 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 10H28V8H20V16H22V10ZM45 8H37V10H43V16H45V8ZM22 28H28V30H20V22H22V28ZM45 22H43V28H37V30H45V22Z"
      fill="currentColor"
    />
    <rect x="25" y="18" width="15" height="2" fill="currentColor" />
  </svg>
);

const JobsIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 53 37" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32.5 13H27.5V11C27.5 9.9 26.6 9 25.5 9H21.5C20.4 9 19.5 9.9 19.5 11V13H14.5C13.4 13 12.5 13.9 12.5 15V26C12.5 27.1 13.4 28 14.5 28H32.5C33.6 28 34.5 27.1 34.5 26V15C34.5 13.9 33.6 13 32.5 13ZM21.5 11H25.5V13H21.5V11ZM32.5 26H14.5V18.8L22.2 21.6C22.4 21.7 22.7 21.7 23 21.7H24C24.3 21.7 24.6 21.7 24.8 21.6L32.5 18.8V26Z"
      fill="currentColor"
    />
  </svg>
);

const SupportIcon: React.FC<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 67 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M33 14C35.2 14 37 12.2 37 10C37 7.8 35.2 6 33 6C30.8 6 29 7.8 29 10C29 12.2 30.8 14 33 14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M25 24V22C25 19.8 28.6 18 33 18C37.4 18 41 19.8 41 22V24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <circle cx="45" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="21" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const DEFAULT_HELP_OPTIONS: TouchTargetOption[] = [
  {
    id: 'assist',
    tag: 'LIVE VIDEO',
    title: 'Instant Sighted Assist',
    description: 'Connect with a live volunteer for navigation & guidance',
    icon: <AssistIcon size={32} />,
  },
  {
    id: 'scan',
    tag: 'AI RECOGNITION',
    title: 'Smart Scene & Text Scan',
    description: 'Read labels, documents, currency, and physical surroundings',
    icon: <ScanIcon size={32} />,
  },
  {
    id: 'jobs',
    tag: 'VOLUNTEER BOARD',
    title: 'Scheduled Tasks & Jobs',
    description: 'Post or accept specialized visual assistance tasks',
    icon: <JobsIcon size={32} />,
  },
  {
    id: 'support',
    tag: 'ACCESSIBILITY DESK',
    title: 'Community & Technical Help',
    description: 'Setup screen readers, tactile accessories, and audio cues',
    icon: <SupportIcon size={32} />,
  },
];

/**
 * TouchTargetCard Component
 * Exact Figma 342px × 82px card with large touch target.
 */
export const TouchTargetCard: React.FC<TouchTargetCardProps> = ({
  option,
  selected = false,
  theme = 'dark',
  onSelect,
  className = '',
  ...rest
}) => {
  const handleClick = () => {
    if (option.disabled) return;
    onSelect?.(option.id);
  };

  return (
    <button
      type="button"
      className={`uedp-touch-target uedp-touch-target--${theme} ${selected ? 'uedp-touch-target--selected' : ''} ${
        option.disabled ? 'uedp-touch-target--disabled' : ''
      } ${className}`}
      onClick={handleClick}
      aria-pressed={selected}
      disabled={option.disabled}
      {...rest}
    >
      <div className="uedp-touch-target-main">
        <div className="uedp-touch-target-icon">
          {option.icon}
        </div>
        <div className="uedp-touch-target-body">
          <span className="uedp-touch-target-tag">{option.tag}</span>
          <span className="uedp-touch-target-title">{option.title}</span>
          <span className="uedp-touch-target-desc">{option.description}</span>
        </div>
      </div>
      <div className="uedp-touch-target-chevron" aria-hidden="true" />
    </button>
  );
};

/**
 * HelpTypeTouchTargets Component
 * Exact recreation of Figma Node ID: 16:841 ("help type options — large touch targets")
 */
export const HelpTypeTouchTargets: React.FC<HelpTypeTouchTargetsProps> = ({
  className = '',
  theme = 'dark',
  selectedId: controlledSelectedId,
  onSelect,
  options = DEFAULT_HELP_OPTIONS,
  ...rest
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<HelpTypeCategory>('assist');

  const selectedId = controlledSelectedId !== undefined ? controlledSelectedId : internalSelectedId;

  const handleSelect = (id: HelpTypeCategory) => {
    setInternalSelectedId(id);
    onSelect?.(id);
  };

  return (
    <div
      role="group"
      aria-label="Help Type Selection"
      className={`uedp-help-options-container ${className}`}
      {...rest}
    >
      {options.map((opt) => (
        <TouchTargetCard
          key={opt.id}
          option={opt}
          selected={selectedId === opt.id}
          theme={theme}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};
