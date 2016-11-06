"use strict";

function addEmplCtrl($mdDialog, Empfactory) {
  this.newEmp = {};
  this.newEmp.client = [];
  this.newEmp.skill = [];
  this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
    return {
      types: workType
    };
  });
  this.pushEmp = function() {
    Empfactory.createEmp(this.newEmp);
  }

  this.submitted = function() {
    $mdDialog.hide();
    console.log('form submitted');
    //validation to come in another history
  }

  this.cancel = function() {
    $mdDialog.hide();
    console.log('cancelled');
  }
}


angular.module('maerkApp')
  .controller('addEmplCtrl', addEmplCtrl);
