'use strict';
(function(Register) {

  angular.module('maerkApp')
    .controller('RegController', function($mdToast, $mdDialog, Report, Empfactory) {

      this.year = 1;
      this.month = "january";


      this.createReg = Report.createReg;
      this.updateReg = Report.updateReg;
      this.report = Report.getAll();

      this.confirm = function() {
        console.log('update correct month thats open');
    // this.updatereg()
//send this to the service so it can update the report table
      }
      this.loadPast= function(){
        this.year = 0;
        this.month = "february";
        console.log('toast popup with month and year selector');
      }

      // console.log('test');
      this.query = {
        order: 'name',
        limit: 5,
        page: 1
      }
      this.limitOptions = [5, 10, 15];
      this.total = 20;
      // console.log(this.employees);

      this.options = {
        rowSelection: true,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: false,
        limitSelect: true,
        pageSelect: true
      };
      this.logPagination = function(page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
      }

      function createChartData(array, prop) {
        var arr = [];
        arr.push(['client', prop])
        for (var i = 0; i < array.length; i++) {
          arr.push([
            array[i].name, array[i][prop]
          ])
        }
        // console.log(arr)
        return arr;
      }

    })
}());
