'use strict';
(function(Register) {

    angular.module('maerkApp')
      .controller('RegController', function($q, $mdToast, $mdDialog, Report, Empfactory) {



          this.month = "january";

          this.monthNames = ["january", "february", "march", "april", "may", "june",
            "july", "august", "september", "october", "november", "december"
          ];
          var currentYear = new Date().getYear() + 1900;
          var totalYears = [];
          for (var i = 2007; i <= currentYear; i++) {
            totalYears.push(i);
          }
          this.yearList = totalYears;
          this.tempYear = new Date().getYear() + 1900;




          // this.loader = function() {
          //   if (this.report[this.month].length != 0) {
          //     console.log('from reports DB');
          //     console.log('----report db--->', this.report)
          //
          //   } else {
          //
          //       console.log('now update the report');
          //
          //
          //   }
          // }

          this.fromSelectYear = function(month) {
            Report.getYear(this.tempYear).$promise
              .then((reportYear) => {
                this.report = reportYear;
                this.confirm;
              })
          }


          this.toastDate;
          this.createReg = Report.createReg;
          this.updateReg = Report.updateReg;
          this.report = Report.getYear(this.tempYear);
          var self = this;
          this.import = function() {
            this.report[this.month] = angular.copy(Empfactory.getAll());

            

            // this.fromSelectYear();

              }
            this.confirm = function() {

              console.log('push the changes to report DB');
              Report.createCli(this.report);
            }


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
