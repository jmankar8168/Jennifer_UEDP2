import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Progress Bar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Figma Layer Name: **ProgressBar** (Node ID: \`54:6523\`)\n\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`ProgressBar\` |
| **Figma Node ID** | \`54:6523\` |
| **Component Type** | \`COMPONENT_SET\` |
| **Variants** | \`Progress=100%\` (54:6524), \`Progress=75%\` (54:6527), \`Progress=50%\` (54:6530), \`Progress=25%\` (54:6533), \`Progress=0%\` (54:6536) |
| **Dimensions** | Width: \`300px\` × Height: \`5px\` |
| **Track Fill** | \`#000000\` (Black) |
| **Indicator Fill** | \`#68AE00\` (Green) |
| **Corner Radius** | \`0px\` (Square endpoints) |
`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#252525' },
        { name: 'surface', value: '#171717' },
        { name: 'pitch-black', value: '#0d0d0d' },
      ],
    },
  },
  argTypes: {
    Progress: {
      control: { type: 'select' },
      options: ['100%', '75%', '50%', '25%', '0%'],
      description: 'Figma variant property "Progress"',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Dynamic numeric percentage (0 - 100%)',
    },
    width: {
      control: 'text',
      description: 'Custom width override (default 300px)',
    },
  },
  args: {
    Progress: '100%',
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/**
 * 100% Progress (Node 54:6524)
 */
export const Percent100: Story = {
  name: 'Progress = 100%',
  args: {
    Progress: '100%',
  },
};

/**
 * 75% Progress (Node 54:6527)
 */
export const Percent75: Story = {
  name: 'Progress = 75%',
  args: {
    Progress: '75%',
  },
};

/**
 * 50% Progress (Node 54:6530)
 */
export const Percent50: Story = {
  name: 'Progress = 50%',
  args: {
    Progress: '50%',
  },
};

/**
 * 25% Progress (Node 54:6533)
 */
export const Percent25: Story = {
  name: 'Progress = 25%',
  args: {
    Progress: '25%',
  },
};

/**
 * 0% Progress (Node 54:6536)
 */
export const Percent0: Story = {
  name: 'Progress = 0%',
  args: {
    Progress: '0%',
  },
};

/**
 * Exact replica of the Figma Component Set Matrix (Node 54:6523)
 */
export const AllFigmaVariants: Story = {
  name: 'All Figma Variants (54:6523 Matrix)',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        padding: '32px 24px',
        backgroundColor: '#252525',
        width: 'fit-content',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          Progress=100%
        </span>
        <ProgressBar Progress="100%" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          Progress=75%
        </span>
        <ProgressBar Progress="75%" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          Progress=50%
        </span>
        <ProgressBar Progress="50%" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          Progress=25%
        </span>
        <ProgressBar Progress="25%" />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          Progress=0%
        </span>
        <ProgressBar Progress="0%" />
      </div>
    </div>
  ),
};

/**
 * Interactive Slider and Auto-increment Demo
 */
export const InteractiveDemo: Story = {
  name: 'Interactive Progress Controller',
  render: () => {
    const [progress, setProgress] = useState(65);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);

    useEffect(() => {
      if (!isAutoPlaying) return;
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
      }, 300);
      return () => clearInterval(interval);
    }, [isAutoPlaying]);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '24px',
          backgroundColor: '#1c1c1c',
          borderRadius: '8px',
          maxWidth: '380px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#fff', fontFamily: 'Space Mono, monospace', fontSize: '13px' }}>
            Current Progress:
          </span>
          <span
            style={{
              color: '#68ae00',
              fontFamily: 'Space Mono, monospace',
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            {progress}%
          </span>
        </div>

        <ProgressBar value={progress} />

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => {
              setIsAutoPlaying(false);
              setProgress(Number(e.target.value));
            }}
            style={{ flex: 1, accentColor: '#68ae00' }}
          />
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            style={{
              background: isAutoPlaying ? '#e11d48' : '#68ae00',
              color: '#000',
              border: 'none',
              padding: '6px 12px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            {isAutoPlaying ? 'Pause' : 'Auto Play'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {([0, 25, 50, 75, 100] as const).map((step) => (
            <button
              key={step}
              onClick={() => {
                setIsAutoPlaying(false);
                setProgress(step);
              }}
              style={{
                background: progress === step ? '#68ae00' : '#2a2a2a',
                color: progress === step ? '#000' : '#fff',
                border: '1px solid #444',
                padding: '4px 8px',
                fontSize: '11px',
                fontFamily: 'Space Mono, monospace',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              {step}%
            </button>
          ))}
        </div>
      </div>
    );
  },
};
