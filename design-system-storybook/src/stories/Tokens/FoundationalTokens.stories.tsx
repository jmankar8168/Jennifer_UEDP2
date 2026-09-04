import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const borderRadiusTokens = [
  { name: '--uedp-rounded-none', value: '0px' },
  { name: '--uedp-rounded-sm', value: '2px' },
  { name: '--uedp-rounded', value: '4px' },
  { name: '--uedp-rounded-md', value: '6px' },
  { name: '--uedp-rounded-lg', value: '8px' },
  { name: '--uedp-rounded-xl', value: '12px' },
  { name: '--uedp-rounded-2xl', value: '16px' },
  { name: '--uedp-rounded-3xl', value: '24px' },
  { name: '--uedp-rounded-full', value: '9999px' },
];

const gapTokens = [
  { name: '--uedp-gap-0', value: '0px' },
  { name: '--uedp-gap-1', value: '4px' },
  { name: '--uedp-gap-2', value: '8px' },
  { name: '--uedp-gap-3', value: '12px' },
  { name: '--uedp-gap-4', value: '16px' },
  { name: '--uedp-gap-5', value: '20px' },
  { name: '--uedp-gap-6', value: '24px' },
  { name: '--uedp-gap-8', value: '32px' },
  { name: '--uedp-gap-10', value: '40px' },
  { name: '--uedp-gap-12', value: '48px' },
];

const paddingTokens = [
  { name: '--uedp-padding-0', value: '0px' },
  { name: '--uedp-padding-1', value: '4px' },
  { name: '--uedp-padding-2', value: '8px' },
  { name: '--uedp-padding-3', value: '12px' },
  { name: '--uedp-padding-4', value: '16px' },
  { name: '--uedp-padding-6', value: '24px' },
  { name: '--uedp-padding-8', value: '32px' },
];

const FoundationalTokensGallery: React.FC = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '24px', backgroundColor: '#0F172A', color: '#F8FAFC', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', borderBottom: '2px solid #334155', paddingBottom: '12px' }}>
        Figma Design System - Foundational Tokens
      </h1>
      <p style={{ color: '#94A3B8', marginBottom: '32px' }}>
        Foundational border radii, spacing scales (gap & padding), and geometry scales generated from <code>foundational-tokens.json</code>.
      </p>

      {/* Border Radius Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#38BDF8', marginBottom: '16px' }}>Border Radii Tokens</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
          {borderRadiusTokens.map((token) => (
            <div key={token.name} style={{ backgroundColor: '#1E293B', padding: '16px', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#38BDF8',
                  borderRadius: `var(${token.name}, ${token.value})`,
                  marginBottom: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)',
                  transition: 'all 0.2s'
                }}
              />
              <code style={{ fontSize: '13px', color: '#F1F5F9', fontWeight: 'bold' }}>{token.name}</code>
              <span style={{ fontSize: '12px', color: '#94A3B8', marginTop: '4px' }}>{token.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gap Spacing Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#38BDF8', marginBottom: '16px' }}>Gap Spacing Scale</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {gapTokens.map((token) => (
            <div key={token.name} style={{ backgroundColor: '#1E293B', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <code style={{ fontSize: '14px', color: '#F1F5F9' }}>{token.name}</code>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: `var(${token.name}, ${token.value})`, height: '16px', backgroundColor: '#38BDF8', borderRadius: '4px', minWidth: '4px' }} />
                <span style={{ fontSize: '12px', color: '#94A3B8', width: '45px', textAlign: 'right' }}>{token.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Padding Scale Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#38BDF8', marginBottom: '16px' }}>Padding Scale</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {paddingTokens.map((token) => (
            <div key={token.name} style={{ backgroundColor: '#1E293B', padding: '12px 16px', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <code style={{ fontSize: '14px', color: '#F1F5F9' }}>{token.name}</code>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: `var(${token.name}, ${token.value})`, height: '16px', backgroundColor: '#F43F5E', borderRadius: '4px', minWidth: '4px' }} />
                <span style={{ fontSize: '12px', color: '#94A3B8', width: '45px', textAlign: 'right' }}>{token.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof FoundationalTokensGallery> = {
  title: 'Tokens/Foundational Tokens',
  component: FoundationalTokensGallery,
  parameters: {
    docs: {
      description: {
        component: 'Foundational Design Tokens gallery demonstrating border-radius, gap spacing, and padding tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FoundationalTokensGallery>;

export const Default: Story = {};
