'use strict';

(function() {


  function EmpResource($resource) {
    return $resource('/api/employee/:id', {
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
  }

  angular.module('maerkApp')
    .factory('Employee', EmpResource);
})();
