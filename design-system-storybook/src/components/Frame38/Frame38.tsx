import React from 'react';
import './Frame38.css';

export interface Frame38Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Frame 38" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5' | 'Variant6';
}

/**
 * Frame38 Component
 * Preserved Figma Layer Name: "Frame 38"
 * Node ID: 16:765
 */
export const Frame38: React.FC<Frame38Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-frame38--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-frame38 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-frame38-content">
          <span className="uedp-frame38-label">Frame 38</span>
        </div>
      )}
    </div>
  );
};

export default Frame38;
