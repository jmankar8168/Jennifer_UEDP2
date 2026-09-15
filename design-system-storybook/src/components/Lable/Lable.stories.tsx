import type { Meta, StoryObj } from '@storybook/react';
import { Lable } from './Lable';

const meta: Meta<typeof Lable> = {
  title: 'Components/Lable',
  component: Lable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Lable**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Lable\` |
| **Figma Node ID** | \`31:629\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`Default\`, \`Selected\` |
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
    "Text313": {
      control: {
        type: 'select',
      },
      options: ["Default","Selected"],
      description: 'Figma variant property "Text#31:3"',
    },
  },
  args: {
    "Text313": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof Lable>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Text313: 'Default',
  },
};

export const Selected: Story = {
  name: "Selected",
  args: {
    Text313: 'Selected',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <Lable Text313="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Selected
        </p>
        <Lable Text313="Selected" />
      </div>
    </div>
  ),
};
