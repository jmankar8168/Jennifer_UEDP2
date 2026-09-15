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
| **Variants** | \`material-symbols-light:missed-video-call\` |
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
      options: ["material-symbols-light:missed-video-call"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'material-symbols-light:missed-video-call',
  },
};

export default meta;
type Story = StoryObj<typeof MaterialSymbolsLightMissedVideoCall>;

export const material_symbols_light_missed_video_call: Story = {
  name: "material-symbols-light:missed-video-call",
  args: {
    variant: 'material-symbols-light:missed-video-call',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          material-symbols-light:missed-video-call
        </p>
        <MaterialSymbolsLightMissedVideoCall variant="material-symbols-light:missed-video-call" />
      </div>
    </div>
  ),
};
