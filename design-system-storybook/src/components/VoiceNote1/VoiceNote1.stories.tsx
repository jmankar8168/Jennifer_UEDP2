import type { Meta, StoryObj } from '@storybook/react';
import { VoiceNote1 } from './VoiceNote1';

const meta: Meta<typeof VoiceNote1> = {
  title: 'Components/VoiceNote1',
  component: VoiceNote1,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice note**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice note\` |
| **Figma Node ID** | \`16:977\` |
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
type Story = StoryObj<typeof VoiceNote1>;

export const Default: Story = {
  args: {
    children: 'voice note'
  },
};
