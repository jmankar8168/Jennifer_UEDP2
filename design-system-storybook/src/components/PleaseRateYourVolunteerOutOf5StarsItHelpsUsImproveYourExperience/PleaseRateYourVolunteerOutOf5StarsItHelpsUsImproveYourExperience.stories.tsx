import type { Meta, StoryObj } from '@storybook/react';
import { PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience } from './PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience';

const meta: Meta<typeof PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience> = {
  title: 'Components/PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience',
  component: PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Please rate your volunteer out of 5 stars, It helps us improve your experience.**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Please rate your volunteer out of 5 stars, It helps us improve your experience.\` |
| **Figma Node ID** | \`16:714\` |
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
type Story = StoryObj<typeof PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience>;

export const Default: Story = {
  args: {
    children: 'Please rate your volunteer out of 5 stars, It helps us improve your experience.'
  },
};
