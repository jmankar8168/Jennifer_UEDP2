import type { Meta, StoryObj } from '@storybook/react';
import { IcSharpFlipCameraIos } from './IcSharpFlipCameraIos';

const meta: Meta<typeof IcSharpFlipCameraIos> = {
  title: 'Components/IcSharpFlipCameraIos',
  component: IcSharpFlipCameraIos,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **ic:sharp-flip-camera-ios**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`ic:sharp-flip-camera-ios\` |
| **Figma Node ID** | \`16:741\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`ic:sharp-flip-camera-ios\` |
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
    "variant": {
      control: {
        type: 'select',
      },
      options: ["ic:sharp-flip-camera-ios"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'ic:sharp-flip-camera-ios',
  },
};

export default meta;
type Story = StoryObj<typeof IcSharpFlipCameraIos>;

export const ic_sharp_flip_camera_ios: Story = {
  name: "ic:sharp-flip-camera-ios",
  args: {
    variant: 'ic:sharp-flip-camera-ios',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          ic:sharp-flip-camera-ios
        </p>
        <IcSharpFlipCameraIos variant="ic:sharp-flip-camera-ios" />
      </div>
    </div>
  ),
};
