import React from 'react';
import './Frame60.css';

export interface Frame60Props {
  /** Literal Figma Layer Name: "Frame 60" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * Frame60 Component
 * Preserved Figma Layer Name: "Frame 60"
 */
export const Frame60: React.FC<Frame60Props> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-frame60',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Frame 60</span>
      )}
    </div>
  );
};

export default Frame60;
