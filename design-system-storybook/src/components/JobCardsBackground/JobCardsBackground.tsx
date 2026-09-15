import React from 'react';
import './JobCardsBackground.css';

export interface JobCardsBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "job cards/Background" */
  className?: string;
  children?: React.ReactNode;
  variant?: 'job cards/Background';
}

/**
 * JobCardsBackground Component
 * Preserved Figma Layer Name: "job cards/Background"
 * Node ID: 32:773
 */
export const JobCardsBackground: React.FC<JobCardsBackgroundProps> = ({
  className = '',
  children,
  variant = 'job cards/Background',
  ...rest
}) => {
  const currentVariant = variant;
  const variantClass = currentVariant
    ? `uedp-jobcardsbackground--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-jobcardsbackground ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-jobcardsbackground-content">
          <span key="0" className="uedp-jobcardsbackground-text uedp-jobcardsbackground-text-0">
            {"LABLe"}
          </span>
        </div>
      )}
    </div>
  );
};

export default JobCardsBackground;
