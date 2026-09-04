import type { Meta, StoryObj } from '@storybook/react';
import { Lable } from './Lable';

const meta: Meta<typeof Lable> = {
  title: 'Components/Lable',
  component: Lable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Lable**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Lable\` |
| **Figma Node ID** | \`31:629\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "Text313": {
        "control": {
            "type": "text"
        },
        "description": "Figma property \"Text#31:3\""
    },
    "Property": {
        "control": {
            "type": "select"
        },
        "options": [
            "Default",
            "Selected"
        ],
        "description": "Figma variant property \"Property\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Lable>;

export const Default: Story = {
  args: {
    children: 'Lable'
  },
};
