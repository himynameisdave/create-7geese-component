'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

exports.default = (path, data) => (0, _fs.writeFile)(path, data, 'utf8', err => {
    if (err) console.warn(`Failed to write ${path} to file!`); // eslint-disable-line no-console
});