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
| **Variants** | \`Default\`, \`selected\`, \`Command selected\`, \`default\` |
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
    "State": {
      control: {
        type: 'select',
      },
      options: ["Default","selected","Command selected","default"],
      description: 'Figma variant property "State"',
    },
  },
  args: {
    "State": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof VoiceNote2>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    State: 'Default',
  },
};

export const selected: Story = {
  name: "selected",
  args: {
    State: 'selected',
  },
};

export const Command_selected: Story = {
  name: "Command selected",
  args: {
    State: 'Command selected',
  },
};

export const Story_default: Story = {
  name: "default",
  args: {
    State: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <VoiceNote2 State="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          selected
        </p>
        <VoiceNote2 State="selected" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Command selected
        </p>
        <VoiceNote2 State="Command selected" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          default
        </p>
        <VoiceNote2 State="default" />
      </div>
    </div>
  ),
};
