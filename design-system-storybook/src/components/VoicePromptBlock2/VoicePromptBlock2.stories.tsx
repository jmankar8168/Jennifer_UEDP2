import type { Meta, StoryObj } from '@storybook/react';
import { VoicePromptBlock2 } from './VoicePromptBlock2';

const meta: Meta<typeof VoicePromptBlock2> = {
  title: 'Components/VoicePromptBlock2',
  component: VoicePromptBlock2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice prompt block**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice prompt block\` |
| **Figma Node ID** | \`16:2100\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`6\` |
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
            "Variant3",
            "Variant4",
            "Variant5",
            "Variant6"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof VoicePromptBlock2>;

export const Default: Story = {
  args: {
    children: 'voice prompt block'
  },
};
