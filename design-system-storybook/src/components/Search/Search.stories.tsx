import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **search**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`search\` |
| **Figma Node ID** | \`16:963\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`4\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "State": {
        "control": {
            "type": "select"
        },
        "options": [
            "Hover",
            "Default",
            "selected",
            "selected with list"
        ],
        "description": "Figma variant property \"State\""
    }
}
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    children: 'search'
  },
};
