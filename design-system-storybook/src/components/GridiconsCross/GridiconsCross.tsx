import React from 'react';
import './GridiconsCross.css';

export interface GridiconsCrossProps {
  /** Literal Figma Layer Name: "gridicons:cross" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * GridiconsCross Component
 * Preserved Figma Layer Name: "gridicons:cross"
 */
export const GridiconsCross: React.FC<GridiconsCrossProps> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-gridiconscross',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">gridicons:cross</span>
      )}
    </div>
  );
};

export default GridiconsCross;
