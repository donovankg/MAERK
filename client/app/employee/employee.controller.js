'use strict';
(function(Employee) {


  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Empfactory, $mdToast, $mdDialog, $scope) {
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
      if (rows.length ==0){
        this.editBtn = false;
        this.deleteBtn = false;
        this.activeBtn = false;
        this.addBtn = false;
      }else if (rows.length== 1) {
        this.addBtn = true;
        this.editBtn = true;
        this.deleteBtn = true;
        this.activeBtn = true;

        // addBtn = true;
      }else {
        this.addBtn = true;
        this.editBtn = false;
        this.deleteBtn = true;
        this.activeBtn = true;


      }

      this.showEdit=true;

    }
    })
}());
