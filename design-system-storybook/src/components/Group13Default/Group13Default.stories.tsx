import type { Meta, StoryObj } from '@storybook/react';
import { Group13Default } from './Group13Default';

const meta: Meta<typeof Group13Default> = {
  title: 'Components/Group13Default',
  component: Group13Default,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 13/Default**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 13/Default\` |
| **Figma Node ID** | \`16:704\` |
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
type Story = StoryObj<typeof Group13Default>;

export const Default: Story = {
  args: {
    children: 'Group 13/Default'
  },
};
