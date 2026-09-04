import type { Meta, StoryObj } from '@storybook/react';
import { BackgroundBorder } from './BackgroundBorder';

const meta: Meta<typeof BackgroundBorder> = {
  title: 'Components/Background+Border',
  component: BackgroundBorder,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background+Border\` |
| **Figma Node ID** | \`30:114\` (Light) / \`30:113\` (Dark) |
| **Dimensions** | 171px width × 40px height |
| **Typography** | \`Space Mono\`, 9px, 700 Bold, Uppercase, Letter-spacing: 1.08px |
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'TEXT'
    },
    variant: {
      control: { type: 'select' },
      options: ['light', 'dark']
    },
    active: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof BackgroundBorder>;

export const Light: Story = {
  args: {
    text: 'LIGHT TAB',
    variant: 'light'
  }
};

export const Dark: Story = {
  args: {
    text: 'DARK TAB',
    variant: 'dark'
  }
};
