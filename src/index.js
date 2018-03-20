#!/usr/bin/env node
'use stict';

import path from 'path';
import { prompt } from 'inquirer';
import pascalcase from 'pascalcase';
import kebabCase from 'lodash.kebabcase';
import mkdirp from './mkdirp.js';
import prompts from './prompts.js';
import read from './read-template.js';
import writeFile from './write-file.js';
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

    //  3. Read and create template strings
    const getTemplatePath = template => path.resolve(__dirname, '../templates', template);
    const readTemplate = read(config);
    const templateExample = await readTemplate(getTemplatePath('component.examples.md'));
    const templateTest = await readTemplate(getTemplatePath('component.jestspec.jsx'));
    const templateComponent = await readTemplate(getTemplatePath('component.jsx'));
    const templateLess = await readTemplate(getTemplatePath('component.less'));

    //  4. Write the files
    const getWritePath = writePath => path.resolve(
        process.cwd(),
        config.path,
        writePath
    );
    await writeFile(
        getWritePath(`${config.kebab}.examples.md`),
        templateExample
    );
    await writeFile(
        getWritePath(`${config.kebab}.jestspec.jsx`),
        templateTest
    );
    await writeFile(
        getWritePath(`${config.kebab}.jsx`),
        templateComponent
    );
    await writeFile(
        getWritePath(`${config.kebab}.less`),
        templateLess
    );
}());
