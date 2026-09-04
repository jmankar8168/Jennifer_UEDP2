import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Search } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`search\` |
| **Figma Node ID** | \`16:963\` (COMPONENT_SET) |
| **Component Type** | \`COMPONENT_SET\` |
| **Dimensions** | 342px width × 44px height (540px with dropdown list) |
| **Typography** | \`Space Mono\`, 9px, 700 Bold, Uppercase, Letter-spacing: 1.08px |
| **Figma Variants** | \`Default\`, \`Hover\`, \`selected\`, \`selected with list\` |
| **Bound Variables** | \`VariableID:1:3\` (#000000), \`VariableID:1:4\` (#FFFFFF), \`VariableID:17:2340\` (#B7FF4D), \`VariableID:1:45\` (#404040) |
        `,
      },
    },
  },
  argTypes: {
    State: {
      control: { type: 'select' },
      options: ['Default', 'Hover', 'selected', 'selected with list'],
      description: 'Figma component state variant'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Search placeholder text',
      defaultValue: 'SEARCH JOBS'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    State: 'Default',
    placeholder: 'SEARCH JOBS'
  }
};

export const HoverState: Story = {
  args: {
    State: 'Hover',
    placeholder: 'SEARCH JOBS'
  }
};

export const SelectedActive: Story = {
  args: {
    State: 'selected',
    placeholder: 'SEARCH JOBS'
  }
};

export const SelectedWithList: Story = {
  args: {
    State: 'selected with list',
    placeholder: 'SEARCH JOBS'
  }
};

export const InteractiveSearchDemo: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const allItems = [
      { label: 'Reading Assistant', supportingText: 'Help read letters & documents' },
      { label: 'Navigation Helper', supportingText: 'Outdoor walking guide' },
      { label: 'Object Finder', supportingText: 'Identify objects in room' },
      { label: 'Shopping Assistant', supportingText: 'Read barcodes and shelf tags' },
      { label: 'Transit Guide', supportingText: 'Bus & train schedule reader' },
      { label: 'Tech Support', supportingText: 'Screen reader & device settings' },
      { label: 'Recipe Reader', supportingText: 'Cooking guidance & timers' }
    ];

    const filtered = allItems.filter(item => 
      item.label.toLowerCase().includes(query.toLowerCase()) || 
      item.supportingText.toLowerCase().includes(query.toLowerCase())
    );

    return (
      <div style={{ padding: '32px', backgroundColor: '#0B0F19', borderRadius: '12px', minHeight: '600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ color: '#94A3B8', fontSize: '13px', fontFamily: 'monospace' }}>
          Interactive search simulation (Click input or type to filter):
          {selectedItem && (
            <span style={{ marginLeft: '10px', color: '#B7FF4D' }}>Selected: <strong>{selectedItem}</strong></span>
          )}
        </div>
        <Search
          placeholder="SEARCH JOBS"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          items={filtered}
          onItemClick={(item) => setSelectedItem(item.label)}
        />
      </div>
    );
  }
};
