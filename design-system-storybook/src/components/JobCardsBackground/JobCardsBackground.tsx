import React from 'react';
import './JobCardsBackground.css';

export interface JobCardsBackgroundProps {
  /** Literal Figma Layer Name: "job cards/Background" */
  className?: string;
  children?: React.ReactNode;

}

/**
 * JobCardsBackground Component
 * Preserved Figma Layer Name: "job cards/Background"
 */
export const JobCardsBackground: React.FC<JobCardsBackgroundProps> = ({
  className = '',
  children,

  ...rest
}) => {
  const variantClasses = [
    'uedp-jobcardsbackground',

  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">job cards/Background</span>
      )}
    </div>
  );
};

export default JobCardsBackground;
