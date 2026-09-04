const fs = require('fs');
const fileData = JSON.parse(fs.readFileSync('figma-file-response.json', 'utf8'));

const canvas = fileData.document.children[0];

const components = [];
const componentSets = [];
const frames = [];

function walk(node, parentName = '') {
  if (node.type === 'COMPONENT_SET') {
    componentSets.push(node);
  } else if (node.type === 'COMPONENT') {
    components.push(node);
  } else if (node.type === 'FRAME' && !node.name.startsWith('.')) {
    frames.push(node);
  }

  if (node.children) {
    node.children.forEach(child => walk(child, node.name || parentName));
  }
}

walk(canvas);

console.log(`Discovered:
- Component Sets: ${componentSets.length}
- Standalone Components: ${components.length}
- Top/Sub Frames: ${frames.length}
`);

console.log('--- COMPONENT SETS ---');
componentSets.forEach(cs => {
  console.log(`ComponentSet: "${cs.name}" (ID: ${cs.id}) - Variants: ${cs.children ? cs.children.length : 0}`);
  if (cs.componentPropertyDefinitions) {
    console.log('  Props:', Object.keys(cs.componentPropertyDefinitions));
  }
});

console.log('\n--- STANDALONE COMPONENTS (not in set) ---');
const standaloneComponents = components.filter(c => !componentSets.some(cs => cs.children && cs.children.some(child => child.id === c.id)));
standaloneComponents.forEach(c => {
  console.log(`Component: "${c.name}" (ID: ${c.id})`);
});

console.log('\n--- TOP FRAMES ---');
frames.slice(0, 15).forEach(f => {
  console.log(`Frame: "${f.name}" (ID: ${f.id})`);
});
