import React from 'react';
import './BackgroundHorizontalborder.css';

export interface BackgroundHorizontalborderProps {
  /** Literal Figma Layer Name: "Background+HorizontalBorder" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Default' | 'assist hover' | 'scan hover' | 'jobs hover' | 'support hover' | 'assist selected' | 'scan selected' | 'jobs selected' | 'support selected';
}

/**
 * BackgroundHorizontalborder Component
 * Preserved Figma Layer Name: "Background+HorizontalBorder"
 */
export const BackgroundHorizontalborder: React.FC<BackgroundHorizontalborderProps> = ({
  className = '',
  children,
  Type = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-backgroundhorizontalborder',
    Type ? `uedp-backgroundhorizontalborder--${String(Type).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Background+HorizontalBorder</span>
      )}
    </div>
  );
};

export default BackgroundHorizontalborder;
