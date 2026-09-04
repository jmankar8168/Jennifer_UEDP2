import type { Meta, StoryObj } from '@storybook/react';
import { VoicePromptBlock3 } from './VoicePromptBlock3';

const meta: Meta<typeof VoicePromptBlock3> = {
  title: 'Components/VoicePromptBlock3',
  component: VoicePromptBlock3,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice prompt block**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice prompt block\` |
| **Figma Node ID** | \`33:1025\` |
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
            "cancel session",
            "rate"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof VoicePromptBlock3>;

export const Default: Story = {
  args: {
    children: 'voice prompt block'
  },
};
