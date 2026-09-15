import React from 'react';
import './IcSharpFlipCameraIos.css';

export interface IcSharpFlipCameraIosProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "ic:sharp-flip-camera-ios" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'ic:sharp-flip-camera-ios';
}

/**
 * IcSharpFlipCameraIos Component
 * Preserved Figma Layer Name: "ic:sharp-flip-camera-ios"
 * Node ID: 16:741
 */
export const IcSharpFlipCameraIos: React.FC<IcSharpFlipCameraIosProps> = ({
  className = '',
  children,
  variant = 'ic:sharp-flip-camera-ios',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-icsharpflipcameraios--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-icsharpflipcameraios ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-icsharpflipcameraios-content">
          <span className="uedp-icsharpflipcameraios-label">ic:sharp-flip-camera-ios</span>
        </div>
      )}
    </div>
  );
};

export default IcSharpFlipCameraIos;
