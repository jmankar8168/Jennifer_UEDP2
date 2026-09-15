import React from 'react';
import './Group13Default.css';

export interface Group13DefaultProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Group 13/Default" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'Group 13/Default';
}

/**
 * Group13Default Component
 * Preserved Figma Layer Name: "Group 13/Default"
 * Node ID: 16:704
 */
export const Group13Default: React.FC<Group13DefaultProps> = ({
  className = '',
  children,
  variant = 'Group 13/Default',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-group13default--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-group13default ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-group13default-content">
          <span key="0" className="uedp-group13default-text uedp-group13default-text-0">
            {"Assist"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Group13Default;
