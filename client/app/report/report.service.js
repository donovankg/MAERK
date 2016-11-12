'use strict';
(function() {
  angular.module('maerkApp')
    .factory('Repfactory', function($resource, RepService) {
      var RepResource = $resource('/api/Reployee/:id', {
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
        },
        getAllYears: {
          method: 'get',
          params: {
            year: 'year'
          }
        }
      });


      var Reps = RepResource.query();
      // spot to add delete Rep later on

      var createRep = function(newRep) {
        new RepResource(newRep).$save().then(function(d) {
          Reps.push(d);
        })
      }

      var updateRep = function(d) {
        // console.log('----->',d);

        RepResource.update({
          _id: d._id
        }, d).$promise.then(function(newRepUpdated) {
          // console.log(d);
          // console.log(newRepUpdated.skill);
          for (var i = 0; i < Reps.length; i++) {


            if (Reps[i]._id == newRepUpdated._id) {
              // Reps[i].skill = newRepUpdated.skill;
              // Reps[i].skill = newRepUpdated.client;
              Reps[i] = newRepUpdated;


            }
          }


          //  Reps.push(d);
          // console.log(editRep);
        });
      }

      var getAll = function() {
        return Reps;
      }
      return {
        createRep: createRep,
        updateRep: updateRep,
        getAll: getAll,
        RepResource: RepResource
      }
    });
})();
