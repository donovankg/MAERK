'use strict';

angular.module('maerkApp.employee')
  .config(function($stateProvider) {
    $stateProvider.state('employee', {
      url: '/employee',
      templateUrl: 'app/employee/employee.html',
      controller: 'EmployeeController',
      controllerAs: 'emp'
    });
  });
