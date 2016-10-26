'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main class ="flex layout-column"></main>'
    });
  });
