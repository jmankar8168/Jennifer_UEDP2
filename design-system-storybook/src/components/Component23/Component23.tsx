import React from 'react';
import './Component23.css';

export interface Component23Props {
  /** Literal Figma Layer Name: "Component 23" */
  className?: string;
  children?: React.ReactNode;
  Property1?: '3' | '1' | '2';
}

/**
 * Component23 Component
 * Preserved Figma Layer Name: "Component 23"
 */
export const Component23: React.FC<Component23Props> = ({
  className = '',
  children,
  Property1 = '1',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component23',
    Property1 ? `uedp-component23--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 23</span>
      )}
    </div>
  );
};

export default Component23;
