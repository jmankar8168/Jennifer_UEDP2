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
type Story = StoryObj<typeof ChooseYourRoleForAPersonalisedExperience>;

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
        <ChooseYourRoleForAPersonalisedExperience Property1="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant2
        </p>
        <ChooseYourRoleForAPersonalisedExperience Property1="Variant2" />
      </div>
    </div>
  ),
};
