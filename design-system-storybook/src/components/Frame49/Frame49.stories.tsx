import type { Meta, StoryObj } from '@storybook/react';
import { Frame49 } from './Frame49';

const meta: Meta<typeof Frame49> = {
  title: 'Components/Frame49',
  component: Frame49,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 49**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 49\` |
| **Figma Node ID** | \`33:924\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Frame49>;

export const Default: Story = {
  args: {
    children: 'Frame 49'
  },
};
