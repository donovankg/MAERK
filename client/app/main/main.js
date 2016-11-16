'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {


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
      })
      .state('main.client', {
        url: '/report-client',
        templateUrl: 'app/report/client/client.html',
        controller: 'ClientController',
        controllerAs: 'cli',
        authenticate: true
      })
      .state('main.register-month', {
        url: '/register-month',
        templateUrl: 'app/register/register-month.html',
        controller: 'RegController',
        controllerAs: 'Reg',
        authenticate: true
      });
  });
