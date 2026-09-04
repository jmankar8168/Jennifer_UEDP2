import type { Meta, StoryObj } from '@storybook/react';
import { Stars } from './Stars';

const meta: Meta<typeof Stars> = {
  title: 'Components/Stars',
  component: Stars,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **stars**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`stars\` |
| **Figma Node ID** | \`33:1062\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`6\` |
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
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Stars>;

export const Default: Story = {
  args: {
    children: 'stars'
  },
};
