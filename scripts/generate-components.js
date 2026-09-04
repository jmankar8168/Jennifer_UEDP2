const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const fileDataPath = path.join(projectRoot, 'figma-file-response.json');
const tokenMapPath = path.join(__dirname, 'token-variable-map.json');

const fileData = JSON.parse(fs.readFileSync(fileDataPath, 'utf8'));
const tokenMap = JSON.parse(fs.readFileSync(tokenMapPath, 'utf8'));

// Helper to convert RGB float (0-1) to Hex
function rgbToHex(r, g, b, a = 1) {
  const toHex = (n) => Math.round(n * 255).toString(16).padStart(2, '0');
  if (a < 1) {
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a.toFixed(2)})`;
  }
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

// Lookup bound variable or return hardcoded value
function resolveCssProp(boundVarId, hardcodedVal, tokenTypeKey = '') {
  if (boundVarId && tokenMap[boundVarId]) {
    return `var(${tokenMap[boundVarId].cssName})`;
  }
  return hardcodedVal;
}

// Convert Figma layer name to valid JS/TS identifier for component file/class
function toPascalCase(name) {
  let cleaned = name.replace(/[^a-zA-Z0-9\s_-]/g, ' ').trim();
  if (!cleaned) cleaned = 'FigmaComponent';
  const pascal = cleaned
    .split(/[\s_-]+/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
  if (/^[0-9]/.test(pascal)) {
    return 'Component' + pascal;
  }
  return pascal;
}

// Extract styles from a Figma node
function extractNodeStyles(node) {
  const styles = {};

  // Layout / Display
  if (node.layoutMode) {
    styles.display = 'flex';
    styles.flexDirection = node.layoutMode === 'HORIZONTAL' ? 'row' : 'column';
    if (node.itemSpacing) {
      const boundSpacingId = node.boundVariables?.itemSpacing?.id;
      styles.gap = resolveCssProp(boundSpacingId, `${node.itemSpacing}px`, 'gap');
    }
    if (node.paddingLeft || node.paddingRight || node.paddingTop || node.paddingBottom) {
      const pTop = resolveCssProp(node.boundVariables?.paddingTop?.id, `${node.paddingTop || 0}px`, 'padding');
      const pRight = resolveCssProp(node.boundVariables?.paddingRight?.id, `${node.paddingRight || 0}px`, 'padding');
      const pBottom = resolveCssProp(node.boundVariables?.paddingBottom?.id, `${node.paddingBottom || 0}px`, 'padding');
      const pLeft = resolveCssProp(node.boundVariables?.paddingLeft?.id, `${node.paddingLeft || 0}px`, 'padding');
      styles.padding = `${pTop} ${pRight} ${pBottom} ${pLeft}`;
    }
    if (node.primaryAxisAlignItems) {
      const alignMap = { MIN: 'flex-start', CENTER: 'center', MAX: 'flex-end', SPACE_BETWEEN: 'space-between' };
      styles.justifyContent = alignMap[node.primaryAxisAlignItems] || 'flex-start';
    }
    if (node.counterAxisAlignItems) {
      const alignMap = { MIN: 'flex-start', CENTER: 'center', MAX: 'flex-end' };
      styles.alignItems = alignMap[node.counterAxisAlignItems] || 'flex-start';
    }
  }

  // Fills (Background / Color)
  if (node.fills && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID' && fill.color) {
      const boundFillId = node.boundVariables?.fills?.[0]?.id || node.boundVariables?.fills?.id;
      const hex = rgbToHex(fill.color.r, fill.color.g, fill.color.b, fill.opacity ?? fill.color.a ?? 1);
      const colorVal = resolveCssProp(boundFillId, hex, 'color');
      if (node.type === 'TEXT') {
        styles.color = colorVal;
      } else {
        styles.backgroundColor = colorVal;
      }
    }
  }

  // Border Radius
  if (node.cornerRadius !== undefined) {
    const boundRadiusId = node.boundVariables?.cornerRadius?.id;
    styles.borderRadius = resolveCssProp(boundRadiusId, `${node.cornerRadius}px`, 'rounded');
  } else if (node.rectangleCornerRadii) {
    styles.borderRadius = node.rectangleCornerRadii.map(r => `${r}px`).join(' ');
  }

  // Strokes / Border
  if (node.strokes && node.strokes.length > 0 && node.strokeWeight) {
    const stroke = node.strokes[0];
    if (stroke.type === 'SOLID' && stroke.color) {
      const boundStrokeId = node.boundVariables?.strokes?.[0]?.id;
      const hex = rgbToHex(stroke.color.r, stroke.color.g, stroke.color.b, stroke.opacity ?? stroke.color.a ?? 1);
      const strokeColor = resolveCssProp(boundStrokeId, hex, 'color');
      styles.border = `${node.strokeWeight}px solid ${strokeColor}`;
    }
  }

  // Text Typography
  if (node.type === 'TEXT' && node.style) {
    if (node.style.fontFamily) styles.fontFamily = `"${node.style.fontFamily}", sans-serif`;
    if (node.style.fontSize) styles.fontSize = `${node.style.fontSize}px`;
    if (node.style.fontWeight) styles.fontWeight = node.style.fontWeight;
    if (node.style.lineHeightPx) styles.lineHeight = `${Math.round(node.style.lineHeightPx)}px`;
    if (node.style.textAlignHorizontal) styles.textAlign = node.style.textAlignHorizontal.toLowerCase();
  }

  // Effects (Shadows / Glassmorphism)
  if (node.effects && node.effects.length > 0) {
    const shadows = [];
    node.effects.forEach(eff => {
      if (eff.type === 'DROP_SHADOW' && eff.visible !== false) {
        const hex = eff.color ? rgbToHex(eff.color.r, eff.color.g, eff.color.b, eff.color.a) : 'rgba(0,0,0,0.2)';
        shadows.push(`${eff.offset.x}px ${eff.offset.y}px ${eff.radius}px ${eff.spread || 0}px ${hex}`);
      } else if (eff.type === 'BACKGROUND_BLUR' && eff.visible !== false) {
        styles.backdropFilter = `blur(${eff.radius}px)`;
        styles.WebkitBackdropFilter = `blur(${eff.radius}px)`;
      }
    });
    if (shadows.length > 0) {
      styles.boxShadow = shadows.join(', ');
    }
  }

  // Dimensions
  if (node.absoluteBoundingBox) {
    if (node.absoluteBoundingBox.width && node.type !== 'TEXT') {
      styles.minWidth = `${Math.round(node.absoluteBoundingBox.width)}px`;
    }
    if (node.absoluteBoundingBox.height && node.type !== 'TEXT') {
      styles.minHeight = `${Math.round(node.absoluteBoundingBox.height)}px`;
    }
  }

  return styles;
}

// Convert style object to CSS string
function styleObjToCss(styles, indent = '  ') {
  return Object.entries(styles)
    .map(([k, v]) => {
      const cssKey = k.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${indent}${cssKey}: ${v};`;
    })
    .join('\n');
}

