import React from 'react';
import './Background1.css';

export interface Background1Props {
  /** Literal Figma Layer Name: "Background" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * Background1 Component
 * Preserved Figma Layer Name: "Background"
 */
export const Background1: React.FC<Background1Props> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-background1',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Background</span>
      )}
    </div>
  );
};

export default Background1;
