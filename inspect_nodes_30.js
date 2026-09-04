const fs = require('fs');
const fileData = JSON.parse(fs.readFileSync('figma-file-response.json', 'utf8'));

const targetIds = ['30:113', '30:114', '30:125'];
const foundNodes = {};

function findNodes(node) {
  if (targetIds.includes(node.id)) {
    foundNodes[node.id] = node;
  }
  if (node.children) {
    node.children.forEach(findNodes);
  }
}

findNodes(fileData.document);

targetIds.forEach(id => {
  const n = foundNodes[id];
  console.log(`\n========================================`);
  console.log(`NODE ID: ${id}`);
  if (!n) {
    console.log('NOT FOUND');
    return;
  }
  console.log(`Name: "${n.name}", Type: ${n.type}`);
  console.log(`Props:`, JSON.stringify(n.componentPropertyDefinitions || {}, null, 2));
  console.log(`Dimensions:`, n.absoluteBoundingBox);
  console.log(`Fills:`, JSON.stringify(n.fills || []));
  console.log(`Strokes:`, JSON.stringify(n.strokes || []));
  console.log(`Corner Radius:`, n.cornerRadius, n.rectangleCornerRadii);
  console.log(`Bound Variables:`, JSON.stringify(n.boundVariables || {}));

  if (n.children) {
    console.log(`Children Count: ${n.children.length}`);
    n.children.forEach((c, idx) => {
      console.log(`  [Child ${idx}] "${c.name}" (${c.type}, ID: ${c.id})`);
      console.log(`    Dims:`, c.absoluteBoundingBox);
      console.log(`    Fills:`, JSON.stringify(c.fills || []));
      console.log(`    Strokes:`, JSON.stringify(c.strokes || []));
      console.log(`    BoundVars:`, JSON.stringify(c.boundVariables || {}));
      console.log(`    Corner Radius:`, c.cornerRadius, c.rectangleCornerRadii);
      console.log(`    Text: "${c.characters || ''}"`);
      if (c.style) console.log(`    TextStyle:`, c.style);
      if (c.children) {
        c.children.forEach((sub, sidx) => {
          console.log(`      -- [Subchild ${sidx}] "${sub.name}" (${sub.type}, ID: ${sub.id}) text:"${sub.characters || ''}"`);
          if (sub.children) {
            sub.children.forEach((sub2, s2idx) => {
              console.log(`          --- [Sub2 ${s2idx}] "${sub2.name}" (${sub2.type}, ID: ${sub2.id}) text:"${sub2.characters || ''}"`);
            });
          }
        });
      }
    });
  }
});
