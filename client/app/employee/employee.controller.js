'use strict';
(function(Employee) {

  angular.module('maerkApp.employee')
    .controller('EmployeeController', function(Empfactory, $mdToast, $mdDialog) {
      var errors = {};
      var submitted = false;
      var empRows = {};
      var editEmp = {};
      this.createEmp = Empfactory.createEmp;
      this.updateEmp = Empfactory.updateEmp;
      this.employees = Empfactory.getAll();

      this.addEmp = function(ev) {
        for (var i = 0; i < this.employees.length; i++) {
          if (this.employees[i]._id == empRows[0]) {
             editEmp = this.employees[i];
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
          for (var j = 0; j < this.employees.length; j++) {
            if (this.employees[j]._id == empRows[i]) {
              editEmp = this.employees[j];
              if (status === '1') {
                editEmp.activate = true;
              } else {
                editEmp.activate = false;
              }
              this.updateEmp(editEmp);
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
