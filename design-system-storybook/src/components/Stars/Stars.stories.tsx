import type { Meta, StoryObj } from '@storybook/react';
import { Stars } from './Stars';

const meta: Meta<typeof Stars> = {
  title: 'Components/Stars',
  component: Stars,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **stars**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`stars\` |
| **Figma Node ID** | \`33:1062\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`6\` |
| **Variants** | \`1\`, \`2\`, \`3\`, \`4\`, \`5\`, \`Default\` |
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
      options: ["1","2","3","4","5","Default"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": '1',
  },
};

export default meta;
type Story = StoryObj<typeof Stars>;

export const Variant_1: Story = {
  name: "1",
  args: {
    Property1: '1',
  },
};

export const Variant_2: Story = {
  name: "2",
  args: {
    Property1: '2',
  },
};

export const Variant_3: Story = {
  name: "3",
  args: {
    Property1: '3',
  },
};

export const Variant_4: Story = {
  name: "4",
  args: {
    Property1: '4',
  },
};

export const Variant_5: Story = {
  name: "5",
  args: {
    Property1: '5',
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
          1
        </p>
        <Stars Property1="1" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          2
        </p>
        <Stars Property1="2" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          3
        </p>
        <Stars Property1="3" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          4
        </p>
        <Stars Property1="4" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          5
        </p>
        <Stars Property1="5" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <Stars Property1="Default" />
      </div>
    </div>
  ),
};
