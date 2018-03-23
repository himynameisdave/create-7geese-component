#!/usr/bin/env node
'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _inquirer = require('inquirer');

var _pascalcase = require('pascalcase');

var _pascalcase2 = _interopRequireDefault(_pascalcase);

var _lodash = require('lodash.kebabcase');

var _lodash2 = _interopRequireDefault(_lodash);

var _mkdirp = require('./mkdirp.js');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _prompts = require('./prompts.js');

var _prompts2 = _interopRequireDefault(_prompts);

var _readTemplate = require('./read-template.js');

var _readTemplate2 = _interopRequireDefault(_readTemplate);

var _writeFile = require('./write-file.js');

var _writeFile2 = _interopRequireDefault(_writeFile);

var _constants = require('./constants.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//  c7c --name
const argv = require('yargs').argv;

_asyncToGenerator(function* () {
    let name = argv.name;
    if (!name) {
        const answers = yield (0, _inquirer.prompt)(_prompts2.default);
        name = answers.name;
    }

    //  1. Config for the project
    const config = {
        kebab: (0, _lodash2.default)(name),
        pascal: (0, _pascalcase2.default)(name),
        path: _path2.default.resolve(process.cwd(), argv.path || _constants.DEFAULT_COMPONENTS_PATH, (0, _lodash2.default)(name))
    };

    //  2. Make the root directory
    yield (0, _mkdirp2.default)(config.path);

    //  3. Read and create template string
    const readTemplate = (0, _readTemplate2.default)(config);
    const writeFile = (0, _writeFile2.default)(config);
    const fileSuffixes = {
        example: '.examples.md',
        jest: '.jestspec.jsx',
        component: '.jsx',
        less: '.less'
    };
    const fileTypes = Object.keys(fileSuffixes);

    fileTypes.forEach((() => {
        var _ref2 = _asyncToGenerator(function* (type) {
            const fileContents = yield readTemplate(`component${fileSuffixes[type]}`);
            yield writeFile(`${config.kebab}${fileSuffixes[type]}`, fileContents);
        });

        return function (_x) {
            return _ref2.apply(this, arguments);
        };
    })());

    console.log(`\n💎  Created your component at ${config.path}\n`);
})();