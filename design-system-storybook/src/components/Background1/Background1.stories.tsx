import type { Meta, StoryObj } from '@storybook/react';
import { Background1 } from './Background1';

const meta: Meta<typeof Background1> = {
  title: 'Components/Background1',
  component: Background1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background\` |
| **Figma Node ID** | \`30:113\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`Background\` |
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
      options: ["Background"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'Background',
  },
};

export default meta;
type Story = StoryObj<typeof Background1>;

export const Background: Story = {
  name: "Background",
  args: {
    variant: 'Background',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Background
        </p>
        <Background1 variant="Background" />
      </div>
    </div>
  ),
};
