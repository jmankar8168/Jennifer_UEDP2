import React, { useState } from 'react';
import './RoleSelector.css';

export type UserRole = 'blind' | 'sighted';
export type RoleSelectorTheme = 'dark' | 'light';

export interface RoleOption {
  id: UserRole;
  title: string;
  description: string;
  features: string[];
}

export interface RoleSelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Literal Figma Layer Name: "Choose your role for a personalised experience." (Node ID: 16:685) */
  className?: string;
  theme?: RoleSelectorTheme;
  selectedRole?: UserRole;
  onRoleChange?: (role: UserRole) => void;
  title?: string;
  tag?: string;
}

/* Exact Figma 31:727 (Blind Icon - 52×52) */
export const BlindRoleIcon: React.FC<{ selected?: boolean; theme?: RoleSelectorTheme }> = ({
  selected = false,
  theme = 'dark',
}) => {
  const strokeColor = selected
    ? theme === 'dark' ? '#B7FF4D' : '#4D8014'
    : '#525252';
  const bgColor = selected
    ? theme === 'dark' ? '#1f2d15' : '#ECFCCB'
    : theme === 'dark' ? '#171717' : '#F8FAFC';

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill={bgColor} stroke={strokeColor} />
      <path
        d="M13 26C13 26 17 18 26 18C35 18 39 26 39 26C39 26 35 34 26 34C17 34 13 26 13 26Z"
        stroke={strokeColor}
        strokeWidth="1.8"
      />
      <circle cx="26" cy="26" r="3.5" stroke={strokeColor} strokeWidth="1.8" />
      <path d="M15 19L37 34" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

/* Exact Figma 31:726 (Sighted Icon - 52×52) */
export const SightedRoleIcon: React.FC<{ selected?: boolean; theme?: RoleSelectorTheme }> = ({
  selected = false,
  theme = 'dark',
}) => {
  const strokeColor = selected
    ? theme === 'dark' ? '#B7FF4D' : '#4D8014'
    : '#525252';
  const bgColor = selected
    ? theme === 'dark' ? '#1f2d15' : '#ECFCCB'
    : theme === 'dark' ? '#171717' : '#F8FAFC';

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="51" height="51" rx="25.5" fill={bgColor} stroke={strokeColor} />
      <path
        d="M13 26C13 26 17 18 26 18C35 18 39 26 39 26C39 26 35 34 26 34C17 34 13 26 13 26Z"
        stroke={strokeColor}
        strokeWidth="1.8"
      />
      <circle cx="26" cy="26" r="3.5" stroke={strokeColor} strokeWidth="1.8" />
      <circle cx="26" cy="26" r="1.5" fill={strokeColor} />
    </svg>
  );
};

const DEFAULT_ROLES: RoleOption[] = [
  {
    id: 'blind',
    title: 'Blind / Low Vision User',
    description: 'Get real-time audio guidance, document reading & live visual assistance.',
    features: ['AUDIO FIRST', 'AI SCANNER', 'SCREEN READER READY'],
  },
  {
    id: 'sighted',
    title: 'Sighted Volunteer',
    description: 'Help others by lending your sight through live video calls & micro-tasks.',
    features: ['LIVE CALLS', 'TASK BOARD', 'COMMUNITY IMPACT'],
  },
];

/**
 * RoleSelector Component
 * Recreated from Figma Node ID: 16:685 & 31:730 (Component 14)
 */
export const RoleSelector: React.FC<RoleSelectorProps> = ({
  className = '',
  theme = 'dark',
  selectedRole: controlledSelectedRole,
  onRoleChange,
  title = 'Choose your role for a personalised experience.',
  tag = 'ONBOARDING STEP 1',
  ...rest
}) => {
  const [internalSelectedRole, setInternalSelectedRole] = useState<UserRole>('blind');

  const selectedRole = controlledSelectedRole !== undefined ? controlledSelectedRole : internalSelectedRole;

  const handleSelect = (role: UserRole) => {
    setInternalSelectedRole(role);
    onRoleChange?.(role);
  };

  const handleKeyDown = (e: React.KeyboardEvent, role: UserRole) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleSelect(role);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="User Role Selection"
      className={`uedp-role-selector uedp-role-selector--${theme} ${className}`}
      {...rest}
    >
      <div className="uedp-role-header">
        <span className="uedp-role-tag">{tag}</span>
        <h2 className="uedp-role-heading">{title}</h2>
      </div>

      <div className="uedp-role-cards-grid">
        {DEFAULT_ROLES.map((roleOpt) => {
          const isSelected = selectedRole === roleOpt.id;

          return (
            <div
              key={roleOpt.id}
              role="radio"
              tabIndex={0}
              aria-checked={isSelected}
              className={`uedp-role-card ${isSelected ? 'uedp-role-card--selected' : ''}`}
              onClick={() => handleSelect(roleOpt.id)}
              onKeyDown={(e) => handleKeyDown(e, roleOpt.id)}
            >
              <div className="uedp-role-icon-wrapper">
                {roleOpt.id === 'blind' ? (
                  <BlindRoleIcon selected={isSelected} theme={theme} />
                ) : (
                  <SightedRoleIcon selected={isSelected} theme={theme} />
                )}
              </div>

              <div className="uedp-role-content">
                <div className="uedp-role-title-row">
                  <span className="uedp-role-title">{roleOpt.title}</span>
                  <div className="uedp-role-radio">
                    {isSelected && <div className="uedp-role-radio-dot" />}
                  </div>
                </div>

                <p className="uedp-role-desc">{roleOpt.description}</p>

                <div className="uedp-role-features">
                  {roleOpt.features.map((f) => (
                    <span key={f} className="uedp-role-pill">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
