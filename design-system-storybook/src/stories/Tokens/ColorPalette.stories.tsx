import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const basePalette = {
  Base: [
    { name: '--uedp-base-black', value: '#000000' },
    { name: '--uedp-base-white', value: '#FFFFFF' }
  ],
  Slate: [
    { name: '--uedp-slate-50', value: '#F8FAFC' },
    { name: '--uedp-slate-100', value: '#F1F5F9' },
    { name: '--uedp-slate-200', value: '#E2E8F0' },
    { name: '--uedp-slate-300', value: '#CBD5E1' },
    { name: '--uedp-slate-400', value: '#94A3B8' },
    { name: '--uedp-slate-500', value: '#64748B' },
    { name: '--uedp-slate-600', value: '#475569' },
    { name: '--uedp-slate-700', value: '#334155' },
    { name: '--uedp-slate-800', value: '#1E293B' },
    { name: '--uedp-slate-900', value: '#0F172A' },
    { name: '--uedp-slate-950', value: '#020617' }
  ],
  Gray: [
    { name: '--uedp-gray-50', value: '#F9FAFB' },
    { name: '--uedp-gray-100', value: '#F3F4F6' },
    { name: '--uedp-gray-200', value: '#E5E7EB' },
    { name: '--uedp-gray-300', value: '#D1D5DB' },
    { name: '--uedp-gray-400', value: '#9CA3AF' },
    { name: '--uedp-gray-500', value: '#6B7280' },
    { name: '--uedp-gray-600', value: '#4B5563' },
    { name: '--uedp-gray-700', value: '#374151' },
    { name: '--uedp-gray-800', value: '#1F2937' },
    { name: '--uedp-gray-900', value: '#111827' },
    { name: '--uedp-gray-950', value: '#030712' }
  ],
  Zinc: [
    { name: '--uedp-zinc-50', value: '#FAFAFA' },
    { name: '--uedp-zinc-100', value: '#F4F4F5' },
    { name: '--uedp-zinc-200', value: '#E4E4E7' },
    { name: '--uedp-zinc-300', value: '#D4D4D8' },
    { name: '--uedp-zinc-400', value: '#A1A1AA' },
    { name: '--uedp-zinc-500', value: '#71717A' },
    { name: '--uedp-zinc-600', value: '#52525B' },
    { name: '--uedp-zinc-700', value: '#3F3F46' },
    { name: '--uedp-zinc-800', value: '#27272A' },
    { name: '--uedp-zinc-900', value: '#18181B' },
    { name: '--uedp-zinc-950', value: '#09090B' }
  ],
  Neutral: [
    { name: '--uedp-neutral-50', value: '#FAFAFA' },
    { name: '--uedp-neutral-100', value: '#F5F5F5' },
    { name: '--uedp-neutral-200', value: '#E5E5E5' },
    { name: '--uedp-neutral-300', value: '#D4D4D4' },
    { name: '--uedp-neutral-400', value: '#A3A3A3' },
    { name: '--uedp-neutral-500', value: '#737373' },
    { name: '--uedp-neutral-600', value: '#525252' },
    { name: '--uedp-neutral-700', value: '#404040' },
    { name: '--uedp-neutral-800', value: '#262626' },
    { name: '--uedp-neutral-900', value: '#171717' },
    { name: '--uedp-neutral-950', value: '#0A0A0A' }
  ],
  Stone: [
    { name: '--uedp-stone-50', value: '#FAFAF9' },
    { name: '--uedp-stone-100', value: '#F5F5F4' },
    { name: '--uedp-stone-200', value: '#E7E5E4' },
    { name: '--uedp-stone-300', value: '#D6D3D1' },
    { name: '--uedp-stone-400', value: '#A8A29E' },
    { name: '--uedp-stone-500', value: '#78716C' },
    { name: '--uedp-stone-600', value: '#57534E' },
    { name: '--uedp-stone-700', value: '#44403C' },
    { name: '--uedp-stone-800', value: '#292524' },
    { name: '--uedp-stone-900', value: '#1C1917' },
    { name: '--uedp-stone-950', value: '#0C0A09' }
  ],
  Red: [
    { name: '--uedp-red-500', value: '#EF4444' },
    { name: '--uedp-red-600', value: '#DC2626' },
    { name: '--uedp-red-700', value: '#B91C1C' },
    { name: '--uedp-red-800', value: '#991B1B' },
    { name: '--uedp-red-900', value: '#7F1D1D' }
  ],
  Blue: [
    { name: '--uedp-blue-500', value: '#3B82F6' },
    { name: '--uedp-blue-600', value: '#2563EB' },
    { name: '--uedp-blue-700', value: '#1D4ED8' },
    { name: '--uedp-blue-800', value: '#1E40AF' },
    { name: '--uedp-blue-900', value: '#1E3A8A' }
  ],
  'Brand Acid (Neon Accent)': [
    { name: '--uedp-brand-acid-50', value: '#FBFFF5' },
    { name: '--uedp-brand-acid-100', value: '#F5FFE6' },
    { name: '--uedp-brand-acid-200', value: '#E5FFBD' },
    { name: '--uedp-brand-acid-300', value: '#D0FF8A' },
    { name: '--uedp-brand-acid-400', value: '#B7FF4D' },
    { name: '--uedp-brand-acid-500', value: '#B5FF47' },
    { name: '--uedp-brand-acid-600', value: '#80D700' },
    { name: '--uedp-brand-acid-700', value: '#68AE00' },
    { name: '--uedp-brand-acid-800', value: '#497B00' },
    { name: '--uedp-brand-acid-900', value: '#315200' },
  ],
  'Brand Olive (Support & Success)': [
    { name: '--uedp-brand-olive-50', value: '#F6F7F2' },
    { name: '--uedp-brand-olive-100', value: '#ECEFE6' },
    { name: '--uedp-brand-olive-200', value: '#DADFCD' },
    { name: '--uedp-brand-olive-300', value: '#C3CBAE' },
    { name: '--uedp-brand-olive-400', value: '#A8B388' },
    { name: '--uedp-brand-olive-500', value: '#899861' },
    { name: '--uedp-brand-olive-600', value: '#5C6641' },
    { name: '--uedp-brand-olive-700', value: '#57603D' },
    { name: '--uedp-brand-olive-800', value: '#3B412A' },
    { name: '--uedp-brand-olive-900', value: '#24281A' },
  ],
  'Brand Rust (Terracotta Alert & Warning)': [
    { name: '--uedp-brand-rust-50', value: '#FDF9F7' },
    { name: '--uedp-brand-rust-100', value: '#F9EDE6' },
    { name: '--uedp-brand-rust-200', value: '#F2D5C5' },
    { name: '--uedp-brand-rust-300', value: '#E8B79C' },
    { name: '--uedp-brand-rust-400', value: '#DD926A' },
    { name: '--uedp-brand-rust-500', value: '#D06B34' },
    { name: '--uedp-brand-rust-600', value: '#C4622D' },
    { name: '--uedp-brand-rust-700', value: '#894520' },
    { name: '--uedp-brand-rust-800', value: '#603016' },
    { name: '--uedp-brand-rust-900', value: '#3F1F0E' },
  ],
  'Brand Core Solids': [
    { name: '--uedp-brand-cream', value: '#F5F2EC' },
    { name: '--uedp-brand-ink', value: '#0A0A0A' },
    { name: '--uedp-brand-deep', value: '#1A1A1A' },
    { name: '--uedp-brand-graphite', value: '#2A2A2A' },
    { name: '--uedp-brand-white', value: '#FFFFFF' },
    { name: '--uedp-brand-black', value: '#000000' },
  ]
};

