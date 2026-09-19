import React, { useState } from 'react';
import './Stars.css';

export type StarsRatingVariant = 'Default' | '1' | '2' | '3' | '4' | '5';
export type StarsModeVariant = 'default' | 'light' | 'dark';

export interface StarsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Figma Property 1: "Default" (0 stars) | "1" | "2" | "3" | "4" | "5" */
  'Property 1'?: StarsRatingVariant;
  /** Numerical rating between 0 and 5 */
  rating?: number | StarsRatingVariant;
  /** Figma mode: "default" (Neon green on dark) | "light" (Olive green on light) */
  mode?: StarsModeVariant;
  /** Whether the user can interactively hover and click to rate */
  interactive?: boolean;
  /** Callback fired when rating changes */
  onChange?: (newRating: number) => void;
  /** Custom size of stars in pixels (default 24) */
  size?: number;
}

/** Exact Figma Star Path Geometry (from node 33:1042 / 33:1046) */
const FIGMA_STAR_PATH =
  'M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z';

/**
 * Stars Component
 * Exact Replica of Figma Node ID: 53:6306
 * Layer Name: "stars"
 */
export const Stars: React.FC<StarsProps> = ({
  'Property 1': property1,
  rating,
  mode = 'default',
  interactive = false,
  onChange,
  size = 24,
  className = '',
  ...rest
}) => {
  // Determine active rating value (0 - 5)
  let initialValue = 0;
  const ratingProp = rating !== undefined ? rating : property1;

  if (typeof ratingProp === 'number') {
    initialValue = Math.max(0, Math.min(5, Math.round(ratingProp)));
  } else if (typeof ratingProp === 'string') {
    initialValue = ratingProp === 'Default' ? 0 : parseInt(ratingProp, 10) || 0;
  }

  const [currentRating, setCurrentRating] = useState<number>(initialValue);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Sync internal state if controlled rating prop updates
  React.useEffect(() => {
    if (typeof ratingProp === 'number') {
      setCurrentRating(Math.max(0, Math.min(5, Math.round(ratingProp))));
    } else if (typeof ratingProp === 'string') {
      setCurrentRating(ratingProp === 'Default' ? 0 : parseInt(ratingProp, 10) || 0);
    }
  }, [ratingProp]);

  const activeStars = hoverRating !== null ? hoverRating : currentRating;
  const modeClass = `uedp-stars--mode-${mode}`;
  const interactiveClass = interactive ? 'uedp-stars--interactive' : '';

  const handleStarClick = (index: number) => {
    if (!interactive) return;
    const newRating = index === currentRating ? 0 : index;
    setCurrentRating(newRating);
    onChange?.(newRating);
  };

  return (
    <div
      role="group"
      aria-label={`Rating: ${activeStars} of 5 stars`}
      className={`uedp-stars ${modeClass} ${interactiveClass} ${className}`.trim()}
      {...rest}
    >
      {[1, 2, 3, 4, 5].map((starIndex) => {
        const isFilled = starIndex <= activeStars;

        const StarWrapper = interactive ? 'button' : 'div';
        const buttonProps = interactive
          ? {
              type: 'button' as const,
              onClick: () => handleStarClick(starIndex),
              onMouseEnter: () => setHoverRating(starIndex),
              onMouseLeave: () => setHoverRating(null),
              'aria-label': `${starIndex} star${starIndex > 1 ? 's' : ''}`,
            }
          : {};

        return (
          <StarWrapper
            key={starIndex}
            className="uedp-star-item"
            style={{ width: `${size}px`, height: `${size}px` }}
            {...buttonProps}
          >
            <svg
              className={`uedp-star-svg ${
                isFilled ? 'uedp-star-svg--filled' : 'uedp-star-svg--empty'
              }`}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(2, 2.49)">
                <path d={FIGMA_STAR_PATH} />
              </g>
            </svg>
          </StarWrapper>
        );
      })}
    </div>
  );
};

// Aliases for developer convenience
export const Rating = Stars;
export const StarRating = Stars;

export default Stars;
