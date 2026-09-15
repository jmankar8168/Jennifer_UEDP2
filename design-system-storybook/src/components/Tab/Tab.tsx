import React from 'react';
import './Tab.css';

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Tab" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant9' | 'Variant8' | 'Variant7' | 'Variant6' | 'Variant5' | 'Variant4' | 'Variant3' | 'Variant2';
}

/**
 * Tab Component
 * Preserved Figma Layer Name: "Tab"
 * Node ID: 33:861
 */
export const Tab: React.FC<TabProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-tab--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-tab ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-tab-content">
          <span key="0" className="uedp-tab-text uedp-tab-text-0">
            {"All"}
          </span>
          <span key="1" className="uedp-tab-text uedp-tab-text-1">
            {"REMOTE"}
          </span>
          <span key="2" className="uedp-tab-text uedp-tab-text-2">
            {"PART-TIME"}
          </span>
          <span key="3" className="uedp-tab-text uedp-tab-text-3">
            {"FULL-TIME"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Tab;
