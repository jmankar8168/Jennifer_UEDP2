import React, { useState } from 'react';
import { Stars } from '../Stars/Stars';
import './ConfirmationBox.css';

export type ConfirmationBoxState = 'cancel session' | 'rate';
export type ConfirmationBoxMode = 'dark' | 'light' | 'dar';

export interface ConfirmationBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma variant: state ("cancel session" | "rate") */
  state?: ConfirmationBoxState;
  /** Figma variant: mode ("dark" | "light") */
  mode?: ConfirmationBoxMode;
  /** Main uppercase heading */
  title?: string;
  /** Secondary descriptive text */
  subtitle?: string;
  /** Negative action button label (default: "NO") */
  noText?: string;
  /** Affirmative action button label (default: "YES") */
  yesText?: string;
  /** Callback fired when NO is clicked */
  onNo?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Callback fired when YES is clicked */
  onYes?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Current star rating (when state="rate") */
  rating?: number;
  /** Callback fired when rating changes */
  onRatingChange?: (newRating: number) => void;
  /** Whether the embedded stars are interactive */
  interactiveStars?: boolean;
}

/** Exact 34x34 Soft Star Vector from Figma node 53:6207 */
const FIGMA_SOFT_STAR_PATH =
  'M16.5463 0.403005C16.6101 -0.134335 17.3899 -0.134335 17.4537 0.403005L17.9885 4.9108C18.6792 10.7316 23.2684 15.3208 29.0892 16.0115L33.5969 16.5463C34.1343 16.6101 34.1343 17.3899 33.5969 17.4537L29.0892 17.9885C23.2684 18.6792 18.6792 23.2684 17.9885 29.0892L17.4537 33.5969C17.3899 34.1343 16.6101 34.1343 16.5463 33.5969L16.0115 29.0892C15.3208 23.2684 10.7316 18.6792 4.9108 17.9885L0.403005 17.4537C-0.134335 17.3899 -0.134335 16.6101 0.403005 16.5463L4.9108 16.0115C10.7316 15.3208 15.3208 10.7316 16.0115 4.9108L16.5463 0.403005Z';

/**
 * ConfirmationBox Component
 * Literal Figma Layer Name: "voice prompt block" / confirmation box
 * Node ID: 53:6305
 */
export const ConfirmationBox: React.FC<ConfirmationBoxProps> = ({
  state = 'cancel session',
  mode = 'dark',
  title,
  subtitle,
  noText = 'NO',
  yesText = 'YES',
  onNo,
  onYes,
  rating = 0,
  onRatingChange,
  interactiveStars = true,
  className = '',
  ...rest
}) => {
  const [internalRating, setInternalRating] = useState<number>(rating);

  const isCancelSession = state === 'cancel session';
  const isLight = mode === 'light';
  const modeClass = isLight ? 'uedp-confirmation-box--mode-light' : 'uedp-confirmation-box--mode-dark';

  // Default content matching Figma exactly
  const defaultTitle = isCancelSession
    ? 'ARe You SURE YOU WANT TO CANCEL THIS SESSION?'
    : undefined;

  const defaultSubtitle = isCancelSession
    ? 'Someone out there is waiting for your help'
    : 'Please rate your volunteer out of 5 stars, It helps us improve your experience.';

  const displayTitle = title !== undefined ? title : defaultTitle;
  const displaySubtitle = subtitle !== undefined ? subtitle : defaultSubtitle;

  const handleRatingChange = (newRating: number) => {
    setInternalRating(newRating);
    onRatingChange?.(newRating);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      className={`uedp-confirmation-box ${modeClass} ${className}`.trim()}
      {...rest}
    >
      {/* Top Centered Sparkle / Soft Star */}
      <div className="uedp-confirmation-box__spark" aria-hidden="true">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={FIGMA_SOFT_STAR_PATH} fill="currentColor" />
        </svg>
      </div>

      {/* Main Text Content */}
      <div className="uedp-confirmation-box__text-container">
        {displayTitle && (
          <h3 className="uedp-confirmation-box__title">{displayTitle}</h3>
        )}
        {displaySubtitle && (
          <p className="uedp-confirmation-box__subtitle">{displaySubtitle}</p>
        )}
      </div>

      {/* State: Cancel Session (Action Buttons) */}
      {isCancelSession && (
        <div className="uedp-confirmation-box__actions">
          <button
            type="button"
            className="uedp-confirmation-box__btn-no"
            onClick={onNo}
          >
            {noText}
          </button>
          <button
            type="button"
            className="uedp-confirmation-box__btn-yes"
            onClick={onYes}
          >
            {yesText}
          </button>
        </div>
      )}

      {/* State: Rate (Embedded Stars Component) */}
      {!isCancelSession && (
        <div className="uedp-confirmation-box__stars-container">
          <Stars
            rating={internalRating}
            mode={isLight ? 'light' : 'default'}
            interactive={interactiveStars}
            onChange={handleRatingChange}
          />
        </div>
      )}
    </div>
  );
};

// Aliases for compatibility
export const VoicePromptBlock = ConfirmationBox;
export const PromptModal = ConfirmationBox;

export default ConfirmationBox;
