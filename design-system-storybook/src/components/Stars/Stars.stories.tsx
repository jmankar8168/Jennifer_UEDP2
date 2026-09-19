import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Stars } from './Stars';

const meta: Meta<typeof Stars> = {
  title: 'Components/Stars',
  component: Stars,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **stars** (Node ID: \`53:6306\`)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`stars\` |
| **Figma Node ID** | \`53:6306\` |
| **Component Type** | \`COMPONENT_SET\` (12 Variants) |
| **Dimensions** | Width: \`172px\` × Height: \`24px\` |
| **Layout** | 5 Stars × 24px + 4 Gaps × 13px = \`172px\` |
| **Star Geometry** | Exact Figma SVG Path: \`M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z\` |
| **Mode: default** | Filled: \`#B7FF4D\` (Neon Green) \| Empty: \`#FFFFFF\` (White stroke) |
| **Mode: light** | Filled: \`#497B00\` (Olive Green) \| Empty: \`#000000\` (Black stroke) |
| **Variants** | \`Default\` (0 stars), \`1\`, \`2\`, \`3\`, \`4\`, \`5\` |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#252525' },
        { name: 'surface', value: '#171717' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
  argTypes: {
    'Property 1': {
      control: { type: 'select' },
      options: ['Default', '1', '2', '3', '4', '5'],
      description: 'Figma variant property "Property 1"',
    },
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Numeric star rating (0 - 5)',
    },
    mode: {
      control: { type: 'select' },
      options: ['default', 'light'],
      description: 'Figma mode ("default" = Neon on dark, "light" = Olive on light)',
    },
    interactive: {
      control: 'boolean',
      description: 'Allows clicking and hovering to rate',
    },
    size: {
      control: 'number',
      description: 'Custom star icon size in px (default 24)',
    },
  },
  args: {
    rating: 5,
    mode: 'default',
    interactive: false,
  },
};

export default meta;
type Story = StoryObj<typeof Stars>;

/**
 * 0 Stars (Default state)
 */
export const DefaultZero: Story = {
  name: '0 Stars (Default)',
  args: {
    rating: 0,
    mode: 'default',
  },
};

/**
 * 1 Star
 */
export const OneStar: Story = {
  name: '1 Star',
  args: {
    rating: 1,
    mode: 'default',
  },
};

/**
 * 2 Stars
 */
export const TwoStars: Story = {
  name: '2 Stars',
  args: {
    rating: 2,
    mode: 'default',
  },
};

/**
 * 3 Stars
 */
export const ThreeStars: Story = {
  name: '3 Stars',
  args: {
    rating: 3,
    mode: 'default',
  },
};

/**
 * 4 Stars
 */
export const FourStars: Story = {
  name: '4 Stars',
  args: {
    rating: 4,
    mode: 'default',
  },
};

/**
 * 5 Stars
 */
export const FiveStars: Story = {
  name: '5 Stars',
  args: {
    rating: 5,
    mode: 'default',
  },
};

/**
 * Light Mode (Olive on Light)
 */
export const LightMode: Story = {
  name: 'Light Mode (Olive Green)',
  args: {
    rating: 4,
    mode: 'light',
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

/**
 * All Figma Variants Matrix (Node 53:6306)
 * Exact replica of the 2-column × 6-row Figma artboard
 */
export const AllFigmaVariantsMatrix: Story = {
  name: 'All Figma Variants (53:6306 Matrix)',
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '40px 80px',
        padding: '36px 32px',
        backgroundColor: '#252525',
        maxWidth: '560px',
      }}
    >
      {/* Column 1: Mode = default (Neon green & White) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          mode = default (Dark)
        </span>
        <Stars rating={0} mode="default" />
        <Stars rating={1} mode="default" />
        <Stars rating={2} mode="default" />
        <Stars rating={3} mode="default" />
        <Stars rating={4} mode="default" />
        <Stars rating={5} mode="default" />
      </div>

      {/* Column 2: Mode = light (Olive green & Black) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          mode = light (Olive)
        </span>
        <Stars rating={0} mode="light" />
        <Stars rating={1} mode="light" />
        <Stars rating={2} mode="light" />
        <Stars rating={3} mode="light" />
        <Stars rating={4} mode="light" />
        <Stars rating={5} mode="light" />
      </div>
    </div>
  ),
};

/**
 * Interactive Rating Feedback Demo
 */
export const InteractiveRatingDemo: Story = {
  name: 'Interactive Rating Demo',
  render: () => {
    const [rating, setRating] = useState(4);

    const ratingDescriptions: Record<number, string> = {
      0: 'Select your rating',
      1: 'Poor — Needs urgent assistance',
      2: 'Fair — Some issues occurred',
      3: 'Good — Smooth interaction',
      4: 'Great — Very helpful & responsive',
      5: 'Excellent — Perfect visual sync!',
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '24px',
          backgroundColor: '#171717',
          borderRadius: '8px',
          maxWidth: '360px',
          border: '1px solid #333',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#aaa', fontFamily: 'Space Mono, monospace', fontSize: '12px' }}>
            Rate Volunteer Session:
          </span>
          <span
            style={{
              color: '#b7ff4d',
              fontFamily: 'Space Mono, monospace',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            {rating} / 5 Stars
          </span>
        </div>

        <Stars
          rating={rating}
          mode="default"
          interactive={true}
          onChange={(newRating) => setRating(newRating)}
        />

        <div
          style={{
            fontFamily: 'Source Sans 3, sans-serif',
            fontSize: '13px',
            color: '#fff',
            backgroundColor: '#222',
            padding: '10px 14px',
            borderRadius: '4px',
          }}
        >
          {ratingDescriptions[rating]}
        </div>
      </div>
    );
  },
};
