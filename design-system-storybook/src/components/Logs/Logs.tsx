import React from 'react';
import './Logs.css';

export type LogType = 'meeting' | 'recieved' | 'call recieved' | 'missed call';
export type LogMode = 'Default' | 'light' | 'dark';

/* ==========================================================================
   SVG Icons (Pixel-perfect extraction from Figma Node 53:6380 & 53:6381)
   ========================================================================== */

/** 29x29 Handshake / Volunteer Meet Icon (Figma Node 35:468) */
export const MeetIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M6.04187 6.0415C5.40093 6.0415 4.78624 6.29612 4.33303 6.74933C3.87981 7.20254 3.6252 7.81723 3.6252 8.45817C3.6252 9.09911 3.87981 9.7138 4.33303 10.167C4.78624 10.6202 5.40093 10.8748 6.04187 10.8748C6.68281 10.8748 7.2975 10.6202 7.75071 10.167C8.20392 9.7138 8.45854 9.09911 8.45854 8.45817C8.45854 7.81723 8.20392 7.20254 7.75071 6.74933C7.2975 6.29612 6.68281 6.0415 6.04187 6.0415ZM23.5627 12.0832H22.7169C21.7019 12.0832 20.7715 12.5907 20.2035 13.4244L16.2644 19.3332H12.724L8.78479 13.4244C8.22895 12.5786 7.28645 12.0832 6.27145 12.0832H5.42562C4.62444 12.0832 3.85608 12.4014 3.28957 12.968C2.72305 13.5345 2.40479 14.3028 2.40479 15.104V21.7498H8.44645V17.279L10.706 20.6744C11.1531 21.3511 11.9023 21.7498 12.7119 21.7498H16.2523C17.0619 21.7498 17.811 21.3511 18.2581 20.6744L20.5177 17.279V21.7498H26.5594V15.104C26.5594 14.3028 26.2411 13.5345 25.6746 12.968C25.1081 12.4014 24.3397 12.0832 23.5385 12.0832H23.5627ZM22.9585 6.0415C22.3176 6.0415 21.7029 6.29612 21.2497 6.74933C20.7965 7.20254 20.5419 7.81723 20.5419 8.45817C20.5419 9.09911 20.7965 9.7138 21.2497 10.167C21.7029 10.6202 22.3176 10.8748 22.9585 10.8748C23.5995 10.8748 24.2142 10.6202 24.6674 10.167C25.1206 9.7138 25.3752 9.09911 25.3752 8.45817C25.3752 7.81723 25.1206 7.20254 24.6674 6.74933C24.2142 6.29612 23.5995 6.0415 22.9585 6.0415Z"
      fill="currentColor"
    />
  </svg>
);

/** 29x29 Video Call Icon with Arrow (Figma Node 35:469 / 35:470) */
export const VideoCallIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M13.5576 18.497L18.1577 13.8353L17.3022 12.9798L13.5564 16.7727L9.41179 12.6402H12.1535V11.4319H7.32016V16.2652H8.5285V13.4679L13.5576 18.497ZM6.15654 22.9582C5.60071 22.9582 5.1363 22.7721 4.76333 22.3999C4.39036 22.0278 4.20428 21.5634 4.20508 21.0067V7.99296C4.20508 7.43713 4.39116 6.97313 4.76333 6.60096C5.1355 6.2288 5.6003 6.04231 6.15775 6.0415H19.1715C19.7273 6.0415 20.1913 6.22799 20.5635 6.60096C20.9357 6.97393 21.1222 7.43834 21.123 7.99417V13.6165L24.7939 9.94563V19.054L21.123 15.3831V21.0067C21.123 21.5625 20.9365 22.0269 20.5635 22.3999C20.1905 22.7729 19.7265 22.959 19.1715 22.9582H6.15654Z"
      fill="currentColor"
    />
  </svg>
);

/** 24x24 Circular Info Outline Icon (Figma Node 35:490) */
export const InfoOutlineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M11 17H13V11H11V17ZM12.713 8.713C12.9043 8.521 13 8.28333 13 8C13 7.71667 12.904 7.47933 12.712 7.288C12.52 7.09667 12.2827 7.00067 12 7C11.7173 6.99933 11.48 7.09533 11.288 7.288C11.096 7.48067 11 7.718 11 8C11 8.282 11.096 8.51967 11.288 8.713C11.48 8.90633 11.7173 9.002 12 9C12.2827 8.998 12.5203 8.902 12.713 8.712M12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
      fill="currentColor"
    />
  </svg>
);

/* ==========================================================================
   Component 32 - Standalone Log Icon
   ========================================================================== */

export interface LogIconProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Log type: "meeting" | "meet" | "recieved" | "call recieved" | "missed call" */
  type?: LogType;
  /** Figma variant mode: "Default" | "light" */
  mode?: LogMode;
}

