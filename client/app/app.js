'use strict';

angular.module('maerkApp', ['maerkApp.auth', 'maerkApp.admin', 'maerkApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'validation.match','ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/main');

    $locationProvider.html5Mode(true);


  });
