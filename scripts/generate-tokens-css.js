const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const baseTokensPath = path.join(projectRoot, 'base-palette-tokens.json');
const foundTokensPath = path.join(projectRoot, 'foundational-tokens.json');

const baseTokens = JSON.parse(fs.readFileSync(baseTokensPath, 'utf8'));
const foundTokens = JSON.parse(fs.readFileSync(foundTokensPath, 'utf8'));

const variableMap = {}; // VariableID -> { cssName, value, rawValue, type, path }
const cssLines = [];

function formatTokenName(pathArr) {
  // Convert token path arrays e.g. ['slate', '900'] -> '--uedp-slate-900'
  // ['border radius', 'rounded-3xl'] -> '--uedp-rounded-3xl' or '--uedp-border-radius-rounded-3xl'
  // ['gap', '4'] -> '--uedp-gap-4'
  const rawPath = pathArr.join('-');
  const cleanPath = rawPath
    .replace(/\b(border radius|border-radius)\b/gi, 'radius')
    .replace(/\s+/g, '-')
    .toLowerCase();

  // Handle redundant prefix e.g. radius-rounded-3xl -> rounded-3xl
  let name = cleanPath;
  if (name.startsWith('radius-rounded-')) {
    name = name.replace('radius-rounded-', 'rounded-');
  } else if (name.startsWith('radius-rounded')) {
    name = name.replace('radius-rounded', 'rounded');
  }
  return '--uedp-' + name;
}

function traverse(obj, currentPath = []) {
  if (!obj || typeof obj !== 'object') return;

  if (obj['$extensions'] && obj['$extensions']['com.figma.variableId']) {
    const varId = obj['$extensions']['com.figma.variableId'];
    const rawVal = obj['$value'];
    const tokenType = obj['$type'];

    let cssVal = '';
    if (tokenType === 'color' || (rawVal && typeof rawVal === 'object' && rawVal.hex)) {
      cssVal = rawVal.hex || rawVal;
    } else if (typeof rawVal === 'number') {
      const topCategory = currentPath[0];
      if (topCategory === 'opacity') {
        cssVal = String(rawVal);
      } else {
        cssVal = rawVal + 'px';
      }
    } else {
      cssVal = String(rawVal);
    }

    const cssName = formatTokenName(currentPath);

    variableMap[varId] = {
      varId,
      cssName,
      value: cssVal,
      rawValue: rawVal,
      type: tokenType,
      path: currentPath
    };

    cssLines.push(`  ${cssName}: ${cssVal};`);
  } else {
    for (const key of Object.keys(obj)) {
      if (key.startsWith('$')) continue;
      traverse(obj[key], [...currentPath, key]);
    }
  }
}

traverse(baseTokens, []);
traverse(foundTokens, []);

const cssOutput = `/**
 * Figma Design System - CSS Custom Properties
 * Auto-generated from base-palette-tokens.json and foundational-tokens.json
 */

:root {
${cssLines.join('\n')}
}
`;

const outputDir = path.join(projectRoot, 'design-system-storybook', 'src', 'styles');
fs.mkdirSync(outputDir, { recursive: true });

const cssFilePath = path.join(outputDir, 'figma-tokens.css');
fs.writeFileSync(cssFilePath, cssOutput, 'utf8');

const mapFilePath = path.join(__dirname, 'token-variable-map.json');
fs.writeFileSync(mapFilePath, JSON.stringify(variableMap, null, 2), 'utf8');

console.log(`Generated ${cssLines.length} CSS Custom Properties in ${cssFilePath}`);
console.log(`Token Variable Map saved to ${mapFilePath}`);
