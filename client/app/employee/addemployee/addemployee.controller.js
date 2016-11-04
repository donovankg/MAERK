"use strict";
function addEmplCtrl( $mdDialog, Empfactory) {
  this.newEmp = {};
  this.newEmp.client = [];
  this.newEmp.skill = [];
  this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
    return {
      types: workType
    };
  });
    this.addEmp = function() {

    // this.newEmp.client = this.client;
    // this.newEmp.skill = this.skill;
    // this.newEmp.client_bill_pay = this.newEmp.client_bill_pay;
    // this.newEmp.immigration = this.newEmp.immigration;
    // this.newEmp.insurance = this.newEmp.insurance;
    // this.newEmp.ksquare_hourly_cost = this.newEmp.ksquare_hourly_cost;
    // this.newEmp.pay_vacation_cost = this.newEmp.pay_vacation_cost;
    // this.newEmp.relocation = this.newEmp.relocation;
    // this.newEmp.salary = this.newEmp.salary;
    // this.newEmp.target_bill_rate = this.newEmp.target_bill_rate;
    //
    //
    // // console.log(this.newEmp);

    Empfactory.createEmp(this.newEmp);
  }

  this.submitted = function(){
    $mdDialog.hide();
    console.log('form submitted');
    //validation to come in another history
  }

  this.cancel = function(){
    $mdDialog.hide();
    console.log('cancelled');

  }

}


angular.module('maerkApp')
.controller('addEmplCtrl', addEmplCtrl);
