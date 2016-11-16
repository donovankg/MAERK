'use strict';
(function() {
  angular.module('maerkApp')
    .factory('Regfactory', function($resource, RegService) {
      var RegResource = $resource('/api/register-month/:id',{
        
      })

    });
})();
