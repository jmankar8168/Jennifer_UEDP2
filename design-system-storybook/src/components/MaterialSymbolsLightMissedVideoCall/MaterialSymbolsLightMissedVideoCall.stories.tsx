import type { Meta, StoryObj } from '@storybook/react';
import { MaterialSymbolsLightMissedVideoCall } from './MaterialSymbolsLightMissedVideoCall';

const meta: Meta<typeof MaterialSymbolsLightMissedVideoCall> = {
  title: 'Components/MaterialSymbolsLightMissedVideoCall',
  component: MaterialSymbolsLightMissedVideoCall,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **material-symbols-light:missed-video-call**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`material-symbols-light:missed-video-call\` |
| **Figma Node ID** | \`16:743\` |
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
type Story = StoryObj<typeof MaterialSymbolsLightMissedVideoCall>;

export const Default: Story = {
  args: {
    children: 'material-symbols-light:missed-video-call'
  },
};
