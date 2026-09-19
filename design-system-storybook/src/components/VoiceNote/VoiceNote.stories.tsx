import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { VoiceNote } from './VoiceNote';

const meta: Meta<typeof VoiceNote> = {
  title: 'Components/VoiceNote',
  component: VoiceNote,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    State: {
      control: 'select',
      options: ['Default', 'selected', 'Command selected', 'default'],
      description: 'Figma variant state',
    },
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Color theme mode',
    },
    isPlaying: {
      control: 'boolean',
      description: 'Whether audio playback is active',
    },
    isRecording: {
      control: 'boolean',
      description: 'Whether recording mode is active',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VoiceNote>;

export const DefaultDark: Story = {
  args: {
    State: 'Default',
    theme: 'dark',
    label: 'Voice note',
    durationSec: 28,
  },
};

export const DefaultLight: Story = {
  args: {
    State: 'Default',
    theme: 'light',
    label: 'Voice note',
    durationSec: 28,
  },
};

export const SelectedDark: Story = {
  args: {
    State: 'selected',
    theme: 'dark',
    label: 'Voice note',
    durationSec: 42,
  },
};

export const CommandSelectedCompact: Story = {
  args: {
    State: 'Command selected',
    theme: 'dark',
    label: 'Command',
    durationSec: 5,
  },
};

export const RecordingActive: Story = {
  args: {
    State: 'Default',
    theme: 'dark',
    isRecording: true,
  },
};

export const InteractiveVoicePlayerDemo: Story = {
  render: () => {
    const [playing, setPlaying] = useState(false);
    const [status, setStatus] = useState('Tap play button to listen to voice memo.');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <VoiceNote
          theme="dark"
          durationSec={34}
          isPlaying={playing}
          onPlayToggle={(p) => {
            setPlaying(p);
            setStatus(p ? 'Playing voice note audio...' : 'Playback paused.');
          }}
        />
        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 12,
            color: '#B7FF4D',
            background: 'rgba(0,0,0,0.7)',
            padding: '6px 14px',
            borderRadius: 4,
            border: '1px solid #334155',
          }}
        >
          {status}
        </div>
      </div>
    );
  },
};
