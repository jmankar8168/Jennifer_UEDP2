import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AvailibilityToggle, ToggleSwitch } from './AvailibilityToggle';

const meta: Meta<typeof AvailibilityToggle> = {
  title: 'Components/Availibility Toggle',
  component: AvailibilityToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Names: **Component 24** (Node ID: \`52:5793\`) & **ion:toggle** (Node ID: \`34:1156\`)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Row Component** | \`Component 24\` (Availibility Toggle) — \`342px × 35px\` |
| **Standalone Switch** | \`ion:toggle\` — \`35px × 35px\` (Pill Track: \`35px × 22px\`, Radius: \`9999px\`) |
| **Variants (Row)** | \`toggle=On / Off\` × \`Mode=Default / Light\` |
| **Mode: Default** | ON: Track \`#B7FF4D\` (Neon Green), Thumb \`#171717\` \| OFF: Track \`#894520\` (Terracotta), Thumb \`#171717\` |
| **Mode: Light** | ON: Track \`#497B00\` (Olive Green), Thumb \`#FFFFFF\` \| OFF: Track \`#894520\` (Terracotta), Thumb \`#FFFFFF\` |
| **Typography** | \`Source Sans 3\` 16px Regular |
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
    toggle: {
      control: { type: 'select' },
      options: ['On', 'Off'],
      description: 'Figma variant property "toggle"',
    },
    Mode: {
      control: { type: 'select' },
      options: ['Default', 'Light'],
      description: 'Figma variant property "Mode"',
    },
    label: {
      control: 'text',
      description: 'Custom label before status',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable interactive toggling',
    },
  },
  args: {
    toggle: 'On',
    Mode: 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof AvailibilityToggle>;

/**
 * Availability ON - Default Dark Mode (Node 52:5794)
 */
export const OnDefault: Story = {
  name: 'Availability : ON (Default/Dark)',
  args: {
    toggle: 'On',
    Mode: 'Default',
  },
};

/**
 * Availability OFF - Default Dark Mode (Node 52:5805)
 */
export const OffDefault: Story = {
  name: 'Availability : OFF (Default/Dark)',
  args: {
    toggle: 'Off',
    Mode: 'Default',
  },
};

/**
 * Availability ON - Light Mode (Node 52:5809)
 */
export const OnLight: Story = {
  name: 'Availability : ON (Light Mode)',
  args: {
    toggle: 'On',
    Mode: 'Light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Availability OFF - Light Mode (Node 52:5820)
 */
export const OffLight: Story = {
  name: 'Availability : OFF (Light Mode)',
  args: {
    toggle: 'Off',
    Mode: 'Light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Standalone ion:toggle Switch (Node 34:1156)
 */
export const StandaloneSwitch: Story = {
  name: 'Standalone Toggle Switch (ion:toggle)',
  render: () => {
    const [isOn, setIsOn] = useState(true);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ToggleSwitch checked={isOn} onChange={setIsOn} mode="Default" />
          <span style={{ color: '#fff', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
            Dark Mode Switch: {isOn ? 'ON' : 'OFF'} (Click to toggle)
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ToggleSwitch checked={isOn} onChange={setIsOn} mode="Light" />
          <span style={{ color: '#fff', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
            Light Mode Switch: {isOn ? 'ON' : 'OFF'}
          </span>
        </div>
      </div>
    );
  },
};

/**
 * All Figma Variants Matrix (Nodes 52:5793 & 34:1156)
 * Exact replica of the Figma artboard
 */
export const AllFigmaVariantsMatrix: Story = {
  name: 'All Figma Variants (52:5793 & 34:1156 Matrix)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        padding: '36px 32px',
        backgroundColor: '#252525',
        maxWidth: '820px',
      }}
    >
      {/* Section 1: Component 24 Matrix */}
      <div>
        <div style={{ color: '#c084fc', fontFamily: 'Space Mono, monospace', fontSize: '12px', marginBottom: '16px' }}>
          ❖ Component 24 (Node 52:5793)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(342px, 1fr))',
            gap: '24px 48px',
            padding: '20px',
            border: '1px dashed #7e22ce',
            borderRadius: '4px',
          }}
        >
          {/* Column 1: Mode = Default (Dark) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <AvailibilityToggle toggle="On" Mode="Default" />
            <AvailibilityToggle toggle="Off" Mode="Default" />
          </div>

          {/* Column 2: Mode = Light */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <AvailibilityToggle toggle="On" Mode="Light" />
            <AvailibilityToggle toggle="Off" Mode="Light" />
          </div>
        </div>
      </div>

      {/* Section 2: ion:toggle Matrix */}
      <div>
        <div style={{ color: '#c084fc', fontFamily: 'Space Mono, monospace', fontSize: '12px', marginBottom: '16px' }}>
          ❖ ion:toggle (Node 34:1156)
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '20px',
            border: '1px dashed #7e22ce',
            borderRadius: '4px',
            width: 'fit-content',
          }}
        >
          <ToggleSwitch checked={true} mode="Default" />
          <ToggleSwitch checked={false} mode="Default" />
        </div>
      </div>
    </div>
  ),
};

/**
 * Interactive Status Controller Demo
 */
export const InteractiveDemo: Story = {
  name: 'Interactive Volunteer Availability Demo',
  render: () => {
    const [available, setAvailable] = useState(true);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '24px',
          backgroundColor: '#18181b',
          borderRadius: '8px',
          maxWidth: '380px',
          border: '1px solid #333',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
            VOLUNTEER STATUS
          </span>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '2px',
              backgroundColor: available ? 'rgba(183, 255, 77, 0.15)' : 'rgba(208, 107, 52, 0.15)',
              color: available ? '#b7ff4d' : '#d06b34',
              fontWeight: 700,
            }}
          >
            {available ? 'READY FOR CALLS' : 'UNAVAILABLE'}
          </span>
        </div>

        <AvailibilityToggle
          checked={available}
          onChange={setAvailable}
          Mode="Default"
        />

        <p style={{ color: '#aaa', fontFamily: 'Source Sans 3, sans-serif', fontSize: '12px', margin: 0 }}>
          {available
            ? 'You will receive incoming vision-sync assistance requests from Jennifer.'
            : 'Incoming requests paused. Turn on when ready to volunteer.'}
        </p>
      </div>
    );
  },
};
