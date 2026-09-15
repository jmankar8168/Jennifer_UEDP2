import React from 'react';
import './Component14.css';

export interface Component14Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 14" */
  className?: string;
  children?: React.ReactNode;
  Vision?: 'Blind, Type' | 'Sighted, Type' | 'Sighte, Type';
}

/**
 * Component14 Component
 * Preserved Figma Layer Name: "Component 14"
 * Node ID: 31:730
 */
export const Component14: React.FC<Component14Props> = ({
  className = '',
  children,
  Vision = 'Blind, Type',
  ...rest
}) => {
  const currentVariant = Vision;
  const variantClass = currentVariant
    ? `uedp-component14--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component14 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component14-content">
          <span className="uedp-component14-label">Component 14</span>
        </div>
      )}
    </div>
  );
};

export default Component14;
