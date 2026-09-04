import React from 'react';
import './HowWouldYouLikeToUseVisionsync.css';

export interface HowWouldYouLikeToUseVisionsyncProps {
  /** Literal Figma Layer Name: "How would you like to use VisionSync?" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * HowWouldYouLikeToUseVisionsync Component
 * Preserved Figma Layer Name: "How would you like to use VisionSync?"
 */
export const HowWouldYouLikeToUseVisionsync: React.FC<HowWouldYouLikeToUseVisionsyncProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-howwouldyouliketousevisionsync',
    Property1 ? `uedp-howwouldyouliketousevisionsync--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">How would you like to use VisionSync?</span>
      )}
    </div>
  );
};

export default HowWouldYouLikeToUseVisionsync;
