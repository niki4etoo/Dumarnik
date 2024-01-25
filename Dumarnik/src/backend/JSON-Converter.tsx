import * as fs from 'fs';

const inputFilePath = 'input.txt';
const outputJsonFilePath = 'output.json';

// Read the contents of the text file asynchronously
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    // Parse the text file content into a JavaScript object
    const parsedData = parseTextToJsonObject(data);

    // Write the JavaScript object to a JSON file
    writeObjectToJsonFile(parsedData, outputJsonFilePath);

    console.log('Conversion complete.');
  }
});

// Function to parse text to a JavaScript object
function parseTextToJsonObject(text: string): Record<string, string> {
  const lines = text.split('\n');
  const result: Record<string, string> = {};

  lines.forEach(line => {
    const [key, value] = line.split(':');
    if (key && value) {
      result[key.trim()] = value.trim();
    } // to do
  });

  return result;
}

// Function to write a JavaScript object to a JSON file
function writeObjectToJsonFile(obj: Record<string, string>, outputPath: string): void {
  const jsonContent = JSON.stringify(obj, null, 2);

  fs.writeFile(outputPath, jsonContent, 'utf8', err => {
    if (err) {
      console.error(`Error writing JSON file: ${err.message}`);
    } else {
      console.log(`JSON file written to: ${outputPath}`);
    }
  });
}
