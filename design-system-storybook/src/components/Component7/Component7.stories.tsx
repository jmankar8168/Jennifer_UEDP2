import type { Meta, StoryObj } from '@storybook/react';
import { Component7 } from './Component7';

const meta: Meta<typeof Component7> = {
  title: 'Components/Component7',
  component: Component7,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 7**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 7\` |
| **Figma Node ID** | \`16:747\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`8\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Component7>;

export const Default: Story = {
  args: {
    children: 'Component 7'
  },
};
