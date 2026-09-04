import React from 'react';
import './SelectHelpType.css';

export interface SelectHelpTypeProps {
  /** Literal Figma Layer Name: "Select help type" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * SelectHelpType Component
 * Preserved Figma Layer Name: "Select help type"
 */
export const SelectHelpType: React.FC<SelectHelpTypeProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-selecthelptype',
    Property1 ? `uedp-selecthelptype--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Select help type</span>
      )}
    </div>
  );
};

export default SelectHelpType;
