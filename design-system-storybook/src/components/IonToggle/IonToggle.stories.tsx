import type { Meta, StoryObj } from '@storybook/react';
import { IonToggle } from './IonToggle';

const meta: Meta<typeof IonToggle> = {
  title: 'Components/IonToggle',
  component: IonToggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **ion:toggle**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`ion:toggle\` |
| **Figma Node ID** | \`34:1156\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`2\` |
| **Variants** | \`off\`, \`on\` |
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
      options: ["off","on"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'off',
  },
};

export default meta;
type Story = StoryObj<typeof IonToggle>;

export const off: Story = {
  name: "off",
  args: {
    Property1: 'off',
  },
};

export const on: Story = {
  name: "on",
  args: {
    Property1: 'on',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          off
        </p>
        <IonToggle Property1="off" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          on
        </p>
        <IonToggle Property1="on" />
      </div>
    </div>
  ),
};
