import React, { useState } from 'react';
import './Tab.css';

export interface TabProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Literal Figma Layer Name: "Tab" */
  className?: string;
  /** Figma Variant Property 1 */
  Property1?: 'Default' | 'Variant2' | 'Variant3' | 'Variant4' | 'Variant5' | 'Variant6' | 'Variant7' | 'Variant8' | 'Variant9';
  /** Theme styling */
  theme?: 'dark' | 'light';
  /** Currently active tab label or index */
  activeTab?: string;
  /** Tab that should appear hovered (for static preview/testing) */
  hoveredTab?: string;
  /** Tab items list */
  tabs?: string[];
  /** Callback on tab selection */
  onTabChange?: (tab: string, index: number) => void;
  /** Whether the tabs are interactive */
  interactive?: boolean;
}

const DEFAULT_TABS = ['All', 'REMOTE', 'PART-TIME', 'FULL-TIME'];

/**
 * Tab Component
 * Preserved Figma Layer Name: "Tab"
 * Node ID: 33:861 / 53:6113
 */
export const Tab: React.FC<TabProps> = ({
  className = '',
  Property1 = 'Default',
  theme = 'dark',
  activeTab: controlledActiveTab,
  hoveredTab: forcedHoveredTab,
  tabs = DEFAULT_TABS,
  onTabChange,
  interactive = true,
  ...rest
}) => {
  // Map Figma Property1 to active/hovered index
  let variantActiveIndex: number | null = null;
  let variantHoverIndex: number | null = null;

  switch (Property1) {
    case 'Variant2': // Tab 0 active
      variantActiveIndex = 0;
      break;
    case 'Variant3': // Tab 1 active
      variantActiveIndex = 1;
      break;
    case 'Variant4': // Tab 2 active
      variantActiveIndex = 2;
      break;
    case 'Variant5': // Tab 3 active
      variantActiveIndex = 3;
      break;
    case 'Variant6': // Tab 0 hover
      variantHoverIndex = 0;
      break;
    case 'Variant7': // Tab 1 hover
      variantHoverIndex = 1;
      break;
    case 'Variant8': // Tab 2 hover
      variantHoverIndex = 2;
      break;
    case 'Variant9': // Tab 3 hover
      variantHoverIndex = 3;
      break;
    case 'Default':
    default:
      break;
  }

  const [internalActiveTab, setInternalActiveTab] = useState<string | null>(
    variantActiveIndex !== null ? tabs[variantActiveIndex] || null : null
  );

  // Determine current active tab
  const currentActiveTab =
    controlledActiveTab !== undefined
      ? controlledActiveTab
      : variantActiveIndex !== null
      ? tabs[variantActiveIndex]
      : internalActiveTab;

  const handleTabClick = (tab: string, index: number) => {
    if (!interactive) return;
    setInternalActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab, index);
    }
  };

  const themeClass = `uedp-tab--${theme}`;
  const variantClass = Property1 ? `uedp-tab--${Property1.toLowerCase()}` : '';

  return (
    <div
      className={`uedp-tab ${themeClass} ${variantClass} ${className}`.trim()}
      role="tablist"
      aria-orientation="horizontal"
      {...rest}
    >
      {tabs.map((tabLabel, idx) => {
        const isSelected = currentActiveTab === tabLabel || (variantActiveIndex !== null && variantActiveIndex === idx);
        const isForcedHover = forcedHoveredTab === tabLabel || (variantHoverIndex !== null && variantHoverIndex === idx);

        const itemClasses = [
          'uedp-tab-item',
          isSelected ? 'is-selected' : '',
          isForcedHover ? 'is-hovered' : '',
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={tabLabel}
            type="button"
            role="tab"
            aria-selected={isSelected}
            className={itemClasses}
            onClick={() => handleTabClick(tabLabel, idx)}
            tabIndex={isSelected ? 0 : -1}
          >
            <span className="uedp-tab-item-text">{tabLabel}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
