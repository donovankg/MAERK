'use strict';
(function() {

  angular.module('maerkApp.employee')
    .controller('toastCtrl', function($mdToast, $mdDialog, pushEmp) {
      // console.log('toast controller ran');

      this.empConfirmed = function() {
        // console.log('emp confirmed');
        $mdToast.hide();
        $mdDialog.hide();

        pushEmp();
      }

      this.closeToast = function(){
        // console.log('close clicked');
        $mdToast.hide();
      }


    })
}());
