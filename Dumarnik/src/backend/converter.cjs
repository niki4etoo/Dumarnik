"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var inputFilePath = 'input.txt';
var outputJsonFilePath = 'output.json';
// Read the contents of the text file asynchronously
fs.readFile(inputFilePath, 'utf8', function (err, data) {
    if (err) {
        console.error("Error reading file: ".concat(err.message));
    }
    else {
        // Parse the text file content into a JavaScript object
        var parsedData = parseTextToJsonObject(data);
        // Write the JavaScript object to a JSON file
        writeObjectToJsonFile(parsedData, outputJsonFilePath);
        console.log('Conversion complete.');
    }
});
// Function to parse text to a JavaScript object
function parseTextToJsonObject(text) {
    var lines = text.split('\n');
    var result = {};
    lines.forEach(function (line) {
        console.log(line);
    });
    return result;
}
// Function to write a JavaScript object to a JSON file
function writeObjectToJsonFile(obj, outputPath) {
    var jsonContent = JSON.stringify(obj, null, 2);
    fs.writeFile(outputPath, jsonContent, 'utf8', function (err) {
        if (err) {
            console.error("Error writing JSON file: ".concat(err.message));
        }
        else {
            console.log("JSON file written to: ".concat(outputPath));
        }
    });
}
