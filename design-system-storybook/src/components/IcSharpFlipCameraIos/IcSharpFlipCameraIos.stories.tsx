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
| **Bound Variables** | \`{}\` |
`,
      },
    },
  },
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof IcSharpFlipCameraIos>;

export const Default: Story = {
  args: {
    children: 'ic:sharp-flip-camera-ios'
  },
};
