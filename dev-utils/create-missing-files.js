const fs = require('fs');
const path = require('path');

// Path to the sidebars.ts file
const SIDEBARS_FILE = path.join(__dirname, '..', 'sidebars.ts');
// Base folder where documentation files are stored
const DOCS_DIR = path.join(__dirname, '..', 'docs');

// Check if sidebars.ts exists
if (!fs.existsSync(SIDEBARS_FILE)) {
  console.error(`Error: ${SIDEBARS_FILE} not found. Make sure you are in the project's root directory.`);
  process.exit(1);
}

console.log(`Reading configuration from ${SIDEBARS_FILE}...`);

// Read sidebars.ts and extract paths
const sidebarContent = fs.readFileSync(SIDEBARS_FILE, 'utf8');
const matches = sidebarContent.match(/['"]([a-zA-Z0-9/_-]+)['"]/g);

if (!matches) {
  console.log('No valid paths found in sidebars.ts.');
  process.exit(0);
}

// Process each path
matches.forEach((match) => {
  const filePath = match.replace(/['"]/g, ''); // Remove quotes
  const fullPath = path.join(DOCS_DIR, `${filePath}.md`);
  const dirPath = path.dirname(fullPath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Directory created: ${dirPath}`);
  }

  // Create file if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, `# Placeholder for ${filePath}`);
    console.log(`File created: ${fullPath}`);
  } else {
    console.log(`File already exists: ${fullPath}`);
  }
});

console.log('Process complete. All placeholders are now in place.');
