import React from 'react';
import './Component10.css';

export interface Component10Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 10" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Assist, State';
}

/**
 * Component10 Component
 * Preserved Figma Layer Name: "Component 10"
 * Node ID: 30:180
 */
export const Component10: React.FC<Component10Props> = ({
  className = '',
  children,
  Type = 'Assist, State',
  ...rest
}) => {
  const currentVariant = Type;
  const variantClass = currentVariant
    ? `uedp-component10--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component10 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component10-content">
          <span key="0" className="uedp-component10-text uedp-component10-text-0">
            {"Assist"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Component10;
