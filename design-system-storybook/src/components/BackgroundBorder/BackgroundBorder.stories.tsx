import type { Meta, StoryObj } from '@storybook/react';
import { BackgroundBorder } from './BackgroundBorder';

const meta: Meta<typeof BackgroundBorder> = {
  title: 'Components/BackgroundBorder',
  component: BackgroundBorder,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background+Border**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background+Border\` |
| **Figma Node ID** | \`30:114\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`Background+Border\` |
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
      options: ["Background+Border"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'Background+Border',
  },
};

export default meta;
type Story = StoryObj<typeof BackgroundBorder>;

export const Background_Border: Story = {
  name: "Background+Border",
  args: {
    variant: 'Background+Border',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Background+Border
        </p>
        <BackgroundBorder variant="Background+Border" />
      </div>
    </div>
  ),
};
