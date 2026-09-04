import React from 'react';
import './Search1.css';

export interface Search1Props {
  /** Literal Figma Layer Name: "search" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Hover';
}

/**
 * Search1 Component
 * Preserved Figma Layer Name: "search"
 */
export const Search1: React.FC<Search1Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const variantClasses = [
    'uedp-search1',
    Property1 ? `uedp-search1--${String(Property1).toLowerCase().replace(/[^a-z0-9]/g, '-')}` : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={`${variantClasses} ${className}`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">search</span>
      )}
    </div>
  );
};

export default Search1;
