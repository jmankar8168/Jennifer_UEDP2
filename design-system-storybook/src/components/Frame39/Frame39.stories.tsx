import type { Meta, StoryObj } from '@storybook/react';
import { Frame39 } from './Frame39';

const meta: Meta<typeof Frame39> = {
  title: 'Components/Frame39',
  component: Frame39,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 39**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 39\` |
| **Figma Node ID** | \`16:1813\` |
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
type Story = StoryObj<typeof Frame39>;

export const Default: Story = {
  args: {
    children: 'Frame 39'
  },
};
