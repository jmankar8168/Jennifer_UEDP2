import React from 'react';
import './Step1Of3.css';

export interface Step1Of3Props {
  /** Literal Figma Layer Name: "Step 1 of 3" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Step1Of3 Component
 * Preserved Figma Layer Name: "Step 1 of 3"
 */
export const Step1Of3: React.FC<Step1Of3Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-step1of3',
    Property1 ? `uedp-step1of3--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Step 1 of 3</span>
      )}
    </div>
  );
};

export default Step1Of3;
