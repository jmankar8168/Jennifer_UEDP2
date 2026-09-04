import type { Meta, StoryObj } from '@storybook/react';
import { SelectHelpType } from './SelectHelpType';

const meta: Meta<typeof SelectHelpType> = {
  title: 'Components/SelectHelpType',
  component: SelectHelpType,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Select help type**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Select help type\` |
| **Figma Node ID** | \`16:719\` |
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
type Story = StoryObj<typeof SelectHelpType>;

export const Default: Story = {
  args: {
    children: 'Select help type'
  },
};
