import React from 'react';
import './MenuBaseline.css';

export interface MenuBaselineProps {
  /** Literal Figma Layer Name: "Menu (baseline)" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * MenuBaseline Component
 * Preserved Figma Layer Name: "Menu (baseline)"
 */
export const MenuBaseline: React.FC<MenuBaselineProps> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-menubaseline',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Menu (baseline)</span>
      )}
    </div>
  );
};

export default MenuBaseline;
