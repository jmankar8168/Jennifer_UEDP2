import React from 'react';
import './StarsSingle.css';

export interface StarsSingleProps {
  /** Literal Figma Layer Name: "stars single" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'fill';
}

/**
 * StarsSingle Component
 * Preserved Figma Layer Name: "stars single"
 */
export const StarsSingle: React.FC<StarsSingleProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-starssingle',
    Property1 ? `uedp-starssingle--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">stars single</span>
      )}
    </div>
  );
};

export default StarsSingle;
