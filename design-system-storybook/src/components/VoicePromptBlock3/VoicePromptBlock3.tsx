import React from 'react';
import './VoicePromptBlock3.css';

export interface VoicePromptBlock3Props {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'cancel session' | 'rate';
}

/**
 * VoicePromptBlock3 Component
 * Preserved Figma Layer Name: "voice prompt block"
 */
export const VoicePromptBlock3: React.FC<VoicePromptBlock3Props> = ({
  className = '',
  children,
  Property1 = 'cancel session',
  ...rest
}) => {
  const variantClasses = [
    'uedp-voicepromptblock3',
    Property1 ? `uedp-voicepromptblock3--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">voice prompt block</span>
      )}
    </div>
  );
};

export default VoicePromptBlock3;
