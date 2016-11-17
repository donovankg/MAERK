'use strict';
(function(Register) {

  angular.module('maerkApp')
    .controller('RegController', function($mdToast, $mdDialog, Report, Empfactory) {


      this.monthNames = ["january", "february", "march", "april", "may", "june",
        "july", "august", "september", "october", "november", "december"
      ];
      var currentYear = new Date().getYear() + 1900;
      var totalYears = [];
      for (var i = 2007; i <= currentYear; i++) {
        totalYears.push(i);
      }
      this.yearList = totalYears;
      this.tempYear = 2015;

      this.fromSelectYear = function () {
        this.report = Report.getYear(this.tempYear);

          console.log('clicked from select year');
        }
        //this.year = 9;
      this.month = "january";
      console.log(this.year);
      this.toastDate;
      this.createReg = Report.createReg;
      this.updateReg = Report.updateReg;
      // this.report = Report.getYear('2014');
      this.report = Report.getYear(this.tempYear);

      this.confirm = function() {
        console.log('update correct month thats open');
        // this.updatereg()
        //send this to the service so it can update the report table
      }
      this.loadPast = function() {
        dateToast();
      }


      // this.setDate = (date) => {
      //     console.log(date.getYear()+1900);
      //     console.log(monthNames[date.getMonth()]);
      //     this.year = 0;
      //     // this.year = date.getYear()+1900;
      //     this.month =monthNames[date.getMonth()];
      //   }

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
