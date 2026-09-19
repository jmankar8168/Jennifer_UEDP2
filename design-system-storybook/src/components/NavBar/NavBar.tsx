import React, { useState } from 'react';
import './NavBar.css';

export type NavTabKey = 'assist' | 'scan' | 'jobs' | 'support';
export type NavMode = 'Default' | 'Light' | 'dark' | 'light';

export type FigmaProperty1 =
  | 'Default'
  | 'assist hover'
  | 'assist selected'
  | 'scan hover'
  | 'scan selected'
  | 'jobs hover'
  | 'jobs selected'
  | 'support hover'
  | 'support selected';

export type FigmaProperty2 = 'Default' | 'Light';

/* ==========================================================================
   SVG Icons (Pixel-perfect extraction from Figma Node 52:5699)
   ========================================================================== */

export const AssistIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M2 12C2 12 6 4 12 4C18 4 22 12 22 12C22 12 18 20 12 20C6 20 2 12 2 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

export const ScanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M10 3H3V10H10V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M21 3H14V10H21V3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M10 14H3V21H10V14Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M14 14L21 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M14 18V21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M18 14H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

export const JobsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

export const SupportIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="42"
    height="27"
    viewBox="0 0 42 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    {/* Center person */}
    <path
      d="M20.8301 13.9707C23.0392 13.9707 24.8301 12.1798 24.8301 9.9707C24.8301 7.76156 23.0392 5.9707 20.8301 5.9707C18.6209 5.9707 16.8301 7.76156 16.8301 9.9707C16.8301 12.1798 18.6209 13.9707 20.8301 13.9707Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M12.8301 23.9707V21.9707C12.8301 19.7617 16.4121 17.9707 20.8301 17.9707C25.2481 17.9707 28.8301 19.7617 28.8301 21.9707V23.9707"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    {/* Right person */}
    <path
      d="M33.5 9.70833C35.2489 9.70833 36.6667 8.29057 36.6667 6.54167C36.6667 4.79276 35.2489 3.375 33.5 3.375C31.7511 3.375 30.3333 4.79276 30.3333 6.54167C30.3333 8.29057 31.7511 9.70833 33.5 9.70833Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M27.9999 15.5C27.9999 14 30.9999 12.875 33.5 12.875C36.9976 12.875 39.8333 14.2929 39.8333 16.0417V17.625"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    {/* Left person */}
    <path
      d="M8.49999 9.70833C6.75109 9.70833 5.33332 8.29057 5.33332 6.54167C5.33332 4.79276 6.75109 3.375 8.49999 3.375C10.2489 3.375 11.6667 4.79276 11.6667 6.54167C11.6667 8.29057 10.2489 9.70833 8.49999 9.70833Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path
      d="M14.0001 15.5C14.0001 14 11.0001 12.875 8.50001 12.875C5.00243 12.875 2.16668 14.2929 2.16668 16.0417V17.625"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

export interface NavItemConfig {
  key: NavTabKey;
  label: string;
  icon: React.ReactNode;
}

export const DEFAULT_NAV_ITEMS: NavItemConfig[] = [
  { key: 'assist', label: 'ASSIST', icon: <AssistIcon /> },
  { key: 'scan', label: 'SCAN', icon: <ScanIcon /> },
  { key: 'jobs', label: 'JOBS', icon: <JobsIcon /> },
  { key: 'support', label: 'SUPPORT', icon: <SupportIcon /> },
];

/* ==========================================================================
   Nav Bar Component Props & Implementation
   ========================================================================== */

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma variant Property 1 (exact match for artboard variants) */
  property1?: FigmaProperty1;
  /** Figma variant Property 2 (Default = dark mode, Light = light mode) */
  property2?: FigmaProperty2;
  /** Ergonomic mode prop: "Default" | "Light" | "dark" | "light" */
  mode?: NavMode;
  /** Currently selected tab */
  selectedTab?: NavTabKey | null;
  /** Default selected tab for uncontrolled state */
  defaultSelectedTab?: NavTabKey | null;
  /** Force hovered state on a specific tab (matches Figma hover variants) */
  hoveredTab?: NavTabKey | null;
  /** Callback fired when a tab is selected */
  onSelectTab?: (tab: NavTabKey) => void;
  /** Custom items array (defaults to Assist, Scan, Jobs, Support) */
  items?: NavItemConfig[];
}

export const NavBar: React.FC<NavBarProps> = ({
  property1,
  property2,
  mode,
  selectedTab: controlledSelectedTab,
  defaultSelectedTab = null,
  hoveredTab: controlledHoveredTab,
  onSelectTab,
  items = DEFAULT_NAV_ITEMS,
  className = '',
  ...rest
}) => {
  // Determine mode from property2 or mode prop (default: 'Default')
  const resolvedMode = (property2 || mode || 'Default').toLowerCase();
  const isLight = resolvedMode === 'light';

  // Parse Figma Property 1 if provided
  let figmaSelected: NavTabKey | null = null;
  let figmaHovered: NavTabKey | null = null;

  if (property1) {
    if (property1.includes('hover')) {
      if (property1.startsWith('assist')) figmaHovered = 'assist';
      if (property1.startsWith('scan')) figmaHovered = 'scan';
      if (property1.startsWith('jobs')) figmaHovered = 'jobs';
      if (property1.startsWith('support')) figmaHovered = 'support';
    } else if (property1.includes('selected')) {
      if (property1.startsWith('assist')) figmaSelected = 'assist';
      if (property1.startsWith('scan')) figmaSelected = 'scan';
      if (property1.startsWith('jobs')) figmaSelected = 'jobs';
      if (property1.startsWith('support')) figmaSelected = 'support';
    }
  }

  // Active selected state
  const isControlledSelected = controlledSelectedTab !== undefined || figmaSelected !== null;
  const [internalSelectedTab, setInternalSelectedTab] = useState<NavTabKey | null>(
    figmaSelected ?? (controlledSelectedTab !== undefined ? controlledSelectedTab : defaultSelectedTab)
  );
  const activeSelectedTab = isControlledSelected
    ? (figmaSelected ?? controlledSelectedTab ?? null)
    : internalSelectedTab;

  // Active hovered state
  const activeHoveredTab = figmaHovered ?? controlledHoveredTab ?? null;

  const handleTabClick = (key: NavTabKey) => {
    if (!isControlledSelected) {
      setInternalSelectedTab(key);
    }
    onSelectTab?.(key);
  };

  const modeClass = isLight ? 'uedp-navbar--mode-light' : 'uedp-navbar--mode-default';

  return (
    <nav
      className={`uedp-navbar ${modeClass} ${className}`.trim()}
      role="navigation"
      aria-label="Bottom Navigation"
      {...rest}
    >
      {items.map((item) => {
        const isSelected = activeSelectedTab === item.key;
        const isHovered = activeHoveredTab === item.key;

        const itemClasses = [
          'uedp-navbar__item',
          `uedp-navbar__item--${item.key}`,
          isSelected ? 'uedp-navbar__item--selected' : '',
          isHovered ? 'uedp-navbar__item--hovered' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={item.key}
            type="button"
            className={itemClasses}
            onClick={() => handleTabClick(item.key)}
            aria-selected={isSelected}
            role="tab"
          >
            <div className="uedp-navbar__icon">{item.icon}</div>
            <span className="uedp-navbar__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

// Backwards-compatible aliases
export const Navbar = NavBar;
export const NavigationBar = NavBar;
export const BackgroundHorizontalBorder = NavBar;

export default NavBar;
