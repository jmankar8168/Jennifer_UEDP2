import React from 'react';
import './Component23.css';

export interface Component23Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 23" */
  className?: string;
  children?: React.ReactNode;
  Property1?: '1' | '2' | '3';
}

/**
 * Component23 Component
 * Preserved Figma Layer Name: "Component 23"
 * Node ID: 35:629
 */
export const Component23: React.FC<Component23Props> = ({
  className = '',
  children,
  Property1 = '1',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-component23--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component23 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component23-content">
          <span className="uedp-component23-label">Component 23</span>
        </div>
      )}
    </div>
  );
};

export default Component23;
