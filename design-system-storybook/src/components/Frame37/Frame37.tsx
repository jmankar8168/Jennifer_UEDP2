import React from 'react';
import './Frame37.css';

export interface Frame37Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Frame 37" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Frame37 Component
 * Preserved Figma Layer Name: "Frame 37"
 * Node ID: 16:690
 */
export const Frame37: React.FC<Frame37Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-frame37--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-frame37 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-frame37-content">
          <span className="uedp-frame37-label">Frame 37</span>
        </div>
      )}
    </div>
  );
};

export default Frame37;
