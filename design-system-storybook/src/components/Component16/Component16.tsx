import React from 'react';
import './Component16.css';

export interface Component16Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 16" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'selected' | 'default' | 'Hover';
}

/**
 * Component16 Component
 * Preserved Figma Layer Name: "Component 16"
 * Node ID: 33:850
 */
export const Component16: React.FC<Component16Props> = ({
  className = '',
  children,
  Property1 = 'selected',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-component16--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component16 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component16-content">
          <span key="0" className="uedp-component16-text uedp-component16-text-0">
            {"LABLE"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Component16;
