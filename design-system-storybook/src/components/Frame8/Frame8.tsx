import React from 'react';
import './Frame8.css';

export interface Frame8Props {
  /** Literal Figma Layer Name: "Frame 8" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Frame8 Component
 * Preserved Figma Layer Name: "Frame 8"
 */
export const Frame8: React.FC<Frame8Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-frame8',
    Property1 ? `uedp-frame8--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Frame 8</span>
      )}
    </div>
  );
};

export default Frame8;
