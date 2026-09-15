import React from 'react';
import './Group32.css';

export interface Group32Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Group 32" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4';
}

/**
 * Group32 Component
 * Preserved Figma Layer Name: "Group 32"
 * Node ID: 16:1948
 */
export const Group32: React.FC<Group32Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-group32--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-group32 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-group32-content">
          <span className="uedp-group32-label">Group 32</span>
        </div>
      )}
    </div>
  );
};

export default Group32;
