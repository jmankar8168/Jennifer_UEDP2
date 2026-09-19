import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const typeScaleItems = [
  { level: 'Display', size: '64px', line: '64px', tracking: '-0.5px', weight: 'Black (900)', family: 'Playfair Display', example: 'VisionSync Assist' },
  { level: 'Heading 1', size: '36px', line: '40px', tracking: '0px', weight: 'Bold (700)', family: 'Playfair Display', example: 'How would you like to use VisionSync?' },
  { level: 'Heading 2', size: '28px', line: '34px', tracking: '0px', weight: 'SemiBold (600)', family: 'Source Sans 3', example: 'Accessibility Preferences' },
  { level: 'Heading 3', size: '22px', line: '28px', tracking: '0px', weight: 'SemiBold (600)', family: 'Source Sans 3', example: 'Connect with a Volunteer' },
  { level: 'Body Large', size: '16px', line: '24px', tracking: '0px', weight: 'Regular (400)', family: 'Source Sans 3', example: 'High-contrast assistive interface designed for low-vision and blind users.' },
  { level: 'Body (Default)', size: '14px', line: '20px', tracking: '0px', weight: 'Regular (400)', family: 'Source Sans 3', example: 'Tap any large touch target or use voice note commands to navigate.' },
  { level: 'Body Small', size: '12px', line: '16px', tracking: '0px', weight: 'Regular (400)', family: 'Source Sans 3', example: 'Audio description and camera streaming permissions required.' },
  { level: 'Helper', size: '11px', line: '16px', tracking: '0px', weight: 'Regular (400)', family: 'Source Sans 3', example: 'Updated 2 minutes ago • Session encrypted' },
  { level: 'Eyebrow', size: '12px', line: '16px', tracking: '1.2px', weight: 'Bold (700)', family: 'Space Mono', example: 'LIVE VOLUNTEER ASSIST' },
  { level: 'Code / Mono', size: '14px', line: '20px', tracking: '0px', weight: 'Regular (400)', family: 'Space Mono', example: '00:04:12 • HD 60FPS • 48kHz' },
];

const fontFamilies = [
  { name: 'Display Serif', variable: '--uedp-font-family-display', value: "'Playfair Display', Georgia, serif", role: 'Expressive editorial headers & heroic titles' },
  { name: 'Body Sans', variable: '--uedp-font-family-body', value: "'Source Sans 3', -apple-system, sans-serif", role: 'High-legibility assistive UI text, cards, buttons' },
  { name: 'Technical Mono', variable: '--uedp-font-family-mono', value: "'Space Mono', SFMono-Regular, monospace", role: 'Readouts, counters, pill tags, timecodes, status badges' },
];

const TypographyTokensGallery: React.FC = () => {
  const [customText, setCustomText] = useState('VisionSync Accessibility First Design');

  return (
    <div style={{ fontFamily: 'Source Sans 3, sans-serif', padding: '28px', backgroundColor: '#0F172A', color: '#F8FAFC', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '28px' }}>
        <span style={{ fontFamily: 'Space Mono', fontSize: '11px', color: '#B7FF4D', fontWeight: 700, letterSpacing: '1px' }}>
          FIGMA LOCAL VARIABLES
        </span>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '4px 0 0 0' }}>
          Typography Tokens &amp; Type Scale
        </h1>
        <p style={{ fontSize: '14px', color: '#94A3B8', margin: '6px 0 0 0' }}>
          Configured font families, weights, letter spacing, and line heights mapped from <code>typography-variables.json</code>.
        </p>
      </div>

      {/* Font Families Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#38BDF8', marginBottom: '16px' }}>
          Font Families
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {fontFamilies.map((fam) => (
            <div key={fam.name} style={{ backgroundColor: '#1E293B', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#F1F5F9', marginBottom: '4px' }}>{fam.name}</div>
              <code style={{ fontSize: '12px', color: '#B7FF4D', fontFamily: 'Space Mono' }}>{fam.variable}</code>
              <div style={{ fontSize: '13px', color: '#94A3B8', marginTop: '6px' }}>{fam.value}</div>
              <div style={{ fontSize: '12px', color: '#CBD5E1', marginTop: '10px', borderTop: '1px solid #334155', paddingTop: '8px' }}>
                {fam.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Type Tester */}
      <div style={{ backgroundColor: '#1E293B', padding: '16px 20px', borderRadius: '8px', border: '1px solid #334155', marginBottom: '32px' }}>
        <label style={{ display: 'block', fontSize: '12px', fontFamily: 'Space Mono', color: '#B7FF4D', marginBottom: '8px' }}>
          INTERACTIVE SPECIMEN TESTER:
        </label>
        <input
          type="text"
          value={customText}
          onChange={(e) => setCustomText(e.target.value)}
          placeholder="Type custom specimen..."
          style={{
            width: '100%',
            maxWidth: '500px',
            padding: '10px 14px',
            borderRadius: '4px',
            background: '#0F172A',
            border: '1px solid #475569',
            color: '#FFFFFF',
            fontSize: '14px',
            outline: 'none',
          }}
        />
      </div>

      {/* Type Scale Table */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#38BDF8', marginBottom: '16px' }}>
          Type Scale &amp; Hierarchy
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {typeScaleItems.map((item) => (
            <div
              key={item.level}
              style={{
                backgroundColor: '#1E293B',
                borderRadius: '8px',
                border: '1px solid #334155',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '10px' }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#38BDF8' }}>{item.level}</span>
                <div style={{ display: 'flex', gap: '16px', fontFamily: 'Space Mono', fontSize: '11px', color: '#94A3B8' }}>
                  <span>Size: <strong style={{ color: '#B7FF4D' }}>{item.size}</strong></span>
                  <span>Line: <strong>{item.line}</strong></span>
                  <span>Tracking: <strong>{item.tracking}</strong></span>
                  <span>Weight: <strong>{item.weight}</strong></span>
                </div>
              </div>

              <div
                style={{
                  fontFamily: item.family,
                  fontSize: item.size,
                  lineHeight: item.line,
                  letterSpacing: item.tracking,
                  fontWeight: item.weight.includes('Black') ? 900 : item.weight.includes('Bold') ? 700 : item.weight.includes('SemiBold') ? 600 : 400,
                  color: '#FFFFFF',
                  wordBreak: 'break-word',
                  overflow: 'hidden',
                }}
              >
                {customText || item.example}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof TypographyTokensGallery> = {
  title: 'Tokens/Typography Tokens',
  component: TypographyTokensGallery,
  parameters: {
    docs: {
      description: {
        component: 'Typography design tokens including font families, weights, line heights, letter spacing, and type scale from Figma.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TypographyTokensGallery>;

export const Default: Story = {};
