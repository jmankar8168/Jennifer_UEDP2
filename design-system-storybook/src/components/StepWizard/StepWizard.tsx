import React, { useState } from 'react';
import './StepWizard.css';

export type StepWizardTheme = 'dark' | 'light';

export interface StepItem {
  id: string | number;
  title: string;
  description: string;
  content?: React.ReactNode;
}

export interface StepSegmentsProps {
  /** Literal Figma Layer Name: "Component 23" (Node ID: 35:629) */
  currentStep: number;
  totalSteps?: number;
  theme?: StepWizardTheme;
  onSelectStep?: (step: number) => void;
}

export interface StepWizardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  className?: string;
  theme?: StepWizardTheme;
  steps?: StepItem[];
  currentStep?: number;
  onStepChange?: (step: number) => void;
  onComplete?: () => void;
  nextLabel?: string;
  backLabel?: string;
  finishLabel?: string;
}

/**
 * StepSegments Component
 * Exact recreation of Figma Node ID: 35:629 ("Component 23" - Property 1=1, 2, 3)
 */
export const StepSegments: React.FC<StepSegmentsProps> = ({
  currentStep = 1,
  totalSteps = 3,
  theme = 'dark',
  onSelectStep,
}) => {
  return (
    <div
      className="uedp-step-segments"
      role="progressbar"
      aria-valuenow={currentStep}
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-label={`Step ${currentStep} of ${totalSteps}`}
    >
      {Array.from({ length: totalSteps }, (_, idx) => {
        const stepNum = idx + 1;
        const isActive = stepNum <= currentStep;
        return (
          <div
            key={stepNum}
            className={`uedp-step-segment-bar ${isActive ? 'uedp-step-segment-bar--active' : ''}`}
            onClick={() => onSelectStep?.(stepNum)}
            title={`Go to Step ${stepNum}`}
          />
        );
      })}
    </div>
  );
};

const DEFAULT_WIZARD_STEPS: StepItem[] = [
  {
    id: 1,
    title: 'Select Vision Preferences',
    description: 'Customize high-contrast modes, color inversion, and screen magnification.',
  },
  {
    id: 2,
    title: 'Configure Audio & Haptics',
    description: 'Set speech velocity, spatial sound cues, and tactile vibration triggers.',
  },
  {
    id: 3,
    title: 'Verify Permissions & Ready',
    description: 'Grant camera access for live video calls and test AI recognition.',
  },
];

/**
 * StepWizard Component
 * Combines Figma Node 35:629 (Component 23) and Node 16:729 (Step 1 of 3)
 */
export const StepWizard: React.FC<StepWizardProps> = ({
  className = '',
  theme = 'dark',
  steps = DEFAULT_WIZARD_STEPS,
  currentStep: controlledCurrentStep,
  onStepChange,
  onComplete,
  nextLabel = 'CONTINUE',
  backLabel = 'BACK',
  finishLabel = 'FINISH SETUP',
  ...rest
}) => {
  const [internalStep, setInternalStep] = useState<number>(1);
  const total = steps.length;
  const current = controlledCurrentStep !== undefined ? controlledCurrentStep : internalStep;

  const currentStepData = steps[current - 1] || steps[0];
  const isFirst = current === 1;
  const isLast = current === total;

  const handleNext = () => {
    if (isLast) {
      onComplete?.();
    } else {
      const next = current + 1;
      setInternalStep(next);
      onStepChange?.(next);
    }
  };

  const handleBack = () => {
    if (!isFirst) {
      const prev = current - 1;
      setInternalStep(prev);
      onStepChange?.(prev);
    }
  };

  const handleSelectStep = (stepNum: number) => {
    setInternalStep(stepNum);
    onStepChange?.(stepNum);
  };

  return (
    <div className={`uedp-step-wizard uedp-step-wizard--${theme} ${className}`} {...rest}>
      {/* Top Header: Step Label + Exact Figma Component 23 Segments */}
      <div className="uedp-step-wizard-header">
        <span className="uedp-step-label">{`Step ${current} of ${total}`}</span>
        <StepSegments
          currentStep={current}
          totalSteps={total}
          theme={theme}
          onSelectStep={handleSelectStep}
        />
      </div>

      {/* Progress Track */}
      <div className="uedp-step-progress-track">
        <div
          className="uedp-step-progress-fill"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>

      {/* Step Body */}
      <div className="uedp-step-body">
        <h3 className="uedp-step-title">{currentStepData.title}</h3>
        <p className="uedp-step-desc">{currentStepData.description}</p>
      </div>

      {/* Custom Content Area */}
      {currentStepData.content && (
        <div className="uedp-step-content">
          {currentStepData.content}
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="uedp-step-nav">
        <button
          type="button"
          className="uedp-step-btn uedp-step-btn--back"
          onClick={handleBack}
          disabled={isFirst}
        >
          {backLabel}
        </button>

        <button
          type="button"
          className="uedp-step-btn uedp-step-btn--next"
          onClick={handleNext}
        >
          {isLast ? finishLabel : nextLabel}
        </button>
      </div>
    </div>
  );
};
