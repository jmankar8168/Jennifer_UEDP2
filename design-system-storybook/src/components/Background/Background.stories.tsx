import type { Meta, StoryObj } from '@storybook/react';
import { Background } from './Background';

const meta: Meta<typeof Background> = {
  title: 'Components/Background',
  component: Background,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background\` |
| **Figma Node ID** | \`16:645\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`5\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "Text200": {
        "control": {
            "type": "text"
        },
        "description": "Figma property \"Text#20:0\""
    },
    "State": {
        "control": {
            "type": "select"
        },
        "options": [
            "Default",
            "Selected",
            "Disabled",
            "Hover",
            "Default 2"
        ],
        "description": "Figma variant property \"State\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Default: Story = {
  args: {
    children: 'Background'
  },
};
