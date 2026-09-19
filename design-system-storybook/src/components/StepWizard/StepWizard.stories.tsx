import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StepWizard, StepSegments } from './StepWizard';

const meta: Meta<typeof StepWizard> = {
  title: 'Components/StepWizard',
  component: StepWizard,
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
    currentStep: {
      control: { type: 'number', min: 1, max: 3 },
      description: 'Current active step index (1-indexed)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepWizard>;

export const Step1Dark: Story = {
  args: {
    theme: 'dark',
    currentStep: 1,
  },
};

export const Step2Dark: Story = {
  args: {
    theme: 'dark',
    currentStep: 2,
  },
};

export const Step3Dark: Story = {
  args: {
    theme: 'dark',
    currentStep: 3,
  },
};

export const Step1Light: Story = {
  args: {
    theme: 'light',
    currentStep: 1,
  },
};

export const StandaloneComponent23Segments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: 'Space Mono', fontSize: 12, color: '#737373', width: 60 }}>Step 1:</span>
        <StepSegments currentStep={1} totalSteps={3} theme="dark" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: 'Space Mono', fontSize: 12, color: '#737373', width: 60 }}>Step 2:</span>
        <StepSegments currentStep={2} totalSteps={3} theme="dark" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: 'Space Mono', fontSize: 12, color: '#737373', width: 60 }}>Step 3:</span>
        <StepSegments currentStep={3} totalSteps={3} theme="dark" />
      </div>
    </div>
  ),
};

export const InteractiveOnboardingFlow: Story = {
  render: () => {
    const [step, setStep] = useState(1);
    const [completed, setCompleted] = useState(false);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        {completed ? (
          <div
            style={{
              padding: 24,
              borderRadius: 8,
              background: '#162010',
              border: '1px solid #B7FF4D',
              color: '#FFFFFF',
              textAlign: 'center',
              width: 342,
            }}
          >
            <div style={{ fontSize: 24, marginBottom: 8 }}>✓</div>
            <h3 style={{ fontFamily: 'Source Sans 3', fontSize: 18, color: '#B7FF4D', margin: '0 0 8px 0' }}>
              Onboarding Complete!
            </h3>
            <p style={{ fontFamily: 'Source Sans 3', fontSize: 13, color: '#A1A1AA', margin: '0 0 16px 0' }}>
              VisionSync accessibility profile configured and calibrated.
            </p>
            <button
              type="button"
              onClick={() => {
                setStep(1);
                setCompleted(false);
              }}
              style={{
                fontFamily: 'Space Mono',
                fontSize: 11,
                padding: '6px 14px',
                background: '#B7FF4D',
                color: '#000000',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              RESTART FLOW
            </button>
          </div>
        ) : (
          <StepWizard
            theme="dark"
            currentStep={step}
            onStepChange={setStep}
            onComplete={() => setCompleted(true)}
          />
        )}
      </div>
    );
  },
};
