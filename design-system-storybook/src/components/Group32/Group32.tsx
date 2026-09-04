import React from 'react';
import './Group32.css';

export interface Group32Props {
  /** Literal Figma Layer Name: "Group 32" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4';
}

/**
 * Group32 Component
 * Preserved Figma Layer Name: "Group 32"
 */
export const Group32: React.FC<Group32Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-group32',
    Property1 ? `uedp-group32--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Group 32</span>
      )}
    </div>
  );
};

export default Group32;
