import type { Meta, StoryObj } from '@storybook/react';
import { Component11 } from './Component11';

const meta: Meta<typeof Component11> = {
  title: 'Components/Component11',
  component: Component11,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 11**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 11\` |
| **Figma Node ID** | \`30:181\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`Scan, State\`, \`Sca, State\` |
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
      options: ["Scan, State","Sca, State"],
      description: 'Figma variant property "Type"',
    },
  },
  args: {
    "Type": 'Scan, State',
  },
};

export default meta;
type Story = StoryObj<typeof Component11>;

export const Scan__State: Story = {
  name: "Scan, State",
  args: {
    Type: 'Scan, State',
  },
};

export const Sca__State: Story = {
  name: "Sca, State",
  args: {
    Type: 'Sca, State',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Scan, State
        </p>
        <Component11 Type="Scan, State" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Sca, State
        </p>
        <Component11 Type="Sca, State" />
      </div>
    </div>
  ),
};
