import type { Meta, StoryObj } from '@storybook/react';
import { Step1Of3 } from './Step1Of3';

const meta: Meta<typeof Step1Of3> = {
  title: 'Components/Step1Of3',
  component: Step1Of3,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Step 1 of 3**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Step 1 of 3\` |
| **Figma Node ID** | \`16:729\` |
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
type Story = StoryObj<typeof Step1Of3>;

export const Default: Story = {
  args: {
    children: 'Step 1 of 3'
  },
};
