import React from 'react';
import './Frame39.css';

export interface Frame39Props {
  /** Literal Figma Layer Name: "Frame 39" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Frame39 Component
 * Preserved Figma Layer Name: "Frame 39"
 */
export const Frame39: React.FC<Frame39Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-frame39',
    Property1 ? `uedp-frame39--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Frame 39</span>
      )}
    </div>
  );
};

export default Frame39;
