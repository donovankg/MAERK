/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/Employee              ->  index
 * POST    /api/Employee              ->  create
 * GET     /api/Employee/:id          ->  show
 * PUT     /api/Employee/:id          ->  update
 * DELETE  /api/Employee/:id          ->  destroy
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _employee = require('./employee.model');

var _employee2 = _interopRequireDefault(_employee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function (entity) {
    // var updated = _.merge(entity, updates);
    var updated = _lodash2.default.extend(entity, updates); //new changed line
    return updated.save().then(function (updated) {
      return updated;
    });
  };
}

// function removeEntity(res) {
//   return function(entity) {
//     if (entity) {
//       return entity.remove()
//         .then(() => {
//           res.status(204).end();
//         });
//     }
//   };
// }
//
function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    console.log(err.message);
    res.status(statusCode).send(err);
  };
}

// Gets a list of Employee
function index(req, res) {
  return _employee2.default.find().exec().then(respondWithResult(res)).catch(handleError(res));
}
//
// Gets a single Employee from the DB
function show(req, res) {
  return _employee2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(respondWithResult(res)).catch(handleError(res));
}
//
// Creates a new Employee in the DB
function create(req, res) {
  console.log('in create line 79');
  return _employee2.default.create(req.body).then(respondWithResult(res, 201)).catch(handleError(res));
}

// // Updates an existing Employee in the DB
function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return _employee2.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res)).catch(handleError(res));
}
//# sourceMappingURL=employee.controller.js.map
