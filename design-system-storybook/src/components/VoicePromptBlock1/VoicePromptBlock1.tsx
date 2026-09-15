import React from 'react';
import './VoicePromptBlock1.css';

export interface VoicePromptBlock1Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3';
}

/**
 * VoicePromptBlock1 Component
 * Preserved Figma Layer Name: "voice prompt block"
 * Node ID: 16:2078
 */
export const VoicePromptBlock1: React.FC<VoicePromptBlock1Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-voicepromptblock1--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-voicepromptblock1 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-voicepromptblock1-content">
          <span key="0" className="uedp-voicepromptblock1-text uedp-voicepromptblock1-text-0">
            {"Speak a command"}
          </span>
        </div>
      )}
    </div>
  );
};

export default VoicePromptBlock1;
