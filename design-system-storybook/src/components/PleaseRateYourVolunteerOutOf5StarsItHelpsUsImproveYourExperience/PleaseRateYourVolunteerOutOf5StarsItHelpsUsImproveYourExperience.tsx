import React from 'react';
import './PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience.css';

export interface PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperienceProps {
  /** Literal Figma Layer Name: "Please rate your volunteer out of 5 stars, It helps us improve your experience." */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience Component
 * Preserved Figma Layer Name: "Please rate your volunteer out of 5 stars, It helps us improve your experience."
 */
export const PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience: React.FC<PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperienceProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-pleaserateyourvolunteeroutof5starsithelpsusimproveyourexperience',
    Property1 ? `uedp-pleaserateyourvolunteeroutof5starsithelpsusimproveyourexperience--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">Please rate your volunteer out of 5 stars, It helps us improve your experience.</span>
      )}
    </div>
  );
};

export default PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience;
