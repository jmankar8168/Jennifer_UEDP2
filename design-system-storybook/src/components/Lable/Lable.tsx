import React from 'react';
import './Lable.css';

export interface LableProps {
  /** Literal Figma Layer Name: "Lable" */
  className?: string;
  children?: React.ReactNode;
  Text313?: string;
  Property?: 'Default' | 'Selected';
}

/**
 * Lable Component
 * Preserved Figma Layer Name: "Lable"
 */
export const Lable: React.FC<LableProps> = ({
  className = '',
  children,
  Text313 = 'Lable',
  Property = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-lable',
    Text313 ? `uedp-lable--${String(Text313).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : '',
    Property ? `uedp-lable--${String(Property).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Lable</span>
      )}
    </div>
  );
};

export default Lable;
