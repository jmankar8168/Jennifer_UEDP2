import type { Meta, StoryObj } from '@storybook/react';
import { Component11 } from './Component11';

const meta: Meta<typeof Component11> = {
  title: 'Components/Component11',
  component: Component11,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 11**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 11\` |
| **Figma Node ID** | \`30:181\` |
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
            "Sca",
            "Scan"
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
type Story = StoryObj<typeof Component11>;

export const Default: Story = {
  args: {
    children: 'Component 11'
  },
};
