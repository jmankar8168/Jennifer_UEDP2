const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components');

let updatedCount = 0;

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const folderName = entry.name;
      const storyFile = path.join(fullPath, `${folderName}.stories.tsx`);
      if (fs.existsSync(storyFile)) {
        let content = fs.readFileSync(storyFile, 'utf8');
        // Replace title: '...' with title: 'Components/<folderName>'
        const newTitle = `title: 'Components/${folderName}',`;
        const updated = content.replace(/title:\s*['"][^'"]+['"],/, newTitle);
        if (updated !== content) {
          fs.writeFileSync(storyFile, updated, 'utf8');
          console.log(`Updated ${folderName}.stories.tsx -> title: 'Components/${folderName}'`);
          updatedCount++;
        }
      }
      processDir(fullPath);
    }
  }
}

processDir(componentsDir);
console.log(`\nSuccessfully updated ${updatedCount} story titles to be unique.`);
