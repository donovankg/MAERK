'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/main',
      template: '<main class ="flex layout-row"></main>',
      authenticate: true
    });
  });
