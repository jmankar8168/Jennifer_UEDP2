import type { Meta, StoryObj } from '@storybook/react';
import { Group8 } from './Group8';

const meta: Meta<typeof Group8> = {
  title: 'Components/Group8',
  component: Group8,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 8**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 8\` |
| **Figma Node ID** | \`16:807\` |
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
type Story = StoryObj<typeof Group8>;

export const Default: Story = {
  args: {
    children: 'Group 8'
  },
};
