'use strict';

angular.module('maerkApp')
  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider.state('main', {
        // url: '/main',
        abstract: true,
        template: '<main class ="flex layout-row"></main>',
        authenticate: true
// may need to make it abstract

      })
      .state('main.employee', {
        url: '/employee',
        templateUrl: 'app/employee/employee.html',
        controller: 'EmployeeController',
        controllerAs: 'emp',
        authenticate: true
      });
  });
