import React from 'react';
import './Background2.css';

export interface Background2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Background" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'No' | 'Yes';
}

/**
 * Background2 Component
 * Preserved Figma Layer Name: "Background"
 * Node ID: 33:985
 */
export const Background2: React.FC<Background2Props> = ({
  className = '',
  children,
  Property1 = 'No',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-background2--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-background2 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-background2-content">
          <span key="0" className="uedp-background2-text uedp-background2-text-0">
            {"no"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Background2;
