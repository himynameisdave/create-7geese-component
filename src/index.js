#!/usr/bin/env node

import path from 'path';
import { prompt } from 'inquirer';
import pascalcase from 'pascalcase';
import kebabCase from 'lodash.kebabcase';
import mkdirp from './mkdirp.js';
import prompts from './prompts.js';
import read from './read-template.js';
import write from './write-file.js';
import { DEFAULT_COMPONENTS_PATH } from './constants.js';
//  c7c --name
const argv = require('yargs').argv;


(async function() {
    let name = argv.name;
    if (!name) {
        const answers = await prompt(prompts);
        name = answers.name;
    }

    //  1. Config for the project
    const config = {
        kebab: kebabCase(name),
        pascal: pascalcase(name),
        path: path.resolve(
            process.cwd(),
            argv.path || DEFAULT_COMPONENTS_PATH,
            kebabCase(name)
        ),
    };

    //  2. Make the root directory
    await mkdirp(config.path);

    //  3. Read and create template string
    const readTemplate = read(config);
    const writeFile = write(config);
    const fileSuffixes = {
        example: '.examples.md',
        jest: '.jestspec.jsx',
        component: '.jsx',
        less: '.less',
    };
    const fileTypes = Object.keys(fileSuffixes);

    fileTypes.forEach(async type => {
        const fileContents = await readTemplate(`component${fileSuffixes[type]}`);
        await writeFile(`${config.kebab}${fileSuffixes[type]}`, fileContents);
    });

    console.log(`\n💎  Created your component at ${config.path}\n`);

}());
