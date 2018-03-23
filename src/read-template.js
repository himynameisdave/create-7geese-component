import path from 'path';
import { readFile } from 'fs';
import stringTemplate from 'string-template';


export default config => template => new Promise(res => {
    const templatePath = path.resolve(__dirname, '../templates', template);
    readFile(templatePath, 'utf8', (e, data) => {
        if (e) return console.warn(e);
        return res(
            stringTemplate(data, config),
        );
    });
});
