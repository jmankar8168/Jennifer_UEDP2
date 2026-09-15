import React from 'react';
import './VoiceNote1.css';

export interface VoiceNote1Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "voice note" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * VoiceNote1 Component
 * Preserved Figma Layer Name: "voice note"
 * Node ID: 16:977
 */
export const VoiceNote1: React.FC<VoiceNote1Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-voicenote1--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-voicenote1 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-voicenote1-content">
          <span key="0" className="uedp-voicenote1-text uedp-voicenote1-text-0">
            {"Hello, I’m Sync! You can talk to me to, ask me to read text, find a volunteer, scan your surroundings, or get support."}
          </span>
        </div>
      )}
    </div>
  );
};

export default VoiceNote1;
