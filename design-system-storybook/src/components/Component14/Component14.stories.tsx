import type { Meta, StoryObj } from '@storybook/react';
import { Component14 } from './Component14';

const meta: Meta<typeof Component14> = {
  title: 'Components/Component14',
  component: Component14,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 14**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 14\` |
| **Figma Node ID** | \`31:730\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`4\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "Vision": {
        "control": {
            "type": "select"
        },
        "options": [
            "Blind",
            "Sighted",
            "Sighte"
        ],
        "description": "Figma variant property \"Vision\""
    },
    "Type": {
        "control": {
            "type": "select"
        },
        "options": [
            "Selected",
            "Default"
        ],
        "description": "Figma variant property \"Type\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Component14>;

export const Default: Story = {
  args: {
    children: 'Component 14'
  },
};
