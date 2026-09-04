import React from 'react';
import './VoiceNote1.css';

export interface VoiceNote1Props {
  /** Literal Figma Layer Name: "voice note" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * VoiceNote1 Component
 * Preserved Figma Layer Name: "voice note"
 */
export const VoiceNote1: React.FC<VoiceNote1Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-voicenote1',
    Property1 ? `uedp-voicenote1--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">voice note</span>
      )}
    </div>
  );
};

export default VoiceNote1;
