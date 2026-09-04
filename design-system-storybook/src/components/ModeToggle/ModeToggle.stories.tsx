import type { Meta, StoryObj } from '@storybook/react';
import { ModeToggle } from './ModeToggle';

const meta: Meta<typeof ModeToggle> = {
  title: 'Components/ModeToggle',
  component: ModeToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **mode toggle**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`mode toggle\` |
| **Figma Node ID** | \`30:125\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "State": {
        "control": {
            "type": "select"
        },
        "options": [
            "Default",
            "Selected",
            "Hover"
        ],
        "description": "Figma variant property \"State\""
    }
}
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
  args: {
    children: 'mode toggle'
  },
};
