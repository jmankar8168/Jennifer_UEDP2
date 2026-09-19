import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CameraControls } from './CameraControls';

const meta: Meta<typeof CameraControls> = {
  title: 'Components/CameraControls',
  component: CameraControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Type: {
      control: 'select',
      options: ['Default', 'Flip Hover', 'End Hover'],
      description: 'Figma variant type',
    },
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Theme mode',
    },
    showViewport: {
      control: 'boolean',
      description: 'Whether to display the simulated video viewport',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CameraControls>;

export const DefaultDark: Story = {
  args: {
    Type: 'Default',
    theme: 'dark',
    showViewport: true,
  },
};

export const DefaultLight: Story = {
  args: {
    Type: 'Default',
    theme: 'light',
    showViewport: true,
  },
};

export const FlipHoverState: Story = {
  args: {
    Type: 'Flip Hover',
    theme: 'dark',
    showViewport: true,
  },
};

export const EndHoverState: Story = {
  args: {
    Type: 'End Hover',
    theme: 'dark',
    showViewport: true,
  },
};

export const ControlsBarOnly: Story = {
  args: {
    Type: 'Default',
    theme: 'dark',
    showViewport: false,
  },
};

export const InteractiveCameraSession: Story = {
  render: () => {
    const [log, setLog] = useState<string>('Camera stream active. Tap FLIP or END.');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <CameraControls
          theme="dark"
          showViewport={true}
          onFlip={(orientation) => setLog(`Camera switched to ${orientation.toUpperCase()} camera.`)}
          onDecline={() => setLog('Call terminated by user.')}
          onToggleMute={(m) => setLog(m ? 'Microphone muted.' : 'Microphone unmuted.')}
          onToggleTorch={(t) => setLog(t ? 'Torchlight engaged (beam assist).' : 'Torchlight off.')}
        />
        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 12,
            color: '#B7FF4D',
            background: 'rgba(0,0,0,0.6)',
            padding: '6px 14px',
            borderRadius: 4,
            border: '1px solid #334155',
          }}
        >
          {log}
        </div>
      </div>
    );
  },
};
