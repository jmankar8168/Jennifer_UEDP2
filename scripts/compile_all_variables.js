const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const tokensDir = path.join(projectRoot, 'tokens');

const baseTokens = JSON.parse(fs.readFileSync(path.join(tokensDir, 'base-palette-tokens.json'), 'utf8'));
const foundTokens = JSON.parse(fs.readFileSync(path.join(tokensDir, 'foundational-tokens.json'), 'utf8'));
const darkTokens = JSON.parse(fs.readFileSync(path.join(tokensDir, 'VisionSync-Dark.tokens.json'), 'utf8'));
const lightTokens = JSON.parse(fs.readFileSync(path.join(tokensDir, 'VisionSync-Light.tokens.json'), 'utf8'));
const typoVariables = JSON.parse(fs.readFileSync(path.join(tokensDir, 'typography-variables.json'), 'utf8'));
const typoTokens = JSON.parse(fs.readFileSync(path.join(tokensDir, 'typography-tokens.json'), 'utf8'));

const allVariablesList = [];
const rootCssRules = [];
const darkCssRules = [];
const lightCssRules = [];

function cleanTokenName(name) {
  return name.replace(/,/g, '-').replace(/\s+/g, '-').toLowerCase();
}

// 1. Base Palette
for (const [family, shades] of Object.entries(baseTokens)) {
  if (family.startsWith('$')) continue;
  for (const [shade, data] of Object.entries(shades)) {
    if (shade.startsWith('$')) continue;
    const hex = data.$value?.hex || (typeof data.$value === 'string' ? data.$value : null);
    if (hex) {
      const varName = `--uedp-${cleanTokenName(family)}-${cleanTokenName(shade)}`;
      rootCssRules.push(`  ${varName}: ${hex};`);
      allVariablesList.push({
        id: `base/${family}/${shade}`,
        name: `${family}/${shade}`,
        collection: 'Base Palette',
        type: 'color',
        cssVariable: varName,
        value: hex,
        description: `Base color ramp ${family} shade ${shade}`,
      });
    }
  }
}

// 2. VisionSync Brand Ramps (Acid, Olive, Rust, Neutral, Cream, Ink)
const brandFamilies = ['acid', 'olive', 'rust', 'neutral'];
brandFamilies.forEach((fam) => {
  if (darkTokens[fam]) {
    for (const [shade, data] of Object.entries(darkTokens[fam])) {
      if (shade.startsWith('$')) continue;
      const hex = data.$value?.hex || data.$value;
      if (hex) {
        const varName = `--uedp-brand-${fam}-${cleanTokenName(shade)}`;
        rootCssRules.push(`  ${varName}: ${hex};`);
        allVariablesList.push({
          id: `brand/${fam}/${shade}`,
          name: `brand/${fam}/${shade}`,
          collection: 'Brand Ramps',
          type: 'color',
          cssVariable: varName,
          value: hex,
          description: `VisionSync brand ${fam} ramp shade ${shade}`,
        });
      }
    }
  }
});

// Single colors: cream, ink, deep, graphite
const singleColors = {
  'cream': darkTokens.cream?.base?.$value?.hex || '#F5F2EC',
  'ink': '#0A0A0A',
  'deep': '#1A1A1A',
  'graphite': '#2A2A2A',
  'white': '#FFFFFF',
  'black': '#000000',
};
for (const [name, hex] of Object.entries(singleColors)) {
  const varName = `--uedp-brand-${name}`;
  rootCssRules.push(`  ${varName}: ${hex};`);
  allVariablesList.push({
    id: `brand/${name}`,
    name: `brand/${name}`,
    collection: 'Brand Colors',
    type: 'color',
    cssVariable: varName,
    value: hex,
    description: `VisionSync brand color ${name}`,
  });
}

// 3. Semantic Themed Tokens (Dark vs Light)
const semanticCategories = ['surface', 'text', 'border', 'interactive', 'interactiveText', 'feedback'];

function resolveAliasValue(val, tokenObj) {
  if (typeof val !== 'string' || !val.startsWith('{') || !val.endsWith('}')) {
    return val;
  }
  const ref = val.slice(1, -1); // e.g. "neutral.900" or "cream.base"
  const [fam, shade] = ref.split('.');

  if (fam && shade && tokenObj[fam] && tokenObj[fam][shade]) {
    const target = tokenObj[fam][shade];
    return target.$value?.hex || target.$value;
  }
  if (fam === 'cream') return '#F5F2EC';
  if (fam === 'white') return '#FFFFFF';
  if (fam === 'black') return '#000000';
  return val;
}