// Main Discovery Workflow
const canvas = fileData.document.children[0];
const itemsToGenerate = []; // Array of { name, exactFigmaName, type, node, props, variants }

const processedNames = new Set();

function discoverNodes(node) {
  if (node.type === 'COMPONENT_SET') {
    const pascalName = toPascalCase(node.name);
    let uniqueName = pascalName;
    let count = 1;
    while (processedNames.has(uniqueName)) {
      uniqueName = pascalName + count++;
    }
    processedNames.add(uniqueName);

    const propDefs = node.componentPropertyDefinitions || {};
    const props = {};
    Object.entries(propDefs).forEach(([propName, def]) => {
      props[propName] = {
        type: def.type === 'VARIANT' ? 'enum' : (def.type === 'BOOLEAN' ? 'boolean' : 'string'),
        defaultValue: def.defaultValue,
        variantOptions: def.variantOptions || []
      };
    });

    itemsToGenerate.push({
      pascalName: uniqueName,
      exactFigmaName: node.name,
      type: 'COMPONENT_SET',
      node,
      props,
      variants: node.children || []
    });
    return; // Don't traverse inside COMPONENT_SET
  }

  if (node.type === 'COMPONENT') {
    // Standalone component (not inside a COMPONENT_SET)
    const pascalName = toPascalCase(node.name);
    let uniqueName = pascalName;
    let count = 1;
    while (processedNames.has(uniqueName)) {
      uniqueName = pascalName + count++;
    }
    processedNames.add(uniqueName);

    itemsToGenerate.push({
      pascalName: uniqueName,
      exactFigmaName: node.name,
      type: 'COMPONENT',
      node,
      props: {},
      variants: [node]
    });
    return;
  }

  if (node.children) {
    node.children.forEach(discoverNodes);
  }
}

