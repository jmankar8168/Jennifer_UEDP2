import React from 'react';
import './Frame38.css';

export interface Frame38Props {
  /** Literal Figma Layer Name: "Frame 38" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5' | 'Variant6';
}

/**
 * Frame38 Component
 * Preserved Figma Layer Name: "Frame 38"
 */
export const Frame38: React.FC<Frame38Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-frame38',
    Property1 ? `uedp-frame38--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Frame 38</span>
      )}
    </div>
  );
};

export default Frame38;
