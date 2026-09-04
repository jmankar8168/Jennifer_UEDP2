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
| **Bound Variables** | \`{"fills":[{"type":"VARIABLE_ALIAS","id":"VariableID:1:3"}],"strokes":[{"type":"VARIABLE_ALIAS","id":"VariableID:1:4"}]}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Background1>;

export const Default: Story = {
  args: {
    children: 'Background'
  },
};
