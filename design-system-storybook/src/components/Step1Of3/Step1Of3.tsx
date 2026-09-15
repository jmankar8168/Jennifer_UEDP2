import React from 'react';
import './Step1Of3.css';

export interface Step1Of3Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Step 1 of 3" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Step1Of3 Component
 * Preserved Figma Layer Name: "Step 1 of 3"
 * Node ID: 16:729
 */
export const Step1Of3: React.FC<Step1Of3Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-step1of3--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-step1of3 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-step1of3-content">
          <span key="0" className="uedp-step1of3-text uedp-step1of3-text-0">
            {"Step 2 of 2"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Step1Of3;
