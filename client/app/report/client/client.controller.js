'use strict';
(function(Client) {

  angular.module('maerkApp.client')
    .controller('ClientController', function(Report, $mdToast, $mdDialog, Empfactory) {



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



Report.getYear(new Date().getYear() + 1900).$promise.then((report)=>{
// console.log('here');
// console.log(report['january'])
// Clients =  report;
clientReport =  getDataFormatted(report);

  this.monthSelect('january')
});

function getDataFormatted(report){
  // console.log(report['january'].length); //emps in a month

  console.log(report['january'][0]);
    // console.log(report['january'][0]['client'].length);//clients for set emps

var newChart = {
  name: 'Mudo',
  count: 10,
  rev: 2000

};
for(var i =0; i < report['january'].length-1; i++){
  console.log(report['january'][i].first_name)
// console.log(report['january'][i]['client'].length);
  for(var j = 0; j < report['january'][i]['client'].length;j++){
    console.log('here');
        console.log('---->',report['january'][i]['client'][Object.keys(report['january'][i]['client'])[j]]);
        console.log(newChart.name);
        console.log(report['january'][i]['client']);
  }
}

    return report;
}

      this.createCli = Report.createCli;
      this.updateCli = Report.updateCli;
    //  this.Clients = Report.getAll();



      // console.log('----this.clients-->',this.Clients.0])


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
        january: [{
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
        february: [{
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
        }],
        march:[{
          name: 'att',
          count: 5,
          rev: 8000
        }, {
          name: "disney",
          count: 9,
          rev: 12000
        }],
        april:[{
          name: 'att',
          count: 2,
          rev: 8000
        }, {
          name: "disney",
          count: 9,
          rev: 12000
        },{
          name: "verison",
          count: 8,
          rev: 6000
        }],
        may:[],
        june:[],
        july:[],
        august:[],
        september:[],
        october:[],
        november:[],
        december:[]
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

      //change this to pick the month
      var month = 'january';
      this.total = reports[month].length;
      chart1.formatters = {
        number: [{
          columnNum: 1,
          pattern: 'employees '
        }]
      };
      this.monthSelect = function(month) {
        //chart1.data builds the chart

        // console.log(Clients['january'])
        chart1.data = createChartData(reports[month], "count");
        // chart1.data = createChartData(clientReport[month], "count");
        this.tableData = reports[month];
        // console.log(reports[month].length);
      }
      //this makes the chart with the data
      this.chart = chart1;

      // this.tableData = reports.jan;

    })
})();
