import React from 'react';
import './VoiceNote.css';

export interface VoiceNoteProps {
  /** Literal Figma Layer Name: "voice note" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * VoiceNote Component
 * Preserved Figma Layer Name: "voice note"
 */
export const VoiceNote: React.FC<VoiceNoteProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-voicenote',
    Property1 ? `uedp-voicenote--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">voice note</span>
      )}
    </div>
  );
};

export default VoiceNote;
