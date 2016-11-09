"use strict";

function addEmplCtrl($mdDialog, Empfactory, editEmp) {
  this.newEmp = {};
  var newEmployee;
  var oldCopy = editEmp;
  this.newEmp.client = [];
  this.newEmp.skill = [];
  console.log(editEmp);
  if ($.isEmptyObject(editEmp)) {
    this.newEmp.activate = true;
    newEmployee = true;
  } else {
    angular.copy(editEmp, this.newEmp);
    newEmployee = false;
  }

  this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
    return {
      types: workType
    };
  });
  this.pushEmp = function() {
    if (newEmployee === true) {
      console.log(this.newEmp);
      Empfactory.createEmp(this.newEmp);


    } else {
      console.log('old emp');

      console.log(this.newEmp,' between');
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
