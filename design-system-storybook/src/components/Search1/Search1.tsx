import React from 'react';
import './Search1.css';

export interface Search1Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "search" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'Default' | 'Hover';
}

/**
 * Search1 Component
 * Preserved Figma Layer Name: "search"
 * Node ID: 33:912
 */
export const Search1: React.FC<Search1Props> = ({
  className = '',
  children,
  Property1 = 'Default',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-search1--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-search1 ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-search1-content">
          <span key="0" className="uedp-search1-text uedp-search1-text-0">
            {"SEARCH JOBS"}
          </span>
        </div>
      )}
    </div>
  );
};

export default Search1;
