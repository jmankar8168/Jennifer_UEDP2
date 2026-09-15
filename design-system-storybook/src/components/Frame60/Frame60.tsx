import React from 'react';
import './Frame60.css';

export interface Frame60Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Frame 60" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'Frame 60';
}

/**
 * Frame60 Component
 * Preserved Figma Layer Name: "Frame 60"
 * Node ID: 34:1222
 */
export const Frame60: React.FC<Frame60Props> = ({
  className = '',
  children,
  variant = 'Frame 60',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-frame60--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-frame60 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-frame60-content">
          <span key="0" className="uedp-frame60-text uedp-frame60-text-0">
            {"Meet at Location"}
          </span>
          <span key="1" className="uedp-frame60-text uedp-frame60-text-1">
            {"Session Duration : 1hr~"}
          </span>
          <span key="2" className="uedp-frame60-text uedp-frame60-text-2">
            {"12:30 pm"}
          </span>
          <span key="3" className="uedp-frame60-text uedp-frame60-text-3">
            {"Confirm session"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Frame60;
