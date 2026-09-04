import type { Meta, StoryObj } from '@storybook/react';
import { Search1 } from './Search1';

const meta: Meta<typeof Search1> = {
  title: 'Components/Search1',
  component: Search1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **search**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`search\` |
| **Figma Node ID** | \`33:912\` |
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
            "Hover"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Search1>;

export const Default: Story = {
  args: {
    children: 'search'
  },
};