discoverNodes(canvas);

console.log(`Discovered ${itemsToGenerate.length} total Figma components to generate.`);

const componentsDir = path.join(projectRoot, 'design-system-storybook', 'src', 'components');
fs.mkdirSync(componentsDir, { recursive: true });

const exportedComponents = [];

itemsToGenerate.forEach((item) => {
  const compDir = path.join(componentsDir, item.pascalName);
  fs.mkdirSync(compDir, { recursive: true });

  const primaryVariantNode = item.variants[0] || item.node;
  const baseStyles = extractNodeStyles(primaryVariantNode);

  // Build TSX component content
  const propList = Object.keys(item.props);
  const interfaceProps = propList.map(p => {
    const cleanProp = p.replace(/[^a-zA-Z0-9_]/g, '');
    const meta = item.props[p];
    if (meta.type === 'boolean') return `  ${cleanProp}?: boolean;`;
    if (meta.variantOptions && meta.variantOptions.length > 0) {
      const opts = meta.variantOptions.map(o => `'${o}'`).join(' | ');
      return `  ${cleanProp}?: ${opts};`;
    }
    return `  ${cleanProp}?: string;`;
  }).join('\n');

  const defaultPropValues = Object.keys(item.props).map(p => {
    const cleanProp = p.replace(/[^a-zA-Z0-9_]/g, '');
    const defVal = item.props[p].defaultValue;
    if (typeof defVal === 'boolean') return `  ${cleanProp} = ${defVal},`;
    if (defVal !== undefined) return `  ${cleanProp} = '${defVal}',`;
    return `  ${cleanProp},`;
  }).join('\n');

  // React Component TSX Code
  const tsxContent = `import React from 'react';
import './${item.pascalName}.css';

export interface ${item.pascalName}Props {
  /** Literal Figma Layer Name: "${item.exactFigmaName.replace(/"/g, '\\"')}" */
  className?: string;
  children?: React.ReactNode;
${interfaceProps}
}

/**
 * ${item.pascalName} Component
 * Preserved Figma Layer Name: "${item.exactFigmaName.replace(/"/g, '\\"')}"
 */
export const ${item.pascalName}: React.FC<${item.pascalName}Props> = ({
  className = '',
  children,
${defaultPropValues}
  ...rest
}) => {
  const variantClasses = [
    'uedp-${item.pascalName.toLowerCase()}',
${Object.keys(item.props).map(p => {
  const cleanProp = p.replace(/[^a-zA-Z0-9_]/g, '');
  return `    ${cleanProp} ? \`uedp-${item.pascalName.toLowerCase()}--\${String(${cleanProp}).toLowerCase().replace(/[^a-z0-9]/g, '-')}\` : ''`;
}).join(',\n')}
  ].filter(Boolean).join(' ');

  return (
    <div className={\`\${variantClasses} \${className}\`.trim()} {...rest}>
      {children || (
        <span className="uedp-component-label">${item.exactFigmaName}</span>
      )}
    </div>
  );
};

export default ${item.pascalName};
`;

  // Component CSS Code
  let variantCssBlocks = '';
  if (item.variants.length > 1) {
    item.variants.forEach((vNode, idx) => {
      const vStyles = extractNodeStyles(vNode);
      const vName = vNode.name || `variant-${idx}`;
      const cleanVName = vName.toLowerCase().replace(/[^a-z0-9]/g, '-');
      variantCssBlocks += `
.uedp-${item.pascalName.toLowerCase()}--${cleanVName} {
${styleObjToCss(vStyles, '  ')}
}
`;
    });
  }

  const cssContent = `/**
 * CSS for ${item.pascalName}
 * Figma Preserved Layer Name: "${item.exactFigmaName}"
 */

.uedp-${item.pascalName.toLowerCase()} {
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: var(--uedp-rounded-md, 6px);
  background-color: var(--uedp-slate-800, #1e293b);
  color: var(--uedp-slate-50, #f8fafc);
  font-family: sans-serif;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
${styleObjToCss(baseStyles, '  ')}
}

.uedp-component-label {
  font-weight: 500;
  letter-spacing: 0.02em;
}
${variantCssBlocks}
`;

  // Storybook Stories Code with ArgTypes and Markdown Specs Table
  const argTypesObj = {};
  Object.keys(item.props).forEach(p => {
    const cleanProp = p.replace(/[^a-zA-Z0-9_]/g, '');
    const meta = item.props[p];
    if (meta.variantOptions && meta.variantOptions.length > 0) {
      argTypesObj[cleanProp] = {
        control: { type: 'select' },
        options: meta.variantOptions,
        description: `Figma variant property "${p}"`
      };
    } else if (meta.type === 'boolean') {
      argTypesObj[cleanProp] = {
        control: { type: 'boolean' },
        description: `Figma boolean property "${p}"`
      };
    } else {
      argTypesObj[cleanProp] = {
        control: { type: 'text' },
        description: `Figma property "${p}"`
      };
    }
  });

  const markdownSpecsTable = `
### Figma Component Specifications
| Property | Value |
| --- | --- |
| **Exact Layer Name** | \`${item.exactFigmaName}\` |
| **Figma Node ID** | \`${item.node.id}\` |
| **Component Type** | \`${item.type}\` |
| **Variants Count** | \`${item.variants.length}\` |
| **Bound Variables** | \`${JSON.stringify(item.node.boundVariables || {})}\` |
`;

  const storiesContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${item.pascalName} } from './${item.pascalName}';

const meta: Meta<typeof ${item.pascalName}> = {
  title: 'Components/${item.exactFigmaName.replace(/'/g, "\\'")}',
  component: ${item.pascalName},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: \`Figma Layer Name: **${item.exactFigmaName}**\\n\\n${markdownSpecsTable.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,
      },
    },
  },
  argTypes: ${JSON.stringify(argTypesObj, null, 4)}
};

export default meta;
type Story = StoryObj<typeof ${item.pascalName}>;

export const Default: Story = {
  args: {
    children: '${item.exactFigmaName}'
  },
};
`;

  fs.writeFileSync(path.join(compDir, `${item.pascalName}.tsx`), tsxContent, 'utf8');
  fs.writeFileSync(path.join(compDir, `${item.pascalName}.css`), cssContent, 'utf8');
  fs.writeFileSync(path.join(compDir, `${item.pascalName}.stories.tsx`), storiesContent, 'utf8');

  exportedComponents.push({
    pascalName: item.pascalName,
    exactFigmaName: item.exactFigmaName
  });
});

// Single Barrel Export src/index.ts
const barrelLines = exportedComponents.map(c => `export { ${c.pascalName} } from './components/${c.pascalName}/${c.pascalName}';`).join('\n');
const indexTsPath = path.join(projectRoot, 'design-system-storybook', 'src', 'index.ts');
fs.writeFileSync(indexTsPath, `/**
 * Figma Design System - Component Library Barrel Export
 * Auto-generated with Preserved Layer Names
 */

${barrelLines}
`, 'utf8');

console.log(`Generated ${exportedComponents.length} components and barrel export in src/index.ts.`);
