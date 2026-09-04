import type { Meta, StoryObj } from '@storybook/react';
import { Component16 } from './Component16';

const meta: Meta<typeof Component16> = {
  title: 'Components/Component16',
  component: Component16,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 16**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 16\` |
| **Figma Node ID** | \`33:850\` |
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
            "selected",
            "default",
            "Hover"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Component16>;

export const Default: Story = {
  args: {
    children: 'Component 16'
  },
};
