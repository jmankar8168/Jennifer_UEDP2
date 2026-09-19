import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Literal Figma Layer Name: "Button" (Node ID: 16:645) */
  className?: string;
  children?: React.ReactNode;
  /** Text content displayed inside the button */
  Text200?: string;
  /** State variant from Figma (Default, Selected, Disabled, Hover, Default 2) */
  State?: 'Default' | 'Selected' | 'Disabled' | 'Hover' | 'Default 2';
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Disabled flag */
  disabled?: boolean;
}

/**
 * Button Component
 * Preserved Figma Layer Name: "Button" (Node ID: 16:645)
 */
export const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  Text200 = 'BUTTON',
  State = 'Default',
  onClick,
  disabled = false,
  ...rest
}) => {
  const isActuallyDisabled = disabled || State === 'Disabled';
  const cleanState = State.toLowerCase().replace(/[^a-z0-9]/g, '-');

  return (
    <button
      type="button"
      className={`uedp-btn-background uedp-btn-background--${cleanState} ${className}`.trim()}
      onClick={isActuallyDisabled ? undefined : onClick}
      disabled={isActuallyDisabled}
      {...rest}
    >
      <span className="uedp-btn-text">
        {children || Text200}
      </span>
    </button>
  );
};

export const Background = Button;
export default Button;
