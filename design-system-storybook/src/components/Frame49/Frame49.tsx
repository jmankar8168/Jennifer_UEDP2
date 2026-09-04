import React from 'react';
import './Frame49.css';

export interface Frame49Props {
  /** Literal Figma Layer Name: "Frame 49" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * Frame49 Component
 * Preserved Figma Layer Name: "Frame 49"
 */
export const Frame49: React.FC<Frame49Props> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-frame49',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Frame 49</span>
      )}
    </div>
  );
};

export default Frame49;
