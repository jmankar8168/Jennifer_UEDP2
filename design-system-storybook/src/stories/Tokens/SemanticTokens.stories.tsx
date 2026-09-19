import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const semanticTokenGroups = {
  Surfaces: [
    { name: '--uedp-surface-primary', dark: '#0A0A0A', light: '#FFFFFF', desc: 'Main canvas & page background' },
    { name: '--uedp-surface-secondary', dark: '#1A1A1A', light: '#F5F2EC', desc: 'Card, row, and container backgrounds' },
    { name: '--uedp-surface-tertiary', dark: '#2A2A2A', light: '#EBE8E1', desc: 'Inner wells and nested groups' },
    { name: '--uedp-surface-elevated', dark: '#171717', light: '#FFFFFF', desc: 'Floating modals, popovers, and tooltips' },
    { name: '--uedp-surface-inverse', dark: '#F5F2EC', light: '#0A0A0A', desc: 'High-contrast inverted surface' },
  ],
  Text: [
    { name: '--uedp-text-primary', dark: '#F5F2EC', light: '#0A0A0A', desc: 'Headings and high-emphasis body text' },
    { name: '--uedp-text-secondary', dark: '#A3A3A3', light: '#525252', desc: 'Subtitles, captions, and secondary details' },
    { name: '--uedp-text-muted', dark: '#737373', light: '#737373', desc: 'Timestamps, icons, and placeholder copy' },
    { name: '--uedp-text-inverse', dark: '#0A0A0A', light: '#F5F2EC', desc: 'Text overlaid on inverted or neon surfaces' },
    { name: '--uedp-text-link', dark: '#B5FF47', light: '#497B00', desc: 'Interactive text links and inline actions' },
  ],
  Borders: [
    { name: '--uedp-border-default', dark: '#262626', light: '#E5E7EB', desc: 'Card outlines, dividers, and list separators' },
    { name: '--uedp-border-strong', dark: '#404040', light: '#CBD5E1', desc: 'Active container and hovered element borders' },
    { name: '--uedp-border-focus', dark: '#B5FF47', light: '#4D8014', desc: 'Accessibility focus rings and selection halos' },
  ],
  Interactive: [
    { name: '--uedp-interactive-default', dark: '#B5FF47', light: '#497B00', desc: 'Primary CTA and touch button backgrounds' },
    { name: '--uedp-interactive-hover', dark: '#C9FF7A', light: '#3B630F', desc: 'Hover glow and active cursor highlight' },
    { name: '--uedp-interactive-pressed', dark: '#A0E836', light: '#2D4C0A', desc: 'Active pressed state feedback' },
    { name: '--uedp-interactive-disabled', dark: '#262626', light: '#E5E7EB', desc: 'Disabled button and inert control state' },
  ],
  Feedback: [
    { name: '--uedp-feedback-success', dark: '#B5FF47', light: '#497B00', desc: 'Verified status, positive completion, and success' },
    { name: '--uedp-feedback-warning', dark: '#C4622D', light: '#C4622D', desc: 'Cautionary states and alert badges' },
    { name: '--uedp-feedback-error', dark: '#DC2626', light: '#DC2626', desc: 'Errors, missed calls, and destructive actions' },
    { name: '--uedp-feedback-info', dark: '#B5FF47', light: '#497B00', desc: 'Informational tips and assistive hints' },
  ],
};

const SemanticTokensGallery: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const isDark = theme === 'dark';
  const pageBg = isDark ? '#0A0A0A' : '#F8FAFC';
  const cardBg = isDark ? '#171717' : '#FFFFFF';
  const cardBorder = isDark ? '#262626' : '#E2E8F0';
  const textPrimary = isDark ? '#F5F2EC' : '#0F172A';
  const textMuted = isDark ? '#737373' : '#64748B';

  return (
    <div style={{ fontFamily: 'Source Sans 3, sans-serif', padding: '28px', backgroundColor: pageBg, color: textPrimary, minHeight: '100vh', transition: 'all 0.3s ease' }}>
      {/* Header with Mode Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${cardBorder}`, paddingBottom: '16px', marginBottom: '28px' }}>
        <div>
          <span style={{ fontFamily: 'Space Mono', fontSize: '11px', color: '#B7FF4D', fontWeight: 700, letterSpacing: '1px' }}>
            FIGMA LOCAL VARIABLES
          </span>
          <h1 style={{ fontSize: '26px', fontWeight: 700, margin: '4px 0 0 0' }}>
            Semantic Design Tokens
          </h1>
          <p style={{ fontSize: '14px', color: textMuted, margin: '6px 0 0 0' }}>
            Multi-mode semantic variables mapped from <code>VisionSync-Dark.tokens.json</code> &amp; <code>VisionSync-Light.tokens.json</code>.
          </p>
        </div>

        {/* Interactive Mode Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', background: isDark ? '#262626' : '#E2E8F0', padding: '4px', borderRadius: '999px' }}>
          <button
            type="button"
            onClick={() => setTheme('dark')}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              border: 'none',
              background: isDark ? '#B7FF4D' : 'transparent',
              color: isDark ? '#000000' : textMuted,
              fontWeight: 700,
              fontFamily: 'Space Mono',
              fontSize: '11px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            DARK MODE
          </button>
          <button
            type="button"
            onClick={() => setTheme('light')}
            style={{
              padding: '6px 14px',
              borderRadius: '999px',
              border: 'none',
              background: !isDark ? '#4D8014' : 'transparent',
              color: !isDark ? '#FFFFFF' : textMuted,
              fontWeight: 700,
              fontFamily: 'Space Mono',
              fontSize: '11px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            LIGHT MODE
          </button>
        </div>
      </div>

      {/* Semantic Groups */}
      {Object.entries(semanticTokenGroups).map(([groupTitle, tokens]) => (
        <div key={groupTitle} style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '14px', color: isDark ? '#B7FF4D' : '#4D8014', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{groupTitle}</span>
            <span style={{ fontSize: '11px', fontFamily: 'Space Mono', color: textMuted, fontWeight: 400 }}>({tokens.length} variables)</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {tokens.map((token) => {
              const activeVal = isDark ? token.dark : token.light;

              return (
                <div
                  key={token.name}
                  style={{
                    backgroundColor: cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        minWidth: '44px',
                        borderRadius: '6px',
                        backgroundColor: activeVal,
                        border: '1px solid rgba(125,125,125,0.2)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                      }}
                    />
                    <div>
                      <div style={{ fontFamily: 'Space Mono', fontSize: '12px', fontWeight: 700, color: textPrimary, wordBreak: 'break-all' }}>
                        {token.name}
                      </div>
                      <div style={{ fontFamily: 'Space Mono', fontSize: '11px', color: isDark ? '#B7FF4D' : '#4D8014', marginTop: '2px' }}>
                        {activeVal}
                      </div>
                    </div>
                  </div>

                  <div style={{ fontSize: '12px', color: textMuted, borderTop: `1px solid ${cardBorder}`, paddingTop: '8px' }}>
                    {token.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof SemanticTokensGallery> = {
  title: 'Tokens/Semantic Tokens',
  component: SemanticTokensGallery,
  parameters: {
    docs: {
      description: {
        component: 'Multi-mode semantic token system from Figma Local Variables. Supports live switching between Dark and Light mode themes.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SemanticTokensGallery>;

export const Default: Story = {};
