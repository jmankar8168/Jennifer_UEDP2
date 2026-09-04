import React, { useState } from 'react';
import * as Components from './index';

export default function App() {
  const [activeTab, setActiveTab] = useState<'tokens' | 'foundational' | 'components'>('components');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedComponent, setSelectedComponent] = useState<string>('ChooseYourRoleForAPersonalisedExperience');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const componentNames = Object.keys(Components);
  const filteredComponents = componentNames.filter((name) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SelectedComp = (Components as Record<string, React.ComponentType<any>>)[selectedComponent];

  const baseColors = [
    { name: '--uedp-slate-500', hex: '#64748B', family: 'Slate' },
    { name: '--uedp-slate-900', hex: '#0F172A', family: 'Slate' },
    { name: '--uedp-gray-500', hex: '#6B7280', family: 'Gray' },
    { name: '--uedp-gray-900', hex: '#111827', family: 'Gray' },
    { name: '--uedp-indigo-500', hex: '#6366F1', family: 'Indigo' },
    { name: '--uedp-indigo-600', hex: '#4F46E5', family: 'Indigo' },
    { name: '--uedp-purple-500', hex: '#A855F7', family: 'Purple' },
    { name: '--uedp-rose-500', hex: '#F43F5E', family: 'Rose' },
    { name: '--uedp-emerald-500', hex: '#10B981', family: 'Emerald' },
    { name: '--uedp-amber-500', hex: '#F59E0B', family: 'Amber' },
  ];

  const foundationalTokens = [
    { token: '--uedp-rounded-sm', value: '2px', category: 'Radius' },
    { token: '--uedp-rounded-md', value: '6px', category: 'Radius' },
    { token: '--uedp-rounded-lg', value: '8px', category: 'Radius' },
    { token: '--uedp-rounded-xl', value: '12px', category: 'Radius' },
    { token: '--uedp-rounded-2xl', value: '16px', category: 'Radius' },
    { token: '--uedp-rounded-3xl', value: '24px', category: 'Radius' },
    { token: '--uedp-gap-gap-2', value: '8px', category: 'Spacing' },
    { token: '--uedp-gap-gap-4', value: '16px', category: 'Spacing' },
    { token: '--uedp-gap-gap-6', value: '24px', category: 'Spacing' },
    { token: '--uedp-padding-p-4', value: '16px', category: 'Padding' },
    { token: '--uedp-padding-p-6', value: '24px', category: 'Padding' },
  ];

  return (
    <div className="app-container" data-theme={theme}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="brand-badge">Figma Design System</div>
          <h1 className="sidebar-title">VisionSync Tokens</h1>
          <p className="sidebar-subtitle">Storybook & Component Showcase</p>
        </div>

        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search 60+ components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="sidebar-scroll">
          <div className="nav-section">
            <div className="nav-section-title">Design System</div>
            <ul className="nav-list">
              <li
                className={`nav-item ${activeTab === 'components' ? 'active' : ''}`}
                onClick={() => setActiveTab('components')}
              >
                <span>🧩 Components</span>
                <span className="component-count">{componentNames.length}</span>
              </li>
              <li
                className={`nav-item ${activeTab === 'tokens' ? 'active' : ''}`}
                onClick={() => setActiveTab('tokens')}
              >
                <span>🎨 Color Palette</span>
              </li>
              <li
                className={`nav-item ${activeTab === 'foundational' ? 'active' : ''}`}
                onClick={() => setActiveTab('foundational')}
              >
                <span>📐 Spacing & Geometry</span>
              </li>
            </ul>
          </div>

          {activeTab === 'components' && (
            <div className="nav-section">
              <div className="nav-section-title">Components List</div>
              <ul className="nav-list">
                {filteredComponents.map((name) => (
                  <li
                    key={name}
                    className={`nav-item ${selectedComponent === name ? 'active' : ''}`}
                    onClick={() => setSelectedComponent(name)}
                  >
                    <span style={{ fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="top-bar">
          <div className="top-title">
            <span>VisionSync Local Preview</span>
          </div>
          <div className="top-actions">
            <button className="icon-btn" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
            <a
              className="icon-btn"
              href="http://localhost:6006"
              target="_blank"
              rel="noreferrer"
            >
              🚀 Open Storybook (Port 6006)
            </a>
          </div>
        </header>

        <div className="canvas-area">
          <div className="canvas-viewport">
            {activeTab === 'components' && (
              <>
                <div className="canvas-header">
                  <div>
                    <h2 className="canvas-title">{selectedComponent}</h2>
                    <p className="sidebar-subtitle">Figma Layer Preserved Component</p>
                  </div>
                </div>

                <div className="component-preview">
                  {SelectedComp ? <SelectedComp /> : <div>Select a component from sidebar</div>}
                </div>
              </>
            )}

            {activeTab === 'tokens' && (
              <>
                <div className="canvas-header">
                  <h2 className="canvas-title">Figma Color Palette Swatches</h2>
                </div>
                <div className="tokens-grid">
                  {baseColors.map((color) => (
                    <div key={color.name} className="color-card">
                      <div className="color-swatch" style={{ background: color.hex }}></div>
                      <div className="color-info">
                        <div className="color-name">{color.name}</div>
                        <div className="color-val">{color.hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === 'foundational' && (
              <>
                <div className="canvas-header">
                  <h2 className="canvas-title">Foundational Tokens (Border Radius & Spacing)</h2>
                </div>
                <table className="token-table">
                  <thead>
                    <tr>
                      <th>Token Name</th>
                      <th>Value</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foundationalTokens.map((item) => (
                      <tr key={item.token}>
                        <td style={{ color: '#818cf8' }}>{item.token}</td>
                        <td>{item.value}</td>
                        <td>{item.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
