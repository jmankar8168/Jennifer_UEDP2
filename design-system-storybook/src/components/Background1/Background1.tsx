import React from 'react';
import './Background1.css';

export interface Background1Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Background" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'Background';
}

/**
 * Background1 Component
 * Preserved Figma Layer Name: "Background"
 * Node ID: 30:113
 */
export const Background1: React.FC<Background1Props> = ({
  className = '',
  children,
  variant = 'Background',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-background1--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-background1 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-background1-content">
          <span key="0" className="uedp-background1-text uedp-background1-text-0">
            {"Text"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Background1;
