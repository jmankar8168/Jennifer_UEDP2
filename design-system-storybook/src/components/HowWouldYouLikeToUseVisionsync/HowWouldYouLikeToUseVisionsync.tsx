import React from 'react';
import './HowWouldYouLikeToUseVisionsync.css';

export interface HowWouldYouLikeToUseVisionsyncProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "How would you like to use VisionSync?" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Variant2';
}

/**
 * HowWouldYouLikeToUseVisionsync Component
 * Preserved Figma Layer Name: "How would you like to use VisionSync?"
 * Node ID: 16:709
 */
export const HowWouldYouLikeToUseVisionsync: React.FC<HowWouldYouLikeToUseVisionsyncProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-howwouldyouliketousevisionsync--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-howwouldyouliketousevisionsync ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-howwouldyouliketousevisionsync-content">
          <span key="0" className="uedp-howwouldyouliketousevisionsync-text uedp-howwouldyouliketousevisionsync-text-0">
            {"How would you like to use VisionSync?"}
          </span>
        </div>
      )}
    </div>
  );
};

export default HowWouldYouLikeToUseVisionsync;
