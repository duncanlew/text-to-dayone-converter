import { promises as fsPromises } from 'fs';
import * as path from "node:path";

async function readFileAsync() {
    try {
        const assetsDirectory = 'assets';
        const files = await fsPromises.readdir(assetsDirectory);

        let outputContent = '';
        for (const file of files) {
            const filePath = path.join(assetsDirectory, file);
            console.log(`\n--- Reading ${file} ---`);
            const fileName = path.parse(file).name;
            const date = new Date(fileName);
            const options: Intl.DateTimeFormatOptions = {
                day: 'numeric',      // 17
                month: 'long',       // June
                year: 'numeric',     // 2025
                hour: '2-digit',     // 21
                minute: '2-digit',   // 35
                second: '2-digit',   // 36
                timeZoneName: 'shortOffset',  // GMT+2
                hour12: false        // 24-hour format
            };
            const timestamp = date.toLocaleString('en-GB', options).replace(' at ', ' at ');
            const content = await fsPromises.readFile(filePath, 'utf-8');
            const entry = `\tDate:\t${timestamp}\n\n${content}\n\n\n`;
            outputContent += entry;
        }

        await fsPromises.writeFile('output.txt', outputContent);
    } catch (error) {
        console.error('Error reading file: ', error);
    }
}

console.log('hello world');
readFileAsync();