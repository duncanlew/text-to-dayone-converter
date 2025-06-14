import { promises as fsPromises } from 'fs';
import * as path from "node:path";

async function readFileAsync() {
    try {
        const filePath = path.join('assets', '2025-06-14.txt');
        const content = await fsPromises.readFile(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        console.error('Error reading file: ', error);
    }
}

console.log('hello world');
readFileAsync();