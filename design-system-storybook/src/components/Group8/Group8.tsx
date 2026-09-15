import React from 'react';
import './Group8.css';

export interface Group8Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Group 8" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * Group8 Component
 * Preserved Figma Layer Name: "Group 8"
 * Node ID: 16:807
 */
export const Group8: React.FC<Group8Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-group8--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-group8 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-group8-content">
          <span key="0" className="uedp-group8-text uedp-group8-text-0">
            {"Would you like to enable voice-first navigation? You’ll be able to control the app by speaking and navigate hands-free."}
          </span>
          <span key="1" className="uedp-group8-text uedp-group8-text-1">
            {"Voice First. "}
          </span>
        </div>
      )}
    </div>
  );
};

export default Group8;
