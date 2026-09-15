import React from 'react';
import './Lable.css';

export interface LableProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Lable" */
  className?: string;
  children?: React.ReactNode;
  Text313?: 'Default' | 'Selected';
}

/**
 * Lable Component
 * Preserved Figma Layer Name: "Lable"
 * Node ID: 31:629
 */
export const Lable: React.FC<LableProps> = ({
  className = '',
  children,
  Text313 = 'Default',
  ...rest
}) => {
  const currentVariant = Text313;
  const variantClass = currentVariant
    ? `uedp-lable--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-lable ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-lable-content">
          <span key="0" className="uedp-lable-text uedp-lable-text-0">
            {"Lable"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Lable;