semanticCategories.forEach((cat) => {
  const darkGroup = darkTokens[cat] || {};
  const lightGroup = lightTokens[cat] || {};
  const allKeys = Array.from(new Set([...Object.keys(darkGroup), ...Object.keys(lightGroup)]));

  allKeys.forEach((key) => {
    if (key.startsWith('$')) return;
    const rawDark = darkGroup[key]?.$value?.hex || darkGroup[key]?.$value;
    const rawLight = lightGroup[key]?.$value?.hex || lightGroup[key]?.$value;

    const darkVal = resolveAliasValue(rawDark, darkTokens);
    const lightVal = resolveAliasValue(rawLight, lightTokens);
    const varName = `--uedp-${cleanTokenName(cat)}-${cleanTokenName(key)}`;

    if (darkVal) {
      darkCssRules.push(`  ${varName}: ${darkVal};`);
    }
    if (lightVal) {
      lightCssRules.push(`  ${varName}: ${lightVal};`);
    }

    allVariablesList.push({
      id: `semantic/${cat}/${key}`,
      name: `${cat}/${key}`,
      collection: 'Semantic Tokens',
      type: 'color',
      cssVariable: varName,
      value: darkVal || lightVal,
      darkValue: darkVal,
      lightValue: lightVal,
      isThemed: true,
      description: `Semantic ${cat} token for ${key} state/usage`,
    });
  });
});

// 4. Typography Tokens
rootCssRules.push('');
rootCssRules.push('  /* Typography Tokens */');
rootCssRules.push('  --uedp-font-family-display: \'Playfair Display\', Georgia, serif;');
rootCssRules.push('  --uedp-font-family-body: \'Source Sans 3\', -apple-system, sans-serif;');
rootCssRules.push('  --uedp-font-family-mono: \'Space Mono\', SFMono-Regular, monospace;');

allVariablesList.push({
  id: 'typography/fontFamily/display',
  name: 'fontFamily/display',
  collection: 'Typography',
  type: 'fontFamily',
  cssVariable: '--uedp-font-family-display',
  value: '\'Playfair Display\', Georgia, serif',
  description: 'Display serif font family',
});
allVariablesList.push({
  id: 'typography/fontFamily/body',
  name: 'fontFamily/body',
  collection: 'Typography',
  type: 'fontFamily',
  cssVariable: '--uedp-font-family-body',
  value: '\'Source Sans 3\', -apple-system, sans-serif',
  description: 'Body sans-serif font family',
});
allVariablesList.push({
  id: 'typography/fontFamily/mono',
  name: 'fontFamily/mono',
  collection: 'Typography',
  type: 'fontFamily',
  cssVariable: '--uedp-font-family-mono',
  value: '\'Space Mono\', SFMono-Regular, monospace',
  description: 'Technical monospace font family',
});

// Font Weights
const fontWeights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};
for (const [wName, wVal] of Object.entries(fontWeights)) {
  const varName = `--uedp-font-weight-${wName}`;
  rootCssRules.push(`  ${varName}: ${wVal};`);
  allVariablesList.push({
    id: `typography/fontWeight/${wName}`,
    name: `fontWeight/${wName}`,
    collection: 'Typography',
    type: 'fontWeight',
    cssVariable: varName,
    value: wVal,
    description: `Font weight ${wName}`,
  });
}

// Type Scale
const typeScale = {
  'display': { size: '64px', line: '64px', tracking: '-0.5px' },
  'h1': { size: '36px', line: '40px', tracking: '0px' },
  'h2': { size: '28px', line: '34px', tracking: '0px' },
  'h3': { size: '22px', line: '28px', tracking: '0px' },
  'body-large': { size: '16px', line: '24px', tracking: '0px' },
  'body': { size: '14px', line: '20px', tracking: '0px' },
  'body-small': { size: '12px', line: '16px', tracking: '0px' },
  'helper': { size: '11px', line: '16px', tracking: '0px' },
  'eyebrow': { size: '12px', line: '16px', tracking: '1.2px' },
  'code': { size: '14px', line: '20px', tracking: '0px' },
};
for (const [scaleName, scaleData] of Object.entries(typeScale)) {
  const sizeVar = `--uedp-font-size-${scaleName}`;
  const lineVar = `--uedp-line-height-${scaleName}`;
  const trackVar = `--uedp-letter-spacing-${scaleName}`;

  rootCssRules.push(`  ${sizeVar}: ${scaleData.size};`);
  rootCssRules.push(`  ${lineVar}: ${scaleData.line};`);
  rootCssRules.push(`  ${trackVar}: ${scaleData.tracking};`);

  allVariablesList.push({
    id: `typography/typeScale/${scaleName}/size`,
    name: `typeScale/${scaleName}/size`,
    collection: 'Typography',
    type: 'fontSize',
    cssVariable: sizeVar,
    value: scaleData.size,
    description: `${scaleName} font size`,
  });
}

