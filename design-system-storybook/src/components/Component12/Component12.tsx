import React from 'react';
import './Component12.css';

export interface Component12Props {
  /** Literal Figma Layer Name: "Component 12" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Support';
  State?: 'Default' | 'Hover' | 'Selected';
}

/**
 * Component12 Component
 * Preserved Figma Layer Name: "Component 12"
 */
export const Component12: React.FC<Component12Props> = ({
  className = '',
  children,
  Type = 'Support',
  State = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component12',
    Type ? `uedp-component12--${String(Type).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : '',
    State ? `uedp-component12--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 12</span>
      )}
    </div>
  );
};

export default Component12;
