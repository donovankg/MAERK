'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportSchema = new _mongoose2.default.Schema({});

exports.default = _mongoose2.default.model('Report', ReportSchema);
//# sourceMappingURL=report.model.js.map
