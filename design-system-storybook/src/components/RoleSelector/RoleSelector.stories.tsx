import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RoleSelector, BlindRoleIcon, SightedRoleIcon } from './RoleSelector';

const meta: Meta<typeof RoleSelector> = {
  title: 'Components/RoleSelector',
  component: RoleSelector,
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
    selectedRole: {
      control: 'radio',
      options: ['blind', 'sighted'],
      description: 'Active selected role',
    },
  },
};

export default meta;
type Story = StoryObj<typeof RoleSelector>;

export const DefaultDark: Story = {
  args: {
    theme: 'dark',
    selectedRole: 'blind',
  },
};

export const DefaultLight: Story = {
  args: {
    theme: 'light',
    selectedRole: 'blind',
  },
};

export const SightedRoleSelected: Story = {
  args: {
    theme: 'dark',
    selectedRole: 'sighted',
  },
};

export const StandaloneComponent14Icons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <BlindRoleIcon selected={false} theme="dark" />
        <span style={{ color: '#737373', fontSize: 11, fontFamily: 'Space Mono' }}>Blind (Default)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <BlindRoleIcon selected={true} theme="dark" />
        <span style={{ color: '#B7FF4D', fontSize: 11, fontFamily: 'Space Mono' }}>Blind (Selected)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <SightedRoleIcon selected={false} theme="dark" />
        <span style={{ color: '#737373', fontSize: 11, fontFamily: 'Space Mono' }}>Sighted (Default)</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <SightedRoleIcon selected={true} theme="dark" />
        <span style={{ color: '#B7FF4D', fontSize: 11, fontFamily: 'Space Mono' }}>Sighted (Selected)</span>
      </div>
    </div>
  ),
};

export const InteractiveRoleSelectionDemo: Story = {
  render: () => {
    const [role, setRole] = useState<'blind' | 'sighted'>('blind');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <RoleSelector
          theme="dark"
          selectedRole={role}
          onRoleChange={setRole}
        />
        <div
          style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 12,
            color: '#B7FF4D',
            background: 'rgba(0,0,0,0.7)',
            padding: '8px 16px',
            borderRadius: 4,
            border: '1px solid #334155',
            maxWidth: 350,
            textAlign: 'center',
          }}
        >
          {role === 'blind'
            ? 'Configuring VoiceSync for Audio & Screen Reader mode.'
            : 'Configuring Volunteer profile for incoming video requests.'}
        </div>
      </div>
    );
  },
};
