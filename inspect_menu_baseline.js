const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./node_16_963_dump.json', 'utf8'));

const v4 = data.children.find(c => c.name.includes('selected with list'));
console.log('Variant 4 details:');
const menu = v4.children.find(c => c.name.includes('Menu'));

if (menu) {
  console.log('Menu size:', menu.absoluteBoundingBox);
  console.log('Menu fills:', JSON.stringify(menu.fills));
  console.log('Menu strokes:', JSON.stringify(menu.strokes));
  
  function inspectSub(n, d = 0) {
    const pad = '  '.repeat(d);
    console.log(`${pad}- [${n.type}] "${n.name}" (${n.id})`);
    if (n.characters) console.log(`${pad}   Text: "${n.characters}"`);
    if (n.children) n.children.forEach(ch => inspectSub(ch, d + 1));
  }
  inspectSub(menu);
}
