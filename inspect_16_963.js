const fs = require('fs');

const raw = fs.readFileSync('./figma-file-response.json', 'utf8');
const data = JSON.parse(raw);

function findNode(node, id) {
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNode(child, id);
      if (found) return found;
    }
  }
  return null;
}

const target = findNode(data.document, '16:963');
console.log('Target found:', target ? { id: target.id, name: target.name, type: target.type } : 'NOT FOUND');

if (target) {
  fs.writeFileSync('./node_16_963_dump.json', JSON.stringify(target, null, 2));
  console.log('Saved to node_16_963_dump.json');
} else {
  // Let's search for nodes with 16: or containing 963
  console.log('Searching for close IDs or components...');
  function search(node) {
    if (node.id && (node.id.includes('16:963') || (node.name && node.name.toLowerCase().includes('963')))) {
      console.log('Found match:', node.id, node.name, node.type);
    }
    if (node.children) {
      node.children.forEach(search);
    }
  }
  search(data.document);
}
