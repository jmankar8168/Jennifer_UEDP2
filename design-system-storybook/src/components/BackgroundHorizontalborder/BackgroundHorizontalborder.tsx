import React from 'react';
import './BackgroundHorizontalborder.css';

export interface BackgroundHorizontalborderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Background+HorizontalBorder" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Default' | 'assist hover' | 'scan hover' | 'jobs hover' | 'support hover' | 'assist selected' | 'scan selected' | 'jobs selected' | 'support selected';
}

/**
 * BackgroundHorizontalborder Component
 * Preserved Figma Layer Name: "Background+HorizontalBorder"
 * Node ID: 30:262
 */
export const BackgroundHorizontalborder: React.FC<BackgroundHorizontalborderProps> = ({
  className = '',
  children,
  Type = 'Default',
  ...rest
}) => {
  const currentVariant = Type;
  const variantClass = currentVariant
    ? `uedp-backgroundhorizontalborder--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-backgroundhorizontalborder ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-backgroundhorizontalborder-content">
          <span key="0" className="uedp-backgroundhorizontalborder-text uedp-backgroundhorizontalborder-text-0">
            {"Assist"}
          </span>
          <span key="1" className="uedp-backgroundhorizontalborder-text uedp-backgroundhorizontalborder-text-1">
            {"Scan"}
          </span>
          <span key="2" className="uedp-backgroundhorizontalborder-text uedp-backgroundhorizontalborder-text-2">
            {"Jobs"}
          </span>
          <span key="3" className="uedp-backgroundhorizontalborder-text uedp-backgroundhorizontalborder-text-3">
            {"Support"}
          </span>
        </div>
      )}
    </div>
  );
};

export default BackgroundHorizontalborder;
