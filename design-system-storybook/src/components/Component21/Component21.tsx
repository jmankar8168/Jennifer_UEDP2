import React from 'react';
import './Component21.css';

export interface Component21Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Component 21" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'call recieved' | 'meet' | 'missed call';
}

/**
 * Component21 Component
 * Preserved Figma Layer Name: "Component 21"
 * Node ID: 35:471
 */
export const Component21: React.FC<Component21Props> = ({
  className = '',
  children,
  Property1 = 'call recieved',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-component21--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-component21 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-component21-content">
          <span className="uedp-component21-label">Component 21</span>
        </div>
      )}
    </div>
  );
};

export default Component21;
