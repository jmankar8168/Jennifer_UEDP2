import React from 'react';
import './Group11Group16.css';

export interface Group11Group16Props {
  /** Literal Figma Layer Name: "Group 11 + Group 16" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Job' | 'Jobs';
  State?: 'Hover' | 'Selected' | 'Default';
}

/**
 * Group11Group16 Component
 * Preserved Figma Layer Name: "Group 11 + Group 16"
 */
export const Group11Group16: React.FC<Group11Group16Props> = ({
  className = '',
  children,
  Type = 'Jobs',
  State = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-group11group16',
    Type ? `uedp-group11group16--${String(Type).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : '',
    State ? `uedp-group11group16--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Group 11 + Group 16</span>
      )}
    </div>
  );
};

export default Group11Group16;
