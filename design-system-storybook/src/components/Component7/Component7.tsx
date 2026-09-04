import React from 'react';
import './Component7.css';

export interface Component7Props {
  /** Literal Figma Layer Name: "Component 7" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * Component7 Component
 * Preserved Figma Layer Name: "Component 7"
 */
export const Component7: React.FC<Component7Props> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-component7',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 7</span>
      )}
    </div>
  );
};

export default Component7;
