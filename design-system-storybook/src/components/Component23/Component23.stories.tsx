import type { Meta, StoryObj } from '@storybook/react';
import { Component23 } from './Component23';

const meta: Meta<typeof Component23> = {
  title: 'Components/Component23',
  component: Component23,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 23**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 23\` |
| **Figma Node ID** | \`35:629\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Variants** | \`1\`, \`2\`, \`3\` |
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
      options: ["1","2","3"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": '1',
  },
};

export default meta;
type Story = StoryObj<typeof Component23>;

export const Variant_1: Story = {
  name: "1",
  args: {
    Property1: '1',
  },
};

export const Variant_2: Story = {
  name: "2",
  args: {
    Property1: '2',
  },
};

export const Variant_3: Story = {
  name: "3",
  args: {
    Property1: '3',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          1
        </p>
        <Component23 Property1="1" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          2
        </p>
        <Component23 Property1="2" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          3
        </p>
        <Component23 Property1="3" />
      </div>
    </div>
  ),
};
