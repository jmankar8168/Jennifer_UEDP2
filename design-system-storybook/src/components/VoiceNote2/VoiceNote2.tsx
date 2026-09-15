import React from 'react';
import './VoiceNote2.css';

export interface VoiceNote2Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "voice note" */
  className?: string;
  children?: React.ReactNode;
  State?: 'Default' | 'selected' | 'Command selected' | 'default';
}

/**
 * VoiceNote2 Component
 * Preserved Figma Layer Name: "voice note"
 * Node ID: 34:1171
 */
export const VoiceNote2: React.FC<VoiceNote2Props> = ({
  className = '',
  children,
  State = 'Default',
  ...rest
}) => {
  const currentVariant = State;
  const variantClass = currentVariant
    ? `uedp-voicenote2--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-voicenote2 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-voicenote2-content">
          <span key="0" className="uedp-voicenote2-text uedp-voicenote2-text-0">
            {"Voice note"}
          </span>
        </div>
      )}
    </div>
  );
};

export default VoiceNote2;
