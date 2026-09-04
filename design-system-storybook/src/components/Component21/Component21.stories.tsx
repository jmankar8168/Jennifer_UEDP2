import type { Meta, StoryObj } from '@storybook/react';
import { Component21 } from './Component21';

const meta: Meta<typeof Component21> = {
  title: 'Components/Component21',
  component: Component21,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 21**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 21\` |
| **Figma Node ID** | \`35:471\` |
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
            "meet",
            "call recieved",
            "missed call"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Component21>;

export const Default: Story = {
  args: {
    children: 'Component 21'
  },
};
