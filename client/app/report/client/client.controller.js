'use strict';
(function(Client) {

  angular.module('maerkApp.client')
    .controller('ClientController', function(Report, $mdToast, $mdDialog, Empfactory) {
          this.month = 'january';
      // var reports;

      var setMonth = this.month;
      var currentYear = new Date().getYear() + 1900;
      var totalYears = [];
      for (var i = 2007; i <= currentYear; i++) {
        totalYears.push(i);
      }
      this.yearList = totalYears;
      this.tempYear = new Date().getYear() + 1900;


      var reports = {
        'count': 10,
        january: [{
          name: 'Mudo',
            count: 10,
            rev: 2000
        }],
        february:[{
          name: 'aMudo',
            count: 10,
            rev: 1000

        }]
      };

      //this was new
      var clientReport;

      this.fromSelectYear = function() {
        // setMonth = this.tempYear;
        console.log('the year is now ' + this.tempYear);
        console.log('the month is ' + this.month);
        getDataFormatted(Report, this.month)
      }


      Report.getYear(new Date().getYear() + 1900).$promise.then((report) => {
        clientReport = getDataFormatted(report, setMonth);

        this.monthSelect(setMonth)
      });

      var getDataFormatted= function(report, setMonth) {
        var countLoop = 0;
        // --------------------- loop set to get data from the reports to the charts
        for (var i = 0; i < report[setMonth].length; i++) {
          // console.log('each person',report['january'][i]);
          for (var j = 0; j < report[setMonth][i]['client'].length; j++) {
            for (var name in report[setMonth]) {
              var testObj = {};
              var name = 'name';
              var count = 'count';
              var rev = 'rev'
              var countVal = 2;
              var totalRev = 10;
              testObj[name] = report[setMonth][i]['client'][j];
              testObj[count] = i + 1;
              testObj[rev] = 1000;
            }
            reports[setMonth][countLoop] = testObj;
            countLoop++;
          }
        }
        console.log('---after---->', reports);
        // return reports;
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


      console.log('-reports test---', reports[setMonth]);

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

      //
      // // this.total =clientReport[2016][month].length;
      // this.total = reports[setMonth].length;
      // // console.log('month is ',setMonth);
      // chart1.formatters = {
      //   number: [{
      //     columnNum: 1,
      //     pattern: 'employees '
      //   }]
      // };

      //function that sets the months for the chart
      this.monthSelect = function(month) {
        console.log('this month is ',month);


        console.log('---->', reports[month]);

        chart1.data = createChartData(reports[month], "count");
        console.log(reports[month],'testing');
        this.month = month;
        this.tableData = reports[month];
        // getDataFormatted(Report);
      }
      this.chart = chart1;

    })
})();
