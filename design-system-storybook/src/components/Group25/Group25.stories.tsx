import type { Meta, StoryObj } from '@storybook/react';
import { Group25 } from './Group25';

const meta: Meta<typeof Group25> = {
  title: 'Components/Group25',
  component: Group25,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Group 25**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Group 25\` |
| **Figma Node ID** | \`16:778\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`On\`, \`Off\` |
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
    "Availibility": {
      control: {
        type: 'select',
      },
      options: ["On","Off"],
      description: 'Figma variant property "Availibility"',
    },
  },
  args: {
    "Availibility": 'On',
  },
};

export default meta;
type Story = StoryObj<typeof Group25>;

export const On: Story = {
  name: "On",
  args: {
    Availibility: 'On',
  },
};

export const Off: Story = {
  name: "Off",
  args: {
    Availibility: 'Off',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          On
        </p>
        <Group25 Availibility="On" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Off
        </p>
        <Group25 Availibility="Off" />
      </div>
    </div>
  ),
};
