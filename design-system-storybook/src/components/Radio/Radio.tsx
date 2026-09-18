import React, { useState } from 'react';
import './Radio.css';

export type RadioType = 'selected' | 'hover' | 'disabled' | 'default';

export interface RadioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Literal Figma Layer Name: "Radio" (Node ID: 52:5949 / 32:741) */
  className?: string;
  children?: React.ReactNode;
  /** Figma variant property "Type" */
  Type?: RadioType;
  /** Whether the radio is checked (controlled) */
  checked?: boolean;
  /** Initial checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Whether the radio is disabled */
  disabled?: boolean;
  /** Optional label text next to the radio button */
  label?: React.ReactNode;
  /** Name attribute for grouping */
  name?: string;
  /** Value attribute */
  value?: string;
  /** Callback fired when selection changes */
  onChange?: (checked: boolean) => void;
}

/**
 * Radio Component
 * Recreated to pixel perfection from Figma (Node ID: 52:5949 / 32:741)
 *
 * Dimensions: 18px × 18px circle (border-radius: 9px / 50%)
 * Selected dot: 8px × 8px centered (border-radius: 4px / 50%), color #B7FF4D (Lime)
 * Border: 1px solid (#B7FF4D when selected, #FFFFFF on hover, #525252 when default/disabled)
 */
export const Radio: React.FC<RadioProps> = ({
  className = '',
  children,
  Type,
  checked: controlledChecked,
  defaultChecked = false,
  disabled: propDisabled = false,
  label,
  name,
  value,
  onChange,
  onKeyDown,
  ...rest
}) => {
  // Determine if Type dictates state
  const isTypeSelected = Type === 'selected';
  const isTypeHover = Type === 'hover';
  const isTypeDisabled = Type === 'disabled';

  const isDisabled = propDisabled || isTypeDisabled;

  const [uncontrolledChecked, setUncontrolledChecked] = useState<boolean>(
    isTypeSelected || defaultChecked
  );

  const isChecked = controlledChecked !== undefined ? controlledChecked : (isTypeSelected || uncontrolledChecked);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    if (controlledChecked === undefined && !isTypeSelected) {
      setUncontrolledChecked(true);
    }
    onChange?.(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isDisabled) return;
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
    ? 'uedp-radio--selected'
    : isTypeHover
    ? 'uedp-radio--hover'
    : isDisabled
    ? 'uedp-radio--disabled'
    : 'uedp-radio--default';

  return (
    <div
      className={`uedp-radio-wrapper ${isDisabled ? 'uedp-radio-wrapper--disabled' : ''} ${className}`.trim()}
      onClick={handleClick}
      role="radio"
      aria-checked={isChecked}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <div className={`uedp-radio ${stateClass}`}>
        <div className="uedp-radio-circle">
          {isChecked && <span className="uedp-radio-dot" />}
        </div>
      </div>
      {(label || children) && (
        <span className="uedp-radio-label">
          {label || children}
        </span>
      )}
    </div>
  );
};

export default Radio;
