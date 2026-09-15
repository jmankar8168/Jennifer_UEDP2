import type { Meta, StoryObj } from '@storybook/react';
import { Group11Group16 } from './Group11Group16';

const meta: Meta<typeof Group11Group16> = {
  title: 'Components/Group11Group16',
  component: Group11Group16,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 11 + Group 16**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 11 + Group 16\` |
| **Figma Node ID** | \`30:182\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`Jobs, State\`, \`Job, State\` |
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
    "Type": {
      control: {
        type: 'select',
      },
      options: ["Jobs, State","Job, State"],
      description: 'Figma variant property "Type"',
    },
  },
  args: {
    "Type": 'Jobs, State',
  },
};

export default meta;
type Story = StoryObj<typeof Group11Group16>;

export const Jobs__State: Story = {
  name: "Jobs, State",
  args: {
    Type: 'Jobs, State',
  },
};

export const Job__State: Story = {
  name: "Job, State",
  args: {
    Type: 'Job, State',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Jobs, State
        </p>
        <Group11Group16 Type="Jobs, State" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Job, State
        </p>
        <Group11Group16 Type="Job, State" />
      </div>
    </div>
  ),
};
