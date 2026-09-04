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
| **Dimensions** | 342px total width × 40px height |
| **Left Subcomponent** | \`Background\` (30:113) - 169px width × 40px height |
| **Right Subcomponent** | \`Background+Border\` (30:114) - 171px width × 40px height |
| **Typography** | \`Space Mono\`, 9px, 700 Bold, Uppercase, Letter-spacing: 1.08px |
| **Figma Variants** | \`Default\`, \`Selected\` (Lime Accent), \`Hover\` |
| **Bound Variables** | \`VariableID:1:3\` (#000000), \`VariableID:1:4\` (#FFFFFF), \`VariableID:17:2340\` (#B7FF4D), \`VariableID:1:45\` (#404040) |
        `,
      },
    },
  },
  argTypes: {
    leftText: {
      control: { type: 'text' },
      description: 'Text in left segment (Background)',
      defaultValue: 'TEXT'
    },
    rightText: {
      control: { type: 'text' },
      description: 'Text in right segment (Background+Border)',
      defaultValue: 'TEXT'
    },
    State: {
      control: { type: 'select' },
      options: ['Default', 'Selected', 'Hover'],
      description: 'Figma visual state variant'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
  args: {
    leftText: 'TEXT',
    rightText: 'TEXT',
    State: 'Default'
  }
};

export const Selected: Story = {
  args: {
    leftText: 'TEXT',
    rightText: 'TEXT',
    State: 'Selected'
  }
};

export const HoverState: Story = {
  args: {
    leftText: 'TEXT',
    rightText: 'TEXT',
    State: 'Hover'
  }
};

export const RoleSwitchExample: Story = {
  args: {
    leftText: 'VOLUNTEER',
    rightText: 'SEEKER',
    State: 'Selected'
  }
};

export const InteractiveDemo: Story = {
  render: () => {
    const [state, setState] = useState<'Default' | 'Selected'>('Default');
    return (
      <div style={{ padding: '32px', backgroundColor: '#0F172A', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ color: '#94A3B8', fontSize: '13px', fontFamily: 'monospace' }}>
          Current Active Variant: <strong style={{ color: state === 'Selected' ? '#B7FF4D' : '#FFFFFF' }}>{state}</strong>
        </div>
        <ModeToggle
          leftText="VOLUNTEER"
          rightText="SEEKER"
          State={state}
          onTabChange={(tab) => setState(tab === 'left' ? 'Default' : 'Selected')}
        />
      </div>
    );
  }
};
