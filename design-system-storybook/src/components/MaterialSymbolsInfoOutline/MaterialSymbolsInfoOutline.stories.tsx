import type { Meta, StoryObj } from '@storybook/react';
import { MaterialSymbolsInfoOutline } from './MaterialSymbolsInfoOutline';

const meta: Meta<typeof MaterialSymbolsInfoOutline> = {
  title: 'Components/MaterialSymbolsInfoOutline',
  component: MaterialSymbolsInfoOutline,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **material-symbols:info-outline**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`material-symbols:info-outline\` |
| **Figma Node ID** | \`16:745\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`material-symbols:info-outline\` |
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
      options: ["material-symbols:info-outline"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'material-symbols:info-outline',
  },
};

export default meta;
type Story = StoryObj<typeof MaterialSymbolsInfoOutline>;

export const material_symbols_info_outline: Story = {
  name: "material-symbols:info-outline",
  args: {
    variant: 'material-symbols:info-outline',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          material-symbols:info-outline
        </p>
        <MaterialSymbolsInfoOutline variant="material-symbols:info-outline" />
      </div>
    </div>
  ),
};
