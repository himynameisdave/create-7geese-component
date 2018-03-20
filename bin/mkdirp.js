'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = path => new Promise((res, rej) => (0, _mkdirp2.default)(path, err => {
    if (err) return rej(err);
    return res('Exists');
}));