import type { Meta, StoryObj } from '@storybook/react';
import { Search1 } from './Search1';

const meta: Meta<typeof Search1> = {
  title: 'Components/Search1',
  component: Search1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **search**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`search\` |
| **Figma Node ID** | \`33:912\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`Default\`, \`Hover\` |
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
      options: ["Default","Hover"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof Search1>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Property1: 'Default',
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
          Default
        </p>
        <Search1 Property1="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Hover
        </p>
        <Search1 Property1="Hover" />
      </div>
    </div>
  ),
};
