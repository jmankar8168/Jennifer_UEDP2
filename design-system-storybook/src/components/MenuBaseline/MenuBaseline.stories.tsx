import type { Meta, StoryObj } from '@storybook/react';
import { MenuBaseline } from './MenuBaseline';

const meta: Meta<typeof MenuBaseline> = {
  title: 'Components/MenuBaseline',
  component: MenuBaseline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Menu (baseline)**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Menu (baseline)\` |
| **Figma Node ID** | \`40:2217\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`Menu (baseline)\` |
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
      options: ["Menu (baseline)"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'Menu (baseline)',
  },
};

export default meta;
type Story = StoryObj<typeof MenuBaseline>;

export const Menu__baseline: Story = {
  name: "Menu (baseline)",
  args: {
    variant: 'Menu (baseline)',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Menu (baseline)
        </p>
        <MenuBaseline variant="Menu (baseline)" />
      </div>
    </div>
  ),
};
