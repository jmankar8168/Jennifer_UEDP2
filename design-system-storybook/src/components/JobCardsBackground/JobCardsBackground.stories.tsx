import type { Meta, StoryObj } from '@storybook/react';
import { JobCardsBackground } from './JobCardsBackground';

const meta: Meta<typeof JobCardsBackground> = {
  title: 'Components/JobCardsBackground',
  component: JobCardsBackground,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **job cards/Background**\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`job cards/Background\` |
| **Figma Node ID** | \`32:773\` |
| **Component Type** | \`COMPONENT\` |
| **Variants Count** | \`1\` |
| **Variants** | \`job cards/Background\` |
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
      options: ["job cards/Background"],
      description: 'Figma variant property "variant"',
    },
  },
  args: {
    "variant": 'job cards/Background',
  },
};

export default meta;
type Story = StoryObj<typeof JobCardsBackground>;

export const job_cards_Background: Story = {
  name: "job cards/Background",
  args: {
    variant: 'job cards/Background',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          job cards/Background
        </p>
        <JobCardsBackground variant="job cards/Background" />
      </div>
    </div>
  ),
};
