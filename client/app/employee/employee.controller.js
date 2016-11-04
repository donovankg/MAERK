'use strict';
(function(Employee) {


  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Empfactory, $mdToast, $mdDialog) {
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
    this.deleteRowCallBack = function(rows){
      $mdToast.show(
        $mdToast.simple()
        .content('deleted row id(s): '+rows)
        .hideDelay(3000)
      );
    }
    this.showEdit;
    this.selectedRowCallback = function(rows){
      console.log(rows);

      this.showEdit=true;

    }
    })
}());
