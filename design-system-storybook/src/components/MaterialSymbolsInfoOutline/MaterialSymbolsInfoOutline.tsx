import React from 'react';
import './MaterialSymbolsInfoOutline.css';

export interface MaterialSymbolsInfoOutlineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "material-symbols:info-outline" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'material-symbols:info-outline';
}

/**
 * MaterialSymbolsInfoOutline Component
 * Preserved Figma Layer Name: "material-symbols:info-outline"
 * Node ID: 16:745
 */
export const MaterialSymbolsInfoOutline: React.FC<MaterialSymbolsInfoOutlineProps> = ({
  className = '',
  children,
  variant = 'material-symbols:info-outline',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-materialsymbolsinfooutline--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-materialsymbolsinfooutline ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-materialsymbolsinfooutline-content">
          <span className="uedp-materialsymbolsinfooutline-label">material-symbols:info-outline</span>
        </div>
      )}
    </div>
  );
};

export default MaterialSymbolsInfoOutline;
