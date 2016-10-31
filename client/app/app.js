'use strict';

angular.module('maerkApp', ['maerkApp.auth', 'maerkApp.admin', 'maerkApp.constants', 'maerkApp.employee', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'validation.match', 'ngMaterial','mdDataTable'
  ])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);


  });
