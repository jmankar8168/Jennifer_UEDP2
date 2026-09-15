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
| **Variants** | \`Default\`, \`Variant2\`, \`Variant3\` |
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
      options: ["Default","Variant2","Variant3"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof VoicePromptBlock>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Property1: 'Default',
  },
};

export const Variant2: Story = {
  name: "Variant2",
  args: {
    Property1: 'Variant2',
  },
};

export const Variant3: Story = {
  name: "Variant3",
  args: {
    Property1: 'Variant3',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <VoicePromptBlock Property1="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant2
        </p>
        <VoicePromptBlock Property1="Variant2" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant3
        </p>
        <VoicePromptBlock Property1="Variant3" />
      </div>
    </div>
  ),
};
