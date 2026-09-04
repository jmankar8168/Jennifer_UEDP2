import type { Meta, StoryObj } from '@storybook/react';
import { StarsSingle } from './StarsSingle';

const meta: Meta<typeof StarsSingle> = {
  title: 'Components/StarsSingle',
  component: StarsSingle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **stars single**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`stars single\` |
| **Figma Node ID** | \`33:1049\` |
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
            "fill"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof StarsSingle>;

export const Default: Story = {
  args: {
    children: 'stars single'
  },
};
