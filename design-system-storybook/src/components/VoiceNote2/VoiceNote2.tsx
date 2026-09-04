import React from 'react';
import './VoiceNote2.css';

export interface VoiceNote2Props {
  /** Literal Figma Layer Name: "voice note" */
  className?: string;
  children?: React.ReactNode;
  State?: 'Default' | 'selected' | 'Command selected' | 'default';
}

/**
 * VoiceNote2 Component
 * Preserved Figma Layer Name: "voice note"
 */
export const VoiceNote2: React.FC<VoiceNote2Props> = ({
  className = '',
  children,
  State = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-voicenote2',
    State ? `uedp-voicenote2--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">voice note</span>
      )}
    </div>
  );
};

export default VoiceNote2;
