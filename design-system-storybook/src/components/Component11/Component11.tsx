import React from 'react';
import './Component11.css';

export interface Component11Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 11" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Scan, State' | 'Sca, State';
}

/**
 * Component11 Component
 * Preserved Figma Layer Name: "Component 11"
 * Node ID: 30:181
 */
export const Component11: React.FC<Component11Props> = ({
  className = '',
  children,
  Type = 'Scan, State',
  ...rest
}) => {
  const currentVariant = Type;
  const variantClass = currentVariant
    ? `uedp-component11--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component11 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component11-content">
          <span key="0" className="uedp-component11-text uedp-component11-text-0">
            {"Scan"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Component11;
