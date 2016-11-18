'use strict';
(function() {
  angular.module('maerkApp')
    .factory('Report', function($resource) {
      var CliResource = $resource('/api/report/:id/:year', {
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
        },
        getYear: {
          method: 'get',
        }

      });


      var Clis = CliResource.query();
      // spot to add delete Cli later on

      var createCli = function(newCli) {
        new CliResource(newCli).$save().then(function(d) {
          Clis.push(d);
        })
      }
      var getYear = function(year) {
        return CliResource.getYear({
          'year': year
        });
      }

      var updateCli = function(d) {
        CliResource.update({
          _id: d._id
        }, d).$promise.then(function(newCliUpdated) {
          for (var i = 0; i < Clis.length; i++) {
            if (Clis[i]._id == newCliUpdated._id) {
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
        getYear: getYear,
        CliResource: CliResource
      }
    });
})();
