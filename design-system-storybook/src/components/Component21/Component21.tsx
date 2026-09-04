import React from 'react';
import './Component21.css';

export interface Component21Props {
  /** Literal Figma Layer Name: "Component 21" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'meet' | 'call recieved' | 'missed call';
}

/**
 * Component21 Component
 * Preserved Figma Layer Name: "Component 21"
 */
export const Component21: React.FC<Component21Props> = ({
  className = '',
  children,
  Property1 = 'missed call',
  ...rest
}) => {
  const variantClasses = [
    'uedp-component21',
    Property1 ? `uedp-component21--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Component 21</span>
      )}
    </div>
  );
};

export default Component21;
