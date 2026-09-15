import React from 'react';
import './Group11Group16.css';

export interface Group11Group16Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Group 11 + Group 16" */
  className?: string;
  children?: React.ReactNode;
  Type?: 'Jobs, State' | 'Job, State';
}

/**
 * Group11Group16 Component
 * Preserved Figma Layer Name: "Group 11 + Group 16"
 * Node ID: 30:182
 */
export const Group11Group16: React.FC<Group11Group16Props> = ({
  className = '',
  children,
  Type = 'Jobs, State',
  ...rest
}) => {
  const currentVariant = Type;
  const variantClass = currentVariant
    ? `uedp-group11group16--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-group11group16 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-group11group16-content">
          <span key="0" className="uedp-group11group16-text uedp-group11group16-text-0">
            {"Jobs"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Group11Group16;
