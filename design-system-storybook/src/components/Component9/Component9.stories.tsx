import type { Meta, StoryObj } from '@storybook/react';
import { Component9 } from './Component9';

const meta: Meta<typeof Component9> = {
  title: 'Components/Component9',
  component: Component9,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Component 9**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Component 9\` |
| **Figma Node ID** | \`31:653\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Variants** | \`OPTION B — Sighted user (unselected)\`, \`Variant2\`, \`Variant3\` |
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
      options: ["OPTION B — Sighted user (unselected)","Variant2","Variant3"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'OPTION B — Sighted user (unselected)',
  },
};

export default meta;
type Story = StoryObj<typeof Component9>;

export const OPTION_B___Sighted_user__unselected: Story = {
  name: "OPTION B — Sighted user (unselected)",
  args: {
    Property1: 'OPTION B — Sighted user (unselected)',
  },
};

export const Variant2: Story = {
  name: "Variant2",
  args: {
    Property1: 'Variant2',
  },
};

export const Variant3: Story = {
  name: "Variant3",
  args: {
    Property1: 'Variant3',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          OPTION B — Sighted user (unselected)
        </p>
        <Component9 Property1="OPTION B — Sighted user (unselected)" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant2
        </p>
        <Component9 Property1="Variant2" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant3
        </p>
        <Component9 Property1="Variant3" />
      </div>
    </div>
  ),
};