// 5. Foundational Geometry (Radii, Gap, Padding, Opacity, Max-W)
rootCssRules.push('');
rootCssRules.push('  /* Foundational Geometry Tokens */');

function traverseFoundational(obj, pathArr = []) {
  if (!obj || typeof obj !== 'object') return;
  if (obj['$value'] !== undefined) {
    const rawVal = obj['$value'];
    const tokenType = obj['$type'];
    const category = pathArr[0];

    // Clean name: replace comma with hyphen e.g. gap-0,5 -> gap-0-5
    const cleanPath = pathArr.map(p => cleanTokenName(p)).join('-');
    const varName = `--uedp-${cleanPath}`;

    let cssVal = '';
    if (tokenType === 'color' || (rawVal && rawVal.hex)) {
      cssVal = rawVal.hex || rawVal;
    } else if (typeof rawVal === 'number') {
      if (category === 'opacity') {
        cssVal = String(rawVal);
      } else {
        cssVal = rawVal + 'px';
      }
    } else {
      cssVal = String(rawVal);
    }

    rootCssRules.push(`  ${varName}: ${cssVal};`);
    allVariablesList.push({
      id: `foundational/${pathArr.join('/')}`,
      name: pathArr.join('/'),
      collection: 'Foundational',
      type: tokenType || category,
      cssVariable: varName,
      value: cssVal,
      description: `Foundational ${category} token`,
    });
  } else {
    for (const k of Object.keys(obj)) {
      if (k.startsWith('$')) continue;
      traverseFoundational(obj[k], [...pathArr, k]);
    }
  }
}

traverseFoundational(foundTokens, []);

// Add convenience shorthand aliases
rootCssRules.push('');
rootCssRules.push('  /* Foundational Shorthand Aliases */');
const radiiKeys = ['none: 0px', 'sm: 2px', ': 4px', 'md: 6px', 'lg: 8px', 'xl: 12px', '2xl: 16px', '3xl: 24px', 'full: 9999px'];
radiiKeys.forEach(r => {
  const [k, v] = r.split(': ');
  const aliasName = k ? `--uedp-rounded-${k}` : '--uedp-rounded';
  const target = k ? `--uedp-border-radius-rounded-${k}` : '--uedp-border-radius-rounded';
  rootCssRules.push(`  ${aliasName}: var(${target}, ${v});`);
});

const gaps = ['0: 0px', '1: 4px', '2: 8px', '3: 12px', '4: 16px', '5: 20px', '6: 24px', '8: 32px', '10: 40px', '12: 48px'];
gaps.forEach(g => {
  const [k, v] = g.split(': ');
  rootCssRules.push(`  --uedp-gap-${k}: var(--uedp-gap-gap-${k}, ${v});`);
  rootCssRules.push(`  --uedp-padding-${k}: var(--uedp-padding-p-${k}, ${v});`);
});


// Assemble Complete figma-tokens.css
const fullCss = `/**
 * Figma Design System - Complete Variables & Design Tokens
 * Reconstructed from Figma Local Variables Page (?view=variables)
 * Collections: Base Palette, Brand Ramps, Semantic Themed Tokens, Typography, Foundational Geometry
 */

:root {
${rootCssRules.join('\n')}

  /* Default Theme = Dark */
${darkCssRules.join('\n')}
}

/* Explicit Dark Theme */
:root[data-theme="dark"],
body.dark,
.uedp-theme-dark {
${darkCssRules.join('\n')}
}

/* Explicit Light Theme */
:root[data-theme="light"],
body.light,
.uedp-theme-light {
${lightCssRules.join('\n')}
}
`;

// Save outputs
const outCssPath = path.join(projectRoot, 'design-system-storybook', 'src', 'styles', 'figma-tokens.css');
fs.writeFileSync(outCssPath, fullCss, 'utf8');
console.log(`Generated CSS custom properties: ${outCssPath}`);

const tokensJsonDir = path.join(projectRoot, 'design-system-storybook', 'src', 'tokens');
fs.mkdirSync(tokensJsonDir, { recursive: true });

const outJsonPath = path.join(tokensJsonDir, 'all-variables.json');
fs.writeFileSync(outJsonPath, JSON.stringify(allVariablesList, null, 2), 'utf8');
console.log(`Exported ${allVariablesList.length} total variables to ${outJsonPath}`);
