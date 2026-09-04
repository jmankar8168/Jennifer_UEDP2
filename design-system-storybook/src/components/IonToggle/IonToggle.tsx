import React from 'react';
import './IonToggle.css';

export interface IonToggleProps {
  /** Literal Figma Layer Name: "ion:toggle" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'off' | 'on';
}

/**
 * IonToggle Component
 * Preserved Figma Layer Name: "ion:toggle"
 */
export const IonToggle: React.FC<IonToggleProps> = ({
  className = '',
  children,
  Property1 = 'on',
  ...rest
}) => {
  const variantClasses = [
    'uedp-iontoggle',
    Property1 ? `uedp-iontoggle--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">ion:toggle</span>
      )}
    </div>
  );
};

export default IonToggle;
