import React from 'react';
import './SwitchRole.css';

export interface SwitchRoleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Switch role" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * SwitchRole Component
 * Preserved Figma Layer Name: "Switch role"
 * Node ID: 16:734
 */
export const SwitchRole: React.FC<SwitchRoleProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-switchrole--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-switchrole ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-switchrole-content">
          <span key="0" className="uedp-switchrole-text uedp-switchrole-text-0">
            {"Switch \nrole"}
          </span>
        </div>
      )}
    </div>
  );
};

export default SwitchRole;
