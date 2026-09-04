import type { Meta, StoryObj } from '@storybook/react';
import { JobCards } from './JobCards';

const meta: Meta<typeof JobCards> = {
  title: 'Components/JobCards',
  component: JobCards,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **job cards**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`job cards\` |
| **Figma Node ID** | \`16:1981\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {
    "Property1": {
        "control": {
            "type": "select"
        },
        "options": [
            "Default",
            "hover"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof JobCards>;

export const Default: Story = {
  args: {
    children: 'job cards'
  },
};
