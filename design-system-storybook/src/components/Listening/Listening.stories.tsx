import type { Meta, StoryObj } from '@storybook/react';
import { Listening } from './Listening';

const meta: Meta<typeof Listening> = {
  title: 'Components/Listening',
  component: Listening,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Listening...**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Listening...\` |
| **Figma Node ID** | \`16:825\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`4\` |
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
            "Variant4"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Listening>;

export const Default: Story = {
  args: {
    children: 'Listening...'
  },
};