const ColorSwatchGallery: React.FC = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', backgroundColor: '#0F172A', color: '#F8FAFC', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', borderBottom: '2px solid #334155', paddingBottom: '12px' }}>
        Figma Design System - Base Color Palette
      </h1>
      <p style={{ color: '#94A3B8', marginBottom: '32px' }}>
        Full color palette token family generated directly from <code>base-palette-tokens.json</code>.
      </p>

      {Object.entries(basePalette).map(([familyName, swatches]) => (
        <div key={familyName} style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#38BDF8' }}>{familyName} Palette</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px' }}>
            {swatches.map((swatch) => (
              <div key={swatch.name} style={{ backgroundColor: '#1E293B', borderRadius: '12px', overflow: 'hidden', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ height: '80px', backgroundColor: swatch.value, borderBottom: '1px solid rgba(255,255,255,0.1)' }} />
                <div style={{ padding: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', fontFamily: 'monospace', color: '#F1F5F9', wordBreak: 'break-all' }}>{swatch.name}</div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px', fontFamily: 'monospace' }}>{swatch.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof ColorSwatchGallery> = {
  title: 'Tokens/Color Palette',
  component: ColorSwatchGallery,
  parameters: {
    docs: {
      description: {
        component: 'Base Color Palette gallery representing all color families and color step swatches mapped from `base-palette-tokens.json`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSwatchGallery>;

export const Default: Story = {};
