const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./node_16_963_dump.json', 'utf8'));

console.log('=== COMPONENT SET: search (16:963) ===');
console.log('Children count (Variants):', data.children ? data.children.length : 0);

if (data.children) {
  data.children.forEach((c, idx) => {
    console.log(`\n--- Variant ${idx + 1}: ${c.name} (${c.id}) ---`);
    console.log('Type:', c.type);
    console.log('Bounding Box:', c.absoluteBoundingBox);
    console.log('Fills:', JSON.stringify(c.fills));
    console.log('Strokes:', JSON.stringify(c.strokes));
    console.log('StrokeWeight:', c.strokeWeight, 'CornerRadius:', c.cornerRadius);
    console.log('Padding:', {
      paddingLeft: c.paddingLeft,
      paddingRight: c.paddingRight,
      paddingTop: c.paddingTop,
      paddingBottom: c.paddingBottom,
      itemSpacing: c.itemSpacing
    });
    console.log('LayoutMode:', c.layoutMode, 'PrimaryAxisAlignItems:', c.primaryAxisAlignItems, 'CounterAxisAlignItems:', c.counterAxisAlignItems);
    console.log('BoundVariables:', JSON.stringify(c.boundVariables));

    function printSubnodes(n, indent = '  ') {
      if (!n) return;
      console.log(`${indent}- [${n.type}] "${n.name}" (${n.id})`);
      if (n.type === 'TEXT') {
        console.log(`${indent}  Text: "${n.characters}", Style: ${JSON.stringify(n.style)}`);
        console.log(`${indent}  Fills: ${JSON.stringify(n.fills)}`);
        console.log(`${indent}  BoundVars: ${JSON.stringify(n.boundVariables)}`);
      }
      if (n.type === 'VECTOR' || n.type === 'INSTANCE' || n.type === 'FRAME') {
        console.log(`${indent}  Size: ${JSON.stringify(n.absoluteBoundingBox)}`);
        console.log(`${indent}  Fills: ${JSON.stringify(n.fills)}`);
        console.log(`${indent}  Strokes: ${JSON.stringify(n.strokes)}`);
        console.log(`${indent}  BoundVars: ${JSON.stringify(n.boundVariables)}`);
      }
      if (n.children) {
        n.children.forEach(ch => printSubnodes(ch, indent + '  '));
      }
    }
    if (c.children) {
      console.log('Subnodes:');
      c.children.forEach(ch => printSubnodes(ch, '  '));
    }
  });
}
