import React, { useState } from 'react';
import './HelpTypeOptionsLargeTouchTargets.css';

export interface HelpTypeOptionsLargeTouchTargetsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "help type options — large touch targets" */
  className?: string;
  children?: React.ReactNode;
  State?: 'Default' | 'Hover' | 'job cards/Default' | 'job cards/Hover';
  tag?: string;
  title?: string;
  interactive?: boolean;
}

/**
 * HelpTypeOptionsLargeTouchTargets Component
 * Preserved Figma Layer Name: "help type options — large touch targets"
 * Node ID: 16:841
 */
export const HelpTypeOptionsLargeTouchTargets: React.FC<HelpTypeOptionsLargeTouchTargetsProps> = ({
  className = '',
  children,
  State = 'Default',
  tag = 'Space Mono',
  title = 'Source Sans 3',
  interactive = false,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // If interactive mode is enabled, map hover state dynamically
  let effectiveState = State;
  if (interactive) {
    if (State === 'Default' || State === 'Hover') {
      effectiveState = isHovered ? 'Hover' : 'Default';
    } else if (State === 'job cards/Default' || State === 'job cards/Hover') {
      effectiveState = isHovered ? 'job cards/Hover' : 'job cards/Default';
    }
  }

  const isJobCard = effectiveState.startsWith('job cards');
  const isHover = effectiveState === 'Hover' || effectiveState === 'job cards/Hover';

  const stateClass = `uedp-helptypeoptionslargetouchtargets--state-${effectiveState
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')}`;

  return (
    <div
      className={`uedp-helptypeoptionslargetouchtargets ${stateClass} ${className}`.trim()}
      onMouseEnter={(e) => {
        setIsHovered(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        onMouseLeave?.(e);
      }}
      role="button"
      tabIndex={0}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <>
          <div className="uedp-helptype-text-group">
            <span className="uedp-helptype-tag">{tag}</span>
            <span className="uedp-helptype-title">{title}</span>
          </div>

          <div className="uedp-helptype-icon-container" aria-hidden="true">
            {isJobCard ? (
              /* 24x24 Arrow Right (Node ID 30:159 / 30:174) */
              <svg
                className="uedp-helptype-arrow-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            ) : (
              /* Chevron Right Border (Node ID 16:845 / 16:849) */
              <div
                className={`uedp-helptype-chevron-icon ${
                  isHover ? 'uedp-helptype-chevron-icon--hover' : ''
                }`}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HelpTypeOptionsLargeTouchTargets;
