const fs = require('fs');
const fileData = JSON.parse(fs.readFileSync('figma-file-response.json', 'utf8'));

let targetNode = null;
function find(n) {
  if (n.id === '30:125') targetNode = n;
  if (n.children) n.children.forEach(find);
}
find(fileData.document);

fs.writeFileSync('mode_toggle_full_dump.json', JSON.stringify(targetNode, null, 2));

console.log('Target:', targetNode.name, targetNode.type, targetNode.id);
targetNode.children.forEach((variant, i) => {
  console.log(`\n================= VARIANT ${i}: "${variant.name}" (ID: ${variant.id}) =================`);
  console.log('Bounding Box:', variant.absoluteBoundingBox);
  console.log('Layout:', variant.layoutMode, 'ItemSpacing:', variant.itemSpacing, 'Padding:', variant.paddingTop, variant.paddingRight, variant.paddingBottom, variant.paddingLeft);
  console.log('Fills:', JSON.stringify(variant.fills));
  console.log('Strokes:', JSON.stringify(variant.strokes), 'Weight:', variant.strokeWeight);
  console.log('Effects:', JSON.stringify(variant.effects));
  console.log('CornerRadius:', variant.cornerRadius, variant.rectangleCornerRadii);
  
  if (variant.children) {
    variant.children.forEach((child, ci) => {
      console.log(`\n  --- Child [${ci}]: "${child.name}" (${child.type}, ID: ${child.id}) ---`);
      console.log('    Bounding Box:', child.absoluteBoundingBox);
      console.log('    Fills:', JSON.stringify(child.fills));
      console.log('    Strokes:', JSON.stringify(child.strokes), 'Weight:', child.strokeWeight);
      console.log('    CornerRadius:', child.cornerRadius, child.rectangleCornerRadii);
      console.log('    BoundVars:', JSON.stringify(child.boundVariables));
      if (child.characters) console.log('    Text Characters:', child.characters, 'Style:', child.style);

      if (child.children) {
        child.children.forEach((sub, si) => {
          console.log(`      -- Subchild [${si}]: "${sub.name}" (${sub.type}, ID: ${sub.id}) --`);
          console.log('        Bounding Box:', sub.absoluteBoundingBox);
          console.log('        Fills:', JSON.stringify(sub.fills));
          console.log('        Strokes:', JSON.stringify(sub.strokes), 'Weight:', sub.strokeWeight);
          console.log('        CornerRadius:', sub.cornerRadius, sub.rectangleCornerRadii);
          console.log('        BoundVars:', JSON.stringify(sub.boundVariables));
          if (sub.characters) console.log('        Text Characters:', sub.characters, 'Style:', sub.style);
        });
      }
    });
  }
});
