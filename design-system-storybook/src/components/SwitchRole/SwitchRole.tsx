import React from 'react';
import './SwitchRole.css';

export interface SwitchRoleProps {
  /** Literal Figma Layer Name: "Switch role" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * SwitchRole Component
 * Preserved Figma Layer Name: "Switch role"
 */
export const SwitchRole: React.FC<SwitchRoleProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-switchrole',
    Property1 ? `uedp-switchrole--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Switch role</span>
      )}
    </div>
  );
};

export default SwitchRole;
