'use strict';

(function() {

  class MainController {

    constructor($http,$mdSidenav) {
      this.$http = $http;
      this.awesomeThings = [];
      this.$mdSidenav=$mdSidenav;
    }

    close(){
      this.$mdSidenav("leftSideNav").close();
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('maerkApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:"vm"
    });
})();
