import type { Meta, StoryObj } from '@storybook/react';
import { Frame8 } from './Frame8';

const meta: Meta<typeof Frame8> = {
  title: 'Components/Frame8',
  component: Frame8,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 8**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 8\` |
| **Figma Node ID** | \`16:695\` |
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
type Story = StoryObj<typeof Frame8>;

export const Default: Story = {
  args: {
    children: 'Frame 8'
  },
};
