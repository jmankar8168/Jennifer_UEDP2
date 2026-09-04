import type { Meta, StoryObj } from '@storybook/react';
import { Component12 } from './Component12';

const meta: Meta<typeof Component12> = {
  title: 'Components/Component12',
  component: Component12,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 12**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 12\` |
| **Figma Node ID** | \`30:183\` |
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
            "Support"
        ],
        "description": "Figma variant property \"Type\""
    },
    "State": {
        "control": {
            "type": "select"
        },
        "options": [
            "Default",
            "Hover",
            "Selected"
        ],
        "description": "Figma variant property \"State\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Component12>;

export const Default: Story = {
  args: {
    children: 'Component 12'
  },
};
