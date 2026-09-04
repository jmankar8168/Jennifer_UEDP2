import type { Meta, StoryObj } from '@storybook/react';
import { Component9 } from './Component9';

const meta: Meta<typeof Component9> = {
  title: 'Components/Component9',
  component: Component9,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 9**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 9\` |
| **Figma Node ID** | \`31:653\` |
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
            "OPTION B — Sighted user (unselected)",
            "Variant2",
            "Variant3"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Component9>;

export const Default: Story = {
  args: {
    children: 'Component 9'
  },
};
