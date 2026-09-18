const fs = require('fs');
const path = require('path');

const figmaData = JSON.parse(fs.readFileSync('figma-file-response.json', 'utf8'));

// Build index of all nodes
const nodeMap = {};
function indexNodes(node) {
  if (node.id) nodeMap[node.id] = node;
  if (node.children) node.children.forEach(indexNodes);
}
indexNodes(figmaData.document || figmaData);

const compDir = path.join('design-system-storybook', 'src', 'components');
const localComps = fs.readdirSync(compDir);

// Protected components that we have manually perfected
const PROTECTED = new Set([
  'Background',
  'ModeToggle',
  'Search',
  'HelpTypeOptionsLargeTouchTargets',
  'BackgroundHorizontalborder',
  'Radio',
  'Component15'
]);


function colorToCss(c, a = 1) {
  if (!c) return 'transparent';
  const r = Math.round((c.r || 0) * 255);
  const g = Math.round((c.g || 0) * 255);
  const b = Math.round((c.b || 0) * 255);
  const alpha = c.a !== undefined ? c.a : a;
  if (alpha < 1) return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
  return `#${hex}`;
}

function sanitizeIdentifier(k, index, compName, usedSet) {
  let clean = k.replace(/[^a-zA-Z0-9_$]/g, '_').replace(/^_+|_+$/g, '');
  if (!clean) clean = `Variant_${index}`;
  if (/^[0-9]/.test(clean)) clean = `Variant_${clean}`;
  
  const reserved = new Set([
    'default', 'case', 'var', 'let', 'const', 'function', 'class', 'import',
    'export', 'return', 'new', 'this', 'typeof', 'delete', 'void', 'null',
    'undefined', 'true', 'false', 'super', 'switch', 'break', 'catch', 'throw'
  ]);

  if (clean.toLowerCase() === compName.toLowerCase() || reserved.has(clean.toLowerCase())) {
    clean = `Story_${clean}`;
  }

  // Ensure uniqueness
  let finalName = clean;
  let counter = 1;
  while (usedSet.has(finalName) || finalName === compName) {
    finalName = `${clean}_${counter++}`;
  }
  usedSet.add(finalName);
  return finalName;
}

function extractNodeStyles(node) {
  const styles = {
    bg: 'transparent',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 0,
    width: node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.width) : 'auto',
    height: node.absoluteBoundingBox ? Math.round(node.absoluteBoundingBox.height) : 'auto',
    texts: [],
    vectors: []
  };

  if (node.fills && node.fills.length > 0) {
    const f = node.fills[0];
    if (f.type === 'SOLID' && f.color) {
      styles.bg = colorToCss(f.color, f.opacity);
    }
  }

  if (node.strokes && node.strokes.length > 0) {
    const s = node.strokes[0];
    if (s.type === 'SOLID' && s.color) {
      styles.borderColor = colorToCss(s.color, s.opacity);
      styles.borderWidth = node.strokeWeight || 1;
    }
  }

  if (node.cornerRadius) {
    styles.borderRadius = node.cornerRadius;
  }

  function walk(child) {
    if (child.type === 'TEXT') {
      let color = '#FFFFFF';
      if (child.fills && child.fills.length > 0 && child.fills[0].color) {
        color = colorToCss(child.fills[0].color, child.fills[0].opacity);
      }
      styles.texts.push({
        id: child.id,
        name: child.name,
        characters: child.characters || '',
        fontFamily: child.style ? child.style.fontFamily : 'Space Mono',
        fontSize: child.style ? child.style.fontSize : 12,
        fontWeight: child.style ? child.style.fontWeight : 400,
        lineHeight: child.style && child.style.lineHeightPx ? Math.round(child.style.lineHeightPx) : undefined,
        letterSpacing: child.style && child.style.letterSpacing ? child.style.letterSpacing : 0,
        textCase: child.style ? child.style.textCase : undefined,
        textAlign: child.style ? child.style.textAlignHorizontal : 'LEFT',
        color: color
      });
    } else if (child.type === 'VECTOR' || child.type === 'LINE' || child.type === 'RECTANGLE' || child.type === 'ELLIPSE') {
      let strokeColor = 'transparent';
      let fillColor = 'transparent';
      if (child.strokes && child.strokes.length > 0 && child.strokes[0].color) {
        strokeColor = colorToCss(child.strokes[0].color, child.strokes[0].opacity);
      }
      if (child.fills && child.fills.length > 0 && child.fills[0].color) {
        fillColor = colorToCss(child.fills[0].color, child.fills[0].opacity);
      }
      styles.vectors.push({
        id: child.id,
        name: child.name,
        type: child.type,
        width: child.absoluteBoundingBox ? Math.round(child.absoluteBoundingBox.width) : 16,
        height: child.absoluteBoundingBox ? Math.round(child.absoluteBoundingBox.height) : 16,
        strokeColor,
        strokeWidth: child.strokeWeight || 1,
        fillColor
      });
    }

    if (child.children) {
      child.children.forEach(walk);
    }
  }

  if (node.children) {
    node.children.forEach(walk);
  }

  return styles;
}

