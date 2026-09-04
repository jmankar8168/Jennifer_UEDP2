import type { Meta, StoryObj } from '@storybook/react';
import { Frame38 } from './Frame38';

const meta: Meta<typeof Frame38> = {
  title: 'Components/Frame38',
  component: Frame38,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 38**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 38\` |
| **Figma Node ID** | \`16:765\` |
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
            "Variant2",
            "Variant3",
            "Variant4",
            "Variant5",
            "Variant6"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Frame38>;

export const Default: Story = {
  args: {
    children: 'Frame 38'
  },
};
