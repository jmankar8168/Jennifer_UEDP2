import type { Meta, StoryObj } from '@storybook/react';
import { VoicePromptBlock4 } from './VoicePromptBlock4';

const meta: Meta<typeof VoicePromptBlock4> = {
  title: 'Components/VoicePromptBlock4',
  component: VoicePromptBlock4,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice prompt block**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice prompt block\` |
| **Figma Node ID** | \`35:558\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`4\` |
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
            "2 lines",
            "no text",
            "listening"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof VoicePromptBlock4>;

export const Default: Story = {
  args: {
    children: 'voice prompt block'
  },
};
