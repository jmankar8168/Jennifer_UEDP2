import React from 'react';
import './Component7.css';

export interface Component7Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 7" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Background, Property 2' | 'Background+Border, Property 2';
}

/**
 * Component7 Component
 * Preserved Figma Layer Name: "Component 7"
 * Node ID: 16:747
 */
export const Component7: React.FC<Component7Props> = ({
  className = '',
  children,
  Property1 = 'Background, Property 2',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-component7--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component7 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component7-content">
          <span key="0" className="uedp-component7-text uedp-component7-text-0">
            {"ALL"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Component7;
