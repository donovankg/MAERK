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
          method: 'put',
          params: {
            id: '@_id'
          }
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
        // console.log(data);
        EmpResource.update({_id:data._id},data).$promise.then(function(editEmp) {

        //   emps.push(editEmp);
        //   console.log(editEmp);
        });
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
