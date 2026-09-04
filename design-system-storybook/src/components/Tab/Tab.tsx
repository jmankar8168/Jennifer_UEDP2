import React from 'react';
import './Tab.css';

export interface TabProps {
  /** Literal Figma Layer Name: "Tab" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5' | 'Variant6' | 'Variant7' | 'Variant8' | 'Variant9';
}

/**
 * Tab Component
 * Preserved Figma Layer Name: "Tab"
 */
export const Tab: React.FC<TabProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-tab',
    Property1 ? `uedp-tab--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Tab</span>
      )}
    </div>
  );
};

export default Tab;
