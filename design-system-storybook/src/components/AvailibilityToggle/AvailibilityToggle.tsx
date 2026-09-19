import React, { useState } from 'react';
import './AvailibilityToggle.css';

export type ToggleVariant = 'On' | 'Off';
export type ToggleMode = 'Default' | 'Light' | 'dark';

/* ==========================================================================
   Standalone Toggle Switch (ion:toggle - Node 34:1156)
   ========================================================================== */

export interface ToggleSwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Checked state (boolean) */
  checked?: boolean;
  /** Initial checked state for uncontrolled usage */
  defaultChecked?: boolean;
  /** Mode: "Default" (Dark canvas) or "Light" */
  mode?: ToggleMode;
  /** Change callback */
  onChange?: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  mode = 'Default',
  onChange,
  disabled = false,
  className = '',
  ...rest
}) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const nextChecked = !isChecked;
    if (!isControlled) {
      setInternalChecked(nextChecked);
    }
    onChange?.(nextChecked);
  };

  const modeLower = mode.toLowerCase();
  const stateClass = isChecked ? 'uedp-toggle-switch--on' : 'uedp-toggle-switch--off';
  const modeClass = `uedp-toggle-switch--mode-${modeLower}`;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleClick}
      className={`uedp-toggle-switch ${stateClass} ${modeClass} ${className}`.trim()}
      {...rest}
    >
      <div className="uedp-toggle-switch__track">
        <div className="uedp-toggle-switch__thumb" />
      </div>
    </button>
  );
};

export const IonToggle = ToggleSwitch;

/* ==========================================================================
   Full Row Availability Toggle (Component 24 - Node 52:5793)
   ========================================================================== */

export interface AvailibilityToggleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Figma variant: toggle ("On" | "Off") */
  toggle?: ToggleVariant;
  /** Figma variant: Mode ("Default" | "Light") */
  Mode?: ToggleMode;
  /** Boolean checked control */
  checked?: boolean;
  /** Uncontrolled default state */
  defaultChecked?: boolean;
  /** Custom label text (defaults to literal Figma text "Availibility :") */
  label?: string;
  /** Change callback */
  onChange?: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
}

export const AvailibilityToggle: React.FC<AvailibilityToggleProps> = ({
  toggle,
  Mode = 'Default',
  checked: controlledChecked,
  defaultChecked,
  label = 'Availibility :',
  onChange,
  disabled = false,
  className = '',
  ...rest
}) => {
  // Determine initial checked status
  const initialChecked = toggle !== undefined
    ? toggle === 'On'
    : (defaultChecked ?? (controlledChecked ?? false));

  const [internalChecked, setInternalChecked] = useState<boolean>(initialChecked);

  const isControlled = controlledChecked !== undefined || toggle !== undefined;
  const isChecked = isControlled
    ? (toggle !== undefined ? toggle === 'On' : controlledChecked!)
    : internalChecked;

  const handleToggle = (next: boolean) => {
    if (disabled) return;
    if (!isControlled) {
      setInternalChecked(next);
    }
    onChange?.(next);
  };

  const modeLower = Mode.toLowerCase();
  const modeClass = `uedp-availibility-toggle--mode-${modeLower}`;
  const statusLabel = isChecked ? 'ON' : 'OFF';
  const statusClass = isChecked
    ? 'uedp-availibility-toggle__status--on'
    : 'uedp-availibility-toggle__status--off';

  return (
    <div
      className={`uedp-availibility-toggle ${modeClass} ${className}`.trim()}
      {...rest}
    >
      <div
        className="uedp-availibility-toggle__label"
        onClick={() => handleToggle(!isChecked)}
      >
        <span>{label}</span>
        <span className={statusClass}>&nbsp;{statusLabel}</span>
      </div>

      <ToggleSwitch
        checked={isChecked}
        mode={Mode}
        disabled={disabled}
        onChange={handleToggle}
        aria-label={`${label} ${statusLabel}`}
      />
    </div>
  );
};

// Backwards-compatible and alternate spelling aliases
export const AvailabilityToggle = AvailibilityToggle;
export const Component24 = AvailibilityToggle;

export default AvailibilityToggle;
