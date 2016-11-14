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
      var chart1 = {};
      // ColumnChart, PieChart
          chart1.type = "PieChart";
          chart1.data = [
             ['Component', 'cost'],
             ['Software', 50000],
             ['Hardware', 80000]
            ];
          chart1.data.push(['Services',20000]);
          chart1.options = {
              displayExactValues: true,
              width: 600,
              height: 400,
              is3D: true,
              chartArea: {left:10,top:10,bottom:0,height:100}
          };

          chart1.formatters = {
            number : [{
              columnNum: 1,
              pattern: "$ #,##0.00"
            }]
          };

          this.chart = chart1;



    })
})();
