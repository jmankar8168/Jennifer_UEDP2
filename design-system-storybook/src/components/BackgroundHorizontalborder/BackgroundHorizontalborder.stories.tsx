import type { Meta, StoryObj } from '@storybook/react';
import { BackgroundHorizontalborder } from './BackgroundHorizontalborder';

const meta: Meta<typeof BackgroundHorizontalborder> = {
  title: 'Components/BackgroundHorizontalborder',
  component: BackgroundHorizontalborder,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Background+HorizontalBorder**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Background+HorizontalBorder\` |
| **Figma Node ID** | \`30:262\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`9\` |
| **Variants** | \`Default\`, \`assist hover\`, \`scan hover\`, \`jobs hover\`, \`support hover\`, \`assist selected\`, \`scan selected\`, \`jobs selected\`, \`support selected\` |
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
      options: ["Default","assist hover","scan hover","jobs hover","support hover","assist selected","scan selected","jobs selected","support selected"],
      description: 'Figma variant property "Type"',
    },
  },
  args: {
    "Type": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof BackgroundHorizontalborder>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Type: 'Default',
  },
};

export const assist_hover: Story = {
  name: "assist hover",
  args: {
    Type: 'assist hover',
  },
};

export const scan_hover: Story = {
  name: "scan hover",
  args: {
    Type: 'scan hover',
  },
};

export const jobs_hover: Story = {
  name: "jobs hover",
  args: {
    Type: 'jobs hover',
  },
};

export const support_hover: Story = {
  name: "support hover",
  args: {
    Type: 'support hover',
  },
};

export const assist_selected: Story = {
  name: "assist selected",
  args: {
    Type: 'assist selected',
  },
};

export const scan_selected: Story = {
  name: "scan selected",
  args: {
    Type: 'scan selected',
  },
};

export const jobs_selected: Story = {
  name: "jobs selected",
  args: {
    Type: 'jobs selected',
  },
};

export const support_selected: Story = {
  name: "support selected",
  args: {
    Type: 'support selected',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <BackgroundHorizontalborder Type="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          assist hover
        </p>
        <BackgroundHorizontalborder Type="assist hover" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          scan hover
        </p>
        <BackgroundHorizontalborder Type="scan hover" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          jobs hover
        </p>
        <BackgroundHorizontalborder Type="jobs hover" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          support hover
        </p>
        <BackgroundHorizontalborder Type="support hover" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          assist selected
        </p>
        <BackgroundHorizontalborder Type="assist selected" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          scan selected
        </p>
        <BackgroundHorizontalborder Type="scan selected" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          jobs selected
        </p>
        <BackgroundHorizontalborder Type="jobs selected" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          support selected
        </p>
        <BackgroundHorizontalborder Type="support selected" />
      </div>
    </div>
  ),
};
