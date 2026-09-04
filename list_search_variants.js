const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./node_16_963_dump.json', 'utf8'));

console.log('Search Component Set Summary:');
console.log('Component Set Name:', data.name, 'ID:', data.id);

data.children.forEach((variant, i) => {
  console.log(`\n================ Variant ${i+1}: "${variant.name}" (ID: ${variant.id}) ================`);
  console.log('Size:', variant.absoluteBoundingBox);
  console.log('Fills:', JSON.stringify(variant.fills));
  console.log('Strokes:', JSON.stringify(variant.strokes), 'Weight:', variant.strokeWeight, 'CornerRadius:', variant.cornerRadius);
  console.log('Padding:', {
    left: variant.paddingLeft,
    right: variant.paddingRight,
    top: variant.paddingTop,
    bottom: variant.paddingBottom,
    itemSpacing: variant.itemSpacing
  });
  console.log('LayoutMode:', variant.layoutMode);
  console.log('Top level children:');
  variant.children.forEach(c => {
    console.log(`  - [${c.type}] "${c.name}" (ID: ${c.id}) Size: ${c.absoluteBoundingBox ? `${c.absoluteBoundingBox.width}x${c.absoluteBoundingBox.height}` : 'none'}`);
    if (c.type === 'FRAME' || c.type === 'INSTANCE') {
      if (c.children) {
        c.children.forEach(gc => {
          console.log(`      * [${gc.type}] "${gc.name}" (ID: ${gc.id})`);
        });
      }
    }
  });
});
