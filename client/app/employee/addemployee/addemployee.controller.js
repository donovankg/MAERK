"use strict";

function addEmplCtrl($mdDialog, Empfactory, editEmp) {
  this.newEmp = {};
  var newEmployee;
  if (angular.equals(this.newEmp, editEmp)) {
    console.log('true from new');
    this.newEmp.client = [];
    this.newEmp.skill = [];
    newEmployee = true;
  } else {
    this.newEmp = editEmp;
    newEmployee = false;
  }
  console.log(this.newEmp);

  this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
    return {
      types: workType
    };
  });
  this.pushEmp = function() {
    if (newEmployee === true) {
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
    // console.log('cancelled');
  }
}


angular.module('maerkApp')
  .controller('addEmplCtrl', addEmplCtrl);
