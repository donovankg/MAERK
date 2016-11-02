function addEmplCtrl($scope) {
  $scope.newEmployee = {};




  $scope.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
          return {types: workType};
        });

}


angular.module("maerkApp.employee'",addEmplCtrl);
