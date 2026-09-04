import type { Meta, StoryObj } from '@storybook/react';
import { VoiceNote2 } from './VoiceNote2';

const meta: Meta<typeof VoiceNote2> = {
  title: 'Components/VoiceNote2',
  component: VoiceNote2,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice note**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice note\` |
| **Figma Node ID** | \`34:1171\` |
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
            "Default",
            "selected",
            "Command selected",
            "default"
        ],
        "description": "Figma variant property \"State\""
    }
}
};

export default meta;
type Story = StoryObj<typeof VoiceNote2>;

export const Default: Story = {
  args: {
    children: 'voice note'
  },
};
