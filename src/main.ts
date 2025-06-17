import { promises as fsPromises } from 'fs';
import * as path from "node:path";

async function readFileAsync() {
    try {
        const assetsDirectory = 'assets';
        const files = await fsPromises.readdir(assetsDirectory);

        for (const file of files) {
            const filePath = path.join(assetsDirectory, file);
            console.log(`\n--- Reading ${file} ---`);
            const content = await fsPromises.readFile(filePath, 'utf-8');
            console.log(content);
        }
    } catch (error) {
        console.error('Error reading file: ', error);
    }
}

console.log('hello world');
readFileAsync();