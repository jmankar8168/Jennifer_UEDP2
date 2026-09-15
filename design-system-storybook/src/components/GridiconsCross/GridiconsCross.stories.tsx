import type { Meta, StoryObj } from '@storybook/react';
import { GridiconsCross } from './GridiconsCross';

const meta: Meta<typeof GridiconsCross> = {
  title: 'Components/GridiconsCross',
  component: GridiconsCross,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **gridicons:cross**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`gridicons:cross\` |
| **Figma Node ID** | \`16:739\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`gridicons:cross\` |
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
      options: ["gridicons:cross"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'gridicons:cross',
  },
};

export default meta;
type Story = StoryObj<typeof GridiconsCross>;

export const gridicons_cross: Story = {
  name: "gridicons:cross",
  args: {
    variant: 'gridicons:cross',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          gridicons:cross
        </p>
        <GridiconsCross variant="gridicons:cross" />
      </div>
    </div>
  ),
};
