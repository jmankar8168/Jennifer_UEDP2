import type { Meta, StoryObj } from '@storybook/react';
import { VoicePromptBlock } from './VoicePromptBlock';

const meta: Meta<typeof VoicePromptBlock> = {
  title: 'Components/VoicePromptBlock',
  component: VoicePromptBlock,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice prompt block**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice prompt block\` |
| **Figma Node ID** | \`16:2056\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
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
            "Variant2",
            "Variant3"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof VoicePromptBlock>;

export const Default: Story = {
  args: {
    children: 'voice prompt block'
  },
};
