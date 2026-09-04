import type { Meta, StoryObj } from '@storybook/react';
import { Group32 } from './Group32';

const meta: Meta<typeof Group32> = {
  title: 'Components/Group32',
  component: Group32,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 32**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 32\` |
| **Figma Node ID** | \`16:1948\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`4\` |
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
            "Variant2",
            "Variant3",
            "Variant4"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Group32>;

export const Default: Story = {
  args: {
    children: 'Group 32'
  },
};
