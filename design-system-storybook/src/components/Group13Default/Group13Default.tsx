import React from 'react';
import './Group13Default.css';

export interface Group13DefaultProps {
  /** Literal Figma Layer Name: "Group 13/Default" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * Group13Default Component
 * Preserved Figma Layer Name: "Group 13/Default"
 */
export const Group13Default: React.FC<Group13DefaultProps> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-group13default',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Group 13/Default</span>
      )}
    </div>
  );
};

export default Group13Default;
