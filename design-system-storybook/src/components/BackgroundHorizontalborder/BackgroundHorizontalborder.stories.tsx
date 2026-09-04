import type { Meta, StoryObj } from '@storybook/react';
import { BackgroundHorizontalborder } from './BackgroundHorizontalborder';

const meta: Meta<typeof BackgroundHorizontalborder> = {
  title: 'Components/BackgroundHorizontalborder',
  component: BackgroundHorizontalborder,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background+HorizontalBorder**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background+HorizontalBorder\` |
| **Figma Node ID** | \`30:262\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`9\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "Type": {
        "control": {
            "type": "select"
        },
        "options": [
            "Default",
            "assist hover",
            "scan hover",
            "jobs hover",
            "support hover",
            "assist selected",
            "scan selected",
            "jobs selected",
            "support selected"
        ],
        "description": "Figma variant property \"Type\""
    }
}
};

export default meta;
type Story = StoryObj<typeof BackgroundHorizontalborder>;

export const Default: Story = {
  args: {
    children: 'Background+HorizontalBorder'
  },
};
