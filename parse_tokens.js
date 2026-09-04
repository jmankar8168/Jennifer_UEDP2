const fs = require('fs');

const baseTokens = JSON.parse(fs.readFileSync('base-palette-tokens.json', 'utf8'));
const foundTokens = JSON.parse(fs.readFileSync('foundational-tokens.json', 'utf8'));

const variableMap = new Map(); // VariableID -> { cssName, value, category, rawName }
const cssVariables = [];

function traverse(obj, path = []) {
  if (obj && typeof obj === 'object') {
    if (obj['$extensions'] && obj['$extensions']['com.figma.variableId']) {
      const varId = obj['$extensions']['com.figma.variableId'];
      const rawValue = obj['$value'];
      let cssVal = '';
      if (obj['$type'] === 'color' || (rawValue && rawValue.hex)) {
        cssVal = rawValue.hex || rawValue;
      } else if (typeof rawValue === 'number') {
        // If scope or category implies px
        const category = path[0];
        if (category === 'opacity') {
          cssVal = String(rawValue);
        } else {
          cssVal = rawValue + 'px';
        }
      } else {
        cssVal = String(rawValue);
      }

      // Format CSS variable name e.g. --uedp-slate-900 or --uedp-rounded-3xl
      const tokenPath = path.join('-');
      const cssName = '--uedp-' + tokenPath.replace(/\s+/g, '-').toLowerCase();

      variableMap.set(varId, {
        varId,
        cssName,
        value: cssVal,
        rawValue,
        path,
        type: obj['$type']
      });

      cssVariables.push(`${cssName}: ${cssVal};`);
    } else {
      for (const key of Object.keys(obj)) {
        if (key.startsWith('$')) continue;
        traverse(obj[key], [...path, key]);
      }
    }
  }
}

traverse(baseTokens, []);
traverse(foundTokens, []);

console.log(`Parsed Total CSS Variables: ${variableMap.size}`);
console.log('Sample CSS Variables:\n' + cssVariables.slice(0, 20).join('\n'));

// Save map for reference
fs.writeFileSync('parsed_tokens.json', JSON.stringify(Array.from(variableMap.values()), null, 2));
