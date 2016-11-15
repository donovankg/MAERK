'use strict';
(function(Client) {

  angular.module('maerkApp.client')
    .controller('ClientController', function(Clifactory, $mdToast, $mdDialog) {

      self.createCli = Clifactory.createCli;
      self.updateCli = Clifactory.updateCli;
      self.Clients = Clifactory.getAll();

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
        'jan': [{
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

      function createChartData(array, prop) {
        var arr = [];
        arr.push(['client', prop])
        for (var i = 0; i < array.length; i++) {
          arr.push([
            array[i].name, array[i][prop]
          ])
        }
        console.log(arr)
        return arr;
      }

      var chart1 = {};
      // ColumnChart, PieChart
      chart1.type = "PieChart";
      chart1.options = {
        displayExactValues: true,
        width: 600,
        height: 400,
        is3D: true,
        chartArea: {
          left: 10,
          top: 10,
          bottom: 0,
          height: 100
        }
      };

      chart1.formatters = {
        number: [{
          columnNum: 1,
          pattern: "$ #,##0.00"
        }]
      };
      this.monthSelect = function(month) {
        chart1.data = createChartData(reports[month], "count");
        // this.chart = chart1;
      }
      this.chart = chart1;
      this.monthSelect('jan');
      console.log(this.chart);


    })
})();
