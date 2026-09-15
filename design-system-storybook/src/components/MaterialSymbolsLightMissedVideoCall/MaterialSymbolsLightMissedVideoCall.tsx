import React from 'react';
import './MaterialSymbolsLightMissedVideoCall.css';

export interface MaterialSymbolsLightMissedVideoCallProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "material-symbols-light:missed-video-call" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'material-symbols-light:missed-video-call';
}

/**
 * MaterialSymbolsLightMissedVideoCall Component
 * Preserved Figma Layer Name: "material-symbols-light:missed-video-call"
 * Node ID: 16:743
 */
export const MaterialSymbolsLightMissedVideoCall: React.FC<MaterialSymbolsLightMissedVideoCallProps> = ({
  className = '',
  children,
  variant = 'material-symbols-light:missed-video-call',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-materialsymbolslightmissedvideocall--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-materialsymbolslightmissedvideocall ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-materialsymbolslightmissedvideocall-content">
          <span className="uedp-materialsymbolslightmissedvideocall-label">material-symbols-light:missed-video-call</span>
        </div>
      )}
    </div>
  );
};

export default MaterialSymbolsLightMissedVideoCall;
