'use strict';
(function(Employee) {


  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Empfactory, $scope, $mdDialog) {
      var errors = {};
      var submitted = false;
      var self = this;

      $scope.createEmp = Empfactory.createEmp;
      $scope.updateEmp = Empfactory.updateEmp;

      this.employees = Empfactory.getAll();
      addEmp = function(ev) {
        console.log('clicked from ec');
        $mdDialog.show({
            controller: addEmplCtrl,
            controllerAs: 'aec',
            templateUrl: '/app/employee/addemployee/addemployee.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            escapeToClose: true,
            ok: 'Close',
            // fullscreen: $scope.customFullscreen
          })
          .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            },
            function() {
              $scope.status = 'You cancelled the dialog.';
              // console.log($scope.status);
            });
      };
    })
}());
