import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Button**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Button\` |
| **Figma Node ID** | \`54:6477\` |
| **Component Type** | \`COMPONENT_SET\` (Pill Button Matrix) |
| **Dimensions** | Height: \`32px\`, Width: \`~74px\` (No icon) / \`~92px\` (With icon) |
| **Border Radius** | \`9999px\` (Full Pill) |
| **Typography** | \`Source Sans 3\`, 14px, 700 Bold, Title Case |
| **Icon** | Right-pointing triangle arrow (\`▶\`) |
| **Colors** | Primary: \`#FFFFFF\` fill / \`#000000\` text |
| | Accent: \`#000000\` fill / \`#FFFFFF\` border / \`#B7FF4D\` lime text |
| | Secondary: \`#000000\` fill / \`#FFFFFF\` border / \`#FFFFFF\` text |
| | Disabled Primary: \`#5C5C5C\` fill / \`#2E2E2E\` text |
| | Disabled Accent: \`#1C1C1C\` fill / \`#333333\` border / \`#4A5C2F\` text |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#252525' },
        { name: 'canvas', value: '#18181B' },
        { name: 'light', value: '#F4F4F5' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'accent', 'secondary'],
      description: 'Button style variant',
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'disabled'],
      description: 'Visual state override',
    },
    hasIcon: {
      control: { type: 'boolean' },
      description: 'Include right arrow icon',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled interactive state',
    },
    children: {
      control: { type: 'text' },
      description: 'Button label text',
    },
  },
  args: {
    variant: 'primary',
    hasIcon: false,
    disabled: false,
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 1. Primary Default
export const Primary_Default: Story = {
  name: 'Primary (Default)',
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

// 2. Primary With Icon
export const Primary_WithIcon: Story = {
  name: 'Primary (With Icon)',
  args: {
    variant: 'primary',
    hasIcon: true,
    children: 'Button',
  },
};

// 3. Primary Hover
export const Primary_Hover: Story = {
  name: 'Primary (Hover State)',
  args: {
    variant: 'primary',
    state: 'hover',
    children: 'Button',
  },
};

// 4. Primary Disabled
export const Primary_Disabled: Story = {
  name: 'Primary (Disabled)',
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Button',
  },
};

// 5. Accent Lime
export const Accent_Lime: Story = {
  name: 'Accent Lime',
  args: {
    variant: 'accent',
    children: 'Button',
  },
};

// 6. Accent Lime With Icon
export const Accent_LimeWithIcon: Story = {
  name: 'Accent Lime (With Icon)',
  args: {
    variant: 'accent',
    hasIcon: true,
    children: 'Button',
  },
};

// 7. Secondary Outline
export const Secondary_Outline: Story = {
  name: 'Secondary (Outline White)',
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

// 8. Secondary With Icon
export const Secondary_WithIcon: Story = {
  name: 'Secondary (With Icon)',
  args: {
    variant: 'secondary',
    hasIcon: true,
    children: 'Button',
  },
};

// 9. Accent Disabled
export const Accent_Disabled: Story = {
  name: 'Accent (Disabled)',
  args: {
    variant: 'accent',
    disabled: true,
    children: 'Button',
  },
};

/**
 * Interactive Showcase demonstrating live button clicking, state transitions,
 * and variant selections.
 */
export const InteractiveShowcase: Story = {
  name: 'Interactive Showcase',
  render: () => {
    const [clickCount, setClickCount] = useState(0);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '24px',
          background: '#18181B',
          borderRadius: '12px',
          border: '1px solid #27272A',
          maxWidth: '520px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              color: '#A1A1AA',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Interactive Button Showcase
          </span>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              color: '#B7FF4D',
              background: 'rgba(183, 255, 77, 0.1)',
              padding: '4px 8px',
              borderRadius: '4px',
            }}
          >
            Clicks: {clickCount}
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <Button variant="primary" onClick={() => setClickCount((c) => c + 1)}>
            Button
          </Button>

          <Button variant="primary" hasIcon onClick={() => setClickCount((c) => c + 1)}>
            Button
          </Button>

          <Button variant="secondary" onClick={() => setClickCount((c) => c + 1)}>
            Button
          </Button>

          <Button variant="secondary" hasIcon onClick={() => setClickCount((c) => c + 1)}>
            Button
          </Button>

          <Button variant="accent" onClick={() => setClickCount((c) => c + 1)}>
            Button
          </Button>

          <Button variant="accent" hasIcon onClick={() => setClickCount((c) => c + 1)}>
            Button
          </Button>

          <Button variant="primary" disabled>
            Button
          </Button>

          <Button variant="accent" disabled hasIcon>
            Button
          </Button>
        </div>
      </div>
    );
  },
};

/**
 * EXACT REPLICA OF THE FIGMA MATRIX (Node 54:6477)
 * Displays all 12 variants in the exact 4-row × 3-column layout
 * matching your screenshot pixel for pixel on canvas #252525.
 */
export const AllFigmaVariants: Story = {
  name: 'All Figma Variants (54:6477 Pixel Perfect)',
  render: () => (
    <div
      style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(3, max-content)',
        columnGap: '82px',
        rowGap: '31px',
        padding: '24px 32px',
        background: '#252525',
        borderRadius: '8px',
        alignItems: 'center',
      }}
    >
      {/* ROW 1 */}
      {/* Col 1: Solid White (No icon) */}
      <Button variant="primary">Button</Button>
      {/* Col 2: Outline White (No icon) */}
      <Button variant="secondary">Button</Button>
      {/* Col 3: Disabled Primary (No icon) */}
      <Button variant="primary" disabled>Button</Button>

      {/* ROW 2 */}
      {/* Col 1: Solid White (With icon) */}
      <Button variant="primary" hasIcon>Button</Button>
      {/* Col 2: Outline White (With icon) */}
      <Button variant="secondary" hasIcon>Button</Button>
      {/* Col 3: Disabled Primary (With icon) */}
      <Button variant="primary" hasIcon disabled>Button</Button>

      {/* ROW 3 */}
      {/* Col 1: Lime Accent (No icon) */}
      <Button variant="accent">Button</Button>
      {/* Col 2: Outline White (No icon) */}
      <Button variant="secondary">Button</Button>
      {/* Col 3: Disabled Accent (No icon) */}
      <Button variant="accent" disabled>Button</Button>

      {/* ROW 4 */}
      {/* Col 1: Lime Accent (With icon) */}
      <Button variant="accent" hasIcon>Button</Button>
      {/* Col 2: Outline White (With icon) */}
      <Button variant="secondary" hasIcon>Button</Button>
      {/* Col 3: Disabled Accent (With icon) */}
      <Button variant="accent" hasIcon disabled>Button</Button>
    </div>
  ),
};
