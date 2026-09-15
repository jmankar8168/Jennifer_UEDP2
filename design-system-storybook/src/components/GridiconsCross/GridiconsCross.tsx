import React from 'react';
import './GridiconsCross.css';

export interface GridiconsCrossProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "gridicons:cross" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'gridicons:cross';
}

/**
 * GridiconsCross Component
 * Preserved Figma Layer Name: "gridicons:cross"
 * Node ID: 16:739
 */
export const GridiconsCross: React.FC<GridiconsCrossProps> = ({
  className = '',
  children,
  variant = 'gridicons:cross',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-gridiconscross--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-gridiconscross ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-gridiconscross-content">
          <span className="uedp-gridiconscross-label">gridicons:cross</span>
        </div>
      )}
    </div>
  );
};

export default GridiconsCross;
