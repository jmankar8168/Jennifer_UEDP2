import React from 'react';
import './Step1Of2.css';

export interface Step1Of2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Step 1 of 2" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Step1Of2 Component
 * Preserved Figma Layer Name: "Step 1 of 2"
 * Node ID: 16:724
 */
export const Step1Of2: React.FC<Step1Of2Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-step1of2--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-step1of2 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-step1of2-content">
          <span key="0" className="uedp-step1of2-text uedp-step1of2-text-0">
            {"Step 1 of 2"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Step1Of2;
