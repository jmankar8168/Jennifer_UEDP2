import React, { useState } from 'react';
import './BackgroundHorizontalborder.css';

export type BackgroundHorizontalborderType =
  | 'Default'
  | 'assist hover'
  | 'scan hover'
  | 'jobs hover'
  | 'support hover'
  | 'assist selected'
  | 'scan selected'
  | 'jobs selected'
  | 'support selected';

export type NavItemKey = 'assist' | 'scan' | 'jobs' | 'support';

export interface BackgroundHorizontalborderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "Background+HorizontalBorder" */
  className?: string;
  children?: React.ReactNode;
  /** Figma variant property "Type" (9 variants from Node ID 30:262) */
  Type?: BackgroundHorizontalborderType;
  /** Controlled active navigation item */
  activeItem?: NavItemKey;
  /** Callback fired when an item tab is clicked */
  onItemChange?: (item: NavItemKey) => void;
  /** Whether the component allows live interactive clicking */
  interactive?: boolean;
}

/**
 * Icons matching Figma Node 30:262 / 30:180 - 30:183 specifications
 */
const AssistIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`uedp-nav-icon ${className || ''}`.trim()}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Camera Viewfinder Body */}
    <path
      d="M7 4h10l1.5 2.5H21a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h2.5L7 4z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    {/* Center Lens */}
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ScanIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`uedp-nav-icon ${className || ''}`.trim()}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* 4 Viewfinder Corner Brackets + Center Scan Line */}
    <path d="M3 10V3h7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path d="M14 3h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path d="M3 14v7h7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path d="M14 21h7v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

const JobsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`uedp-nav-icon ${className || ''}`.trim()}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Briefcase Bag */}
    <rect
      x="2"
      y="7"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    {/* Briefcase Handle */}
    <path
      d="M16 7V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    {/* Center Division Line */}
    <path d="M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

const SupportIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`uedp-nav-icon uedp-nav-icon--wide ${className || ''}`.trim()}
    width="32"
    height="24"
    viewBox="0 0 42 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Center Primary Person */}
    <circle cx="21" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path
      d="M13 24v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    {/* Left Helper Person */}
    <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path
      d="M2 24v-1.5a3.5 3.5 0 0 1 3.5-3.5h3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    {/* Right Helper Person */}
    <circle cx="34" cy="7" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    <path
      d="M33.5 19h3a3.5 3.5 0 0 1 3.5 3.5V24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

interface NavItemDef {
  key: NavItemKey;
  label: string;
  icon: React.FC<{ className?: string }>;
}

const NAV_ITEMS: NavItemDef[] = [
  { key: 'assist', label: 'Assist', icon: AssistIcon },
  { key: 'scan', label: 'Scan', icon: ScanIcon },
  { key: 'jobs', label: 'Jobs', icon: JobsIcon },
  { key: 'support', label: 'Support', icon: SupportIcon },
];

/**
 * BackgroundHorizontalborder Component
 * Preserved Figma Layer Name: "Background+HorizontalBorder"
 * Node ID: 30:262 (Component Set with 9 variants)
 * Width: 402px | Height: 86px | Background: #111111 | Border: 1px solid #222222
 */
export const BackgroundHorizontalborder: React.FC<BackgroundHorizontalborderProps> = ({
  className = '',
  children,
  Type = 'Default',
  activeItem,
  onItemChange,
  interactive = true,
  ...rest
}) => {
  // Parse static Figma variant states if controlled externally
  const isTypeSelected = Type.includes('selected');
  const isTypeHover = Type.includes('hover');
  const typeKey: NavItemKey | null = Type.startsWith('assist')
    ? 'assist'
    : Type.startsWith('scan')
    ? 'scan'
    : Type.startsWith('jobs')
    ? 'jobs'
    : Type.startsWith('support')
    ? 'support'
    : null;

  const [internalActive, setInternalActive] = useState<NavItemKey | null>(
    isTypeSelected && typeKey ? typeKey : null
  );
  const [internalHovered, setInternalHovered] = useState<NavItemKey | null>(
    isTypeHover && typeKey ? typeKey : null
  );

  const currentSelected = activeItem !== undefined ? activeItem : (interactive && internalActive ? internalActive : (isTypeSelected ? typeKey : null));
  const currentHovered = isTypeHover && !interactive ? typeKey : internalHovered;

  const handleItemClick = (key: NavItemKey) => {
    if (!interactive) return;
    if (activeItem === undefined) {
      setInternalActive(key);
    }
    onItemChange?.(key);
  };

  const variantClass = `uedp-backgroundhorizontalborder--${Type.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return (
    <nav
      className={`uedp-backgroundhorizontalborder ${variantClass} ${className}`.trim()}
      role="navigation"
      aria-label="Bottom Navigation"
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-backgroundhorizontalborder-dock">
          {NAV_ITEMS.map((item, index) => {
            const isSelected = currentSelected === item.key;
            const isHovered = currentHovered === item.key;
            const Icon = item.icon;

            return (
              <React.Fragment key={item.key}>
                <button
                  type="button"
                  className={`uedp-nav-item uedp-nav-item--${item.key} ${
                    isSelected ? 'uedp-nav-item--selected' : ''
                  } ${isHovered ? 'uedp-nav-item--hover' : ''}`.trim()}
                  onClick={() => handleItemClick(item.key)}
                  onMouseEnter={() => interactive && setInternalHovered(item.key)}
                  onMouseLeave={() => interactive && setInternalHovered(null)}
                  aria-label={item.label}
                  aria-current={isSelected ? 'page' : undefined}
                >
                  <div className="uedp-nav-icon-wrapper">
                    <Icon />
                  </div>
                  <span className="uedp-nav-text">{item.label}</span>
                </button>

                {/* Subtle Divider Spacers matching Figma Node 30:195 / 30:198 / 30:208 */}
                {index < NAV_ITEMS.length - 1 && (
                  <span className="uedp-nav-divider" aria-hidden="true" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default BackgroundHorizontalborder;
