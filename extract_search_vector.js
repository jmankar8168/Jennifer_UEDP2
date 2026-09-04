const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./node_16_963_dump.json', 'utf8'));

function findVector(node) {
  if (node.name === 'ri:search-line' || node.name === 'Vector' || node.name === 'icon') {
    console.log('Vector found:', node.name, node.id, node.fillGeometry, node.strokes);
  }
  if (node.children) node.children.forEach(findVector);
}
findVector(data);
