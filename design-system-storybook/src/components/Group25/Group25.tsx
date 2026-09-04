import React from 'react';
import './Group25.css';

export interface Group25Props {
  /** Literal Figma Layer Name: "Group 25" */
  className?: string;
  children?: React.ReactNode;
  Availibility?: 'On' | 'Off';
}

/**
 * Group25 Component
 * Preserved Figma Layer Name: "Group 25"
 */
export const Group25: React.FC<Group25Props> = ({
  className = '',
  children,
  Availibility = 'On',
  ...rest
}) => {
  const variantClasses = [
    'uedp-group25',
    Availibility ? `uedp-group25--${String(Availibility).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Group 25</span>
      )}
    </div>
  );
};

export default Group25;
