import React from 'react';
import './BackgroundBorder.css';

export interface BackgroundBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Background+Border" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'Background+Border';
}

/**
 * BackgroundBorder Component
 * Preserved Figma Layer Name: "Background+Border"
 * Node ID: 30:114
 */
export const BackgroundBorder: React.FC<BackgroundBorderProps> = ({
  className = '',
  children,
  variant = 'Background+Border',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-backgroundborder--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-backgroundborder ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-backgroundborder-content">
          <span key="0" className="uedp-backgroundborder-text uedp-backgroundborder-text-0">
            {"Text"}
          </span>
        </div>
      )}
    </div>
  );
};

export default BackgroundBorder;
