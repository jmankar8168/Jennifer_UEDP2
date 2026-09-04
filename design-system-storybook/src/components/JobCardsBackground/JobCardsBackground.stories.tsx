import type { Meta, StoryObj } from '@storybook/react';
import { JobCardsBackground } from './JobCardsBackground';

const meta: Meta<typeof JobCardsBackground> = {
  title: 'Components/JobCardsBackground',
  component: JobCardsBackground,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **job cards/Background**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`job cards/Background\` |
| **Figma Node ID** | \`32:773\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Bound Variables** | \`{"fills":[{"type":"VARIABLE_ALIAS","id":"VariableID:1:36"}]}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof JobCardsBackground>;

export const Default: Story = {
  args: {
    children: 'job cards/Background'
  },
};
