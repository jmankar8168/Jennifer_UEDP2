import type { Meta, StoryObj } from '@storybook/react';
import { SwitchRole } from './SwitchRole';

const meta: Meta<typeof SwitchRole> = {
  title: 'Components/SwitchRole',
  component: SwitchRole,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Switch role**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Switch role\` |
| **Figma Node ID** | \`16:734\` |
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
type Story = StoryObj<typeof SwitchRole>;

export const Default: Story = {
  args: {
    children: 'Switch role'
  },
};
