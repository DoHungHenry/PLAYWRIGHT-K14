import fs from 'fs';
import { readFileSync } from 'fs';


export function writeJSONfromObject(filePath: string, object: object) {
    const JSONstringify = JSON.stringify(object, null, 2);
    fs.writeFile(filePath, JSONstringify, 'utf8', (err) => {
        if (err) {
            console.error('An error occurred while writing the JSON file:', err);
        } else {
            console.log(`JSON file has been saved at ${filePath}`);
        }
    });
};