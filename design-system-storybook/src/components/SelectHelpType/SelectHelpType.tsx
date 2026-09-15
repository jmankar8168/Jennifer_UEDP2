import React from 'react';
import './SelectHelpType.css';

export interface SelectHelpTypeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Select help type" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * SelectHelpType Component
 * Preserved Figma Layer Name: "Select help type"
 * Node ID: 16:719
 */
export const SelectHelpType: React.FC<SelectHelpTypeProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-selecthelptype--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-selecthelptype ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-selecthelptype-content">
          <span key="0" className="uedp-selecthelptype-text uedp-selecthelptype-text-0">
            {"Select help type"}
          </span>
        </div>
      )}
    </div>
  );
};

export default SelectHelpType;
