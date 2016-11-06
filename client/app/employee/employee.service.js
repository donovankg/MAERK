'use strict';
(function() {
  angular.module('maerkApp')
    .factory('Empfactory', function($resource, EmpService) {
      var EmpResource = $resource('/api/employee/:id', {
        id: '@_id'
      }, {
        getOne: {
          method: 'get',
          params: {
            id: '@_id'
          }
        },
        create: {
          method: 'post'
        },
        update: {
          method: 'put'
        }
      });
// resourceMethods
      // var EmpResource = $resource(EmpService + ":id", {
      //   id: "@_id"
      // });


      var emps = EmpResource.query();
      // spot to add delete emp later on

      var createEmp = function(newEmp) {
        new EmpResource(newEmp).$save().then(function(d) {
          emps.push(d);
        })
      }

      var updateEmp = function(data) {
        data.$save().then(function(newEmp) {});
      }

      var getAll = function() {
        return emps;
      }
      return {
        createEmp: createEmp,
        updateEmp: updateEmp,
        getAll: getAll,
        EmpResource: EmpResource
      }
    });
})();
