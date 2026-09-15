import React from 'react';
import './Component9.css';

export interface Component9Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 9" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'OPTION B — Sighted user (unselected)' | 'Variant2' | 'Variant3';
}

/**
 * Component9 Component
 * Preserved Figma Layer Name: "Component 9"
 * Node ID: 31:653
 */
export const Component9: React.FC<Component9Props> = ({
  className = '',
  children,
  Property1 = 'OPTION B — Sighted user (unselected)',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-component9--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component9 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component9-content">
          <span key="0" className="uedp-component9-text uedp-component9-text-0">
            {"Sighted"}
          </span>
          <span key="1" className="uedp-component9-text uedp-component9-text-1">
            {"Volunteer"}
          </span>
          <span key="2" className="uedp-component9-text uedp-component9-text-2">
            {"·"}
          </span>
          <span key="3" className="uedp-component9-text uedp-component9-text-3">
            {"Donor"}
          </span>
          <span key="4" className="uedp-component9-text uedp-component9-text-4">
            {"·"}
          </span>
          <span key="5" className="uedp-component9-text uedp-component9-text-5">
            {"Employer"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Component9;
