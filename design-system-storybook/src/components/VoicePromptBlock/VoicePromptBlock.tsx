import React from 'react';
import './VoicePromptBlock.css';

export interface VoicePromptBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3';
}

/**
 * VoicePromptBlock Component
 * Preserved Figma Layer Name: "voice prompt block"
 * Node ID: 16:2056
 */
export const VoicePromptBlock: React.FC<VoicePromptBlockProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-voicepromptblock--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-voicepromptblock ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-voicepromptblock-content">
          <span key="0" className="uedp-voicepromptblock-text uedp-voicepromptblock-text-0">
            {"Speak a command"}
          </span>
        </div>
      )}
    </div>
  );
};

export default VoicePromptBlock;
