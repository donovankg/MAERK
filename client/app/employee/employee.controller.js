'use strict';
(function(Employee) {


  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Employee, $scope, $mdDialog) {
      var errors = {};
      var submitted = false;


      this.employees = Employee.query();
  // $scope.placeType = ['fulltime', "project", "part time"];
  $scope.addEmp = function(ev) {
      $mdDialog.show({
        controller: addEmplCtrl,
        controllerAs: 'aec',
        templateUrl: '/app/employee/addemployee/addemployee.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    };


//      console.log(Employee.getOne({},{_id:'5818ede4ec0c0893d3b9f429'}));
                        //          ^A   ^ B
    });
}());
