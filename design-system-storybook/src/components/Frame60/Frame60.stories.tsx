import type { Meta, StoryObj } from '@storybook/react';
import { Frame60 } from './Frame60';

const meta: Meta<typeof Frame60> = {
  title: 'Components/Frame60',
  component: Frame60,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 60**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 60\` |
| **Figma Node ID** | \`34:1222\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`Frame 60\` |
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
    "variant": {
      control: {
        type: 'select',
      },
      options: ["Frame 60"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'Frame 60',
  },
};

export default meta;
type Story = StoryObj<typeof Frame60>;

export const Frame_60: Story = {
  name: "Frame 60",
  args: {
    variant: 'Frame 60',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Frame 60
        </p>
        <Frame60 variant="Frame 60" />
      </div>
    </div>
  ),
};
