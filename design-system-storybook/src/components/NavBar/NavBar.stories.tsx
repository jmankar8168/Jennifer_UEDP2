import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { NavBar, NavTabKey, FigmaProperty1, FigmaProperty2 } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Components/Nav Bar',
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background+HorizontalBorder** (Node ID: \`52:5699\`)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Component Name** | \`Background+HorizontalBorder\` (Nav Bar) |
| **Dimensions** | \`402px × 86px\` |
| **Border Top** | \`1px solid #222222\` (Dark) / \`1px solid #000000\` (Light) |
| **Background** | \`#111111\` (Dark) / \`#FFFFFF\` (Light) |
| **Variants** | \`Property 1\` (Default, assist hover, assist selected, scan hover, scan selected, jobs hover, jobs selected, support hover, support selected) × \`Property 2\` (Default, Light) |
| **Typography** | \`Space Mono\` 11px Bold (700), UPPERCASE, Letter Spacing: \`0.42px\` |
| **Selected Accent** | \`#B7FF4D\` (Neon Green in Dark) / \`#497B00\` (Olive Green in Light) |
| **Hover Effect** | \`1px solid currentColor\` crisp rectangular outline box |
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
    property1: {
      control: { type: 'select' },
      options: [
        'Default',
        'assist hover',
        'assist selected',
        'scan hover',
        'scan selected',
        'jobs hover',
        'jobs selected',
        'support hover',
        'support selected',
      ],
      description: 'Figma variant Property 1',
    },
    property2: {
      control: { type: 'select' },
      options: ['Default', 'Light'],
      description: 'Figma variant Property 2 (Mode)',
    },
    mode: {
      control: { type: 'select' },
      options: ['Default', 'Light'],
      description: 'Ergonomic mode selector',
    },
    selectedTab: {
      control: { type: 'select' },
      options: [null, 'assist', 'scan', 'jobs', 'support'],
      description: 'Active selected tab',
    },
    hoveredTab: {
      control: { type: 'select' },
      options: [null, 'assist', 'scan', 'jobs', 'support'],
      description: 'Simulated hovered tab',
    },
  },
  args: {
    property1: 'Default',
    property2: 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

/**
 * Idle Default state in Dark Mode (Node 30:261)
 */
export const DefaultDark: Story = {
  name: 'Default (Dark Mode)',
  args: {
    property1: 'Default',
    property2: 'Default',
  },
};

/**
 * Idle Default state in Light Mode (Node 52:5369)
 */
export const DefaultLight: Story = {
  name: 'Default (Light Mode)',
  args: {
    property1: 'Default',
    property2: 'Light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * ASSIST Selected in Dark Mode (#B7FF4D Neon Green)
 */
export const AssistSelected: Story = {
  name: 'Assist Selected (Dark)',
  args: {
    property1: 'assist selected',
    property2: 'Default',
  },
};

/**
 * SCAN Selected in Dark Mode
 */
export const ScanSelected: Story = {
  name: 'Scan Selected (Dark)',
  args: {
    property1: 'scan selected',
    property2: 'Default',
  },
};

/**
 * JOBS Selected in Dark Mode
 */
export const JobsSelected: Story = {
  name: 'Jobs Selected (Dark)',
  args: {
    property1: 'jobs selected',
    property2: 'Default',
  },
};

/**
 * SUPPORT Selected in Dark Mode
 */
export const SupportSelected: Story = {
  name: 'Support Selected (Dark)',
  args: {
    property1: 'support selected',
    property2: 'Default',
  },
};

/**
 * ASSIST Hovered in Dark Mode (1px white outline box)
 */
export const AssistHover: Story = {
  name: 'Assist Hover (Dark)',
  args: {
    property1: 'assist hover',
    property2: 'Default',
  },
};

/**
 * SCAN Hovered in Light Mode (1px black outline box)
 */
export const ScanHoverLight: Story = {
  name: 'Scan Hover (Light)',
  args: {
    property1: 'scan hover',
    property2: 'Light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Interactive App Simulation with Tab Navigation
 */
export const Interactive: Story = {
  name: 'Interactive Mobile Navigation Bar',
  render: () => {
    const [selected, setSelected] = useState<NavTabKey>('assist');

    const tabDescriptions: Record<NavTabKey, { title: string; desc: string }> = {
      assist: {
        title: 'Vision Assist Mode',
        desc: 'Real-time camera assistance and volunteer video link active.',
      },
      scan: {
        title: 'Document & QR Scanner',
        desc: 'Position barcodes, product labels, or text in view.',
      },
      jobs: {
        title: 'Volunteer Job Board',
        desc: 'Browse open community help requests and accessibility tasks.',
      },
      support: {
        title: 'Jennifer Community Support',
        desc: 'Connect with community members and dedicated live guides.',
      },
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          width: '100%',
        }}
      >
        {/* Device frame preview */}
        <div
          style={{
            width: '402px',
            height: '380px',
            backgroundColor: '#171717',
            border: '1px solid #333',
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid #262626',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '12px',
                color: '#fff',
                fontWeight: 700,
              }}
            >
              JENNIFER // OS
            </span>
            <span
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                color: '#b7ff4d',
                padding: '2px 6px',
                backgroundColor: 'rgba(183,255,77,0.1)',
                borderRadius: '2px',
              }}
            >
              ACTIVE
            </span>
          </div>

          {/* Screen Content */}
          <div style={{ padding: '24px 20px', color: '#fff' }}>
            <h3
              style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '16px',
                margin: '0 0 8px 0',
                color: '#b7ff4d',
              }}
            >
              {tabDescriptions[selected].title}
            </h3>
            <p
              style={{
                fontFamily: 'Source Sans 3, sans-serif',
                fontSize: '14px',
                color: '#aaa',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              {tabDescriptions[selected].desc}
            </p>
          </div>

          {/* Bottom Nav Bar */}
          <NavBar selectedTab={selected} onSelectTab={setSelected} mode="Default" />
        </div>

        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          CLICK TABS ABOVE TO SWITCH ACTIVE SECTION
        </span>
      </div>
    );
  },
};

/**
 * Complete 18-Variant Figma Artboard Matrix (Node 52:5699)
 * Exact 1:1 replica of the user's provided Figma specification image
 */
export const AllFigmaVariantsMatrix: Story = {
  name: 'All Figma Variants (52:5699 Matrix)',
  render: () => {
    const states: { label: string; p1: FigmaProperty1 }[] = [
      { label: 'Default', p1: 'Default' },
      { label: 'Assist Hover', p1: 'assist hover' },
      { label: 'Scan Hover', p1: 'scan hover' },
      { label: 'Jobs Hover', p1: 'jobs hover' },
      { label: 'Support Hover', p1: 'support hover' },
      { label: 'Assist Selected', p1: 'assist selected' },
      { label: 'Scan Selected', p1: 'scan selected' },
      { label: 'Jobs Selected', p1: 'jobs selected' },
      { label: 'Support Selected', p1: 'support selected' },
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '32px 24px',
          backgroundColor: '#202020',
          maxWidth: '920px',
        }}
      >
        <div style={{ color: '#c084fc', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
          ❖ Component Set: Background+HorizontalBorder (Node 52:5699) — 18 Variants
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(410px, 1fr))',
            gap: '32px 40px',
          }}
        >
          {/* Column 1: Light Mode (Left column in Figma) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ color: '#aaa', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
              MODE = LIGHT (Property 2=Light)
            </div>
            {states.map(({ label, p1 }) => (
              <div key={`light-${p1}`} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ color: '#666', fontFamily: 'Space Mono, monospace', fontSize: '10px' }}>
                  {label}
                </span>
                <div style={{ border: '1px dashed rgba(255,255,255,0.1)', width: 'fit-content' }}>
                  <NavBar property1={p1} property2="Light" />
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Default Dark Mode (Right column in Figma) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ color: '#aaa', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
              MODE = DEFAULT (Property 2=Default)
            </div>
            {states.map(({ label, p1 }) => (
              <div key={`dark-${p1}`} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ color: '#666', fontFamily: 'Space Mono, monospace', fontSize: '10px' }}>
                  {label}
                </span>
                <div style={{ border: '1px dashed rgba(255,255,255,0.1)', width: 'fit-content' }}>
                  <NavBar property1={p1} property2="Default" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
