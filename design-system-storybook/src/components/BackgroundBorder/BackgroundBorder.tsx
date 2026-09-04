import React from 'react';
import './BackgroundBorder.css';

export interface BackgroundBorderProps {
  /** Literal Figma Layer Name: "Background+Border" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * BackgroundBorder Component
 * Preserved Figma Layer Name: "Background+Border"
 */
export const BackgroundBorder: React.FC<BackgroundBorderProps> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-backgroundborder',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Background+Border</span>
      )}
    </div>
  );
};

export default BackgroundBorder;
