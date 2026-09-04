import React from 'react';
import './Step1Of2.css';

export interface Step1Of2Props {
  /** Literal Figma Layer Name: "Step 1 of 2" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Step1Of2 Component
 * Preserved Figma Layer Name: "Step 1 of 2"
 */
export const Step1Of2: React.FC<Step1Of2Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-step1of2',
    Property1 ? `uedp-step1of2--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Step 1 of 2</span>
      )}
    </div>
  );
};

export default Step1Of2;
