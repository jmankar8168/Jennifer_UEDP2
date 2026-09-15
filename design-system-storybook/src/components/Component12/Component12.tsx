import React from 'react';
import './Component12.css';

export interface Component12Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 12" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Support, State';
}

/**
 * Component12 Component
 * Preserved Figma Layer Name: "Component 12"
 * Node ID: 30:183
 */
export const Component12: React.FC<Component12Props> = ({
  className = '',
  children,
  Type = 'Support, State',
  ...rest
}) => {
  const currentVariant = Type;
  const variantClass = currentVariant
    ? `uedp-component12--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component12 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component12-content">
          <span key="0" className="uedp-component12-text uedp-component12-text-0">
            {"Support"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Component12;
