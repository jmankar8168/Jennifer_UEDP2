import React from 'react';
import './Component14.css';

export interface Component14Props {
  /** Literal Figma Layer Name: "Component 14" */
  className?: string;
  children?: React.ReactNode;
  Vision?: 'Blind' | 'Sighted' | 'Sighte';
  Type?: 'Selected' | 'Default';
}

/**
 * Component14 Component
 * Preserved Figma Layer Name: "Component 14"
 */
export const Component14: React.FC<Component14Props> = ({
  className = '',
  children,
  Vision = 'Sighted',
  Type = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component14',
    Vision ? `uedp-component14--${String(Vision).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : '',
    Type ? `uedp-component14--${String(Type).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 14</span>
      )}
    </div>
  );
};

export default Component14;
