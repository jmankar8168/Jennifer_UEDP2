import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { HelpTypeTouchTargets, TouchTargetCard, DEFAULT_HELP_OPTIONS, HelpTypeCategory } from './HelpTypeTouchTargets';

const meta: Meta<typeof HelpTypeTouchTargets> = {
  title: 'Components/HelpTypeTouchTargets',
  component: HelpTypeTouchTargets,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Color theme mode',
    },
    selectedId: {
      control: 'select',
      options: ['assist', 'scan', 'jobs', 'support'],
      description: 'Active selected category ID',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HelpTypeTouchTargets>;

export const DefaultDark: Story = {
  args: {
    theme: 'dark',
    selectedId: 'assist',
  },
};

export const DefaultLight: Story = {
  args: {
    theme: 'light',
    selectedId: 'assist',
  },
};

export const ScanSelectedDark: Story = {
  args: {
    theme: 'dark',
    selectedId: 'scan',
  },
};

export const SingleCardDefault: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <TouchTargetCard option={DEFAULT_HELP_OPTIONS[0]} selected={false} theme="dark" />
      <TouchTargetCard option={DEFAULT_HELP_OPTIONS[0]} selected={true} theme="dark" />
      <TouchTargetCard option={DEFAULT_HELP_OPTIONS[0]} selected={false} theme="light" />
      <TouchTargetCard option={DEFAULT_HELP_OPTIONS[0]} selected={true} theme="light" />
    </div>
  ),
};

export const InteractiveSelectionDemo: Story = {
  render: () => {
    const [active, setActive] = useState<HelpTypeCategory>('assist');
    const [audioCue, setAudioCue] = useState<string>('Ready.');

    const handleSelect = (id: HelpTypeCategory) => {
      setActive(id);
      const labels: Record<HelpTypeCategory, string> = {
        assist: 'Initiating video connection with volunteer...',
        scan: 'Opening high-contrast AI vision scanner...',
        jobs: 'Loading nearby accessibility task requests...',
        support: 'Connecting to 24/7 VisionSync accessibility desk...',
      };
      setAudioCue(labels[id]);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <HelpTypeTouchTargets theme="dark" selectedId={active} onSelect={handleSelect} />
        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 12,
            color: '#B7FF4D',
            background: 'rgba(0,0,0,0.7)',
            padding: '8px 16px',
            borderRadius: 4,
            border: '1px solid #334155',
            maxWidth: 342,
            textAlign: 'center',
          }}
        >
          {audioCue}
        </div>
      </div>
    );
  },
};
