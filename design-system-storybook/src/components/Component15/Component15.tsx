import React from 'react';
import './Component15.css';

export interface Component15Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 15" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'selected' | 'hover' | 'disabled';
}

/**
 * Component15 Component
 * Preserved Figma Layer Name: "Component 15"
 * Node ID: 32:741
 */
export const Component15: React.FC<Component15Props> = ({
  className = '',
  children,
  Type = 'selected',
  ...rest
}) => {
  const currentVariant = Type;
  const variantClass = currentVariant
    ? `uedp-component15--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component15 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component15-content">
          <span className="uedp-component15-label">Component 15</span>
        </div>
      )}
    </div>
  );
};

export default Component15;
