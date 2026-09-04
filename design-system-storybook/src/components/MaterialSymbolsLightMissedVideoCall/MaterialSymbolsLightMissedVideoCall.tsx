import React from 'react';
import './MaterialSymbolsLightMissedVideoCall.css';

export interface MaterialSymbolsLightMissedVideoCallProps {
  /** Literal Figma Layer Name: "material-symbols-light:missed-video-call" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * MaterialSymbolsLightMissedVideoCall Component
 * Preserved Figma Layer Name: "material-symbols-light:missed-video-call"
 */
export const MaterialSymbolsLightMissedVideoCall: React.FC<MaterialSymbolsLightMissedVideoCallProps> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-materialsymbolslightmissedvideocall',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">material-symbols-light:missed-video-call</span>
      )}
    </div>
  );
};

export default MaterialSymbolsLightMissedVideoCall;
