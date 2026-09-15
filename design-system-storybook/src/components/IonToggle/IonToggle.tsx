import React from 'react';
import './IonToggle.css';

export interface IonToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "ion:toggle" */
  className?: string;
  children?: React.ReactNode;
  Property1?: 'off' | 'on';
}

/**
 * IonToggle Component
 * Preserved Figma Layer Name: "ion:toggle"
 * Node ID: 34:1156
 */
export const IonToggle: React.FC<IonToggleProps> = ({
  className = '',
  children,
  Property1 = 'off',
  ...rest
}) => {
  const currentVariant = Property1;
  const variantClass = currentVariant
    ? `uedp-iontoggle--${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}`
    : '';

  return (
    <div
      className={`uedp-iontoggle ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="uedp-iontoggle-content">
          <span className="uedp-iontoggle-label">ion:toggle</span>
        </div>
      )}
    </div>
  );
};

export default IonToggle;
