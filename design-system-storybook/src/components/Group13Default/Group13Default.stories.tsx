import type { Meta, StoryObj } from '@storybook/react';
import { Group13Default } from './Group13Default';

const meta: Meta<typeof Group13Default> = {
  title: 'Components/Group13Default',
  component: Group13Default,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 13/Default**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 13/Default\` |
| **Figma Node ID** | \`16:704\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`Group 13/Default\` |
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
    "variant": {
      control: {
        type: 'select',
      },
      options: ["Group 13/Default"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'Group 13/Default',
  },
};

export default meta;
type Story = StoryObj<typeof Group13Default>;

export const Group_13_Default: Story = {
  name: "Group 13/Default",
  args: {
    variant: 'Group 13/Default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Group 13/Default
        </p>
        <Group13Default variant="Group 13/Default" />
      </div>
    </div>
  ),
};
