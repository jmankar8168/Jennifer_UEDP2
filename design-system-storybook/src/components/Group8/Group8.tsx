import React from 'react';
import './Group8.css';

export interface Group8Props {
  /** Literal Figma Layer Name: "Group 8" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Group8 Component
 * Preserved Figma Layer Name: "Group 8"
 */
export const Group8: React.FC<Group8Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-group8',
    Property1 ? `uedp-group8--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Group 8</span>
      )}
    </div>
  );
};

export default Group8;
