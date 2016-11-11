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

      var updateEmp = function(d) {
        // console.log('----->',d);

        EmpResource.update({
          _id: d._id
        }, d).$promise.then(function(newEmpUpdated) {
          // console.log(d);
          // console.log(newEmpUpdated.skill);
          for (var i = 0; i < emps.length; i++) {


            if (emps[i]._id == newEmpUpdated._id) {
              // emps[i].skill = newEmpUpdated.skill;
              // emps[i].skill = newEmpUpdated.client;
              emps[i] = newEmpUpdated;


            }
          }


          //  emps.push(d);
          // console.log(editEmp);
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
