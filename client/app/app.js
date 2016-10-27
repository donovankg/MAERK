'use strict';

angular.module('maerkApp', ['maerkApp.auth', 'maerkApp.admin', 'maerkApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'validation.match','ngMaterial'
  ])
  .config(function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    // 
    // $stateProvider.state('main2',{
    //   url: '/main',
    //   templateUrl: 'app/main/main.html',
    //   controllerAs: 'vm',
    //   authenticate: true
    // });
  });
