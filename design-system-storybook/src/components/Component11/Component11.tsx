import React from 'react';
import './Component11.css';

export interface Component11Props {
  /** Literal Figma Layer Name: "Component 11" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Sca' | 'Scan';
  State?: 'Default' | 'Hover' | 'Selected';
}

/**
 * Component11 Component
 * Preserved Figma Layer Name: "Component 11"
 */
export const Component11: React.FC<Component11Props> = ({
  className = '',
  children,
  Type = 'Scan',
  State = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component11',
    Type ? `uedp-component11--${String(Type).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : '',
    State ? `uedp-component11--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 11</span>
      )}
    </div>
  );
};

export default Component11;
