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
| **Bound Variables** | \`{"fills":[{"type":"VARIABLE_ALIAS","id":"VariableID:1:4"}]}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof BackgroundBorder>;

export const Default: Story = {
  args: {
    children: 'Background+Border'
  },
};
