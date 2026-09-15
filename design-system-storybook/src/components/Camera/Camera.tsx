import React from 'react';
import './Camera.css';

export interface CameraProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Camera" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Default' | 'End Hover' | 'Flip Hover';
}

/**
 * Camera Component
 * Preserved Figma Layer Name: "Camera"
 * Node ID: 16:1926
 */
export const Camera: React.FC<CameraProps> = ({
  className = '',
  children,
  Type = 'Default',
  ...rest
}) => {
  const currentVariant = Type;
  const variantClass = currentVariant
    ? `uedp-camera--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-camera ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-camera-content">
          <span key="0" className="uedp-camera-text uedp-camera-text-0">
            {"end"}
          </span>
          <span key="1" className="uedp-camera-text uedp-camera-text-1">
            {"flip"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Camera;
