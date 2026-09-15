import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BackgroundHorizontalborder } from './BackgroundHorizontalborder';

const meta: Meta<typeof BackgroundHorizontalborder> = {
  title: 'Components/BackgroundHorizontalborder',
  component: BackgroundHorizontalborder,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background+HorizontalBorder**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background+HorizontalBorder\` |
| **Figma Node ID** | \`30:262\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Dimensions** | \`402px × 86px\` |
| **Background Fill** | \`#111111\` |
| **Border** | \`1px solid #222222\` |
| **Active / Selected Accent** | \`#B7FF4D\` (Neon Lime, VariableID:17:2340) |
| **Default Text & Icons** | \`#FFFFFF\` (VariableID:1:4) |
| **Typography** | \`Space Mono\`, 700 Bold, 11px, Uppercase |
| **Sub-Components** | \`Assist\` (Camera), \`Scan\` (Scanner), \`Jobs\` (Briefcase), \`Support\` (Community) |
| **Variants Count** | \`9\` |
| **Variants** | \`Default\`, \`assist hover\`, \`scan hover\`, \`jobs hover\`, \`support hover\`, \`assist selected\`, \`scan selected\`, \`jobs selected\`, \`support selected\` |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0d0d0d' },
        { name: 'surface', value: '#171717' },
        { name: 'canvas', value: '#050505' },
      ],
    },
  },
  argTypes: {
    Type: {
      control: {
        type: 'select',
      },
      options: [
        'Default',
        'assist hover',
        'scan hover',
        'jobs hover',
        'support hover',
        'assist selected',
        'scan selected',
        'jobs selected',
        'support selected',
      ],
      description: 'Figma variant property "Type"',
    },
    interactive: {
      control: 'boolean',
      description: 'Enables live clicking and state changes on the navigation items',
    },
  },
  args: {
    Type: 'Default',
    interactive: true,
  },
};

export default meta;
type Story = StoryObj<typeof BackgroundHorizontalborder>;

export const Story_Default: Story = {
  name: 'Default',
  args: {
    Type: 'Default',
    interactive: false,
  },
};

export const assist_hover: Story = {
  name: 'assist hover',
  args: {
    Type: 'assist hover',
    interactive: false,
  },
};

export const scan_hover: Story = {
  name: 'scan hover',
  args: {
    Type: 'scan hover',
    interactive: false,
  },
};

export const jobs_hover: Story = {
  name: 'jobs hover',
  args: {
    Type: 'jobs hover',
    interactive: false,
  },
};

export const support_hover: Story = {
  name: 'support hover',
  args: {
    Type: 'support hover',
    interactive: false,
  },
};

export const assist_selected: Story = {
  name: 'assist selected',
  args: {
    Type: 'assist selected',
    interactive: false,
  },
};

export const scan_selected: Story = {
  name: 'scan selected',
  args: {
    Type: 'scan selected',
    interactive: false,
  },
};

export const jobs_selected: Story = {
  name: 'jobs selected',
  args: {
    Type: 'jobs selected',
    interactive: false,
  },
};

export const support_selected: Story = {
  name: 'support selected',
  args: {
    Type: 'support selected',
    interactive: false,
  },
};

export const InteractiveDemo: Story = {
  name: 'Interactive Dock Demo',
  render: () => {
    const [active, setActive] = useState<'assist' | 'scan' | 'jobs' | 'support'>('assist');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '32px 16px' }}>
        <div style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
          Active Tab: <span style={{ color: '#b7ff4d', fontWeight: 700, textTransform: 'uppercase' }}>{active}</span>
        </div>
        <BackgroundHorizontalborder
          activeItem={active}
          onItemChange={(item) => setActive(item)}
          interactive={true}
        />
        <div style={{ color: '#555', fontFamily: 'Space Mono, monospace', fontSize: '11px', textAlign: 'center' }}>
          Hover to inspect 1px border stroke • Click tabs to toggle #B7FF4D lime state
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  name: 'All Figma Variants (Matrix)',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
        gap: '24px',
        padding: '24px',
        backgroundColor: '#0a0a0a',
      }}
    >
      {[
        { name: 'Default', type: 'Default' },
        { name: 'assist hover', type: 'assist hover' },
        { name: 'scan hover', type: 'scan hover' },
        { name: 'jobs hover', type: 'jobs hover' },
        { name: 'support hover', type: 'support hover' },
        { name: 'assist selected', type: 'assist selected' },
        { name: 'scan selected', type: 'scan selected' },
        { name: 'jobs selected', type: 'jobs selected' },
        { name: 'support selected', type: 'support selected' },
      ].map((v) => (
        <div
          key={v.type}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            backgroundColor: '#141414',
            padding: '16px',
            border: '1px solid #222',
            borderRadius: '4px',
          }}
        >
          <span
            style={{
              color: v.name.includes('selected') ? '#b7ff4d' : '#888',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              fontWeight: 700,
            }}
          >
            {v.name}
          </span>
          <BackgroundHorizontalborder Type={v.type as any} interactive={false} />
        </div>
      ))}
    </div>
  ),
};
