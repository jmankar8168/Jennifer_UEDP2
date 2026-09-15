import React from 'react';
import './JobCards.css';

export interface JobCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "job cards" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'hover';
}

/**
 * JobCards Component
 * Preserved Figma Layer Name: "job cards"
 * Node ID: 16:1981
 */
export const JobCards: React.FC<JobCardsProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-jobcards--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-jobcards ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-jobcards-content">
          <span key="0" className="uedp-jobcards-text uedp-jobcards-text-0">
            {"Title"}
          </span>
          <span key="1" className="uedp-jobcards-text uedp-jobcards-text-1">
            {"Description"}
          </span>
          <span key="2" className="uedp-jobcards-text uedp-jobcards-text-2">
            {"LABLe"}
          </span>
          <span key="3" className="uedp-jobcards-text uedp-jobcards-text-3">
            {"LABLe"}
          </span>
          <span key="4" className="uedp-jobcards-text uedp-jobcards-text-4">
            {"APPLY"}
          </span>
        </div>
      )}
    </div>
  );
};

export default JobCards;
