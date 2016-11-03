function addEmplCtrl(Employee) {
  this.newEmp = {};
  this.client = [];
  this.skill = [];
  this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
          return {types: workType};
        });
    this.addEmp = function (newEmp){
      if(this.newEmp.activate =='true'){
        this.newEmp.activate = true;
      }else{
        this.newEmp.activate = false;
      }
      console.log('placetype -----> ',typeof(this.newEmp.placement_type));
      this.newEmp.client = this.client;
      this.newEmp.skill = this.skill;
      this.newEmp.client_bill_pay= parseInt(this.newEmp.client_bill_pay);
      this.newEmp.immigration= parseInt(this.newEmp.immigration);
      this.newEmp.insurance= parseInt(this.newEmp.insurance);
      this.newEmp.ksquare_hourly_cost= parseInt(this.newEmp.ksquare_hourly_cost);
      this.newEmp.pay_vacation_cost= parseInt(this.newEmp.pay_vacation_cost);
      this.newEmp.relocation= parseInt(this.newEmp.relocation);
      this.newEmp.salary= parseInt(this.newEmp.salary);
      this.newEmp.target_bill_rate= parseInt(this.newEmp.target_bill_rate);


      // console.log(this.newEmp);
    Employee.create(this.newEmp);

    }


}


angular.module("maerkApp'",addEmplCtrl);
