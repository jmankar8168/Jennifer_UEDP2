import React from 'react';
import './HelpTypeOptionsLargeTouchTargets.css';

export interface HelpTypeOptionsLargeTouchTargetsProps {
  /** Literal Figma Layer Name: "help type options — large touch targets" */
  className?: string;
  children?: React.ReactNode;
  State?: 'Default' | 'Hover' | 'job cards/Default' | 'job cards/Hover';
}

/**
 * HelpTypeOptionsLargeTouchTargets Component
 * Preserved Figma Layer Name: "help type options — large touch targets"
 */
export const HelpTypeOptionsLargeTouchTargets: React.FC<HelpTypeOptionsLargeTouchTargetsProps> = ({
  className = '',
  children,
  State = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-helptypeoptionslargetouchtargets',
    State ? `uedp-helptypeoptionslargetouchtargets--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">help type options — large touch targets</span>
      )}
    </div>
  );
};

export default HelpTypeOptionsLargeTouchTargets;
