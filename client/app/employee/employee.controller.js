'use strict';
(function(Employee) {

  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Empfactory, $mdToast, $mdDialog) {
      var errors = {};
      var submitted = false;
      var self = this;
      var empRows = {};
      var editEmp = {};
      self.createEmp = Empfactory.createEmp;
      self.updateEmp = Empfactory.updateEmp;
      self.employees = Empfactory.getAll();
      this.addEmp = function(ev) {
        for (var i = 0; i < self.employees.length; i++) {
          if (self.employees[i]._id == empRows[0]) {
             editEmp = self.employees[i];
            break;
          }else{
            editEmp = {};
          }
        }
        $mdDialog.show({
          controller: addEmplCtrl,
          controllerAs: 'aec',
          templateUrl: '/app/employee/addemployee/addemployee.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          escapeToClose: true,
          ok: 'Close',
          locals: {
            editEmp: editEmp
          }
        });
      };
      this.deleteRowCallBack = function(rows) {
        $mdToast.show(
          $mdToast.simple()
          .content('deleted row id(s): ' + rows)
          .hideDelay(3000)
        );
      }
      this.statusEmp = function(status) {
        for (var i = 0; i < empRows.length; i++) {
          for (var j = 0; j < self.employees.length; j++) {
            if (self.employees[j]._id == empRows[i]) {
              editEmp = self.employees[j];
              if (status === '1') {
                editEmp.activate = true;
              } else {
                editEmp.activate = false;
              }
              self.updateEmp(editEmp);
              break;
            }
          }
        }
      }

      this.showEdit;
      this.selectedRowCallback = function(rows) {
        if (rows.length == 0) {
          this.editBtn = false;
          this.deleteBtn = false;
          this.activeBtn = false;
          this.addBtn = false;
        } else if (rows.length == 1) {
          this.addBtn = true;
          this.editBtn = true;
          this.deleteBtn = true;
          this.activeBtn = true;
        } else {
          this.addBtn = true;
          this.editBtn = false;
          this.deleteBtn = true;
          this.activeBtn = true;
        }
        this.showEdit = true;
        empRows = rows;
      }
    })
}());
