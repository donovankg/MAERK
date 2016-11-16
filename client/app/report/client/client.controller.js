'use strict';
(function(Client) {

  angular.module('maerkApp.client')
    .controller('ClientController', function(Report, $mdToast, $mdDialog) {

      this.createCli = Report.createCli;
      this.updateCli = Report.updateCli;
      this.Clients = Report.getAll();

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
      var reports = {
        'count': 10,
        'jan': [{
          name: "verizon",
          count: 10,
          rev: 12000
        }, {
          name: "verizon",
          count: 10,
          rev: 12000
        }, {
          name: "verizon",
          count: 10,
          rev: 12000
        }, {
          name: "verizon",
          count: 10,
          rev: 12000
        }, {
          name: "verizon",
          count: 10,
          rev: 12000
        }, {
          name: "verizon",
          count: 10,
          rev: 12000
        }, {
          name: "verizon",
          count: 10,
          rev: 12000
        }, {
          name: "verizon",
          count: 10,
          rev: 12000
        }, {
          name: "att",
          count: 5,
          rev: 7000
        }, {
          name: "disney",
          count: 7,
          rev: 8000
        }],
        'feb': [{
          name: "verison",
          count: 8,
          rev: 6000
        }, {
          name: 'att',
          count: 5,
          rev: 8000
        }, {
          name: "disney",
          count: 9,
          rev: 12000
        }]
      };

      //pagination
      this.query ={
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
      this.logPagination = function (page, limit) {
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
      var month = 'jan';
      this.total = reports[month].length;
      chart1.formatters = {
        number: [{
          columnNum: 1,
          pattern: 'employees '
            // pattern: "$ #,##0.00"
        }]
      };
      this.monthSelect = function(month) {
        chart1.data = createChartData(reports[month], "count");
        this.tableData = reports[month];
        console.log(reports[month].length);
      }
      this.chart = chart1;
      this.monthSelect('jan');
      // console.log(this.chart);
      this.tableData = reports.jan;

    })
})();
