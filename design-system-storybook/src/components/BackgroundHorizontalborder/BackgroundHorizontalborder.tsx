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
 * Assist = Eye icon
 * Figma: Frame 16:816 — 24x24
 * Vector 16:817: rel=(2,4) size=(20x16) — eye outer shape
 * Vector 16:818: rel=(9,9) size=(6x6) — iris
 */
const AssistIcon: React.FC = () => (
  <svg
    className="uedp-nav-icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Eye outer shape: bounding (2,4) → (22,20), lense curve through (12,4) top and (12,20) bottom */}
    <path
      d="M2 12 C6 4 18 4 22 12 C18 20 6 20 2 12 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      fill="none"
    />
    {/* Iris circle: center (12,12) radius 3, bounding (9,9) → (15,15) */}
    <circle
      cx="12"
      cy="12"
      r="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

/**
 * Scan = 4-square QR grid icon
 * Figma: Frame 16:1844 — 24x24
 * 4 Vectors: 7x7 squares at (3,3), (14,3), (3,14), (14,14)
 * 2 extension Vectors: vertical 0x3 at (14,18), horizontal 3x0 at (18,14)
 */
const ScanIcon: React.FC = () => (
  <svg
    className="uedp-nav-icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Top-left square: (3,3) 7x7 */}
    <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    {/* Top-right square: (14,3) 7x7 */}
    <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    {/* Bottom-left square: (3,14) 7x7 */}
    <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    {/* Bottom-right square: (14,14) 7x7 */}
    <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    {/* Vertical extension line from bottom-right: (14,18) → (14,21) */}
    <line x1="14" y1="21" x2="14" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    {/* Horizontal extension line from bottom-right: (18,14) → (21,14) */}
    <line x1="21" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

/**
 * Jobs = 5-pointed Star icon
 * Figma: Frame 16:993 — 24x24
 * Vector 16:994: rel=(2,2) size=(20×19.02) — single star path
 */
const JobsIcon: React.FC = () => (
  <svg
    className="uedp-nav-icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* 5-pointed star: bounding (2,2)→(22,21), outer R≈10, inner R≈4, center (12,11.5) */}
    <path
      d="M12 2 L14.47 8.76 L21.51 8.91 L15.8 13.24 L17.88 21 L12 17 L6.12 21 L8.2 13.24 L2.49 8.91 L9.53 8.76 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
    />
  </svg>
);

/**
 * Support = 3-person community icon
 * Figma: Frame 16:1863 — 42x27
 * Center person: head (16.83,5.97) 8x8, body (12.83,17.97) 16x6
 * Right person: head (30.33,3.375) 6.33x6.33, body (28,12.875) 11.83x4.75
 * Left person: head (5.33,3.375) 6.33x6.33, body (2.17,12.875) 11.83x4.75
 */
const SupportIcon: React.FC = () => (
  <svg
    className="uedp-nav-icon uedp-nav-icon--wide"
    width="32"
    height="22"
    viewBox="0 0 42 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Left person — head: center (8.5, 6.5) r≈3.17 */}
    <circle cx="8.5" cy="6.5" r="3.2" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Left person — shoulder arc: from (2.17,17.5) to (14,17.5) */}
    <path d="M2 18 C3 13 14 13 15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />

    {/* Center person (larger) — head: center (20.83, 9.97) r≈4 */}
    <circle cx="20.83" cy="9.97" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Center person — shoulder arc: from (12.83,23.5) to (28.83,23.5) */}
    <path d="M12 25 C13 19 29 19 30 25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />

    {/* Right person — head: center (33.5, 6.5) r≈3.17 */}
    <circle cx="33.5" cy="6.5" r="3.2" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Right person — shoulder arc: from (28,17.5) to (39.83,17.5) */}
    <path d="M27 18 C28 13 40 13 41 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
  </svg>
);

interface NavItemDef {
  key: NavItemKey;
  label: string;
  Icon: React.FC;
}

const NAV_ITEMS: NavItemDef[] = [
  { key: 'assist', label: 'Assist', Icon: AssistIcon },
  { key: 'scan',   label: 'Scan',   Icon: ScanIcon   },
  { key: 'jobs',   label: 'Jobs',   Icon: JobsIcon   },
  { key: 'support',label: 'Support',Icon: SupportIcon },
];

/**
 * BackgroundHorizontalborder Component
 * Preserved Figma Layer Name: "Background+HorizontalBorder"
 * Node ID: 30:262 (Component Set with 9 variants)
 * Width: 402px | Height: 86px
 * Background: #111111 | Border: 1px solid #222222
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
  // Derive initial state from the Figma "Type" prop
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
    isTypeHover && !interactive && typeKey ? typeKey : null
  );

  const currentSelected =
    activeItem !== undefined
      ? activeItem
      : interactive && internalActive
      ? internalActive
      : isTypeSelected && typeKey
      ? typeKey
      : null;

  const currentHovered =
    !interactive && isTypeHover ? typeKey : interactive ? internalHovered : null;

  const handleItemClick = (key: NavItemKey) => {
    if (!interactive) return;
    if (activeItem === undefined) setInternalActive(key);
    onItemChange?.(key);
  };

  const variantClass = `uedp-backgroundhorizontalborder--${Type.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  return (
    <nav
      className={`uedp-backgroundhorizontalborder ${variantClass} ${className}`.trim()}
      role="navigation"
      aria-label="Bottom Navigation"
      {...(rest as React.HTMLAttributes<HTMLElement>)}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-backgroundhorizontalborder-dock">
          {NAV_ITEMS.map((item) => {
            const isSelected = currentSelected === item.key;
            const isHovered = currentHovered === item.key;
            const { Icon } = item;

            return (
              <button
                key={item.key}
                type="button"
                className={
                  `uedp-nav-item uedp-nav-item--${item.key}` +
                  (isSelected ? ' uedp-nav-item--selected' : '') +
                  (isHovered ? ' uedp-nav-item--hover' : '')
                }
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
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default BackgroundHorizontalborder;
