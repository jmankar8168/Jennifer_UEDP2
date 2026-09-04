const fs = require('fs');
const fileData = JSON.parse(fs.readFileSync('figma-file-response.json', 'utf8'));

let targetNode = null;

function findNode(node, id) {
  if (node.id === id) {
    targetNode = node;
    return;
  }
  if (node.children) {
    for (const child of node.children) {
      findNode(child, id);
      if (targetNode) return;
    }
  }
}

findNode(fileData.document, '16:645');

if (targetNode) {
  console.log('Target Node Found:', targetNode.name, 'Type:', targetNode.type, 'ID:', targetNode.id);
  console.log('Props:', JSON.stringify(targetNode.componentPropertyDefinitions || {}, null, 2));
  console.log('Variants count:', targetNode.children ? targetNode.children.length : 0);

  fs.writeFileSync('node_16_645_dump.json', JSON.stringify(targetNode, null, 2));
  console.log('Saved full node dump to node_16_645_dump.json');

  if (targetNode.children) {
    targetNode.children.forEach((c, idx) => {
      console.log(`\n=== Variant ${idx}: "${c.name}" (ID: ${c.id}) ===`);
      console.log('  Bound Variables:', JSON.stringify(c.boundVariables || {}));
      console.log('  Fills:', JSON.stringify(c.fills || []));
      console.log('  Strokes:', JSON.stringify(c.strokes || []));
      console.log('  Corner Radius:', c.cornerRadius, 'Rect Corner Radii:', c.rectangleCornerRadii);
      console.log('  Padding:', `${c.paddingTop} ${c.paddingRight} ${c.paddingBottom} ${c.paddingLeft}`, 'Gap:', c.itemSpacing);
      console.log('  Layout:', c.layoutMode, 'Primary Align:', c.primaryAxisAlignItems, 'Counter Align:', c.counterAxisAlignItems);
      console.log('  Children:');
      if (c.children) {
        c.children.forEach(sub => {
          console.log(`    - [${sub.type}] "${sub.name}" (ID: ${sub.id}) - text: "${sub.characters || ''}"`);
          if (sub.children) {
            sub.children.forEach(sub2 => {
              console.log(`        -- [${sub2.type}] "${sub2.name}" (ID: ${sub2.id}) - text: "${sub2.characters || ''}"`);
            });
          }
        });
      }
    });
  }
} else {
  console.log('Node 16:645 not found in local cache');
}
