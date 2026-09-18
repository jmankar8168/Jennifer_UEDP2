import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

/**
 * ## Radio
 * Pixel-perfect implementation of Figma Node **52:5949 / 32:741**.
 *
 * ### Design Specifications:
 * - **Outer circle**: 18px × 18px, border-radius: 9px (50%)
 * - **Inner indicator dot**: 8px × 8px, border-radius: 4px (50%), color `#B7FF4D` (Lime)
 * - **Border styles**:
 *   - **Selected**: `1px solid #B7FF4D`
 *   - **Hover**: `1px solid #FFFFFF`
 *   - **Default / Disabled**: `1px solid #525252`
 * - **Typography**: Space Mono for associated labels
 */
const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#111111' },
        { name: 'pitch-black', value: '#000000' },
        { name: 'surface', value: '#1a1a1a' },
      ],
    },
  },
  argTypes: {
    Type: {
      control: 'select',
      options: ['selected', 'hover', 'disabled', 'default'],
      description: 'Figma variant state (Node ID: 32:741 / 52:5949)',
    },
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction and styles as inactive',
    },
    label: {
      control: 'text',
      description: 'Optional label displayed beside the radio button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    Type: 'default',
    label: 'Option Default',
  },
};

export const Selected: Story = {
  args: {
    Type: 'selected',
    label: 'Option Selected',
  },
};

export const Hover: Story = {
  args: {
    Type: 'hover',
    label: 'Option Hover',
  },
};

export const Disabled: Story = {
  args: {
    Type: 'disabled',
    label: 'Option Disabled',
  },
};

export const WithoutLabel: Story = {
  args: {
    Type: 'selected',
  },
};

/**
 * Interactive Radio Group Demo
 * Shows full real-world interaction where choosing one radio deselects the others.
 */
export const InteractiveGroup: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState<string>('option-1');

    const options = [
      { id: 'option-1', label: 'OPTION A — Vision-impaired user' },
      { id: 'option-2', label: 'OPTION B — Sighted volunteer / assistant' },
      { id: 'option-3', label: 'OPTION C — Organization / Employer' },
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '24px',
          backgroundColor: '#171717',
          border: '1px solid #262626',
          borderRadius: '12px',
          minWidth: '380px',
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
          Select Your Role
        </span>

        {options.map((opt) => (
          <Radio
            key={opt.id}
            name="role-selection"
            value={opt.id}
            label={opt.label}
            checked={selectedOption === opt.id}
            onChange={() => setSelectedOption(opt.id)}
          />
        ))}

        <div
          style={{
            marginTop: '8px',
            paddingTop: '12px',
            borderTop: '1px solid #262626',
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            color: '#B7FF4D',
          }}
        >
          Current Selection: {options.find((o) => o.id === selectedOption)?.label}
        </div>
      </div>
    );
  },
};

/**
 * Figma All Variants Matrix
 * Visual verification of all 4 states side-by-side.
 */
export const AllFigmaVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '24px',
        backgroundColor: '#111111',
        border: '1px solid #222222',
        borderRadius: '8px',
        minWidth: '320px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          State: Default
        </span>
        <Radio Type="default" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          State: Hover
        </span>
        <Radio Type="hover" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          State: Selected (17:2340 Lime)
        </span>
        <Radio Type="selected" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '11px' }}>
          State: Disabled (1:44 Muted)
        </span>
        <Radio Type="disabled" />
      </div>
    </div>
  ),
};
