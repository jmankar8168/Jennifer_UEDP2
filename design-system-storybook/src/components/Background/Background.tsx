import React from 'react';
import './Background.css';

export interface BackgroundProps {
  /** Literal Figma Layer Name: "Background" */
  className?: string;
  children?: React.ReactNode;
  Text200?: string;
  State?: 'Default' | 'Selected' | 'Disabled' | 'Hover' | 'Default 2';
}

/**
 * Background Component
 * Preserved Figma Layer Name: "Background"
 */
export const Background: React.FC<BackgroundProps> = ({
  className = '',
  children,
  Text200 = 'Button',
  State = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-background',
    Text200 ? `uedp-background--${String(Text200).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : '',
    State ? `uedp-background--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Background</span>
      )}
    </div>
  );
};

export default Background;
