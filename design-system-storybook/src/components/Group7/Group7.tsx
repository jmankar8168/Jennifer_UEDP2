import React from 'react';
import './Group7.css';

export interface Group7Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Group 7" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Group7 Component
 * Preserved Figma Layer Name: "Group 7"
 * Node ID: 16:796
 */
export const Group7: React.FC<Group7Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-group7--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-group7 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-group7-content">
          <span key="0" className="uedp-group7-text uedp-group7-text-0">
            {"Empowering Independence, Together."}
          </span>
        </div>
      )}
    </div>
  );
};

export default Group7;
