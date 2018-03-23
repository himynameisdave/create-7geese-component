import path from 'path';
import { writeFile } from 'fs';

const getWritePath = (configPath, writePath) => path.resolve(
    process.cwd(),
    configPath,
    writePath
);

export default config => (filePath, fileContents) => new Promise((res, rej) => {
    const writePath = getWritePath(config.path, filePath);
    return writeFile(writePath, fileContents, 'utf8', err => {
        if (err) {
            console.warn(`Failed to write ${filePath} to file!`); // eslint-disable-line no-console
            rej(`Failed to write ${filePath} to file!`);
        }
        res(`Wrote ${filePath} to file`);
    });
});
