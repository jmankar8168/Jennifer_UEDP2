import type { Meta, StoryObj } from '@storybook/react';
import { VoicePromptBlock1 } from './VoicePromptBlock1';

const meta: Meta<typeof VoicePromptBlock1> = {
  title: 'Components/VoicePromptBlock1',
  component: VoicePromptBlock1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice prompt block**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice prompt block\` |
| **Figma Node ID** | \`16:2078\` |
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
type Story = StoryObj<typeof VoicePromptBlock1>;

export const Default: Story = {
  args: {
    children: 'voice prompt block'
  },
};
