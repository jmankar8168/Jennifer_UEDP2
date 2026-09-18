import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { JobCards } from './JobCards';

/**
 * ## JobCards
 * Pixel-perfect implementation of Figma **Node 52:6012 / 16:1981** (`❖ job cards`).
 *
 * ### Design Specifications:
 * - **Dimensions**: `350px × 118px`
 * - **Header**:
 *   - Title: `Source Sans 3` 14px Regular
 *   - Description: `Source Sans 3` 12px Regular
 * - **Divider**: `1px` horizontal separator
 * - **Footer**:
 *   - Tags: Two dark pills `56px × 21px` with `Space Mono` 9px uppercase
 *   - Button: `56.5px × 28px` rectangular action button with `Space Mono` 8px Bold uppercase
 * - **Variants**:
 *   - Dark Default: `#000000` fill, `#FFFFFF` border & button
 *   - Dark Hover: `#000000` fill, `#B7FF4D` neon lime border & button
 *   - Light Default: `#FFFFFF` fill, `#000000` border & button
 *   - Light Hover: `#FFFFFF` fill, `#4D8014` green border & button
 */
const meta: Meta<typeof JobCards> = {
  title: 'Components/JobCards',
  component: JobCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark-canvas',
      values: [
        { name: 'dark-canvas', value: '#242424' },
        { name: 'pitch-black', value: '#000000' },
        { name: 'light', value: '#f4f4f5' },
      ],
    },
  },
  argTypes: {
    Property1: {
      control: 'select',
      options: ['Default', 'hover'],
      description: 'Figma variant state (Default / Hover)',
    },
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Card color theme',
    },
    title: {
      control: 'text',
      description: 'Card title heading',
    },
    description: {
      control: 'text',
      description: 'Job subtitle / description',
    },
    actionText: {
      control: 'text',
      description: 'Action button label (default: APPLY)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof JobCards>;

/** Top-Left: Dark Default */
export const DarkDefault: Story = {
  args: {
    Property1: 'Default',
    theme: 'dark',
    title: 'Title',
    description: 'Description',
    labels: ['LABLE', 'LABLE'],
    actionText: 'APPLY',
  },
};

/** Top-Right: Dark Hover (Lime Accent) */
export const DarkHover: Story = {
  args: {
    Property1: 'hover',
    theme: 'dark',
    title: 'Title',
    description: 'Description',
    labels: ['LABLE', 'LABLE'],
    actionText: 'APPLY',
  },
};

/** Bottom-Left: Light Default */
export const LightDefault: Story = {
  args: {
    Property1: 'Default',
    theme: 'light',
    title: 'Title',
    description: 'Description',
    labels: ['LABLE', 'LABLE'],
    actionText: 'APPLY',
  },
};

/** Bottom-Right: Light Hover (Green Accent) */
export const LightHover: Story = {
  args: {
    Property1: 'hover',
    theme: 'light',
    title: 'Title',
    description: 'Description',
    labels: ['LABLE', 'LABLE'],
    actionText: 'APPLY',
  },
};

/**
 * All Figma Variants Matrix
 * Pixel-for-pixel recreation of the exact 2×2 grid shown in Figma Node 52:6012.
 */
export const AllFigmaVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        backgroundColor: '#1E1E1E',
        border: '1px dashed #7B61FF', // Figma component set purple outline
        borderRadius: '4px',
        position: 'relative',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '-18px',
          left: '4px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '11px',
          color: '#A28BFF',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        ❖ job cards
      </span>

      {/* Row 1: Dark theme (Default & Hover) */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <JobCards Property1="Default" theme="dark" interactive={false} />
        <JobCards Property1="hover" theme="dark" interactive={false} />
      </div>

      {/* Row 2: Light theme (Default & Hover) */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <JobCards Property1="Default" theme="light" interactive={false} />
        <JobCards Property1="hover" theme="light" interactive={false} />
      </div>
    </div>
  ),
};

/** Real-world Content Example */
export const RealisticJobCard: Story = {
  args: {
    Property1: 'Default',
    theme: 'dark',
    title: 'Senior Accessibility Specialist',
    description: 'VisionSync Core Engineering Team',
    labels: ['REMOTE', 'FULL-TIME'],
    actionText: 'APPLY',
  },
};
