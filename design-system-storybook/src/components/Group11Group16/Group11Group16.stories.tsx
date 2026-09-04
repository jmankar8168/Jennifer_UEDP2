import type { Meta, StoryObj } from '@storybook/react';
import { Group11Group16 } from './Group11Group16';

const meta: Meta<typeof Group11Group16> = {
  title: 'Components/Group11Group16',
  component: Group11Group16,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 11 + Group 16**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 11 + Group 16\` |
| **Figma Node ID** | \`30:182\` |
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
            "Job",
            "Jobs"
        ],
        "description": "Figma variant property \"Type\""
    },
    "State": {
        "control": {
            "type": "select"
        },
        "options": [
            "Hover",
            "Selected",
            "Default"
        ],
        "description": "Figma variant property \"State\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Group11Group16>;

export const Default: Story = {
  args: {
    children: 'Group 11 + Group 16'
  },
};
