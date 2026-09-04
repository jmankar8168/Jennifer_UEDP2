import React from 'react';
import './Listening.css';

export interface ListeningProps {
  /** Literal Figma Layer Name: "Listening..." */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4';
}

/**
 * Listening Component
 * Preserved Figma Layer Name: "Listening..."
 */
export const Listening: React.FC<ListeningProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-listening',
    Property1 ? `uedp-listening--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Listening...</span>
      )}
    </div>
  );
};

export default Listening;
