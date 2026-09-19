import React, { useState, useMemo } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import allVariablesData from '../../tokens/all-variables.json';

interface VariableItem {
  id: string;
  name: string;
  collection: string;
  type: string;
  cssVariable: string;
  value: string;
  darkValue?: string;
  lightValue?: string;
  isThemed?: boolean;
  description?: string;
}

const variables: VariableItem[] = allVariablesData as VariableItem[];

const AllVariablesView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [copiedVar, setCopiedVar] = useState<string | null>(null);

  const collections = useMemo(() => {
    const list = Array.from(new Set(variables.map((v) => v.collection)));
    return ['All', ...list];
  }, []);

  const filteredVariables = useMemo(() => {
    return variables.filter((v) => {
      const matchesCollection = selectedCollection === 'All' || v.collection === selectedCollection;
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        !q ||
        v.name.toLowerCase().includes(q) ||
        v.cssVariable.toLowerCase().includes(q) ||
        (v.value && v.value.toLowerCase().includes(q)) ||
        (v.description && v.description.toLowerCase().includes(q));

      return matchesCollection && matchesSearch;
    });
  }, [selectedCollection, searchTerm]);

  const handleCopy = (cssVar: string) => {
    navigator.clipboard?.writeText(`var(${cssVar})`);
    setCopiedVar(cssVar);
    setTimeout(() => setCopiedVar(null), 1800);
  };

  return (
    <div
      style={{
        fontFamily: 'Source Sans 3, -apple-system, sans-serif',
        padding: '28px',
        backgroundColor: '#0F172A',
        color: '#F8FAFC',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div style={{ borderBottom: '1px solid #334155', paddingBottom: '20px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span
            style={{
              fontFamily: 'Space Mono',
              fontSize: '11px',
              color: '#B7FF4D',
              background: '#1a2e12',
              border: '1px solid #B7FF4D',
              padding: '2px 8px',
              borderRadius: '4px',
              fontWeight: 700,
            }}
          >
            FIGMA LOCAL VARIABLES TABLE (?view=variables)
          </span>
          <span style={{ fontSize: '13px', color: '#94A3B8' }}>• Node 0:1</span>
        </div>
        <h1 style={{ fontSize: '28px', fontWeight: 700, margin: '4px 0 8px 0' }}>
          All Figma Design Variables ({variables.length})
        </h1>
        <p style={{ fontSize: '14px', color: '#94A3B8', margin: 0 }}>
          Full variables repository extracted directly from the Figma Variables Page. Click any CSS property to copy its <code>var(...)</code> snippet.
        </p>
      </div>

      {/* Controls Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search variables by name, CSS property, or hex..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px 16px',
            borderRadius: '6px',
            background: '#1E293B',
            border: '1px solid #475569',
            color: '#FFFFFF',
            fontSize: '14px',
            minWidth: '320px',
            outline: 'none',
          }}
        />

        {/* Collection Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {collections.map((col) => {
            const count = col === 'All' ? variables.length : variables.filter((v) => v.collection === col).length;
            const isSelected = selectedCollection === col;

            return (
              <button
                key={col}
                type="button"
                onClick={() => setSelectedCollection(col)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '999px',
                  border: isSelected ? '1px solid #B7FF4D' : '1px solid #334155',
                  background: isSelected ? '#B7FF4D' : '#1E293B',
                  color: isSelected ? '#000000' : '#CBD5E1',
                  fontFamily: 'Space Mono',
                  fontSize: '11px',
                  fontWeight: isSelected ? 700 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {col} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Copy notification toast */}
      {copiedVar && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: '#B7FF4D',
            color: '#000000',
            fontFamily: 'Space Mono',
            fontSize: '12px',
            fontWeight: 700,
            padding: '10px 18px',
            borderRadius: '6px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
            zIndex: 9999,
          }}
        >
          Copied: var({copiedVar})
        </div>
      )}

      {/* Variables Data Table */}
      <div style={{ overflowX: 'auto', backgroundColor: '#1E293B', borderRadius: '8px', border: '1px solid #334155' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: '#0F172A', borderBottom: '1px solid #334155' }}>
              <th style={{ padding: '12px 16px', color: '#94A3B8', fontFamily: 'Space Mono', fontSize: '11px', width: '50px' }}>PREVIEW</th>
              <th style={{ padding: '12px 16px', color: '#94A3B8', fontFamily: 'Space Mono', fontSize: '11px' }}>VARIABLE NAME</th>
              <th style={{ padding: '12px 16px', color: '#94A3B8', fontFamily: 'Space Mono', fontSize: '11px' }}>CSS CUSTOM PROPERTY</th>
              <th style={{ padding: '12px 16px', color: '#94A3B8', fontFamily: 'Space Mono', fontSize: '11px' }}>COLLECTION</th>
              <th style={{ padding: '12px 16px', color: '#94A3B8', fontFamily: 'Space Mono', fontSize: '11px' }}>VALUE / MODES</th>
              <th style={{ padding: '12px 16px', color: '#94A3B8', fontFamily: 'Space Mono', fontSize: '11px', textAlign: 'right' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredVariables.map((item, idx) => {
              const isColor = item.type === 'color';
              const displayVal = item.value;

              return (
                <tr
                  key={item.id}
                  style={{
                    borderBottom: '1px solid #334155',
                    backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
                  }}
                >
                  {/* Swatch Preview */}
                  <td style={{ padding: '10px 16px' }}>
                    {isColor ? (
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '4px',
                          backgroundColor: displayVal,
                          border: '1px solid rgba(255,255,255,0.2)',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        }}
                      />
                    ) : item.type.includes('radius') ? (
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: '#38BDF8',
                          borderRadius: displayVal,
                          border: '1px solid rgba(255,255,255,0.2)',
                        }}
                      />
                    ) : (
                      <span style={{ fontFamily: 'Space Mono', fontSize: '10px', color: '#64748B' }}>Aa</span>
                    )}
                  </td>

                  {/* Name */}
                  <td style={{ padding: '10px 16px', fontWeight: 600, color: '#FFFFFF' }}>
                    {item.name}
                  </td>

                  {/* CSS Property */}
                  <td style={{ padding: '10px 16px' }}>
                    <code
                      style={{
                        fontFamily: 'Space Mono',
                        fontSize: '12px',
                        color: '#B7FF4D',
                        background: 'rgba(183,255,77,0.1)',
                        padding: '3px 6px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleCopy(item.cssVariable)}
                      title="Click to copy var(...)"
                    >
                      {item.cssVariable}
                    </code>
                  </td>

                  {/* Collection */}
                  <td style={{ padding: '10px 16px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'Space Mono',
                        color: '#94A3B8',
                        background: '#0F172A',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid #334155',
                      }}
                    >
                      {item.collection}
                    </span>
                  </td>

                  {/* Value / Modes */}
                  <td style={{ padding: '10px 16px', fontFamily: 'Space Mono', fontSize: '12px' }}>
                    {item.isThemed ? (
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ color: '#F1F5F9' }}>Dark: <strong style={{ color: '#B7FF4D' }}>{item.darkValue}</strong></span>
                        <span style={{ color: '#64748B' }}>|</span>
                        <span style={{ color: '#CBD5E1' }}>Light: <strong style={{ color: '#38BDF8' }}>{item.lightValue}</strong></span>
                      </div>
                    ) : (
                      <span style={{ color: '#F1F5F9' }}>{displayVal}</span>
                    )}
                  </td>

                  {/* Copy Action */}
                  <td style={{ padding: '10px 16px', textAlign: 'right' }}>
                    <button
                      type="button"
                      onClick={() => handleCopy(item.cssVariable)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '4px',
                        border: '1px solid #475569',
                        background: '#0F172A',
                        color: '#F8FAFC',
                        fontFamily: 'Space Mono',
                        fontSize: '11px',
                        cursor: 'pointer',
                        transition: 'all 0.15s',
                      }}
                    >
                      COPY
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const meta: Meta<typeof AllVariablesView> = {
  title: 'Tokens/All Figma Variables',
  component: AllVariablesView,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Complete repository of all variables from the Figma Variables page (?node-id=0-1&view=variables). Provides instant search, collection filtering, values across dark/light modes, and one-click CSS variable copy.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AllVariablesView>;

export const Default: Story = {};
