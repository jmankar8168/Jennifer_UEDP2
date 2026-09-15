import React from 'react';
import './Frame39.css';

export interface Frame39Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Frame 39" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Frame39 Component
 * Preserved Figma Layer Name: "Frame 39"
 * Node ID: 16:1813
 */
export const Frame39: React.FC<Frame39Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-frame39--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-frame39 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-frame39-content">
          <span key="0" className="uedp-frame39-text uedp-frame39-text-0">
            {"Help request incoming – tap to join."}
          </span>
          <span key="1" className="uedp-frame39-text uedp-frame39-text-1">
            {"Description"}
          </span>
          <span key="2" className="uedp-frame39-text uedp-frame39-text-2">
            {"9:41 AM"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Frame39;
