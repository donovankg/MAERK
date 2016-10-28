'use strict';

(function() {

  class EmployeeController {
    constructor(User) {
      // Use the User $resource to fetch all users
      this.users = User.query();
    }

  }

  angular.module('maerkApp.employee')
    .controller('EmployeeController', EmployeeController);
})();
