import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Logs,
  LogItem,
  LogIcon,
  LogType,
  LogMode,
  DEFAULT_LOG_ENTRIES,
  LogEntryData,
} from './Logs';

const meta: Meta<typeof Logs> = {
  title: 'Components/Logs',
  component: Logs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Names: **Component 33** (Log item row, Node ID: \`53:6381\`) & **Component 32** (Log icon, Node ID: \`53:6380\`)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Row Component** | \`Component 33\` — \`338px × 68px\` |
| **Icon Component** | \`Component 32\` — \`29px × 29px\` |
| **Info Action Button** | \`24px × 24px\` circular outline with \`#497B00\` Olive Green fill |
| **Variants** | \`meeting\` (handshake), \`recieved\` (video call), \`missed call\` (terracotta video call) |
| **Modes** | \`Default\` (Dark canvas) & \`light\` (Light canvas) |
| **Missed Call Accent** | Terracotta Orange \`#C4622D\` applied to video icon and title text |
| **Typography** | Title: \`Source Sans 3\` 16px Regular \| Subtitle: \`Source Sans 3\` 14px Regular |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#171717' },
        { name: 'canvas', value: '#252525' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['Default', 'light'],
      description: 'Figma variant mode',
    },
  },
  args: {
    mode: 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof Logs>;

/**
 * Complete 5-Item Call & Activity Log List in Dark Mode (Figma Node 53:6381)
 */
export const CompleteLogsListDark: Story = {
  name: 'Complete Logs List (Dark Mode)',
  args: {
    mode: 'Default',
    items: DEFAULT_LOG_ENTRIES,
  },
};

/**
 * Complete 5-Item Call & Activity Log List in Light Mode
 */
export const CompleteLogsListLight: Story = {
  name: 'Complete Logs List (Light Mode)',
  args: {
    mode: 'light',
    items: DEFAULT_LOG_ENTRIES,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Single Meeting Row Item - Dark Mode (Figma Node 35:484)
 */
export const MeetingDark: Story = {
  name: 'Meeting Item (Dark)',
  render: () => (
    <div style={{ width: '342px', padding: '12px', backgroundColor: '#171717' }}>
      <LogItem property="meeting" mode="Default" title="Friday" subtitle="11:16 am" />
    </div>
  ),
};

/**
 * Single Received Call Item - Dark Mode (Figma Node 35:496)
 */
export const ReceivedDark: Story = {
  name: 'Received Call Item (Dark)',
  render: () => (
    <div style={{ width: '342px', padding: '12px', backgroundColor: '#171717' }}>
      <LogItem property="recieved" mode="Default" title="Friday" subtitle="11:16 am" />
    </div>
  ),
};

/**
 * Single Missed Call Item with Terracotta Accent - Dark Mode
 */
export const MissedCallDark: Story = {
  name: 'Missed Call Item (Terracotta, Dark)',
  render: () => (
    <div style={{ width: '342px', padding: '12px', backgroundColor: '#171717' }}>
      <LogItem property="missed call" mode="Default" title="Friday" subtitle="11:16 am" />
    </div>
  ),
};

/**
 * Single Meeting Row Item - Light Mode (Figma Node 53:6360)
 */
export const MeetingLight: Story = {
  name: 'Meeting Item (Light)',
  render: () => (
    <div style={{ width: '342px', padding: '12px', backgroundColor: '#ffffff' }}>
      <LogItem property="meeting" mode="light" title="Friday" subtitle="11:16 am" />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Single Received Call Item - Light Mode (Figma Node 53:6367)
 */
export const ReceivedLight: Story = {
  name: 'Received Call Item (Light)',
  render: () => (
    <div style={{ width: '342px', padding: '12px', backgroundColor: '#ffffff' }}>
      <LogItem property="recieved" mode="light" title="Friday" subtitle="11:16 am" />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Single Missed Call Item - Light Mode (Figma Node 53:6353)
 */
export const MissedCallLight: Story = {
  name: 'Missed Call Item (Light)',
  render: () => (
    <div style={{ width: '342px', padding: '12px', backgroundColor: '#ffffff' }}>
      <LogItem property="missed call" mode="light" title="Friday" subtitle="11:16 am" />
    </div>
  ),
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Standalone Log Icons (Figma Node 53:6380 Component 32)
 */
export const StandaloneLogIcons: Story = {
  name: 'Standalone Log Icons (Component 32)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
        backgroundColor: '#202020',
        borderRadius: '8px',
        width: 'fit-content',
      }}
    >
      <div style={{ color: '#c084fc', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
        ❖ Component 32 Icons (Node 53:6380)
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        {/* Dark Mode Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px' }}>
            DARK MODE
          </span>
          <div style={{ display: 'flex', gap: '16px', padding: '12px 16px', backgroundColor: '#171717', borderRadius: '4px' }}>
            <LogIcon type="missed call" mode="Default" />
            <LogIcon type="meeting" mode="Default" />
            <LogIcon type="recieved" mode="Default" />
          </div>
        </div>

        {/* Light Mode Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px' }}>
            LIGHT MODE
          </span>
          <div style={{ display: 'flex', gap: '16px', padding: '12px 16px', backgroundColor: '#ffffff', borderRadius: '4px' }}>
            <LogIcon type="missed call" mode="light" />
            <LogIcon type="meeting" mode="light" />
            <LogIcon type="recieved" mode="light" />
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * All Figma Variants Matrix (Node 53:6381 & Node 53:6380)
 * Exact 1:1 replica of the user's provided Figma specification image
 */
export const AllFigmaVariantsMatrix: Story = {
  name: 'All Figma Variants (53:6381 & 53:6380 Matrix)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        padding: '36px 32px',
        backgroundColor: '#202020',
        maxWidth: '820px',
      }}
    >
      {/* Column 1: Component 33 (Call List) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ color: '#c084fc', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
          ❖ Component 33 (Node 53:6381)
        </div>
        <div
          style={{
            border: '1px dashed #7e22ce',
            borderRadius: '4px',
            padding: '12px',
            backgroundColor: '#171717',
          }}
        >
          <Logs mode="Default" items={DEFAULT_LOG_ENTRIES} />
        </div>
      </div>

      {/* Column 2: Component 32 (Standalone Icons Strip) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ color: '#c084fc', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
          ❖ Component 32 (Node 53:6380)
        </div>
        <div
          style={{
            border: '1px dashed #7e22ce',
            borderRadius: '4px',
            padding: '16px 12px',
            backgroundColor: '#171717',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
          }}
        >
          <LogIcon type="missed call" mode="Default" />
          <LogIcon type="meeting" mode="Default" />
          <LogIcon type="recieved" mode="Default" />
          <div style={{ height: '32px' }} />
          <LogIcon type="missed call" mode="Default" />
          <LogIcon type="meeting" mode="light" />
          <LogIcon type="recieved" mode="light" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive Call Log History Demo with Filtering
 */
export const InteractiveLogsDemo: Story = {
  name: 'Interactive Call Logs Demo',
  render: () => {
    const [filter, setFilter] = useState<'all' | 'missed' | 'meeting' | 'recieved'>('all');
    const [selectedItem, setSelectedItem] = useState<LogEntryData | null>(null);

    const fullHistory: LogEntryData[] = [
      { id: 1, type: 'meeting', title: 'Jennifer Video Assist', subtitle: 'Friday • 11:16 am' },
      { id: 2, type: 'recieved', title: 'Volunteer Sarah M.', subtitle: 'Friday • 10:45 am' },
      { id: 3, type: 'missed call', title: 'Volunteer David K.', subtitle: 'Friday • 09:30 am' },
      { id: 4, type: 'meeting', title: 'Community Helpdesk', subtitle: 'Thursday • 04:15 pm' },
      { id: 5, type: 'recieved', title: 'Volunteer Sarah M.', subtitle: 'Thursday • 02:00 pm' },
    ];

    const filtered = filter === 'all'
      ? fullHistory
      : fullHistory.filter((item) => {
          if (filter === 'missed') return item.type === 'missed call';
          return item.type === filter;
        });

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Filter Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {(['all', 'missed', 'meeting', 'recieved'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              style={{
                padding: '6px 14px',
                fontFamily: 'Space Mono, monospace',
                fontSize: '11px',
                backgroundColor: filter === tab ? '#b7ff4d' : '#262626',
                color: filter === tab ? '#000' : '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {tab === 'missed' ? 'Missed Calls' : tab}
            </button>
          ))}
        </div>

        {/* Device Container */}
        <div
          style={{
            width: '360px',
            backgroundColor: '#171717',
            borderRadius: '12px',
            border: '1px solid #333',
            overflow: 'hidden',
            boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid #262626',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ color: '#fff', fontFamily: 'Space Mono, monospace', fontSize: '12px', fontWeight: 700 }}>
              CALL LOGS
            </span>
            <span style={{ color: '#888', fontFamily: 'Source Sans 3, sans-serif', fontSize: '12px' }}>
              {filtered.length} entries
            </span>
          </div>

          <Logs
            mode="Default"
            items={filtered}
            onItemInfoClick={(item) => setSelectedItem(item)}
          />
        </div>

        {/* Selected info banner */}
        {selectedItem && (
          <div
            style={{
              padding: '12px 18px',
              backgroundColor: '#262626',
              borderRadius: '6px',
              border: '1px solid #497b00',
              color: '#fff',
              fontSize: '12px',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            ⓘ Selected Log: <strong>{selectedItem.title}</strong> ({selectedItem.type}) at {selectedItem.subtitle}
          </div>
        )}
      </div>
    );
  },
};
