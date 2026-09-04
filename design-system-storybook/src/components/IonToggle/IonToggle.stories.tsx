import type { Meta, StoryObj } from '@storybook/react';
import { IonToggle } from './IonToggle';

const meta: Meta<typeof IonToggle> = {
  title: 'Components/IonToggle',
  component: IonToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **ion:toggle**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`ion:toggle\` |
| **Figma Node ID** | \`34:1156\` |
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
            "off",
            "on"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof IonToggle>;

export const Default: Story = {
  args: {
    children: 'ion:toggle'
  },
};
