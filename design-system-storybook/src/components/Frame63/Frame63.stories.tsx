import type { Meta, StoryObj } from '@storybook/react';
import { Frame63 } from './Frame63';

const meta: Meta<typeof Frame63> = {
  title: 'Components/Frame63',
  component: Frame63,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 63**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 63\` |
| **Figma Node ID** | \`35:483\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Variants** | \`missed call\`, \`meeting\`, \`recieved\` |
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
      options: ["missed call","meeting","recieved"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'missed call',
  },
};

export default meta;
type Story = StoryObj<typeof Frame63>;

export const missed_call: Story = {
  name: "missed call",
  args: {
    Property1: 'missed call',
  },
};

export const meeting: Story = {
  name: "meeting",
  args: {
    Property1: 'meeting',
  },
};

export const recieved: Story = {
  name: "recieved",
  args: {
    Property1: 'recieved',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          missed call
        </p>
        <Frame63 Property1="missed call" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          meeting
        </p>
        <Frame63 Property1="meeting" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          recieved
        </p>
        <Frame63 Property1="recieved" />
      </div>
    </div>
  ),
};
