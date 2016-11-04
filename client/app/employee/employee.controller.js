'use strict';
(function(Employee) {


  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Empfactory, $scope, $mdDialog) {
      var errors = {};
      var submitted = false;
      var self = this;

      self.createEmp = Empfactory.createEmp;
      self.updateEmp = Empfactory.updateEmp;

      self.employees = Empfactory.getAll();
      this.addEmp = function(ev) {
        $mdDialog.show({
            controller: addEmplCtrl,
            controllerAs: 'aec',
            templateUrl: '/app/employee/addemployee/addemployee.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            escapeToClose: true,
            ok: 'Close'
            // fullscreen: this.customFullscreen
          });
      };
    })
}());
