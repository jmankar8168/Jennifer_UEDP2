import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Tab**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Tab\` |
| **Figma Node ID** | \`33:861\` / \`53:6113\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`9\` (Dark) + \`9\` (Light) |
| **Variants** | \`Default\`, \`Variant2\`, \`Variant3\`, \`Variant4\`, \`Variant5\`, \`Variant6\`, \`Variant7\`, \`Variant8\`, \`Variant9\` |
| **Typography** | Space Mono Bold 8px, 12px line-height, 0.8px letter-spacing |
| **Colors** | Selected: \`#B7FF4D\`, Hover: \`#3F3F46\`, Dark Bg: \`#18181B\`, Light Bg: \`#FFFFFF\` |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1E1E1E' },
        { name: 'canvas', value: '#121212' },
        { name: 'light', value: '#F4F4F5' },
      ],
    },
  },
  argTypes: {
    Property1: {
      control: { type: 'select' },
      options: [
        'Default',
        'Variant2',
        'Variant3',
        'Variant4',
        'Variant5',
        'Variant6',
        'Variant7',
        'Variant8',
        'Variant9',
      ],
      description: 'Figma variant property "Property 1"',
    },
    theme: {
      control: { type: 'radio' },
      options: ['dark', 'light'],
      description: 'Color theme mode',
    },
    activeTab: {
      control: { type: 'text' },
      description: 'Label of currently active tab',
    },
    hoveredTab: {
      control: { type: 'text' },
      description: 'Label of forced hovered tab (for preview)',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Enable click interaction',
    },
  },
  args: {
    Property1: 'Default',
    theme: 'dark',
    interactive: true,
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Story_Default: Story = {
  name: 'Default (All Unselected)',
  args: {
    Property1: 'Default',
    theme: 'dark',
  },
};

export const Variant2_AllSelected: Story = {
  name: 'Variant 2 (All Selected)',
  args: {
    Property1: 'Variant2',
    theme: 'dark',
  },
};

export const Variant3_RemoteSelected: Story = {
  name: 'Variant 3 (REMOTE Selected)',
  args: {
    Property1: 'Variant3',
    theme: 'dark',
  },
};

export const Variant4_PartTimeSelected: Story = {
  name: 'Variant 4 (PART-TIME Selected)',
  args: {
    Property1: 'Variant4',
    theme: 'dark',
  },
};

export const Variant5_FullTimeSelected: Story = {
  name: 'Variant 5 (FULL-TIME Selected)',
  args: {
    Property1: 'Variant5',
    theme: 'dark',
  },
};

export const Variant6_AllHovered: Story = {
  name: 'Variant 6 (All Hovered)',
  args: {
    Property1: 'Variant6',
    theme: 'dark',
  },
};

export const Variant7_RemoteHovered: Story = {
  name: 'Variant 7 (REMOTE Hovered)',
  args: {
    Property1: 'Variant7',
    theme: 'dark',
  },
};

export const Variant8_PartTimeHovered: Story = {
  name: 'Variant 8 (PART-TIME Hovered)',
  args: {
    Property1: 'Variant8',
    theme: 'dark',
  },
};

export const Variant9_FullTimeHovered: Story = {
  name: 'Variant 9 (FULL-TIME Hovered)',
  args: {
    Property1: 'Variant9',
    theme: 'dark',
  },
};

export const LightThemeDefault: Story = {
  name: 'Light Theme - Default',
  args: {
    Property1: 'Default',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const LightThemeSelected: Story = {
  name: 'Light Theme - REMOTE Selected',
  args: {
    Property1: 'Variant3',
    theme: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const InteractiveDemo: Story = {
  name: 'Interactive Filter Demo',
  render: () => {
    const [selectedTab, setSelectedTab] = useState<string>('All');
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '20px',
          padding: '24px',
          background: theme === 'dark' ? '#18181B' : '#FFFFFF',
          border: `1px solid ${theme === 'dark' ? '#27272A' : '#E4E4E7'}`,
          borderRadius: '8px',
          maxWidth: '380px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              color: theme === 'dark' ? '#A1A1AA' : '#71717A',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Filter By Type
          </span>
          <button
            type="button"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '8px',
              padding: '4px 8px',
              background: theme === 'dark' ? '#27272A' : '#F4F4F5',
              color: theme === 'dark' ? '#FFFFFF' : '#000000',
              border: `1px solid ${theme === 'dark' ? '#3F3F46' : '#D4D4D8'}`,
              cursor: 'pointer',
              borderRadius: '2px',
            }}
          >
            Toggle Theme ({theme})
          </button>
        </div>

        <Tab
          theme={theme}
          activeTab={selectedTab}
          onTabChange={(tab) => setSelectedTab(tab)}
        />

        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '9px',
            color: theme === 'dark' ? '#B7FF4D' : '#18181B',
            background: theme === 'dark' ? 'rgba(183, 255, 77, 0.08)' : 'rgba(0, 0, 0, 0.05)',
            padding: '6px 10px',
            borderLeft: '2px solid #B7FF4D',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          Selected: <strong>{selectedTab}</strong>
        </div>
      </div>
    );
  },
};

/**
 * Exact replica of the Figma frame (Node 53-6113)
 * Displays all 9 Dark Theme variants and all 9 Light Theme variants
 * in the exact vertical matrix with purple dashed frame border.
 */
export const AllFigmaVariants: Story = {
  name: 'All Figma Variants (53-6113 Pixel Perfect)',
  render: () => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#222222',
        border: '1.5px dashed #7E57C2',
        padding: '16px 12px',
        boxSizing: 'border-box',
        width: 'fit-content',
      }}
    >
      {/* Top Section: Dark Mode Variants (1-9) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Tab Property1="Default" theme="dark" interactive={false} />
        <Tab Property1="Variant2" theme="dark" interactive={false} />
        <Tab Property1="Variant3" theme="dark" interactive={false} />
        <Tab Property1="Variant4" theme="dark" interactive={false} />
        <Tab Property1="Variant5" theme="dark" interactive={false} />
        <Tab Property1="Variant6" theme="dark" interactive={false} />
        <Tab Property1="Variant7" theme="dark" interactive={false} />
        <Tab Property1="Variant8" theme="dark" interactive={false} />
        <Tab Property1="Variant9" theme="dark" interactive={false} />
      </div>

      {/* Spacer between Dark and Light sections */}
      <div style={{ height: '72px' }} />

      {/* Bottom Section: Light Mode Variants (1-9) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Tab Property1="Default" theme="light" interactive={false} />
        <Tab Property1="Variant2" theme="light" interactive={false} />
        <Tab Property1="Variant3" theme="light" interactive={false} />
        <Tab Property1="Variant4" theme="light" interactive={false} />
        <Tab Property1="Variant5" theme="light" interactive={false} />
        <Tab Property1="Variant6" theme="light" interactive={false} />
        <Tab Property1="Variant7" theme="light" interactive={false} />
        <Tab Property1="Variant8" theme="light" interactive={false} />
        <Tab Property1="Variant9" theme="light" interactive={false} />
      </div>
    </div>
  ),
};
