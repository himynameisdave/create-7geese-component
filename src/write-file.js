import { writeFile } from 'fs';

export default (path, data) => writeFile(path, data, 'utf8', err => {
    if (err) console.warn(`Failed to write ${path} to file!`); // eslint-disable-line no-console
});
