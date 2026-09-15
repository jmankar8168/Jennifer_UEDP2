import type { Meta, StoryObj } from '@storybook/react';
import { Camera } from './Camera';

const meta: Meta<typeof Camera> = {
  title: 'Components/Camera',
  component: Camera,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Camera**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Camera\` |
| **Figma Node ID** | \`16:1926\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`3\` |
| **Variants** | \`Default\`, \`End Hover\`, \`Flip Hover\` |
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
    "Type": {
      control: {
        type: 'select',
      },
      options: ["Default","End Hover","Flip Hover"],
      description: 'Figma variant property "Type"',
    },
  },
  args: {
    "Type": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof Camera>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Type: 'Default',
  },
};

export const End_Hover: Story = {
  name: "End Hover",
  args: {
    Type: 'End Hover',
  },
};

export const Flip_Hover: Story = {
  name: "Flip Hover",
  args: {
    Type: 'Flip Hover',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <Camera Type="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          End Hover
        </p>
        <Camera Type="End Hover" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Flip Hover
        </p>
        <Camera Type="Flip Hover" />
      </div>
    </div>
  ),
};
