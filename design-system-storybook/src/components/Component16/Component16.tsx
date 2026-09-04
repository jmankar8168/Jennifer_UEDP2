import React from 'react';
import './Component16.css';

export interface Component16Props {
  /** Literal Figma Layer Name: "Component 16" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'selected' | 'default' | 'Hover';
}

/**
 * Component16 Component
 * Preserved Figma Layer Name: "Component 16"
 */
export const Component16: React.FC<Component16Props> = ({
  className = '',
  children,
  Property1 = 'selected',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component16',
    Property1 ? `uedp-component16--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 16</span>
      )}
    </div>
  );
};

export default Component16;
