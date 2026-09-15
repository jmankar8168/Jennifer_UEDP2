import React from 'react';
import './ChooseYourRoleForAPersonalisedExperience.css';

export interface ChooseYourRoleForAPersonalisedExperienceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Choose your role for a personalised experience." */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * ChooseYourRoleForAPersonalisedExperience Component
 * Preserved Figma Layer Name: "Choose your role for a personalised experience."
 * Node ID: 16:685
 */
export const ChooseYourRoleForAPersonalisedExperience: React.FC<ChooseYourRoleForAPersonalisedExperienceProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-chooseyourroleforapersonalisedexperience--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-chooseyourroleforapersonalisedexperience ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-chooseyourroleforapersonalisedexperience-content">
          <span key="0" className="uedp-chooseyourroleforapersonalisedexperience-text uedp-chooseyourroleforapersonalisedexperience-text-0">
            {"Choose your role for a personalised experience."}
          </span>
        </div>
      )}
    </div>
  );
};

export default ChooseYourRoleForAPersonalisedExperience;
