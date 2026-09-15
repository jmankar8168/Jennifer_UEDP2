import React from 'react';
import './PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience.css';

export interface PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperienceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Please rate your volunteer out of 5 stars, It helps us improve your experience." */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience Component
 * Preserved Figma Layer Name: "Please rate your volunteer out of 5 stars, It helps us improve your experience."
 * Node ID: 16:714
 */
export const PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience: React.FC<PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperienceProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-pleaserateyourvolunteeroutof5starsithelpsusimproveyourexperience--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-pleaserateyourvolunteeroutof5starsithelpsusimproveyourexperience ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-pleaserateyourvolunteeroutof5starsithelpsusimproveyourexperience-content">
          <span key="0" className="uedp-pleaserateyourvolunteeroutof5starsithelpsusimproveyourexperience-text uedp-pleaserateyourvolunteeroutof5starsithelpsusimproveyourexperience-text-0">
            {"Please rate your volunteer out of 5 stars, It helps us improve your experience."}
          </span>
        </div>
      )}
    </div>
  );
};

export default PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience;
