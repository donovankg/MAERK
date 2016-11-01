'use strict';
(function(Employee) {

  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Employee) {
      var errors = {};
      var submitted = false;

      this.employees = Employee.query();
//      console.log(Employee.getOne({},{_id:'5818ede4ec0c0893d3b9f429'}));
                        //          ^A   ^ B
// A is the first param that is passed  and its compared to B
    });
}());
