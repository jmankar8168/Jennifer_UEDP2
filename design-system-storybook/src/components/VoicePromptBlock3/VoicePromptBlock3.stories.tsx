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
| **Variants** | \`cancel session\`, \`rate\` |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0d0d0d' },
        { name: 'surface', value: '#171717' },
      ],
    },
  },
  argTypes: {
    "Property1": {
      control: {
        type: 'select',
      },
      options: ["cancel session","rate"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'cancel session',
  },
};

export default meta;
type Story = StoryObj<typeof VoicePromptBlock3>;

export const cancel_session: Story = {
  name: "cancel session",
  args: {
    Property1: 'cancel session',
  },
};

export const rate: Story = {
  name: "rate",
  args: {
    Property1: 'rate',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          cancel session
        </p>
        <VoicePromptBlock3 Property1="cancel session" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          rate
        </p>
        <VoicePromptBlock3 Property1="rate" />
      </div>
    </div>
  ),
};
