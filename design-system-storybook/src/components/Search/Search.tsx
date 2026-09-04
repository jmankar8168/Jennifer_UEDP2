import React from 'react';
import './Search.css';

export interface SearchProps {
  /** Literal Figma Layer Name: "search" */
  className?: string;
  children?: React.ReactNode;
  State?: 'Hover' | 'Default' | 'selected' | 'selected with list';
}

/**
 * Search Component
 * Preserved Figma Layer Name: "search"
 */
export const Search: React.FC<SearchProps> = ({
  className = '',
  children,
  State = 'Hover',
  ...rest
}) => {
  const variantClasses = [
    'uedp-search',
    State ? `uedp-search--${String(State).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">search</span>
      )}
    </div>
  );
};

export default Search;
