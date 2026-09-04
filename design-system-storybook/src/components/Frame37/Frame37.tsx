import React from 'react';
import './Frame37.css';

export interface Frame37Props {
  /** Literal Figma Layer Name: "Frame 37" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Frame37 Component
 * Preserved Figma Layer Name: "Frame 37"
 */
export const Frame37: React.FC<Frame37Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-frame37',
    Property1 ? `uedp-frame37--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Frame 37</span>
      )}
    </div>
  );
};

export default Frame37;
