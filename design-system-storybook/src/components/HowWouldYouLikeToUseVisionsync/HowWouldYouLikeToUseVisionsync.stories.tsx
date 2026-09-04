import type { Meta, StoryObj } from '@storybook/react';
import { HowWouldYouLikeToUseVisionsync } from './HowWouldYouLikeToUseVisionsync';

const meta: Meta<typeof HowWouldYouLikeToUseVisionsync> = {
  title: 'Components/HowWouldYouLikeToUseVisionsync',
  component: HowWouldYouLikeToUseVisionsync,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **How would you like to use VisionSync?**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`How would you like to use VisionSync?\` |
| **Figma Node ID** | \`16:709\` |
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
type Story = StoryObj<typeof HowWouldYouLikeToUseVisionsync>;

export const Default: Story = {
  args: {
    children: 'How would you like to use VisionSync?'
  },
};
