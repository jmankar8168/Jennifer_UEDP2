import type { Meta, StoryObj } from '@storybook/react';
import { Component16 } from './Component16';

const meta: Meta<typeof Component16> = {
  title: 'Components/Component16',
  component: Component16,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 16**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 16\` |
| **Figma Node ID** | \`33:850\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Variants** | \`selected\`, \`default\`, \`Hover\` |
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
      options: ["selected","default","Hover"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'selected',
  },
};

export default meta;
type Story = StoryObj<typeof Component16>;

export const selected: Story = {
  name: "selected",
  args: {
    Property1: 'selected',
  },
};

export const Story_default: Story = {
  name: "default",
  args: {
    Property1: 'default',
  },
};

export const Hover: Story = {
  name: "Hover",
  args: {
    Property1: 'Hover',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          selected
        </p>
        <Component16 Property1="selected" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          default
        </p>
        <Component16 Property1="default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Hover
        </p>
        <Component16 Property1="Hover" />
      </div>
    </div>
  ),
};
