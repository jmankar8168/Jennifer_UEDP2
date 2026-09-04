import React from 'react';
import './ModeToggle.css';

export interface ModeToggleProps {
  /** Literal Figma Layer Name: "mode toggle" */
  className?: string;
  children?: React.ReactNode;
  State?: 'Default' | 'Selected' | 'Hover';
}

/**
 * ModeToggle Component
 * Preserved Figma Layer Name: "mode toggle"
 */
export const ModeToggle: React.FC<ModeToggleProps> = ({
  className = '',
  children,
  State = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-modetoggle',
    State ? `uedp-modetoggle--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">mode toggle</span>
      )}
    </div>
  );
};

export default ModeToggle;
