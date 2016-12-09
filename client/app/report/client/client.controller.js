'use strict';
(function(Client) {

  angular.module('maerkApp.client')
    .controller('ClientController', function(Report, $mdToast, $mdDialog, Empfactory) {

      // var reports;

      var reports = {
        'count': 10,
        january: [{
          name: "verizon",
          count: 10,
          rev: 12000
        }]
      };


      var finalReport = {};

      this.month = "january";
      var currentYear = new Date().getYear() + 1900;
      var totalYears = [];
      for (var i = 2007; i <= currentYear; i++) {
        totalYears.push(i);
      }
      this.yearList = totalYears;
      this.tempYear = new Date().getYear() + 1900;


      //this was new
      var clientReport;

      this.fromSelectYear = function(){
        console.log('the year is now '+this.tempYear);
        console.log('the month is '+ this.month);
      }


      Report.getYear(new Date().getYear() + 1900).$promise.then((report) => {
        clientReport = getDataFormatted(report);

        this.monthSelect('january')
      });

      function getDataFormatted(report) {
        // console.log(report['january'].length); //emps in a month

        var newChart = {
          name: 'Mudo',
          count: 10,
          rev: 2000

        };
var countLoop = 0;
var hashmap = {};
        // --------------------- loop set to get data from the reports to the charts
        for (var i = 0; i < report['january'].length; i++) {
            console.log('each person',report['january'][i]);


          for (var j = 0; j < report['january'][i]['client'].length; j++) {
            // console.log(report['january'][i]['client'].length);
            // console.log('shit is here',report['january'][i]['client'][j]);
            for(var name in report['january']){

              var testObj = {};
              var name = 'name';
              var count = 'count';
              var rev = 'rev'
              var countVal = 0;
              var totalRev =10;
              testObj[name] = report['january'][i]['client'][j];
              testObj[count] = 0;
              testObj[rev] = 1000;
            }
            console.log('-testObj-->',testObj);
            reports['january'][countLoop] = testObj;
            countLoop++;
            // console.log('--here new obj--->',testObj)
            // // reports[count] = testObj;
            // count ++;
            // }
            // console.log('---->',testObj1);
            //

          }

        }
        console.log(reports);
        return report;
      }

      this.createCli = Report.createCli;
      this.updateCli = Report.updateCli;
      //  this.Clients = Report.getAll();


      function MainCtrl() {
        this.config = {
          title: 'Products',
          tooltips: true,
          labels: false,
          mouseover: function() {},
          mouseout: function() {},
          click: function() {},
          legend: {
            display: true,
            //could be 'left, right'
            position: 'right'
          }
        };
      }

//on select of month and year push them into clientReport




      console.log('-reports test---',reports['january'][0]);

      //pagination
      this.query = {
        order: 'name',
        limit: 5,
        page: 1
      }
      this.limitOptions = [5, 10, 15];

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
        return arr;
      }

      var chart1 = {};
      // ColumnChart, PieChart
      chart1.type = "PieChart";
      chart1.options = {
        displayExactValues: true,
        legend: {
          position: 'left'
        },
        is3D: true,
        chartArea: {
          left: 10,
          top: 10,
          bottom: 0,
          height: 100
        }
      };

      //change this to pick the month
      var month = 'january';
      // this.total =clientReport[2016][month].length;
      this.total = reports[month].length;
      chart1.formatters = {
        number: [{
          columnNum: 1,
          pattern: 'employees '
        }]
      };
      this.monthSelect = function(month) {
          chart1.data = createChartData(reports[month], "count");
          this.month = month;
          this.tableData = reports[month];
        }
      this.chart = chart1;

    })
})();
