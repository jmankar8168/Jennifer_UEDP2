import React from 'react';
import './Component9.css';

export interface Component9Props {
  /** Literal Figma Layer Name: "Component 9" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'OPTION B — Sighted user (unselected)' | 'Variant2' | 'Variant3';
}

/**
 * Component9 Component
 * Preserved Figma Layer Name: "Component 9"
 */
export const Component9: React.FC<Component9Props> = ({
  className = '',
  children,
  Property1 = 'OPTION B — Sighted user (unselected)',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component9',
    Property1 ? `uedp-component9--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 9</span>
      )}
    </div>
  );
};

export default Component9;
