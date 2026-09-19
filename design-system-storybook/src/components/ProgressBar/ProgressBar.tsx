import React from 'react';
import './ProgressBar.css';

export type ProgressBarVariant = '0%' | '25%' | '50%' | '75%' | '100%';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Variant: Progress */
  Progress?: ProgressBarVariant;
  /** Custom progress numeric value between 0 and 100 */
  value?: number;
  /** Width override (defaults to 300px as defined in Figma) */
  width?: string | number;
  className?: string;
}

/**
 * ProgressBar Component
 * Exact Replica of Figma Node ID: 54:6523
 * Layer Name: "ProgressBar"
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  Progress = '100%',
  value,
  width,
  className = '',
  style,
  ...rest
}) => {
  // Calculate numeric percentage
  let percentage: number;
  if (typeof value === 'number') {
    percentage = Math.max(0, Math.min(100, value));
  } else {
    switch (Progress) {
      case '0%':
        percentage = 0;
        break;
      case '25%':
        percentage = 25;
        break;
      case '50%':
        percentage = 50;
        break;
      case '75%':
        percentage = 75;
        break;
      case '100%':
      default:
        percentage = 100;
        break;
    }
  }

  const variantClass = Progress ? `uedp-progressbar--${Progress.replace('%', '')}` : '';
  const customWidthStyle = width ? { width: typeof width === 'number' ? `${width}px` : width } : {};

  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`uedp-progressbar ${variantClass} ${className}`.trim()}
      style={{ ...customWidthStyle, ...style }}
      {...rest}
    >
      <div
        className="uedp-progressbar__fill"
        style={typeof value === 'number' ? { width: `${percentage}%` } : undefined}
      />
    </div>
  );
};

export default ProgressBar;
