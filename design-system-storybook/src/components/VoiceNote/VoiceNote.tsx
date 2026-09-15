import React from 'react';
import './VoiceNote.css';

export interface VoiceNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "voice note" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * VoiceNote Component
 * Preserved Figma Layer Name: "voice note"
 * Node ID: 16:970
 */
export const VoiceNote: React.FC<VoiceNoteProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-voicenote--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-voicenote ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-voicenote-content">
          <span key="0" className="uedp-voicenote-text uedp-voicenote-text-0">
            {"You can change your role anytime later from Settings."}
          </span>
        </div>
      )}
    </div>
  );
};

export default VoiceNote;
