import React from 'react';
import './Camera.css';

export interface CameraProps {
  /** Literal Figma Layer Name: "Camera" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Default' | 'Flip Hover' | 'End Hover';
}

/**
 * Camera Component
 * Preserved Figma Layer Name: "Camera"
 */
export const Camera: React.FC<CameraProps> = ({
  className = '',
  children,
  Type = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-camera',
    Type ? `uedp-camera--${String(Type).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Camera</span>
      )}
    </div>
  );
};

export default Camera;
