import React, { useState } from 'react';
import './Radio.css';

export type RadioType = 'selected' | 'hover' | 'default' | 'disabled';
export type RadioTheme = 'dark' | 'light';

export interface RadioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Literal Figma Layer Name: "Radio" (Node ID: 52:5949 / 31:653) */
  className?: string;
  children?: React.ReactNode;
  /** Figma variant property "Type" (State) */
  Type?: RadioType;
  /** Color theme variant: 'dark' (default) or 'light' */
  theme?: RadioTheme;
  /** Title text (defaults to 'Sighted') */
  title?: string;
  /** Subtitle category tags (defaults to 'VOLUNTEER · DONOR · EMPLOYER') */
  subtitle?: string;
  /** Custom icon to render in the left circle, or false to hide */
  icon?: React.ReactNode;
  /** Whether to show the left circular icon badge (default: true) */
  showIcon?: boolean;
  /** If true, renders only the standalone 18px radio circle indicator */
  compact?: boolean;
  /** Controlled checked state */
  checked?: boolean;
  /** Initial uncontrolled checked state */
  defaultChecked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Form name attribute */
  name?: string;
  /** Form value attribute */
  value?: string;
  /** Change event callback */
  onChange?: (checked: boolean) => void;
}

/**
 * Pixel-perfect Sighted Eye Icon matching Figma Component 14 (31:705)
 * Size: 28px × 20px
 */
const SightedEyeIcon: React.FC<{ selected?: boolean }> = () => (
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="uedp-radio-eye-svg"
  >
    {/* Outer eye curve: 26x16 */}
    <path
      d="M1 10 C5 3 23 3 27 10 C23 17 5 17 1 10 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Iris circle: 7x7 */}
    <circle
      cx="14"
      cy="10"
      r="3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Pupil dot: 3x3 */}
    <circle
      cx="14"
      cy="10"
      r="1.5"
      fill="currentColor"
    />
  </svg>
);

/**
 * Radio Component
 * Recreated to pixel perfection from Figma (Node ID: 52:5949 / 31:653 / 32:741)
 *
 * Card Dimensions: 342px × 98px
 * Left Icon Circle: 52px × 52px
 * Right Radio Indicator: 18px × 18px (8px center dot)
 */
export const Radio: React.FC<RadioProps> = ({
  className = '',
  children,
  Type,
  theme = 'dark',
  title = 'Sighted',
  subtitle = 'VOLUNTEER · DONOR · EMPLOYER',
  icon,
  showIcon = true,
  compact = false,
  checked: controlledChecked,
  defaultChecked = false,
  disabled = false,
  name,
  value,
  onChange,
  onKeyDown,
  ...rest
}) => {
  const isTypeSelected = Type === 'selected';
  const isTypeHover = Type === 'hover';
  const isTypeDisabled = Type === 'disabled' || disabled;

  const [uncontrolledChecked, setUncontrolledChecked] = useState<boolean>(
    isTypeSelected || defaultChecked
  );

  const isChecked =
    controlledChecked !== undefined
      ? controlledChecked
      : isTypeSelected || uncontrolledChecked;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTypeDisabled) return;
    if (controlledChecked === undefined && !isTypeSelected) {
      setUncontrolledChecked(true);
    }
    onChange?.(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isTypeDisabled) return;
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (controlledChecked === undefined && !isTypeSelected) {
        setUncontrolledChecked(true);
      }
      onChange?.(true);
    }
    onKeyDown?.(e);
  };

  const stateClass = isChecked
    ? 'uedp-radio-card--selected'
    : isTypeHover
    ? 'uedp-radio-card--hover'
    : isTypeDisabled
    ? 'uedp-radio-card--disabled'
    : 'uedp-radio-card--default';

  const themeClass = `uedp-radio-card--${theme}`;

  // If user requested compact standalone indicator mode
  if (compact) {
    return (
      <div
        className={`uedp-radio-standalone ${stateClass} ${themeClass} ${className}`.trim()}
        onClick={handleClick}
        role="radio"
        aria-checked={isChecked}
        aria-disabled={isTypeDisabled}
        tabIndex={isTypeDisabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        {...rest}
      >
        <div className="uedp-radio-circle">
          {isChecked && <span className="uedp-radio-dot" />}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`uedp-radio-card ${stateClass} ${themeClass} ${className}`.trim()}
      onClick={handleClick}
      role="radio"
      aria-checked={isChecked}
      aria-disabled={isTypeDisabled}
      tabIndex={isTypeDisabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <div className="uedp-radio-card-left">
        {showIcon && (
          <div className="uedp-radio-icon-circle">
            {icon !== undefined ? icon : <SightedEyeIcon selected={isChecked} />}
          </div>
        )}
        <div className="uedp-radio-text-group">
          <span className="uedp-radio-title">{title}</span>
          {subtitle && <span className="uedp-radio-subtitle">{subtitle}</span>}
        </div>
      </div>

      <div className="uedp-radio-indicator">
        <div className="uedp-radio-circle">
          {isChecked && <span className="uedp-radio-dot" />}
        </div>
      </div>

      {children}
    </div>
  );
};

export default Radio;