export const LogIcon: React.FC<LogIconProps> = ({
  type = 'call recieved',
  mode = 'Default',
  className = '',
  ...rest
}) => {
  const normalizedType = type === 'meet' ? 'meeting' : type;
  const isMissed = normalizedType === 'missed call';
  const isMeeting = normalizedType === 'meeting';

  return (
    <div
      className={`uedp-log-icon ${isMissed ? 'uedp-log-icon--missed' : ''} ${className}`.trim()}
      {...rest}
    >
      {isMeeting ? <MeetIcon /> : <VideoCallIcon />}
    </div>
  );
};

export const Component32 = LogIcon;

/* ==========================================================================
   Component 33 - Single Log Row Item
   ========================================================================== */

export interface LogItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma variant Property: "meeting" | "recieved" | "missed call" */
  property?: 'meeting' | 'recieved' | 'missed call' | 'call recieved';
  /** Alternative alias for property */
  type?: LogType;
  /** Figma variant mode: "Default" | "light" */
  mode?: LogMode;
  /** Primary title label (default: "Friday") */
  title?: string;
  /** Subtitle / timestamp label (default: "11:16 am") */
  subtitle?: string;
  /** Callback fired when the green info icon button is clicked */
  onInfoClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const LogItem: React.FC<LogItemProps> = ({
  property,
  type = 'recieved',
  mode = 'Default',
  title = 'Friday',
  subtitle = '11:16 am',
  onInfoClick,
  className = '',
  ...rest
}) => {
  const resolvedType = (property || type) === 'call recieved' ? 'recieved' : (property || type);
  const isMissed = resolvedType === 'missed call';
  const isMeeting = resolvedType === 'meeting';
  const isLight = mode.toLowerCase() === 'light';

  const modeClass = isLight ? 'uedp-log-item--mode-light' : 'uedp-log-item--mode-default';
  const typeClass = isMissed ? 'uedp-log-item--missed' : '';

  return (
    <div
      className={`uedp-log-item ${modeClass} ${typeClass} ${className}`.trim()}
      role="listitem"
      {...rest}
    >
      {/* Left Group: Icon + Title & Subtitle */}
      <div className="uedp-log-item__left">
        <LogIcon type={resolvedType} mode={mode} />
        <div className="uedp-log-item__content">
          <h4 className="uedp-log-item__title">{title}</h4>
          <span className="uedp-log-item__subtitle">{subtitle}</span>
        </div>
      </div>

      {/* Right Action: Info Button */}
      <button
        type="button"
        className="uedp-log-item__info-btn"
        onClick={onInfoClick}
        aria-label={`More details for ${title} ${subtitle}`}
      >
        <InfoOutlineIcon />
      </button>
    </div>
  );
};

export const Component33 = LogItem;
export const LogEntry = LogItem;

/* ==========================================================================
   Logs Component - Full Call / Activity Logs List
   ========================================================================== */

export interface LogEntryData {
  id?: string | number;
  type: LogType;
  title: string;
  subtitle: string;
}

export const DEFAULT_LOG_ENTRIES: LogEntryData[] = [
  { id: 1, type: 'meeting', title: 'Friday', subtitle: '11:16 am' },
  { id: 2, type: 'recieved', title: 'Friday', subtitle: '11:16 am' },
  { id: 3, type: 'missed call', title: 'Friday', subtitle: '11:16 am' },
  { id: 4, type: 'meeting', title: 'Friday', subtitle: '11:16 am' },
  { id: 5, type: 'recieved', title: 'Friday', subtitle: '11:16 am' },
];

export interface LogsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Logs mode: "Default" (Dark) | "light" */
  mode?: LogMode;
  /** Custom array of log items to display */
  items?: LogEntryData[];
  /** Callback fired when an info icon is clicked */
  onItemInfoClick?: (item: LogEntryData, index: number) => void;
}

export const Logs: React.FC<LogsProps> = ({
  mode = 'Default',
  items = DEFAULT_LOG_ENTRIES,
  onItemInfoClick,
  className = '',
  ...rest
}) => {
  const isLight = mode.toLowerCase() === 'light';
  const modeClass = isLight ? 'uedp-logs-list--mode-light' : 'uedp-logs-list--mode-default';

  return (
    <div
      className={`uedp-logs-list ${modeClass} ${className}`.trim()}
      role="list"
      aria-label="Activity and Call Logs"
      {...rest}
    >
      {items.map((item, index) => (
        <LogItem
          key={item.id ?? index}
          type={item.type}
          mode={mode}
          title={item.title}
          subtitle={item.subtitle}
          onInfoClick={(e) => {
            e.stopPropagation();
            onItemInfoClick?.(item, index);
          }}
        />
      ))}
    </div>
  );
};

// Aliases
export const ActivityLogs = Logs;
export const CallLogs = Logs;
export const LogsList = Logs;

export default Logs;
