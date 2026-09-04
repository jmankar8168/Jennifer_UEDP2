import React from 'react';
import './Frame63.css';

export interface Frame63Props {
  /** Literal Figma Layer Name: "Frame 63" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'missed call' | 'meeting' | 'recieved';
}

/**
 * Frame63 Component
 * Preserved Figma Layer Name: "Frame 63"
 */
export const Frame63: React.FC<Frame63Props> = ({
  className = '',
  children,
  Property1 = 'missed call',
  ...rest
}) => {
  const variantClasses = [
    'uedp-frame63',
    Property1 ? `uedp-frame63--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Frame 63</span>
      )}
    </div>
  );
};

export default Frame63;
