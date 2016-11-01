'use strict';
(function(Employee) {

  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Employee) {
      var errors = {};
      var submitted = false;

      this.employees = Employee.query();

    });
}());
