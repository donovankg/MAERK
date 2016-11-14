'use strict';
(function(Report) {

  angular.module('maerkApp.report')
    .controller('ReportController', function(Repfactory, $mdToast, $mdDialog) {

      self.createRep = Repfactory.createRep;
      self.updateRep = Repfactory.updateRep;
      self.Reports = Repfactory.getAll();

    })
}());
