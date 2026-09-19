import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ConfirmationBox } from './ConfirmationBox';

const meta: Meta<typeof ConfirmationBox> = {
  title: 'Components/Confirmation Box',
  component: ConfirmationBox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **voice prompt block** (Node ID: \`53:6305\`)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`voice prompt block\` |
| **User Component Name** | \`confirmation box\` |
| **Figma Node ID** | \`53:6305\` |
| **Component Type** | \`COMPONENT_SET\` (4 Variants) |
| **Dimensions** | Width: \`342px\` × Height: \`205px\` |
| **Padding** | Top/Bottom: \`16px\` \| Left/Right: \`21px\` \| Item Spacing: \`10px\` |
| **Spark Icon** | Exact 34px × 34px Soft Star SVG Path from Node \`53:6207\` |
| **Cancel Buttons** | "NO" (underline terracotta link) + "YES" (139px × 39px filled block button) |
| **Rate Stars** | Embedded \`Stars\` component (Node \`53:6306\`) |
| **Typography** | Heading: \`Space Mono\` 12px Bold \| Subtitle: \`Source Sans 3\` 11px Regular |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#252525' },
        { name: 'surface', value: '#18181b' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['cancel session', 'rate'],
      description: 'Figma variant property "state"',
    },
    mode: {
      control: { type: 'select' },
      options: ['dark', 'light'],
      description: 'Figma variant property "mode"',
    },
    title: {
      control: 'text',
      description: 'Uppercase heading text',
    },
    subtitle: {
      control: 'text',
      description: 'Secondary body description',
    },
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Initial star rating (when state="rate")',
    },
    interactiveStars: {
      control: 'boolean',
      description: 'Enables interactive clicking to rate stars',
    },
  },
  args: {
    state: 'cancel session',
    mode: 'dark',
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationBox>;

/**
 * Cancel Session (Dark Mode) - Node 33:995
 */
export const CancelSessionDark: Story = {
  name: 'Cancel Session (Dark)',
  args: {
    state: 'cancel session',
    mode: 'dark',
  },
};

/**
 * Cancel Session (Light Mode) - Node 53:6205
 */
export const CancelSessionLight: Story = {
  name: 'Cancel Session (Light)',
  args: {
    state: 'cancel session',
    mode: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * Rate Volunteer (Dark Mode) - Node 33:1026
 */
export const RateVolunteerDark: Story = {
  name: 'Rate Volunteer (Dark)',
  args: {
    state: 'rate',
    mode: 'dark',
    rating: 0,
  },
};

/**
 * Rate Volunteer (Light Mode) - Node 53:6214
 */
export const RateVolunteerLight: Story = {
  name: 'Rate Volunteer (Light)',
  args: {
    state: 'rate',
    mode: 'light',
    rating: 0,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * All Figma Variants Matrix (Node 53:6305)
 * Exact 2-column × 2-row replica of the Figma artboard
 */
export const AllFigmaVariantsMatrix: Story = {
  name: 'All Figma Variants (53:6305 Matrix)',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(342px, 1fr))',
        gap: '40px 48px',
        padding: '36px 32px',
        backgroundColor: '#252525',
        maxWidth: '820px',
      }}
    >
      {/* Top Left: Cancel Session Dark */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          state = cancel session, mode = dark
        </span>
        <ConfirmationBox state="cancel session" mode="dark" />
      </div>

      {/* Top Right: Cancel Session Light */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          state = cancel session, mode = light
        </span>
        <ConfirmationBox state="cancel session" mode="light" />
      </div>

      {/* Bottom Left: Rate Dark */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          state = rate, mode = dark
        </span>
        <ConfirmationBox state="rate" mode="dark" />
      </div>

      {/* Bottom Right: Rate Light */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          state = rate, mode = light
        </span>
        <ConfirmationBox state="rate" mode="light" />
      </div>
    </div>
  ),
};

/**
 * Interactive Demo with Callbacks
 */
export const InteractiveDemo: Story = {
  name: 'Interactive Action & Rating Demo',
  render: () => {
    const [actionLog, setActionLog] = useState<string>('No actions yet');
    const [rateScore, setRateScore] = useState<number>(0);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px', padding: '16px' }}>
        <ConfirmationBox
          state="cancel session"
          mode="dark"
          onNo={() => setActionLog('User clicked NO — Session resumed!')}
          onYes={() => setActionLog('User clicked YES — Session cancelled!')}
        />

        <ConfirmationBox
          state="rate"
          mode="dark"
          rating={rateScore}
          onRatingChange={(stars) => {
            setRateScore(stars);
            setActionLog(`Volunteer rated: ${stars} / 5 Stars!`);
          }}
        />

        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            color: '#b7ff4d',
            backgroundColor: '#111',
            border: '1px solid #333',
            padding: '12px',
            borderRadius: '4px',
          }}
        >
          Event Log: {actionLog}
        </div>
      </div>
    );
  },
};
