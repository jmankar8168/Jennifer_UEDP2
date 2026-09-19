import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AlertBox } from './AlertBox';

const meta: Meta<typeof AlertBox> = {
  title: 'Components/Alert Box',
  component: AlertBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Toast** / **alert box** (Node ID: \`54:6652\`)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Toast\` |
| **Display Name** | \`alert box\` |
| **Figma Node ID** | \`54:6652\` |
| **Component Type** | \`COMPONENT_SET\` (10 Variants) |
| **Dimensions** | Width: \`384px\` × Height: \`60px\` |
| **States** | \`Default\` (Close only), \`No Close\` (No button), \`Action\` (Action + Close), \`Prefix\` (Alert Icon + Close), \`Prefix and Action\` (Alert Icon + Action + Close) |
| **Modes** | \`Default\` (White bg, #D0D0D0 border, black text), \`light\` (Black bg, white border, green accents) |
| **Typography** | Body: \`Source Sans 3\` 14px Regular \| Action: \`Fira Sans\` 14px Bold |
| **Touch Target** | Close Button: 44px × 44px circular target with 14px × 14px centered stroke icon |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#252525' },
        { name: 'surface', value: '#171717' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'No Close', 'Action', 'Prefix', 'Prefix and Action'],
      description: 'Figma variant property "state"',
    },
    mode: {
      control: { type: 'select' },
      options: ['Default', 'light'],
      description: 'Figma variant property "mode" (Default = Light theme, light = Dark/Inverted theme)',
    },
    message: {
      control: 'text',
      description: 'Main body notification message',
    },
    actionText: {
      control: 'text',
      description: 'Action link/button text',
    },
    hasPrefix: {
      control: 'boolean',
      description: 'Manual toggle for alert prefix icon',
    },
    hasAction: {
      control: 'boolean',
      description: 'Manual toggle for action link',
    },
    hasClose: {
      control: 'boolean',
      description: 'Manual toggle for close button',
    },
  },
  args: {
    state: 'Default',
    mode: 'Default',
    message: 'Single line of text',
    actionText: 'Action',
  },
};

export default meta;
type Story = StoryObj<typeof AlertBox>;

/**
 * Default Light Mode (Node 54:6548)
 */
export const DefaultLight: Story = {
  name: 'Default (Light Mode)',
  args: {
    state: 'Default',
    mode: 'Default',
    message: 'Single line of text',
  },
};

/**
 * Default Dark Mode (Node 54:6616)
 */
export const DefaultDark: Story = {
  name: 'Default (Dark Mode)',
  args: {
    state: 'Default',
    mode: 'light',
    message: 'Single line of text',
  },
};

/**
 * Action Variant
 */
export const WithAction: Story = {
  name: 'With Action',
  args: {
    state: 'Action',
    mode: 'light',
    message: 'Single line of text',
    actionText: 'Action',
  },
};

/**
 * Prefix Alert Variant
 */
export const WithPrefix: Story = {
  name: 'With Prefix Icon',
  args: {
    state: 'Prefix',
    mode: 'light',
    message: 'Single line of text',
  },
};

/**
 * Prefix and Action Variant
 */
export const PrefixAndAction: Story = {
  name: 'Prefix and Action',
  args: {
    state: 'Prefix and Action',
    mode: 'light',
    message: 'Single line of text',
    actionText: 'Action',
  },
};

/**
 * No Close Variant
 */
export const NoClose: Story = {
  name: 'No Close Button',
  args: {
    state: 'No Close',
    mode: 'Default',
    message: 'Single line of text',
  },
};

/**
 * Complete 10-Variant Figma Matrix (Node 54:6652)
 * Exact replica of the Figma artboard layout
 */
export const AllFigmaVariantsMatrix: Story = {
  name: 'All Figma Variants (54:6652 Matrix)',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(384px, 1fr))',
        gap: '40px 48px',
        padding: '32px 24px',
        backgroundColor: '#252525',
        maxWidth: '860px',
      }}
    >
      {/* Column 1: Light Theme (mode=Default) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h4 style={{ color: '#aaa', fontFamily: 'Space Mono, monospace', fontSize: '11px', textTransform: 'uppercase', margin: 0 }}>
          Light Theme (mode=Default)
        </h4>
        <AlertBox state="No Close" mode="Default" />
        <AlertBox state="Default" mode="Default" />
        <AlertBox state="Action" mode="Default" />
        <AlertBox state="Prefix" mode="Default" />
        <AlertBox state="Prefix and Action" mode="Default" />
      </div>

      {/* Column 2: Dark Theme (mode=light) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h4 style={{ color: '#aaa', fontFamily: 'Space Mono, monospace', fontSize: '11px', textTransform: 'uppercase', margin: 0 }}>
          Dark Theme (mode=light in Figma)
        </h4>
        <AlertBox state="No Close" mode="light" />
        <AlertBox state="Default" mode="light" />
        <AlertBox state="Action" mode="light" />
        <AlertBox state="Prefix" mode="light" />
        <AlertBox state="Prefix and Action" mode="light" />
      </div>
    </div>
  ),
};

/**
 * Interactive Dismissable Demo
 */
export const InteractiveDemo: Story = {
  name: 'Interactive Dismissable Demo',
  render: () => {
    const [alerts, setAlerts] = useState([
      { id: 1, message: 'Sync complete with Jennifer’s device', state: 'Prefix and Action' as const, mode: 'light' as const },
      { id: 2, message: 'High contrast mode is currently active', state: 'Action' as const, mode: 'light' as const },
      { id: 3, message: 'Battery level reached 100%', state: 'Default' as const, mode: 'Default' as const },
    ]);

    const dismissAlert = (id: number) => {
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    };

    const resetAlerts = () => {
      setAlerts([
        { id: 1, message: 'Sync complete with Jennifer’s device', state: 'Prefix and Action' as const, mode: 'light' as const },
        { id: 2, message: 'High contrast mode is currently active', state: 'Action' as const, mode: 'light' as const },
        { id: 3, message: 'Battery level reached 100%', state: 'Default' as const, mode: 'Default' as const },
      ]);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px', padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
            Active Alerts ({alerts.length})
          </span>
          <button
            onClick={resetAlerts}
            style={{
              background: '#b7ff4d',
              color: '#000',
              border: 'none',
              padding: '6px 12px',
              fontSize: '11px',
              fontFamily: 'Space Mono, monospace',
              fontWeight: 700,
              cursor: 'pointer',
              borderRadius: '2px',
            }}
          >
            Reset Alerts
          </button>
        </div>

        {alerts.length === 0 ? (
          <div style={{ color: '#666', fontStyle: 'italic', padding: '16px 0' }}>
            All alerts dismissed. Click Reset to restore.
          </div>
        ) : (
          alerts.map((a) => (
            <AlertBox
              key={a.id}
              state={a.state}
              mode={a.mode}
              message={a.message}
              onClose={() => dismissAlert(a.id)}
              onAction={() => alert(`Action clicked on alert ${a.id}`)}
            />
          ))
        )}
      </div>
    );
  },
};
