import React from 'react';
import './VoicePromptBlock4.css';

export interface VoicePromptBlock4Props {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | '2 lines' | 'no text' | 'listening';
}

/**
 * VoicePromptBlock4 Component
 * Preserved Figma Layer Name: "voice prompt block"
 */
export const VoicePromptBlock4: React.FC<VoicePromptBlock4Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-voicepromptblock4',
    Property1 ? `uedp-voicepromptblock4--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">voice prompt block</span>
      )}
    </div>
  );
};

export default VoicePromptBlock4;
