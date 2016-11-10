"use strict";

function addEmplCtrl($mdDialog, Empfactory, editEmp, $mdToast) {
  this.newEmp = {};
  var newEmployee;
  var oldCopy = editEmp;
  this.newEmp.client = [];
  this.newEmp.skill = [];
  // console.log(editEmp);
  if ($.isEmptyObject(editEmp)) {
    this.newEmp.activate = true;
    newEmployee = true;
  } else {
    angular.copy(editEmp, this.newEmp);
    newEmployee = false;
  }

  this.confirm = function() {
    if (newEmployee == true) {

      this.pushEmp(addNew);
      $mdDialog.hide();
    } else {
      confirmToast();

    }

  }
  var confirmToast = () => {
    // console.log('toast opens');
    $mdToast.show({
      parent: document.getElementById('getToast'),
      hideDelay: 0,
      position: 'top right',
      controller: 'toastCtrl',
      controllerAs: 'vm',
      templateUrl: '/app/employee/toast/toast.html',
      locals:{
        // addNew: addNew,
        pushEmp: this.pushEmp
      }
    })
  }


  // this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
  //   return {
  //     types: workType
  //   };
  // });

  this.pushEmp = () => {
    if (newEmployee === true) {
      // console.log(this.newEmp);
      Empfactory.createEmp(this.newEmp);


    } else {
      Empfactory.updateEmp(this.newEmp);
    }

  }

  this.submitted = function() {
    $mdDialog.hide();
    // console.log('form submitted');
    //validation to come in another history
  }

  this.cancel = function() {
    $mdDialog.hide();
    // Empfactory.updateEmp(oldCopy);
    // console.log('cancelled');
  }
}


angular.module('maerkApp')
  .controller('addEmplCtrl', addEmplCtrl);
