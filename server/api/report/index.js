'use strict';
'user strict';

var _express = require('express');

var _report = require('./report.controller');

var controller = _interopRequireWildcard(_report);

var _auth = require('../../auth/auth.service');

var auth = _interopRequireWildcard(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.get('/', auth.hasRole("admin"), controller.index);
router.get('/:id', auth.hasRole("admin"), controller.show);
router.post('/', auth.hasRole("admin"), controller.create);
router.put('/:id', auth.hasRole("admin"), controller.update);
// router.patch('/:id', auth.isAuthenticated(), controller.update);
// router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;
//# sourceMappingURL=index.js.map
