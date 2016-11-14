'use strict';

angular.module('maerkApp', ['maerkApp.auth', 'maerkApp.admin', 'maerkApp.constants', 'maerkApp.employee','maerkApp.client','ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'validation.match', 'ngMaterial','mdDataTable', 'ngMessages'])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/employee');

    $locationProvider.html5Mode(true);


  });
