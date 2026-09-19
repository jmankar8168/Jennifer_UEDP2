import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Literal Figma Layer Name: "Button" */
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
    className={`uedp-button-icon ${className}`.trim()}
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
 * Button Component
 * Preserved Figma Layer Name: "Button"
 * Node ID: 54:6477
 */
export const Button: React.FC<ButtonProps> = ({
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
    'uedp-button',
    `uedp-button--${resolvedVariant}`,
    resolvedState ? `uedp-button--state-${resolvedState}` : '',
    resolvedHasIcon ? 'uedp-button--has-icon' : '',
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
      <span className="uedp-button-label">{children}</span>
      {resolvedHasIcon && <PlayArrowIcon />}
    </button>
  );
};

export default Button;
