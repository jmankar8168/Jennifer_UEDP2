import React from 'react';
import './ChooseYourRoleForAPersonalisedExperience.css';

export interface ChooseYourRoleForAPersonalisedExperienceProps {
  /** Literal Figma Layer Name: "Choose your role for a personalised experience." */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * ChooseYourRoleForAPersonalisedExperience Component
 * Preserved Figma Layer Name: "Choose your role for a personalised experience."
 */
export const ChooseYourRoleForAPersonalisedExperience: React.FC<ChooseYourRoleForAPersonalisedExperienceProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-chooseyourroleforapersonalisedexperience',
    Property1 ? `uedp-chooseyourroleforapersonalisedexperience--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Choose your role for a personalised experience.</span>
      )}
    </div>
  );
};

export default ChooseYourRoleForAPersonalisedExperience;