let generatedCount = 0;

localComps.forEach(compName => {
  if (PROTECTED.has(compName)) {
    console.log(`Skipping protected component: ${compName}`);
    return;
  }

  const storyPath = path.join(compDir, compName, compName + '.stories.tsx');
  if (!fs.existsSync(storyPath)) return;

  const storyContent = fs.readFileSync(storyPath, 'utf8');
  const m = storyContent.match(/Figma Node ID[^\n\r]*?([0-9]+:[0-9]+)/);
  if (!m) return;

  const figmaId = m[1];
  const node = nodeMap[figmaId];
  if (!node) {
    console.log(`Node not found in figma JSON: ${figmaId} (${compName})`);
    return;
  }

  const isComponentSet = node.type === 'COMPONENT_SET';
  const variants = isComponentSet && node.children ? node.children : [node];

  // Extract variant property name
  let propName = 'variant';
  if (isComponentSet && node.componentPropertyDefinitions) {
    const keys = Object.keys(node.componentPropertyDefinitions);
    if (keys.length > 0) propName = keys[0];
  } else if (isComponentSet && variants.length > 0) {
    const firstVarName = variants[0].name;
    if (firstVarName.includes('=')) {
      propName = firstVarName.split('=')[0].trim();
    }
  }

  const cleanPropName = propName.replace(/[^a-zA-Z0-9]/g, '');
  const variantMap = {};

  variants.forEach(v => {
    let vKey = v.name;
    if (vKey.includes('=')) {
      vKey = vKey.split('=')[1].trim();
    }
    variantMap[vKey] = {
      nodeId: v.id,
      name: v.name,
      styles: extractNodeStyles(v)
    };
  });

  const variantKeys = Object.keys(variantMap);
  const defaultVariant = variantKeys[0] || 'Default';
  const defaultStyles = variantMap[defaultVariant]?.styles || extractNodeStyles(node);

  // CSS Class Name
  const baseClass = `uedp-${compName.toLowerCase()}`;

  // Generate TSX
  const tsxContent = `import React from 'react';
import './${compName}.css';

export interface ${compName}Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Literal Figma Layer Name: "${node.name}" */
  className?: string;
  children?: React.ReactNode;
  ${cleanPropName || 'variant'}?: ${variantKeys.map(k => `'${k}'`).join(' | ') || 'string'};
}

/**
 * ${compName} Component
 * Preserved Figma Layer Name: "${node.name}"
 * Node ID: ${node.id}
 */
export const ${compName}: React.FC<${compName}Props> = ({
  className = '',
  children,
  ${cleanPropName || 'variant'} = '${defaultVariant}',
  ...rest
}) => {
  const currentVariant = ${cleanPropName || 'variant'};
  const variantClass = currentVariant
    ? \`${baseClass}--\${String(currentVariant).toLowerCase().replace(/[^a-z0-9]/g, '-')}\`
    : '';

  return (
    <div
      className={\`${baseClass} \${variantClass} \${className}\`.trim()}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <div className="${baseClass}-content">
          ${
            defaultStyles.texts.length > 0
              ? defaultStyles.texts
                  .map(
                    (t, i) =>
                      `<span key="${i}" className="${baseClass}-text ${baseClass}-text-${i}">
            {${JSON.stringify(t.characters)}}
          </span>`
                  )
                  .join('\n          ')
              : `<span className="${baseClass}-label">${node.name}</span>`
          }
        </div>
      )}
    </div>
  );
};

export default ${compName};
`;

  // Generate CSS
  let cssContent = `/**
 * CSS for ${compName}
 * Figma Preserved Layer Name: "${node.name}"
 * Node ID: ${node.id}
 */

.${baseClass} {
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${defaultStyles.bg !== 'transparent' ? defaultStyles.bg : '#171717'};
  ${defaultStyles.borderColor !== 'transparent' ? `border: ${defaultStyles.borderWidth}px solid ${defaultStyles.borderColor};` : 'border: 1px solid transparent;'}
  ${defaultStyles.borderRadius ? `border-radius: ${defaultStyles.borderRadius}px;` : ''}
  ${typeof defaultStyles.width === 'number' && defaultStyles.width > 0 ? `min-width: ${defaultStyles.width}px;` : 'min-width: fit-content;'}
  ${typeof defaultStyles.height === 'number' && defaultStyles.height > 0 ? `min-height: ${defaultStyles.height}px;` : 'min-height: fit-content;'}
  padding: 8px 14px;
}

.${baseClass}-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.${baseClass}-label {
  font-family: 'Space Mono', monospace, sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #b7ff4d;
}

.${baseClass}-text {
  display: block;
}
`;

  // Add individual text styles
  defaultStyles.texts.forEach((t, i) => {
    cssContent += `
.${baseClass}-text-${i} {
  font-family: ${t.fontFamily.includes('Space Mono') ? `'Space Mono', monospace` : `'Source Sans 3', sans-serif`};
  font-size: ${t.fontSize}px;
  font-weight: ${t.fontWeight};
  ${t.lineHeight ? `line-height: ${t.lineHeight}px;` : ''}
  ${t.letterSpacing ? `letter-spacing: ${t.letterSpacing}px;` : ''}
  ${t.textCase === 'UPPER' ? 'text-transform: uppercase;' : ''}
  color: ${t.color};
  text-align: ${t.textAlign.toLowerCase()};
}
`;
  });

  // Add variant classes
  variantKeys.forEach(vKey => {
    const v = variantMap[vKey];
    if (!v) return;
    const vClassSlug = vKey.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const s = v.styles;
    cssContent += `
/* Variant: ${vKey} (Node ID: ${v.nodeId}) */
.${baseClass}--${vClassSlug} {
  ${s.bg !== 'transparent' ? `background-color: ${s.bg};` : ''}
  ${s.borderColor !== 'transparent' ? `border-color: ${s.borderColor};` : ''}
  ${s.borderWidth ? `border-width: ${s.borderWidth}px;` : ''}
  ${typeof s.width === 'number' && s.width > 0 ? `min-width: ${s.width}px;` : ''}
  ${typeof s.height === 'number' && s.height > 0 ? `min-height: ${s.height}px;` : ''}
}
`;
  });

  // Generate Stories with sanitized identifiers
  const usedStoryNames = new Set();
  const storyExports = variantKeys.map((k, i) => {
    const safeIdent = sanitizeIdentifier(k, i, compName, usedStoryNames);
    return `export const ${safeIdent}: Story = {
  name: ${JSON.stringify(k)},
  args: {
    ${cleanPropName || 'variant'}: '${k}',
  },
};`;
  });

  const storiesContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${compName} } from './${compName}';

const meta: Meta<typeof ${compName}> = {
  title: 'Components/${compName}',
  component: ${compName},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: \`Figma Layer Name: **${node.name}**\\n\\n
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \\\`${node.name}\\\` |
| **Figma Node ID** | \\\`${node.id}\\\` |
| **Component Type** | \\\`${node.type}\\\` |
| **Variants Count** | \\\`${variantKeys.length}\\\` |
| **Variants** | ${variantKeys.map(k => `\\\`${k}\\\``).join(', ') || 'Default'} |
\`,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0d0d0d' },
        { name: 'surface', value: '#171717' },
      ],
    },
  },
  argTypes: {
    "${cleanPropName || 'variant'}": {
      control: {
        type: 'select',
      },
      options: ${JSON.stringify(variantKeys)},
      description: 'Figma variant property "${propName}"',
    },
  },
  args: {
    "${cleanPropName || 'variant'}": '${defaultVariant}',
  },
};

export default meta;
type Story = StoryObj<typeof ${compName}>;

${storyExports.join('\n\n')}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
      ${variantKeys
        .map(
          k => `<div>
        <p style={{ color: '#888', fontFamily: 'Space Mono, monospace', fontSize: '10px', marginBottom: '8px' }}>
          ${k}
        </p>
        <${compName} ${cleanPropName || 'variant'}="${k}" />
      </div>`
        )
        .join('\n      ')}
    </div>
  ),
};
`;

  // Write TSX, CSS, Stories
  const compDirPath = path.join(compDir, compName);
  fs.writeFileSync(path.join(compDirPath, compName + '.tsx'), tsxContent, 'utf8');
  fs.writeFileSync(path.join(compDirPath, compName + '.css'), cssContent, 'utf8');
  fs.writeFileSync(path.join(compDirPath, compName + '.stories.tsx'), storiesContent, 'utf8');

  generatedCount++;
  console.log(`Generated: ${compName} (${variantKeys.length} variants, node ${node.id})`);
});

console.log(`Successfully upgraded ${generatedCount} components!`);
