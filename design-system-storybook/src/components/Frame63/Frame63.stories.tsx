import type { Meta, StoryObj } from '@storybook/react';
import { Frame63 } from './Frame63';

const meta: Meta<typeof Frame63> = {
  title: 'Components/Frame63',
  component: Frame63,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 63**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 63\` |
| **Figma Node ID** | \`35:483\` |
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
            "missed call",
            "meeting",
            "recieved"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Frame63>;

export const Default: Story = {
  args: {
    children: 'Frame 63'
  },
};
