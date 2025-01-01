import fs, { WriteFileOptions } from 'fs';
import { readFileSync } from 'fs';

export class JSONHelper {
    static writeJSON(filePath: string, object: object) {
        const JSONstringify = JSON.stringify(object, null, 2);
        fs.writeFile(filePath, JSONstringify, 'utf8', (err) => {
            if (err) {
                console.error('An error occurred while writing the JSON file:', err);
            } else {
                console.log(`JSON file has been saved at ${filePath}`);
            }
        });
    };

    static readJSON(filePath: string): string {
        const data = readFileSync(filePath, 'utf-8');
        return data;
    };

    static convertFromJSON(filePath: string) {
        const data = readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    };

    static convertToJSON(object: object): string {
        return JSON.stringify(object);
    };
}

export function writeJSON(filePath: string, object: object) {
    const JSONstringify = JSON.stringify(object, null, 2);
    fs.writeFile(filePath, JSONstringify, { flush: true } as WriteFileOptions, (err) => {
        if (err) {
            console.error('An error occurred while writing the JSON file:', err);
        } else {
            // console.log(`JSON file has been saved at ${filePath}`);
        }
    });
};

export function readJSON(filePath: string): string {
    const data = readFileSync(filePath, 'utf-8');
    return data;
};

export function convertJSONtoObject(filePath: string): object {
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};


