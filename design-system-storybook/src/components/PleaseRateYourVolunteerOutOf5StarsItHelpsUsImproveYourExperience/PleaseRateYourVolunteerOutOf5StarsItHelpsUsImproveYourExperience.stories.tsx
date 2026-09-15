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
| **Variants** | \`Default\`, \`Variant2\` |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0d0d0d' },
        { name: 'surface', value: '#171717' },
      ],
    },
  },
  argTypes: {
    "Property1": {
      control: {
        type: 'select',
      },
      options: ["Default","Variant2"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Property1: 'Default',
  },
};

export const Variant2: Story = {
  name: "Variant2",
  args: {
    Property1: 'Variant2',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience Property1="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant2
        </p>
        <PleaseRateYourVolunteerOutOf5StarsItHelpsUsImproveYourExperience Property1="Variant2" />
      </div>
    </div>
  ),
};
