import React from 'react';
import './BackgroundBorder.css';

export interface BackgroundBorderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Literal Figma Layer Name: "Background+Border" */
  className?: string;
  children?: React.ReactNode;
  /** Label text */
  text?: string;
  /** Variant style (light filled vs dark with border) */
  variant?: 'light' | 'dark';
  /** Active selected state */
  active?: boolean;
}

/**
 * BackgroundBorder Component
 * Preserved Figma Layer Name: "Background+Border" (Node ID: 30:114 / 30:113)
 */
export const BackgroundBorder: React.FC<BackgroundBorderProps> = ({
  className = '',
  children,
  text = 'TEXT',
  variant = 'light',
  active = false,
  onClick,
  ...rest
}) => {
  const activeClass = active ? 'uedp-bg-border--active' : '';
  const variantClass = `uedp-bg-border--${variant}`;

  return (
    <button
      type="button"
      className={`uedp-bg-border ${variantClass} ${activeClass} ${className}`.trim()}
      onClick={onClick}
      {...rest}
    >
      <span className="uedp-bg-border-text">
        {children || text}
      </span>
    </button>
  );
};

export default BackgroundBorder;
