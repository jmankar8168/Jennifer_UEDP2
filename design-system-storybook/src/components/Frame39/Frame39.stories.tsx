import type { Meta, StoryObj } from '@storybook/react';
import { Frame39 } from './Frame39';

const meta: Meta<typeof Frame39> = {
  title: 'Components/Frame39',
  component: Frame39,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 39**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 39\` |
| **Figma Node ID** | \`16:1813\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`Default\`, \`Variant2\` |
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
      options: ["Default","Variant2"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof Frame39>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Property1: 'Default',
  },
};

export const Variant2: Story = {
  name: "Variant2",
  args: {
    Property1: 'Variant2',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <Frame39 Property1="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant2
        </p>
        <Frame39 Property1="Variant2" />
      </div>
    </div>
  ),
};
