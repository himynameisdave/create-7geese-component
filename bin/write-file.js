'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getWritePath = (configPath, writePath) => _path2.default.resolve(process.cwd(), configPath, writePath);

exports.default = config => (filePath, fileContents) => new Promise((res, rej) => {
    const writePath = getWritePath(config.path, filePath);
    return (0, _fs.writeFile)(writePath, fileContents, 'utf8', err => {
        if (err) {
            console.warn(`Failed to write ${filePath} to file!`); // eslint-disable-line no-console
            rej(`Failed to write ${filePath} to file!`);
        }
        res(`Wrote ${filePath} to file`);
    });
});