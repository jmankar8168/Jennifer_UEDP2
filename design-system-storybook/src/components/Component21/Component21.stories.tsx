import type { Meta, StoryObj } from '@storybook/react';
import { Component21 } from './Component21';

const meta: Meta<typeof Component21> = {
  title: 'Components/Component21',
  component: Component21,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 21**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 21\` |
| **Figma Node ID** | \`35:471\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Variants** | \`call recieved\`, \`meet\`, \`missed call\` |
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
      options: ["call recieved","meet","missed call"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'call recieved',
  },
};

export default meta;
type Story = StoryObj<typeof Component21>;

export const call_recieved: Story = {
  name: "call recieved",
  args: {
    Property1: 'call recieved',
  },
};

export const meet: Story = {
  name: "meet",
  args: {
    Property1: 'meet',
  },
};

export const missed_call: Story = {
  name: "missed call",
  args: {
    Property1: 'missed call',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          call recieved
        </p>
        <Component21 Property1="call recieved" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          meet
        </p>
        <Component21 Property1="meet" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          missed call
        </p>
        <Component21 Property1="missed call" />
      </div>
    </div>
  ),
};
