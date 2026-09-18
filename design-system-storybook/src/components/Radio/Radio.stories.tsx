import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

/**
 * ## Radio
 * Recreated to pixel perfection from Figma **Node 52:5949** (Component 9: `31:653` + Component 14 + Component 15).
 *
 * ### Design Specifications:
 * - **Card Size**: `342px × 98px`
 * - **Icon Badge**: `52px × 52px` circle with 28×20px Eye icon
 * - **Typography**:
 *   - Title: `Source Sans 3` 16px Regular
 *   - Subtitle: `Space Mono` 9px Uppercase (`VOLUNTEER · DONOR · EMPLOYER`)
 * - **Radio Indicator**: `18px × 18px` circle with centered `8px × 8px` dot
 * - **Accent Color**: `#B7FF4D` (Neon Lime)
 */
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray-canvas',
      values: [
        { name: 'gray-canvas', value: '#797070' },
        { name: 'dark', value: '#111111' },
        { name: 'pitch-black', value: '#000000' },
      ],
    },
  },
  argTypes: {
    Type: {
      control: 'select',
      options: ['default', 'hover', 'selected', 'disabled'],
      description: 'Figma component state',
    },
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Color theme (dark or light surface)',
    },
    title: {
      control: 'text',
      description: 'Main label (default: Sighted)',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle metadata (default: VOLUNTEER · DONOR · EMPLOYER)',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio is selected',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

/** State 1: Default (Unselected - Dark) */
export const Default: Story = {
  args: {
    Type: 'default',
    theme: 'dark',
    title: 'Sighted',
    subtitle: 'VOLUNTEER · DONOR · EMPLOYER',
  },
};

/** State 2: Hover (Dark) */
export const Hover: Story = {
  args: {
    Type: 'hover',
    theme: 'dark',
    title: 'Sighted',
    subtitle: 'VOLUNTEER · DONOR · EMPLOYER',
  },
};

/** State 3: Selected (Dark) - White icon badge, black card, neon lime radio dot */
export const Selected: Story = {
  args: {
    Type: 'selected',
    theme: 'dark',
    title: 'Sighted',
    subtitle: 'VOLUNTEER · DONOR · EMPLOYER',
  },
};

/** State 4: Default (Light) */
export const LightDefault: Story = {
  args: {
    Type: 'default',
    theme: 'light',
    title: 'Sighted',
    subtitle: 'VOLUNTEER · DONOR · EMPLOYER',
  },
};

/** State 5: Hover (Light) */
export const LightHover: Story = {
  args: {
    Type: 'hover',
    theme: 'light',
    title: 'Sighted',
    subtitle: 'VOLUNTEER · DONOR · EMPLOYER',
  },
};

/** State 6: Selected (Light) - Black icon badge, white card, green radio dot */
export const LightSelected: Story = {
  args: {
    Type: 'selected',
    theme: 'light',
    title: 'Sighted',
    subtitle: 'VOLUNTEER · DONOR · EMPLOYER',
  },
};

/**
 * All Figma Variants Matrix
 * Pixel-for-pixel recreation of the exact 6 variants from Figma Node 52:5949.
 */
export const AllFigmaVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '24px',
        backgroundColor: '#797070', // matches the Figma canvas gray in the screenshot
        borderRadius: '8px',
      }}
    >
      {/* Dark Theme Set */}
      <Radio Type="default" theme="dark" />
      <Radio Type="hover" theme="dark" />
      <Radio Type="selected" theme="dark" />

      <div style={{ height: '16px' }} />

      {/* Light Theme Set */}
      <Radio Type="default" theme="light" />
      <Radio Type="hover" theme="light" />
      <Radio Type="selected" theme="light" />
    </div>
  ),
};

/**
 * Interactive Demo
 * Click between the radio cards to see live selection switching.
 */
export const InteractiveSelector: Story = {
  render: () => {
    const [selectedRole, setSelectedRole] = useState<'sighted' | 'blind'>('sighted');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '24px',
          backgroundColor: '#111111',
          border: '1px solid #222222',
          borderRadius: '12px',
        }}
      >
        <span
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#888888',
            marginBottom: '4px',
          }}
        >
          Choose Your Experience
        </span>

        <Radio
          title="Sighted"
          subtitle="VOLUNTEER · DONOR · EMPLOYER"
          checked={selectedRole === 'sighted'}
          onChange={() => setSelectedRole('sighted')}
        />

        <Radio
          title="Blind or Low Vision"
          subtitle="COMMUNITY · INDEPENDENCE · AUDIO"
          checked={selectedRole === 'blind'}
          onChange={() => setSelectedRole('blind')}
        />
      </div>
    );
  },
};
