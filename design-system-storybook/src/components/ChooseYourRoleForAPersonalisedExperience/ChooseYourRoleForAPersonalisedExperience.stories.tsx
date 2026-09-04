import type { Meta, StoryObj } from '@storybook/react';
import { ChooseYourRoleForAPersonalisedExperience } from './ChooseYourRoleForAPersonalisedExperience';

const meta: Meta<typeof ChooseYourRoleForAPersonalisedExperience> = {
  title: 'Components/ChooseYourRoleForAPersonalisedExperience',
  component: ChooseYourRoleForAPersonalisedExperience,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Choose your role for a personalised experience.**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Choose your role for a personalised experience.\` |
| **Figma Node ID** | \`16:685\` |
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
type Story = StoryObj<typeof ChooseYourRoleForAPersonalisedExperience>;

export const Default: Story = {
  args: {
    children: 'Choose your role for a personalised experience.'
  },
};
