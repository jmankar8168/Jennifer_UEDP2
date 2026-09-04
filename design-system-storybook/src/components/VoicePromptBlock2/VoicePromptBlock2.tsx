import React from 'react';
import './VoicePromptBlock2.css';

export interface VoicePromptBlock2Props {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5' | 'Variant6';
}

/**
 * VoicePromptBlock2 Component
 * Preserved Figma Layer Name: "voice prompt block"
 */
export const VoicePromptBlock2: React.FC<VoicePromptBlock2Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-voicepromptblock2',
    Property1 ? `uedp-voicepromptblock2--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">voice prompt block</span>
      )}
    </div>
  );
};

export default VoicePromptBlock2;
