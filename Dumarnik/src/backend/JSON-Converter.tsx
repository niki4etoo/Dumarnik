import * as fs from 'fs';

const inputFilePath = 'dictionary.txt';
const outputJsonFilePath = 'dictionary.json';

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
function parseTextToJsonObject(text: string): string[] {
  const lines = text.split('\n');
  const result: string[] = [];

  lines.forEach(line => {
    result.push(`${line}`)
  });

  return result;
}

// Function to write a JavaScript object to a JSON file
function writeObjectToJsonFile(obj: string[], outputPath: string): void {
  const jsonContent = JSON.stringify(obj, null, 2);

  fs.writeFile(outputPath, jsonContent, 'utf8', err => {
    if (err) {
      console.error(`Error writing JSON file: ${err.message}`);
    } else {
      console.log(`JSON file written to: ${outputPath}`);
    }
  });
}
