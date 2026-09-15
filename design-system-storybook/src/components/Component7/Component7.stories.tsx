import type { Meta, StoryObj } from '@storybook/react';
import { Component7 } from './Component7';

const meta: Meta<typeof Component7> = {
  title: 'Components/Component7',
  component: Component7,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 7**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 7\` |
| **Figma Node ID** | \`16:747\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`Background, Property 2\`, \`Background+Border, Property 2\` |
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
      options: ["Background, Property 2","Background+Border, Property 2"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'Background, Property 2',
  },
};

export default meta;
type Story = StoryObj<typeof Component7>;

export const Background__Property_2: Story = {
  name: "Background, Property 2",
  args: {
    Property1: 'Background, Property 2',
  },
};

export const Background_Border__Property_2: Story = {
  name: "Background+Border, Property 2",
  args: {
    Property1: 'Background+Border, Property 2',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Background, Property 2
        </p>
        <Component7 Property1="Background, Property 2" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Background+Border, Property 2
        </p>
        <Component7 Property1="Background+Border, Property 2" />
      </div>
    </div>
  ),
};
