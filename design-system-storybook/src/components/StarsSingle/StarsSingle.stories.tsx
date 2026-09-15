import type { Meta, StoryObj } from '@storybook/react';
import { StarsSingle } from './StarsSingle';

const meta: Meta<typeof StarsSingle> = {
  title: 'Components/StarsSingle',
  component: StarsSingle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **stars single**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`stars single\` |
| **Figma Node ID** | \`33:1049\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`fill\`, \`Default\` |
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
      options: ["fill","Default"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'fill',
  },
};

export default meta;
type Story = StoryObj<typeof StarsSingle>;

export const fill: Story = {
  name: "fill",
  args: {
    Property1: 'fill',
  },
};

export const Story_Default: Story = {
  name: "Default",
  args: {
    Property1: 'Default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          fill
        </p>
        <StarsSingle Property1="fill" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <StarsSingle Property1="Default" />
      </div>
    </div>
  ),
};
