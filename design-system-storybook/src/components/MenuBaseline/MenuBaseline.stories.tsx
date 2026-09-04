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
| **Bound Variables** | \`{"fills":[{"type":"VARIABLE_ALIAS","id":"VariableID:1:3"}]}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof MenuBaseline>;

export const Default: Story = {
  args: {
    children: 'Menu (baseline)'
  },
};
