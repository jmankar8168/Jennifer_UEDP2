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
| **Variants** | \`Default\`, \`2 lines\`, \`no text\`, \`listening\` |
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
      options: ["Default","2 lines","no text","listening"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof VoicePromptBlock4>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Property1: 'Default',
  },
};

export const Variant_2_lines: Story = {
  name: "2 lines",
  args: {
    Property1: '2 lines',
  },
};

export const no_text: Story = {
  name: "no text",
  args: {
    Property1: 'no text',
  },
};

export const listening: Story = {
  name: "listening",
  args: {
    Property1: 'listening',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <VoicePromptBlock4 Property1="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          2 lines
        </p>
        <VoicePromptBlock4 Property1="2 lines" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          no text
        </p>
        <VoicePromptBlock4 Property1="no text" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          listening
        </p>
        <VoicePromptBlock4 Property1="listening" />
      </div>
    </div>
  ),
};
