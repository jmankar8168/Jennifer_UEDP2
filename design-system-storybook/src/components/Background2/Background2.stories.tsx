import type { Meta, StoryObj } from '@storybook/react';
import { Background2 } from './Background2';

const meta: Meta<typeof Background2> = {
  title: 'Components/Background2',
  component: Background2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background\` |
| **Figma Node ID** | \`33:985\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`No\`, \`Yes\` |
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
      options: ["No","Yes"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'No',
  },
};

export default meta;
type Story = StoryObj<typeof Background2>;

export const No: Story = {
  name: "No",
  args: {
    Property1: 'No',
  },
};

export const Yes: Story = {
  name: "Yes",
  args: {
    Property1: 'Yes',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          No
        </p>
        <Background2 Property1="No" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Yes
        </p>
        <Background2 Property1="Yes" />
      </div>
    </div>
  ),
};
