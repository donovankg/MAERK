'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/main',
      template: '<main class ="flex layout-row"></main>',
      authenticate: true
    })
    .state('main.employee', {
      url: '/employee',
      templateUrl: 'app/employee/employee.html',
      controller:'EmployeeController',
      controllerAs:'empCtrl',
      authenticate: true
    });
  });
