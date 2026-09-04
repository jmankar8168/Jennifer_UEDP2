import React, { useState } from 'react';
import './Search.css';

export interface SearchMenuItem {
  id?: string | number;
  label: string;
  supportingText?: string;
  icon?: React.ReactNode;
}

export interface SearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Literal Figma Layer Name: "search" */
  className?: string;
  State?: 'Default' | 'Hover' | 'selected' | 'selected with list';
  placeholder?: string;
  value?: string;
  items?: SearchMenuItem[];
  onItemClick?: (item: SearchMenuItem) => void;
  onClear?: () => void;
}

const SearchIcon: React.FC<{ color?: string }> = ({ color = 'currentColor' }) => (
  <svg
    className="uedp-search__icon"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
  </svg>
);

const DefaultItemIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChevronRightIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const defaultMenuList: SearchMenuItem[] = [
  { label: 'Reading Assistant', supportingText: 'Help read letters & documents' },
  { label: 'Navigation Helper', supportingText: 'Outdoor walking guide' },
  { label: 'Object Finder', supportingText: 'Identify objects in room' },
  { label: 'Shopping Assistant', supportingText: 'Read barcodes and shelf tags' },
  { label: 'Transit Guide', supportingText: 'Bus & train schedule reader' },
  { label: 'Tech Support', supportingText: 'Screen reader & device settings' },
  { label: 'Recipe Reader', supportingText: 'Cooking guidance & timers' },
  { label: 'Clothing Matcher', supportingText: 'Color & style identification' }
];

/**
 * Search Component
 * Preserved Figma Layer Name: "search"
 * Figma Node ID: 16:963 (COMPONENT_SET)
 */
export const Search: React.FC<SearchProps> = ({
  className = '',
  State = 'Default',
  placeholder = 'SEARCH JOBS',
  value,
  onChange,
  items = defaultMenuList,
  onItemClick,
  ...rest
}) => {
  const [internalVal, setInternalVal] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const currentValue = value !== undefined ? value : internalVal;

  const resolvedState = State !== 'Default' 
    ? State 
    : isFocused 
      ? 'selected' 
      : isHovered 
        ? 'Hover' 
        : 'Default';

  const showDropdown = State === 'selected with list' || (isFocused && items.length > 0);

  const containerClasses = [
    'uedp-search-container',
    `uedp-search-container--${resolvedState.replace(/\s+/g, '-').toLowerCase()}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <div 
        className={`uedp-search-input-wrapper uedp-search-input-wrapper--${resolvedState.replace(/\s+/g, '-').toLowerCase()}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="uedp-search__icon-box">
          <SearchIcon color="#FFFFFF" />
        </span>
        <input
          type="text"
          className="uedp-search__input"
          placeholder={placeholder}
          value={currentValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onChange={(e) => {
            setInternalVal(e.target.value);
            if (onChange) onChange(e);
          }}
          {...rest}
        />
      </div>

      {showDropdown && (
        <div className="uedp-search-menu">
          <div className="uedp-search-menu__list">
            {items.map((item, idx) => (
              <div
                key={item.id || idx}
                className="uedp-search-menu__item"
                onClick={() => onItemClick && onItemClick(item)}
              >
                <div className="uedp-search-menu__leading">
                  {item.icon || <DefaultItemIcon />}
                </div>
                <div className="uedp-search-menu__content">
                  <div className="uedp-search-menu__label">{item.label}</div>
                  {item.supportingText && (
                    <div className="uedp-search-menu__support">{item.supportingText}</div>
                  )}
                </div>
                <div className="uedp-search-menu__trailing">
                  <ChevronRightIcon />
                </div>
              </div>
            ))}
          </div>
          <div className="uedp-search-menu__scrollbar">
            <div className="uedp-search-menu__thumb" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
