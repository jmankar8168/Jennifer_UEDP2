import React, { useState } from 'react';
import './JobCards.css';

export type JobCardsVariant = 'Default' | 'hover';
export type JobCardsTheme = 'dark' | 'light';

export interface JobCardsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Literal Figma Layer Name: "job cards" (Node ID: 52:6012 / 16:1981) */
  className?: string;
  children?: React.ReactNode;
  /** Figma variant property "Property 1" */
  Property1?: JobCardsVariant;
  /** Color theme variant: 'dark' (default) or 'light' */
  theme?: JobCardsTheme;
  /** Card header title */
  title?: React.ReactNode;
  /** Job description text */
  description?: React.ReactNode;
  /** Pill tag labels (e.g. ['LABLE', 'LABLE'] or ['REMOTE', 'FULL-TIME']) */
  labels?: string[];
  /** Action button text (default: 'APPLY') */
  actionText?: string;
  /** Apply button click callback */
  onApply?: () => void;
  /** Whether the card shows interactive hover state on mouse enter */
  interactive?: boolean;
}

/**
 * JobCards Component
 * Recreated to pixel perfection from Figma (Node ID: 52:6012 / 16:1981)
 *
 * Card Dimensions: 350px × 118px
 * Outer Border: 1px solid (#FFFFFF or #B7FF4D on dark / #000000 or #4D8014 on light)
 * Top Text: Title (14px) & Description (12px)
 * Divider: 1px horizontal line
 * Bottom Row: Two dark pill tags (56px × 21px) + Action Button (56.5px × 28px)
 */
export const JobCards: React.FC<JobCardsProps> = ({
  className = '',
  children,
  Property1 = 'Default',
  theme = 'dark',
  title = 'Title',
  description = 'Description',
  labels = ['LABLE', 'LABLE'],
  actionText = 'APPLY',
  onApply,
  interactive = true,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const activeHover = Property1 === 'hover' || (interactive && isHovered);

  const variantClass = activeHover
    ? 'uedp-jobcards--hover'
    : 'uedp-jobcards--default';

  const themeClass = `uedp-jobcards--${theme}`;

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onApply?.();
  };

  return (
    <div
      className={`uedp-jobcards ${variantClass} ${themeClass} ${className}`.trim()}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-jobcards-inner">
          {/* Header text */}
          <div className="uedp-jobcards-header">
            <span className="uedp-jobcards-title">{title}</span>
            <span className="uedp-jobcards-description">{description}</span>
          </div>

          {/* Horizontal Divider */}
          <div className="uedp-jobcards-divider" />

          {/* Bottom Bar: Tags + Action Button */}
          <div className="uedp-jobcards-footer">
            <div className="uedp-jobcards-tags">
              {labels.map((lbl, idx) => (
                <span key={idx} className="uedp-jobcards-pill">
                  {lbl}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="uedp-jobcards-action"
              onClick={handleApplyClick}
            >
              {actionText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCards;
