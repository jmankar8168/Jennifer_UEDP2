import type { Meta, StoryObj } from '@storybook/react';
import { VoiceNote } from './VoiceNote';

const meta: Meta<typeof VoiceNote> = {
  title: 'Components/VoiceNote',
  component: VoiceNote,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice note**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice note\` |
| **Figma Node ID** | \`16:970\` |
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
            "Variant2"
        ],
        "description": "Figma variant property \"Property 1\""
    }
}
};

export default meta;
type Story = StoryObj<typeof VoiceNote>;

export const Default: Story = {
  args: {
    children: 'voice note'
  },
};
