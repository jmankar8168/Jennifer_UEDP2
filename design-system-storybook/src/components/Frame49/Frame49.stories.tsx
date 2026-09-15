import type { Meta, StoryObj } from '@storybook/react';
import { Frame49 } from './Frame49';

const meta: Meta<typeof Frame49> = {
  title: 'Components/Frame49',
  component: Frame49,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Frame 49**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Frame 49\` |
| **Figma Node ID** | \`33:924\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`Frame 49\` |
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
      options: ["Frame 49"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'Frame 49',
  },
};

export default meta;
type Story = StoryObj<typeof Frame49>;

export const Frame_49: Story = {
  name: "Frame 49",
  args: {
    variant: 'Frame 49',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Frame 49
        </p>
        <Frame49 variant="Frame 49" />
      </div>
    </div>
  ),
};
