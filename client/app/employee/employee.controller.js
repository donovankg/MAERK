'use strict';
(function(Employee) {

  angular.module('maerkApp.employee')
    .controller('EmployeeController', function($scope) {
      var errors = {};
      var submitted = false;


      this.employees = [{
        "_id": "58176e25b358898af6234d87",
        "first_name": "Adam",
        "last_name": "Griffin",
        "recruiter": "Arnold",
        "placement_type": "project",
        "salary": 99895,
        "insurance": 1000,
        "relocation": 1715,
        "immigration": 8451,
        "pay_vacation_cost": 7072,
        "ksquare_hourly_cost": 50,
        "target_bill_rate": 104574,
        "client_bill_pay": 83784,
        "activate": false,
        "__v": 0,
        "skill": ["DDA"],
        "client": ["Mudo"],
      },
      {
        "_id": "58176e25b358898af6234d87",
        "first_name": "Adam",
        "last_name": "Griffin",
        "recruiter": "Arnold",
        "placement_type": "project",
        "salary": 99895,
        "insurance": 1000,
        "relocation": 1715,
        "immigration": 8451,
        "pay_vacation_cost": 7072,
        "ksquare_hourly_cost": 50,
        "target_bill_rate": 104574,
        "client_bill_pay": 83784,
        "activate": false,
        "__v": 0,
        "skill": ["DDA"],
        "client": ["Mudo"],
      },
      {
        "_id": "58176e25b358898af6234d87",
        "first_name": "Adam",
        "last_name": "Griffin",
        "recruiter": "Arnold",
        "placement_type": "project",
        "salary": 99895,
        "insurance": 1000,
        "relocation": 1715,
        "immigration": 8451,
        "pay_vacation_cost": 7072,
        "ksquare_hourly_cost": 50,
        "target_bill_rate": 104574,
        "client_bill_pay": 83784,
        "activate": false,
        "__v": 0,
        "skill": ["DDA"],
        "client": ["Mudo"],
      }];
    });
}());
