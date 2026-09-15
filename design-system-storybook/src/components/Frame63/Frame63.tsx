import React from 'react';
import './Frame63.css';

export interface Frame63Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Frame 63" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'missed call' | 'meeting' | 'recieved';
}

/**
 * Frame63 Component
 * Preserved Figma Layer Name: "Frame 63"
 * Node ID: 35:483
 */
export const Frame63: React.FC<Frame63Props> = ({
  className = '',
  children,
  Property1 = 'missed call',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-frame63--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-frame63 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-frame63-content">
          <span key="0" className="uedp-frame63-text uedp-frame63-text-0">
            {"Friday"}
          </span>
          <span key="1" className="uedp-frame63-text uedp-frame63-text-1">
            {"11:16 am"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Frame63;
