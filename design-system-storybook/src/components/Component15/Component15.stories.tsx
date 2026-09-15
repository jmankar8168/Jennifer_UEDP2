import type { Meta, StoryObj } from '@storybook/react';
import { Component15 } from './Component15';

const meta: Meta<typeof Component15> = {
  title: 'Components/Component15',
  component: Component15,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 15**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 15\` |
| **Figma Node ID** | \`32:741\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Variants** | \`selected\`, \`hover\`, \`disabled\` |
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
      options: ["selected","hover","disabled"],
      description: 'Figma variant property "Type"',
    },
  },
  args: {
    "Type": 'selected',
  },
};

export default meta;
type Story = StoryObj<typeof Component15>;

export const selected: Story = {
  name: "selected",
  args: {
    Type: 'selected',
  },
};

export const hover: Story = {
  name: "hover",
  args: {
    Type: 'hover',
  },
};

export const disabled: Story = {
  name: "disabled",
  args: {
    Type: 'disabled',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          selected
        </p>
        <Component15 Type="selected" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          hover
        </p>
        <Component15 Type="hover" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          disabled
        </p>
        <Component15 Type="disabled" />
      </div>
    </div>
  ),
};
