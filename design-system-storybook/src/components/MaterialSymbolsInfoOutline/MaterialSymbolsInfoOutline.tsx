import React from 'react';
import './MaterialSymbolsInfoOutline.css';

export interface MaterialSymbolsInfoOutlineProps {
  /** Literal Figma Layer Name: "material-symbols:info-outline" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * MaterialSymbolsInfoOutline Component
 * Preserved Figma Layer Name: "material-symbols:info-outline"
 */
export const MaterialSymbolsInfoOutline: React.FC<MaterialSymbolsInfoOutlineProps> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-materialsymbolsinfooutline',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">material-symbols:info-outline</span>
      )}
    </div>
  );
};

export default MaterialSymbolsInfoOutline;
