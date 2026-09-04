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
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof MaterialSymbolsInfoOutline>;

export const Default: Story = {
  args: {
    children: 'material-symbols:info-outline'
  },
};
