import type { Meta, StoryObj } from '@storybook/react';
import { Component14 } from './Component14';

const meta: Meta<typeof Component14> = {
  title: 'Components/Component14',
  component: Component14,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 14**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 14\` |
| **Figma Node ID** | \`31:730\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Variants** | \`Blind, Type\`, \`Sighted, Type\`, \`Sighte, Type\` |
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
    "Vision": {
      control: {
        type: 'select',
      },
      options: ["Blind, Type","Sighted, Type","Sighte, Type"],
      description: 'Figma variant property "Vision"',
    },
  },
  args: {
    "Vision": 'Blind, Type',
  },
};

export default meta;
type Story = StoryObj<typeof Component14>;

export const Blind__Type: Story = {
  name: "Blind, Type",
  args: {
    Vision: 'Blind, Type',
  },
};

export const Sighted__Type: Story = {
  name: "Sighted, Type",
  args: {
    Vision: 'Sighted, Type',
  },
};

export const Sighte__Type: Story = {
  name: "Sighte, Type",
  args: {
    Vision: 'Sighte, Type',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Blind, Type
        </p>
        <Component14 Vision="Blind, Type" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Sighted, Type
        </p>
        <Component14 Vision="Sighted, Type" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Sighte, Type
        </p>
        <Component14 Vision="Sighte, Type" />
      </div>
    </div>
  ),
};
