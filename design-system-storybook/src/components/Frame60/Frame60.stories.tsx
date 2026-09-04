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
| **Bound Variables** | \`{"fills":[{"type":"VARIABLE_ALIAS","id":"VariableID:1:36"}],"strokes":[{"type":"VARIABLE_ALIAS","id":"VariableID:1:4"}]}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Frame60>;

export const Default: Story = {
  args: {
    children: 'Frame 60'
  },
};
