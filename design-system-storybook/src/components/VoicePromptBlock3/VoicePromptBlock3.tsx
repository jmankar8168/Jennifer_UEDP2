import React from 'react';
import './VoicePromptBlock3.css';

export interface VoicePromptBlock3Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'cancel session' | 'rate';
}

/**
 * VoicePromptBlock3 Component
 * Preserved Figma Layer Name: "voice prompt block"
 * Node ID: 33:1025
 */
export const VoicePromptBlock3: React.FC<VoicePromptBlock3Props> = ({
  className = '',
  children,
  Property1 = 'cancel session',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-voicepromptblock3--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-voicepromptblock3 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-voicepromptblock3-content">
          <span key="0" className="uedp-voicepromptblock3-text uedp-voicepromptblock3-text-0">
            {"ARe You SURE YOU WANT TO CANCEL THIS SESSION?"}
          </span>
          <span key="1" className="uedp-voicepromptblock3-text uedp-voicepromptblock3-text-1">
            {"Someone out there is waiting for your help"}
          </span>
          <span key="2" className="uedp-voicepromptblock3-text uedp-voicepromptblock3-text-2">
            {"no"}
          </span>
          <span key="3" className="uedp-voicepromptblock3-text uedp-voicepromptblock3-text-3">
            {"YES"}
          </span>
        </div>
      )}
    </div>
  );
};

export default VoicePromptBlock3;
