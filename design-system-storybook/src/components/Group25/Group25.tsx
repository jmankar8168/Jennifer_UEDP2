import React from 'react';
import './Group25.css';

export interface Group25Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Group 25" */
  className?: string;
  children?: React.ReactNode;
  Availibility?: 'On' | 'Off';
}

/**
 * Group25 Component
 * Preserved Figma Layer Name: "Group 25"
 * Node ID: 16:778
 */
export const Group25: React.FC<Group25Props> = ({
  className = '',
  children,
  Availibility = 'On',
  ...rest
}) => {
  const currentVariant = Availibility;
  const variantClass = currentVariant
    ? `uedp-group25--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-group25 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-group25-content">
          <span key="0" className="uedp-group25-text uedp-group25-text-0">
            {"Availibility : ON"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Group25;
