import React from 'react';
import './ButtonSmall.css';

export interface ButtonSmallProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Literal Figma Layer Name: "Button Small" */
  className?: string;
  /** Button style variant */
  variant?: 'primary' | 'accent' | 'secondary';
  /** Visual state variant matching Figma */
  state?: 'default' | 'hover' | 'active' | 'disabled';
  /** Whether to show the right-pointing triangle play icon */
  hasIcon?: boolean;
  /** Figma variant property string */
  Property1?: string;
  /** Content / label */
  children?: React.ReactNode;
}

/**
 * Right-pointing triangle play arrow icon (exact Figma vector)
 */
export const PlayArrowIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={`uedp-button-small-icon ${className}`.trim()}
    width="7"
    height="8"
    viewBox="0 0 7 8"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M0.5 0.5L6.5 4L0.5 7.5V0.5Z" />
  </svg>
);

/**
 * Button Small Component
 * Preserved Figma Layer Name: "Button Small"
 * Node ID: 54:6477
 */
export const ButtonSmall: React.FC<ButtonSmallProps> = ({
  className = '',
  variant = 'primary',
  state,
  hasIcon = false,
  Property1,
  disabled = false,
  children = 'Button',
  ...rest
}) => {
  // Parse Figma Property1 if supplied
  let resolvedVariant = variant;
  let resolvedState = state;
  let resolvedHasIcon = hasIcon;

  if (Property1) {
    const lower = Property1.toLowerCase();
    if (lower.includes('accent') || lower.includes('lime')) resolvedVariant = 'accent';
    if (lower.includes('secondary') || lower.includes('outline')) resolvedVariant = 'secondary';
    if (lower.includes('hover')) resolvedState = 'hover';
    if (lower.includes('disabled')) resolvedState = 'disabled';
    if (lower.includes('icon') || lower.includes('arrow')) resolvedHasIcon = true;
  }

  const isActuallyDisabled = disabled || resolvedState === 'disabled';

  const classList = [
    'uedp-button-small',
    `uedp-button-small--${resolvedVariant}`,
    resolvedState ? `uedp-button-small--state-${resolvedState}` : '',
    resolvedHasIcon ? 'uedp-button-small--has-icon' : '',
    isActuallyDisabled ? 'is-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classList}
      disabled={isActuallyDisabled}
      type="button"
      {...rest}
    >
      <span className="uedp-button-small-label">{children}</span>
      {resolvedHasIcon && <PlayArrowIcon />}
    </button>
  );
};

// Also export as Button for convenience
export const Button = ButtonSmall;

export default ButtonSmall;
