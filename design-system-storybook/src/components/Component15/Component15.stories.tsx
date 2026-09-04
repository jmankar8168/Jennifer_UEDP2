import type { Meta, StoryObj } from '@storybook/react';
import { Component15 } from './Component15';

const meta: Meta<typeof Component15> = {
  title: 'Components/Component15',
  component: Component15,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 15**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 15\` |
| **Figma Node ID** | \`32:741\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "Type": {
        "control": {
            "type": "select"
        },
        "options": [
            "selected",
            "hover",
            "disabled"
        ],
        "description": "Figma variant property \"Type\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Component15>;

export const Default: Story = {
  args: {
    children: 'Component 15'
  },
};
