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
| **Variants** | \`Default\`, \`Variant2\`, \`Variant3\`, \`Variant4\`, \`Variant5\`, \`Variant6\` |
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
      options: ["Default","Variant2","Variant3","Variant4","Variant5","Variant6"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof VoicePromptBlock2>;

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

export const Variant4: Story = {
  name: "Variant4",
  args: {
    Property1: 'Variant4',
  },
};

export const Variant5: Story = {
  name: "Variant5",
  args: {
    Property1: 'Variant5',
  },
};

export const Variant6: Story = {
  name: "Variant6",
  args: {
    Property1: 'Variant6',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <VoicePromptBlock2 Property1="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant2
        </p>
        <VoicePromptBlock2 Property1="Variant2" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant3
        </p>
        <VoicePromptBlock2 Property1="Variant3" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant4
        </p>
        <VoicePromptBlock2 Property1="Variant4" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant5
        </p>
        <VoicePromptBlock2 Property1="Variant5" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant6
        </p>
        <VoicePromptBlock2 Property1="Variant6" />
      </div>
    </div>
  ),
};
