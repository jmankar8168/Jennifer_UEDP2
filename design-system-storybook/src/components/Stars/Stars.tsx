import React from 'react';
import './Stars.css';

export interface StarsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "stars" */
  className?: string;
  children?: React.ReactNode;
  Property1?: '1' | '2' | '3' | '4' | '5' | 'Default';
}

/**
 * Stars Component
 * Preserved Figma Layer Name: "stars"
 * Node ID: 33:1062
 */
export const Stars: React.FC<StarsProps> = ({
  className = '',
  children,
  Property1 = '1',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-stars--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-stars ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-stars-content">
          <span className="uedp-stars-label">stars</span>
        </div>
      )}
    </div>
  );
};

export default Stars;
