import React from 'react';
import './VoicePromptBlock.css';

export interface VoicePromptBlockProps {
  /** Literal Figma Layer Name: "voice prompt block" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3';
}

/**
 * VoicePromptBlock Component
 * Preserved Figma Layer Name: "voice prompt block"
 */
export const VoicePromptBlock: React.FC<VoicePromptBlockProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-voicepromptblock',
    Property1 ? `uedp-voicepromptblock--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">voice prompt block</span>
      )}
    </div>
  );
};

export default VoicePromptBlock;
