import type { Meta, StoryObj } from '@storybook/react';
import { Background2 } from './Background2';

const meta: Meta<typeof Background2> = {
  title: 'Components/Background2',
  component: Background2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background\` |
| **Figma Node ID** | \`33:985\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
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
            "Yes",
            "No"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Background2>;

export const Default: Story = {
  args: {
    children: 'Background'
  },
};
