import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **Tab**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`Tab\` |
| **Figma Node ID** | \`33:861\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants Count** | \`9\` |
| **Variants** | \`Default\`, \`Variant9\`, \`Variant8\`, \`Variant7\`, \`Variant6\`, \`Variant5\`, \`Variant4\`, \`Variant3\`, \`Variant2\` |
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
      options: ["Default","Variant9","Variant8","Variant7","Variant6","Variant5","Variant4","Variant3","Variant2"],
      description: 'Figma variant property "Property 1"',
    },
  },
  args: {
    "Property1": 'Default',
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Story_Default: Story = {
  name: "Default",
  args: {
    Property1: 'Default',
  },
};

export const Variant9: Story = {
  name: "Variant9",
  args: {
    Property1: 'Variant9',
  },
};

export const Variant8: Story = {
  name: "Variant8",
  args: {
    Property1: 'Variant8',
  },
};

export const Variant7: Story = {
  name: "Variant7",
  args: {
    Property1: 'Variant7',
  },
};

export const Variant6: Story = {
  name: "Variant6",
  args: {
    Property1: 'Variant6',
  },
};

export const Variant5: Story = {
  name: "Variant5",
  args: {
    Property1: 'Variant5',
  },
};

export const Variant4: Story = {
  name: "Variant4",
  args: {
    Property1: 'Variant4',
  },
};

export const Variant3: Story = {
  name: "Variant3",
  args: {
    Property1: 'Variant3',
  },
};

export const Variant2: Story = {
  name: "Variant2",
  args: {
    Property1: 'Variant2',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Default
        </p>
        <Tab Property1="Default" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant9
        </p>
        <Tab Property1="Variant9" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant8
        </p>
        <Tab Property1="Variant8" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant7
        </p>
        <Tab Property1="Variant7" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant6
        </p>
        <Tab Property1="Variant6" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant5
        </p>
        <Tab Property1="Variant5" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant4
        </p>
        <Tab Property1="Variant4" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant3
        </p>
        <Tab Property1="Variant3" />
      </div>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          Variant2
        </p>
        <Tab Property1="Variant2" />
      </div>
    </div>
  ),
};
