import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { OptionsButton } from './OptionsButton';

const meta: Meta<typeof OptionsButton> = {
  title: 'Components/Options Button',
  component: OptionsButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **help type options — large touch targets** (Options Button)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`help type options — large touch targets\` |
| **Component Name** | \`Options Button\` |
| **Figma Node ID** | \`16:841\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants** | \`Default\` (16:842), \`Hover\` (16:846), \`job cards/Default\` (30:155), \`job cards/Hover\` (30:170) |
| **Dimensions** | Standard: 342px × 82px \| Job Cards: 342px × 70px |
| **Typography** | Tag: \`Space Mono\` 10px Bold Uppercase (#B7FF4D) \| Description: \`Source Sans 3\` 11px Regular (#FFFFFF) |
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
    State: {
      control: {
        type: 'select',
      },
      options: [
        'Default',
        'Hover',
        'job cards/Default',
        'job cards/Hover',
      ],
      description: 'Figma variant property "State"',
    },
    tag: {
      control: 'text',
      description: 'Top badge/tag text rendered in Space Mono',
    },
    title: {
      control: 'text',
      description: 'Main descriptive text rendered in Source Sans 3',
    },
    interactive: {
      control: 'boolean',
      description: 'When enabled, responds dynamically to hover events',
    },
  },
  args: {
    tag: 'Space Mono',
    title: 'Source Sans 3',
    interactive: false,
  },
};

export default meta;
type Story = StoryObj<typeof OptionsButton>;

export const Default: Story = {
  args: {
    State: 'Default',
    tag: 'Space Mono',
    title: 'Source Sans 3',
  },
};

export const Hover: Story = {
  args: {
    State: 'Hover',
    tag: 'Space Mono',
    title: 'Source Sans 3',
  },
};

export const JobCardsDefault: Story = {
  name: 'job cards / Default',
  args: {
    State: 'job cards/Default',
    tag: 'Space Mono',
    title: 'Source Sans 3',
  },
};

export const JobCardsHover: Story = {
  name: 'job cards / Hover',
  args: {
    State: 'job cards/Hover',
    tag: 'Space Mono',
    title: 'Source Sans 3',
  },
};

/**
 * Interactive Live Preview with live hover & selection
 */
export const InteractiveDemo: Story = {
  render: () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const helpOptions = [
      { id: 1, tag: 'DOCUMENT SCANNING', title: 'Read letters, bills, documents out loud' },
      { id: 2, tag: 'NAVIGATION ASSIST', title: 'Real-time guidance and obstacle detection' },
      { id: 3, tag: 'PRODUCT RECOGNITION', title: 'Identify groceries, items, and packaging' },
    ];

    const jobCardOptions = [
      { id: 4, tag: 'SUPERMARKET VOLUNTEER', title: 'Help Jennifer pick groceries in aisles 3-5' },
      { id: 5, tag: 'TRANSIT COMPANION', title: 'Assist during bus route transfer at Central' },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '400px', padding: '16px' }}>
        <div>
          <h4 style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Help Options (Interactive Hover)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {helpOptions.map((opt) => (
              <OptionsButton
                key={opt.id}
                tag={opt.tag}
                title={opt.title}
                interactive={true}
                onClick={() => setSelectedId(opt.id)}
                style={{
                  boxShadow: selectedId === opt.id ? '0 0 0 2px #b7ff4d' : undefined,
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px', textTransform: 'uppercase', marginBottom: '12px' }}>
            Job Cards (Interactive Hover)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {jobCardOptions.map((opt) => (
              <OptionsButton
                key={opt.id}
                State="job cards/Default"
                tag={opt.tag}
                title={opt.title}
                interactive={true}
                onClick={() => setSelectedId(opt.id)}
                style={{
                  boxShadow: selectedId === opt.id ? '0 0 0 2px #b7ff4d' : undefined,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  },
};

/**
 * All Variants Showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '16px' }}>
      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          VARIANT: Default (82px)
        </p>
        <OptionsButton State="Default" />
      </div>

      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          VARIANT: Hover (82px, White Border)
        </p>
        <OptionsButton State="Hover" />
      </div>

      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          VARIANT: job cards/Default (70px, White Border + Arrow)
        </p>
        <OptionsButton State="job cards/Default" />
      </div>

      <div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          VARIANT: job cards/Hover (70px, Green Border + Green Arrow)
        </p>
        <OptionsButton State="job cards/Hover" />
      </div>
    </div>
  ),
};
