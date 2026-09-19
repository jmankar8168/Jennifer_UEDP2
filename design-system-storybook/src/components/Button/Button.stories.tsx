import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Button\` (\`Background\`) |
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
type Story = StoryObj<typeof Button>;

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
    State: 'Disabled',
    disabled: true
  }
};

export const Hover: Story = {
  args: {
    Text200: 'HOVER STATE',
    State: 'Hover'
  }
};

export const Default2: Story = {
  args: {
    Text200: 'DARK OUTLINE',
    State: 'Default 2'
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '342px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          DEFAULT (16:646)
        </p>
        <Button State="Default" Text200="BUTTON" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          SELECTED (16:648)
        </p>
        <Button State="Selected" Text200="SELECTED" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          DISABLED (30:136)
        </p>
        <Button State="Disabled" Text200="DISABLED" disabled />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          HOVER (30:147)
        </p>
        <Button State="Hover" Text200="HOVER STATE" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          DEFAULT 2 / OUTLINE (30:149)
        </p>
        <Button State="Default 2" Text200="DEFAULT 2" />
      </div>
    </div>
  )
};
