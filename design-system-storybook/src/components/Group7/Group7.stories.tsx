import type { Meta, StoryObj } from '@storybook/react';
import { Group7 } from './Group7';

const meta: Meta<typeof Group7> = {
  title: 'Components/Group7',
  component: Group7,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 7**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 7\` |
| **Figma Node ID** | \`16:796\` |
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
            "Default",
            "Variant2"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Group7>;

export const Default: Story = {
  args: {
    children: 'Group 7'
  },
};
