import type { Meta, StoryObj } from '@storybook/react';
import { Component23 } from './Component23';

const meta: Meta<typeof Component23> = {
  title: 'Components/Component23',
  component: Component23,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 23**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 23\` |
| **Figma Node ID** | \`35:629\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "Property1": {
        "control": {
            "type": "select"
        },
        "options": [
            "3",
            "1",
            "2"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Component23>;

export const Default: Story = {
  args: {
    children: 'Component 23'
  },
};
