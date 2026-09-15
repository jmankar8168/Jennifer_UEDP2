import type { Meta, StoryObj } from '@storybook/react';
import { Component12 } from './Component12';

const meta: Meta<typeof Component12> = {
  title: 'Components/Component12',
  component: Component12,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 12**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 12\` |
| **Figma Node ID** | \`30:183\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`1\` |
| **Variants** | \`Support, State\` |
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
      options: ["Support, State"],
      description: 'Figma variant property "Type"',
    },
  },
  args: {
    "Type": 'Support, State',
  },
};

export default meta;
type Story = StoryObj<typeof Component12>;

export const Support__State: Story = {
  name: "Support, State",
  args: {
    Type: 'Support, State',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Support, State
        </p>
        <Component12 Type="Support, State" />
      </div>
    </div>
  ),
};
