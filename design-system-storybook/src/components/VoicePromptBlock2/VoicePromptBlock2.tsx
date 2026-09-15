import React from 'react';
import './VoicePromptBlock2.css';

export interface VoicePromptBlock2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5' | 'Variant6';
}

/**
 * VoicePromptBlock2 Component
 * Preserved Figma Layer Name: "voice prompt block"
 * Node ID: 16:2100
 */
export const VoicePromptBlock2: React.FC<VoicePromptBlock2Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-voicepromptblock2--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-voicepromptblock2 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-voicepromptblock2-content">
          <span key="0" className="uedp-voicepromptblock2-text uedp-voicepromptblock2-text-0">
            {"Great! There is a long, narrow white table placed against a plain light-colored wall, with a simple and minimal design, supported"}
          </span>
          <span key="1" className="uedp-voicepromptblock2-text uedp-voicepromptblock2-text-1">
            {"Speak a command"}
          </span>
        </div>
      )}
    </div>
  );
};

export default VoicePromptBlock2;
