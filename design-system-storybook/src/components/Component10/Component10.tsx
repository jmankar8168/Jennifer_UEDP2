import React from 'react';
import './Component10.css';

export interface Component10Props {
  /** Literal Figma Layer Name: "Component 10" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Assist';
  State?: 'Default' | 'Selected' | 'Hover';
}

/**
 * Component10 Component
 * Preserved Figma Layer Name: "Component 10"
 */
export const Component10: React.FC<Component10Props> = ({
  className = '',
  children,
  Type = 'Assist',
  State = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component10',
    Type ? `uedp-component10--${String(Type).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : '',
    State ? `uedp-component10--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 10</span>
      )}
    </div>
  );
};

export default Component10;
