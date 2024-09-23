import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use fileURLToPath to get the directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the package.json content
const packageJsonContent = {
  type: "commonjs"
};

// Define the path to the output package.json
const outputPath = path.join(__dirname, '..', 'dist', 'cjs', 'package.json');

// Ensure the directory exists and write the file asynchronously
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, JSON.stringify(packageJsonContent, null, 2));