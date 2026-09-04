import type { Meta, StoryObj } from '@storybook/react';
import { Camera } from './Camera';

const meta: Meta<typeof Camera> = {
  title: 'Components/Camera',
  component: Camera,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Camera**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Camera\` |
| **Figma Node ID** | \`16:1926\` |
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
            "Default",
            "Flip Hover",
            "End Hover"
        ],
        "description": "Figma variant property \"Type\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Camera>;

export const Default: Story = {
  args: {
    children: 'Camera'
  },
};
