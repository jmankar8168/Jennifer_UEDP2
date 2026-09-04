import React from 'react';
import './IcSharpFlipCameraIos.css';

export interface IcSharpFlipCameraIosProps {
  /** Literal Figma Layer Name: "ic:sharp-flip-camera-ios" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * IcSharpFlipCameraIos Component
 * Preserved Figma Layer Name: "ic:sharp-flip-camera-ios"
 */
export const IcSharpFlipCameraIos: React.FC<IcSharpFlipCameraIosProps> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-icsharpflipcameraios',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">ic:sharp-flip-camera-ios</span>
      )}
    </div>
  );
};

export default IcSharpFlipCameraIos;
