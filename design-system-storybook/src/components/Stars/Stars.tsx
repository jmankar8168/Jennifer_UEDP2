import React from 'react';
import './Stars.css';

export interface StarsProps {
  /** Literal Figma Layer Name: "stars" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | '1' | '2' | '3' | '4' | '5';
}

/**
 * Stars Component
 * Preserved Figma Layer Name: "stars"
 */
export const Stars: React.FC<StarsProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-stars',
    Property1 ? `uedp-stars--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">stars</span>
      )}
    </div>
  );
};

export default Stars;
