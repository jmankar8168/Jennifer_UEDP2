import React from 'react';
import './MenuBaseline.css';

export interface MenuBaselineProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Menu (baseline)" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'Menu (baseline)';
}

/**
 * MenuBaseline Component
 * Preserved Figma Layer Name: "Menu (baseline)"
 * Node ID: 40:2217
 */
export const MenuBaseline: React.FC<MenuBaselineProps> = ({
  className = '',
  children,
  variant = 'Menu (baseline)',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-menubaseline--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-menubaseline ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-menubaseline-content">
          <span key="0" className="uedp-menubaseline-text uedp-menubaseline-text-0">
            {"Menu item"}
          </span>
          <span key="1" className="uedp-menubaseline-text uedp-menubaseline-text-1">
            {"Supporting text"}
          </span>
          <span key="2" className="uedp-menubaseline-text uedp-menubaseline-text-2">
            {"Menu item"}
          </span>
          <span key="3" className="uedp-menubaseline-text uedp-menubaseline-text-3">
            {"Supporting text"}
          </span>
          <span key="4" className="uedp-menubaseline-text uedp-menubaseline-text-4">
            {"Menu item"}
          </span>
          <span key="5" className="uedp-menubaseline-text uedp-menubaseline-text-5">
            {"Supporting text"}
          </span>
          <span key="6" className="uedp-menubaseline-text uedp-menubaseline-text-6">
            {"Menu item"}
          </span>
          <span key="7" className="uedp-menubaseline-text uedp-menubaseline-text-7">
            {"Supporting text"}
          </span>
          <span key="8" className="uedp-menubaseline-text uedp-menubaseline-text-8">
            {"Menu item"}
          </span>
          <span key="9" className="uedp-menubaseline-text uedp-menubaseline-text-9">
            {"Supporting text"}
          </span>
          <span key="10" className="uedp-menubaseline-text uedp-menubaseline-text-10">
            {"Menu item"}
          </span>
          <span key="11" className="uedp-menubaseline-text uedp-menubaseline-text-11">
            {"Supporting text"}
          </span>
          <span key="12" className="uedp-menubaseline-text uedp-menubaseline-text-12">
            {"Menu item"}
          </span>
          <span key="13" className="uedp-menubaseline-text uedp-menubaseline-text-13">
            {"Supporting text"}
          </span>
          <span key="14" className="uedp-menubaseline-text uedp-menubaseline-text-14">
            {"Menu item"}
          </span>
          <span key="15" className="uedp-menubaseline-text uedp-menubaseline-text-15">
            {"Supporting text"}
          </span>
          <span key="16" className="uedp-menubaseline-text uedp-menubaseline-text-16">
            {"Menu item"}
          </span>
          <span key="17" className="uedp-menubaseline-text uedp-menubaseline-text-17">
            {"Supporting text"}
          </span>
          <span key="18" className="uedp-menubaseline-text uedp-menubaseline-text-18">
            {"Menu item"}
          </span>
          <span key="19" className="uedp-menubaseline-text uedp-menubaseline-text-19">
            {"Supporting text"}
          </span>
          <span key="20" className="uedp-menubaseline-text uedp-menubaseline-text-20">
            {"Menu item"}
          </span>
          <span key="21" className="uedp-menubaseline-text uedp-menubaseline-text-21">
            {"Supporting text"}
          </span>
          <span key="22" className="uedp-menubaseline-text uedp-menubaseline-text-22">
            {"Menu item"}
          </span>
          <span key="23" className="uedp-menubaseline-text uedp-menubaseline-text-23">
            {"Supporting text"}
          </span>
        </div>
      )}
    </div>
  );
};

export default MenuBaseline;
