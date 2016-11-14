'use strict';
(function() {
  angular.module('maerkApp')
    .factory('Clifactory', function($resource) {
      var CliResource = $resource('/api/report/:id', {
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
        },
        getMonth: {
          method: 'get',
          params: {
            month: 'month'
          }
        }
      });


      var Clis = CliResource.query();
      // spot to add delete Cli later on

      var createCli = function(newCli) {
        new CliResource(newCli).$save().then(function(d) {
          Clis.push(d);
        })
      }

      var updateCli = function(d) {
        // console.log('----->',d);

        CliResource.update({
          _id: d._id
        }, d).$promise.then(function(newCliUpdated) {
          // console.log(d);
          // console.log(newCliUpdated.skill);
          for (var i = 0; i < Clis.length; i++) {


            if (Clis[i]._id == newCliUpdated._id) {
              // Clis[i].skill = newCliUpdated.skill;
              // Clis[i].skill = newCliUpdated.client;
              Clis[i] = newCliUpdated;


            }
          }


          //  Clis.push(d);
          // console.log(editCli);
        });
      }

      var getAll = function() {
        return Clis;
      }
      return {
        createCli: createCli,
        updateCli: updateCli,
        getAll: getAll,
        CliResource: CliResource
      }
    });
})();
