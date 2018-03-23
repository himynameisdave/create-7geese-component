'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _stringTemplate = require('string-template');

var _stringTemplate2 = _interopRequireDefault(_stringTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = config => template => new Promise(res => {
    const templatePath = _path2.default.resolve(__dirname, '../templates', template);
    (0, _fs.readFile)(templatePath, 'utf8', (e, data) => {
        if (e) return console.warn(e);
        return res((0, _stringTemplate2.default)(data, config));
    });
});