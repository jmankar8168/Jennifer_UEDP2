import type { Meta, StoryObj } from '@storybook/react';
import { Component10 } from './Component10';

const meta: Meta<typeof Component10> = {
  title: 'Components/Component10',
  component: Component10,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 10**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 10\` |
| **Figma Node ID** | \`30:180\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`1\` |
| **Variants** | \`Assist, State\` |
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
      options: ["Assist, State"],
      description: 'Figma variant property "Type"',
    },
  },
  args: {
    "Type": 'Assist, State',
  },
};

export default meta;
type Story = StoryObj<typeof Component10>;

export const Assist__State: Story = {
  name: "Assist, State",
  args: {
    Type: 'Assist, State',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Assist, State
        </p>
        <Component10 Type="Assist, State" />
      </div>
    </div>
  ),
};
