import type { Meta, StoryObj } from '@storybook/react';
import { Group25 } from './Group25';

const meta: Meta<typeof Group25> = {
  title: 'Components/Group25',
  component: Group25,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 25**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 25\` |
| **Figma Node ID** | \`16:778\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "Availibility": {
        "control": {
            "type": "select"
        },
        "options": [
            "On",
            "Off"
        ],
        "description": "Figma variant property \"Availibility\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Group25>;

export const Default: Story = {
  args: {
    children: 'Group 25'
  },
};
