import type { Meta, StoryObj } from '@storybook/react';
import { Background } from './Background';

const meta: Meta<typeof Background> = {
  title: 'Components/Background',
  component: Background,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background\` |
| **Figma Node ID** | \`16:645\` |
| **Component Type** | \`COMPONENT_SET\` (Button) |
| **Variants Count** | 5 |
| **Typography** | \`Space Mono\`, 11px, 700 Bold, Letter-spacing: 1.76px, Uppercase |
| **Dimensions** | 342px width × 56px height |
| **Bound Variables** | Fills (\`VariableID:1:4\`, \`VariableID:17:2340\`, \`VariableID:1:3\`), Strokes (\`VariableID:1:4\`) |
        `,
      },
    },
  },
  argTypes: {
    Text200: {
      control: { type: 'text' },
      description: 'Button label text',
      defaultValue: 'BUTTON'
    },
    State: {
      control: { type: 'select' },
      options: ['Default', 'Selected', 'Disabled', 'Hover', 'Default 2'],
      description: 'Visual state variant matching Figma'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled HTML attribute'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Default: Story = {
  args: {
    Text200: 'BUTTON',
    State: 'Default'
  }
};

export const Selected: Story = {
  args: {
    Text200: 'SELECTED STATE',
    State: 'Selected'
  }
};

export const Disabled: Story = {
  args: {
    Text200: 'DISABLED BUTTON',
    State: 'Disabled'
  }
};

export const HoverState: Story = {
  args: {
    Text200: 'HOVER STATE',
    State: 'Hover'
  }
};

export const DarkOutline: Story = {
  args: {
    Text200: 'DEFAULT 2 (DARK OUTLINE)',
    State: 'Default 2'
  }
};

export const AllStatesGallery: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '360px', padding: '24px', backgroundColor: '#0F172A', borderRadius: '12px' }}>
      <div>
        <div style={{ color: '#94A3B8', fontSize: '12px', marginBottom: '8px', fontFamily: 'monospace' }}>Default (White)</div>
        <Background State="Default" Text200="CONTINUE" />
      </div>
      <div>
        <div style={{ color: '#94A3B8', fontSize: '12px', marginBottom: '8px', fontFamily: 'monospace' }}>Selected (Lime Accent)</div>
        <Background State="Selected" Text200="CONFIRMED" />
      </div>
      <div>
        <div style={{ color: '#94A3B8', fontSize: '12px', marginBottom: '8px', fontFamily: 'monospace' }}>Disabled (Muted)</div>
        <Background State="Disabled" Text200="PLEASE WAIT" />
      </div>
      <div>
        <div style={{ color: '#94A3B8', fontSize: '12px', marginBottom: '8px', fontFamily: 'monospace' }}>Hover (Gray + White Border)</div>
        <Background State="Hover" Text200="HOVER STATE" />
      </div>
      <div>
        <div style={{ color: '#94A3B8', fontSize: '12px', marginBottom: '8px', fontFamily: 'monospace' }}>Default 2 (Black + White Border)</div>
        <Background State="Default 2" Text200="BACK TO HOME" />
      </div>
    </div>
  )
};
