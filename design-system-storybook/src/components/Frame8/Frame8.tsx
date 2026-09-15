import React from 'react';
import './Frame8.css';

export interface Frame8Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Frame 8" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Frame8 Component
 * Preserved Figma Layer Name: "Frame 8"
 * Node ID: 16:695
 */
export const Frame8: React.FC<Frame8Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-frame8--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-frame8 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-frame8-content">
          <span className="uedp-frame8-label">Frame 8</span>
        </div>
      )}
    </div>
  );
};

export default Frame8;
