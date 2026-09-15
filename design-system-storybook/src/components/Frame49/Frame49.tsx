import React from 'react';
import './Frame49.css';

export interface Frame49Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Frame 49" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'Frame 49';
}

/**
 * Frame49 Component
 * Preserved Figma Layer Name: "Frame 49"
 * Node ID: 33:924
 */
export const Frame49: React.FC<Frame49Props> = ({
  className = '',
  children,
  variant = 'Frame 49',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-frame49--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-frame49 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-frame49-content">
          <span key="0" className="uedp-frame49-text uedp-frame49-text-0">
            {"SEARCH JOBS"}
          </span>
          <span key="1" className="uedp-frame49-text uedp-frame49-text-1">
            {"All"}
          </span>
          <span key="2" className="uedp-frame49-text uedp-frame49-text-2">
            {"REMOTE"}
          </span>
          <span key="3" className="uedp-frame49-text uedp-frame49-text-3">
            {"PART-TIME"}
          </span>
          <span key="4" className="uedp-frame49-text uedp-frame49-text-4">
            {"FULL-TIME"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Frame49;
