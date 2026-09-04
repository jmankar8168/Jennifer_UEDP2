import type { Meta, StoryObj } from '@storybook/react';
import { HelpTypeOptionsLargeTouchTargets } from './HelpTypeOptionsLargeTouchTargets';

const meta: Meta<typeof HelpTypeOptionsLargeTouchTargets> = {
  title: 'Components/HelpTypeOptionsLargeTouchTargets',
  component: HelpTypeOptionsLargeTouchTargets,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **help type options — large touch targets**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`help type options — large touch targets\` |
| **Figma Node ID** | \`16:841\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`4\` |
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
            "Hover",
            "job cards/Default",
            "job cards/Hover"
        ],
        "description": "Figma variant property \"State\""
    }
}
};

export default meta;
type Story = StoryObj<typeof HelpTypeOptionsLargeTouchTargets>;

export const Default: Story = {
  args: {
    children: 'help type options — large touch targets'
  },
};
