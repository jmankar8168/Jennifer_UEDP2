import React from 'react';
import './AlertBox.css';

export type AlertBoxState = 'Default' | 'No Close' | 'Action' | 'Prefix' | 'Prefix and Action';
export type AlertBoxMode = 'Default' | 'light' | 'dark';

export interface AlertBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma variant: state */
  state?: AlertBoxState;
  /** Figma variant: mode ('Default' = white background; 'light' / 'dark' = black background with green accents) */
  mode?: AlertBoxMode;
  /** Alert message text */
  message?: string;
  /** Action button label */
  actionText?: string;
  /** Action button click handler */
  onAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Close button click handler */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Manual toggle for Prefix Alert icon */
  hasPrefix?: boolean;
  /** Manual toggle for Action button */
  hasAction?: boolean;
  /** Manual toggle for Close button */
  hasClose?: boolean;
}

/**
 * Alert Box (Toast) Component
 * Literal Figma Node ID: 54:6652
 * Layer Name: "Toast" / alert box
 */
export const AlertBox: React.FC<AlertBoxProps> = ({
  state = 'Default',
  mode = 'Default',
  message = 'Single line of text',
  actionText = 'Action',
  onAction,
  onClose,
  hasPrefix,
  hasAction,
  hasClose,
  className = '',
  children,
  ...rest
}) => {
  // Determine prefix, action, and close presence based on state variant unless explicitly overridden
  const showPrefix = typeof hasPrefix === 'boolean'
    ? hasPrefix
    : state === 'Prefix' || state === 'Prefix and Action';

  const showAction = typeof hasAction === 'boolean'
    ? hasAction
    : state === 'Action' || state === 'Prefix and Action';

  const showClose = typeof hasClose === 'boolean'
    ? hasClose
    : state !== 'No Close';

  // Normalize mode classes (Figma: mode=Default is light, mode=light is dark/inverted)
  const isDarkMode = mode === 'light' || mode === 'dark';
  const modeClass = isDarkMode ? 'uedp-alertbox--mode-light' : 'uedp-alertbox--mode-default';
  const stateClass = `uedp-alertbox--state-${state.toLowerCase().replace(/\s+/g, '-')}`;
  const prefixClass = showPrefix ? 'uedp-alertbox--has-prefix' : '';

  return (
    <div
      role="alert"
      className={`uedp-alertbox ${modeClass} ${stateClass} ${prefixClass} ${className}`.trim()}
      {...rest}
    >
      {/* Prefix Icon: Exclamation in Circle (20x20) */}
      {showPrefix && (
        <div className="uedp-alertbox__prefix" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Circle (18.33px) */}
            <circle
              cx="10"
              cy="10"
              r="8.2"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            {/* Exclamation Bar (5px) */}
            <path
              d="M10 6V11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Exclamation Dot */}
            <circle
              cx="10"
              cy="14"
              r="1"
              fill="currentColor"
            />
          </svg>
        </div>
      )}

      {/* Main Text Content */}
      <span className="uedp-alertbox__text">
        {children || message}
      </span>

      {/* Action Button (Fira Sans Bold 14px) */}
      {showAction && (
        <button
          type="button"
          className="uedp-alertbox__action"
          onClick={onAction}
        >
          {actionText}
        </button>
      )}

      {/* Close Icon Button (44x44 circular target, 14x14 X icon) */}
      {showClose && (
        <button
          type="button"
          aria-label="Close alert"
          className="uedp-alertbox__close"
          onClick={onClose}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AlertBox;
