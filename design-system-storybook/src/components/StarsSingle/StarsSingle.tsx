import React from 'react';
import './StarsSingle.css';

export interface StarsSingleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "stars single" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'fill' | 'Default';
}

/**
 * StarsSingle Component
 * Preserved Figma Layer Name: "stars single"
 * Node ID: 33:1049
 */
export const StarsSingle: React.FC<StarsSingleProps> = ({
  className = '',
  children,
  Property1 = 'fill',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-starssingle--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-starssingle ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-starssingle-content">
          <span className="uedp-starssingle-label">stars single</span>
        </div>
      )}
    </div>
  );
};

export default StarsSingle;
