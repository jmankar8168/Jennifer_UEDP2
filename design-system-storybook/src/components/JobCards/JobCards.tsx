import React from 'react';
import './JobCards.css';

export interface JobCardsProps {
  /** Literal Figma Layer Name: "job cards" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'hover';
}

/**
 * JobCards Component
 * Preserved Figma Layer Name: "job cards"
 */
export const JobCards: React.FC<JobCardsProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-jobcards',
    Property1 ? `uedp-jobcards--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">job cards</span>
      )}
    </div>
  );
};

export default JobCards;
