import React from 'react';
import './Listening.css';

export interface ListeningProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Listening..." */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4';
}

/**
 * Listening Component
 * Preserved Figma Layer Name: "Listening..."
 * Node ID: 16:825
 */
export const Listening: React.FC<ListeningProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-listening--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-listening ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-listening-content">
          <span key="0" className="uedp-listening-text uedp-listening-text-0">
            {"Listening..."}
          </span>
        </div>
      )}
    </div>
  );
};

export default Listening;
