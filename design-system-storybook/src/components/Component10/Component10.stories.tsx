import type { Meta, StoryObj } from '@storybook/react';
import { Component10 } from './Component10';

const meta: Meta<typeof Component10> = {
  title: 'Components/Component10',
  component: Component10,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 10**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 10\` |
| **Figma Node ID** | \`30:180\` |
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
            "Assist"
        ],
        "description": "Figma variant property \"Type\""
    },
    "State": {
        "control": {
            "type": "select"
        },
        "options": [
            "Default",
            "Selected",
            "Hover"
        ],
        "description": "Figma variant property \"State\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Component10>;

export const Default: Story = {
  args: {
    children: 'Component 10'
  },
};
