import type { Meta, StoryObj } from '@storybook/react';
import { Frame37 } from './Frame37';

const meta: Meta<typeof Frame37> = {
  title: 'Components/Frame37',
  component: Frame37,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 37**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 37\` |
| **Figma Node ID** | \`16:690\` |
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
type Story = StoryObj<typeof Frame37>;

export const Default: Story = {
  args: {
    children: 'Frame 37'
  },
};
