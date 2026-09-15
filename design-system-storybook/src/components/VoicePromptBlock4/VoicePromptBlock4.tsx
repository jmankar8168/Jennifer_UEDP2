import React from 'react';
import './VoicePromptBlock4.css';

export interface VoicePromptBlock4Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | '2 lines' | 'no text' | 'listening';
}

/**
 * VoicePromptBlock4 Component
 * Preserved Figma Layer Name: "voice prompt block"
 * Node ID: 35:558
 */
export const VoicePromptBlock4: React.FC<VoicePromptBlock4Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-voicepromptblock4--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-voicepromptblock4 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-voicepromptblock4-content">
          <span key="0" className="uedp-voicepromptblock4-text uedp-voicepromptblock4-text-0">
            {"Speak a command"}
          </span>
          <span key="1" className="uedp-voicepromptblock4-text uedp-voicepromptblock4-text-1">
            {"furniture. To the right, there is a window letting in natural light, making the space feel bright, and near it hangs a small"}
          </span>
        </div>
      )}
    </div>
  );
};

export default VoicePromptBlock4;
