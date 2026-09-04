import React from 'react';
import './Background2.css';

export interface Background2Props {
  /** Literal Figma Layer Name: "Background" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Yes' | 'No';
}

/**
 * Background2 Component
 * Preserved Figma Layer Name: "Background"
 */
export const Background2: React.FC<Background2Props> = ({
  className = '',
  children,
  Property1 = 'No',
  ...rest
}) => {
  const variantClasses = [
    'uedp-background2',
    Property1 ? `uedp-background2--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Background</span>
      )}
    </div>
  );
};

export default Background2;
