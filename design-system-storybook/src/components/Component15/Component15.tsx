import React from 'react';
import './Component15.css';

export interface Component15Props {
  /** Literal Figma Layer Name: "Component 15" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'selected' | 'hover' | 'disabled';
}

/**
 * Component15 Component
 * Preserved Figma Layer Name: "Component 15"
 */
export const Component15: React.FC<Component15Props> = ({
  className = '',
  children,
  Type = 'disabled',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component15',
    Type ? `uedp-component15--${String(Type).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 15</span>
      )}
    </div>
  );
};

export default Component15;
