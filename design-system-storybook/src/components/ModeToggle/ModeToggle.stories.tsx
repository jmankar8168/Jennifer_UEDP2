import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModeToggle } from './ModeToggle';

const meta: Meta<typeof ModeToggle> = {
  title: 'Components/mode toggle',
  component: ModeToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`mode toggle\` |
| **Figma Node ID** | \`30:125\` |
| **Subcomponents** | \`Background\` (\`30:113\`) + \`Background+Border\` (\`30:114\`) |
| **Dimensions** | 342px width × 40px height |
| **Typography** | \`Space Mono\`, 9px, 700 Bold, Uppercase, Letter-spacing: 1.08px |
| **Variants** | \`Default\`, \`Selected\`, \`Hover\` |
        `,
      },
    },
  },
  argTypes: {
    leftLabel: {
      control: { type: 'text' },
      defaultValue: 'DARK'
    },
    rightLabel: {
      control: { type: 'text' },
      defaultValue: 'LIGHT'
    },
    State: {
      control: { type: 'select' },
      options: ['Default', 'Selected', 'Hover']
    }
  }
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
  args: {
    leftLabel: 'DARK',
    rightLabel: 'LIGHT',
    State: 'Default'
  }
};

export const Selected: Story = {
  args: {
    leftLabel: 'DARK',
    rightLabel: 'LIGHT',
    State: 'Selected'
  }
};

export const RoleToggle: Story = {
  args: {
    leftLabel: 'VOLUNTEER',
    rightLabel: 'VISION SEEKER',
    State: 'Default'
  }
};

export const InteractiveDemo: Story = {
  render: () => {
    const [active, setActive] = useState<'left' | 'right'>('right');
    return (
      <div style={{ padding: '24px', backgroundColor: '#0F172A', borderRadius: '12px', maxWidth: '400px' }}>
        <div style={{ color: '#94A3B8', fontSize: '13px', marginBottom: '16px', fontFamily: 'monospace' }}>
          Current Active Mode: <strong style={{ color: '#38BDF8' }}>{active.toUpperCase()}</strong>
        </div>
        <ModeToggle
          leftLabel="VOLUNTEER"
          rightLabel="VISION SEEKER"
          activeSide={active}
          onChange={setActive}
        />
      </div>
    );
  }
};
