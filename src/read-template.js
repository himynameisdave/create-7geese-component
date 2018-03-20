import { readFile } from 'fs';
import stringTemplate from 'string-template';

export default config => template => new Promise(res => {
    readFile(template, 'utf8', (e, data) => {
        if (e) return console.warn(e);
        return res(
            stringTemplate(data, config),
        );
    });
});
