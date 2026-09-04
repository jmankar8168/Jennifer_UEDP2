import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Tab**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Tab\` |
| **Figma Node ID** | \`33:861\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`9\` |
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
            "Variant6",
            "Variant7",
            "Variant8",
            "Variant9"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    children: 'Tab'
  },
};
