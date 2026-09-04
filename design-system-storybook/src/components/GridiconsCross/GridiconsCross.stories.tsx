import type { Meta, StoryObj } from '@storybook/react';
import { GridiconsCross } from './GridiconsCross';

const meta: Meta<typeof GridiconsCross> = {
  title: 'Components/GridiconsCross',
  component: GridiconsCross,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **gridicons:cross**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`gridicons:cross\` |
| **Figma Node ID** | \`16:739\` |
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
type Story = StoryObj<typeof GridiconsCross>;

export const Default: Story = {
  args: {
    children: 'gridicons:cross'
  },
};
