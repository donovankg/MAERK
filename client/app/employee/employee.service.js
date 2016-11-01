'use strict';

(function() {

  function EmpResource($resource) {
    return $resource('/api/employee/:id/:controller', {
      id: '@_id'
    },{
      getOne:{
        method: 'get',
        params: {
          id: 'me'
        }
      },
      getAll:{
        method: 'get',
        params: {
        }
      },
      create:{
        method: 'get',
        params: {
          id: 'me'
        }
      },
      update:{
        method: 'put',
        params: {
          id: 'me'
        }
      },
      delete:{
        method: 'delete',
        params: {
          id: 'me'
        }
      }
    });
  }

  angular.module('maerkApp')
    .factory('Employee', EmpResource);
})();
