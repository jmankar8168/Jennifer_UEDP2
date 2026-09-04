import React from 'react';
import './VoicePromptBlock1.css';

export interface VoicePromptBlock1Props {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3';
}

/**
 * VoicePromptBlock1 Component
 * Preserved Figma Layer Name: "voice prompt block"
 */
export const VoicePromptBlock1: React.FC<VoicePromptBlock1Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-voicepromptblock1',
    Property1 ? `uedp-voicepromptblock1--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">voice prompt block</span>
      )}
    </div>
  );
};

export default VoicePromptBlock1;
