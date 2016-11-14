'use strict';
(function(Client) {

  angular.module('maerkApp.client')
    .controller('ClientController', function(Clifactory, $mdToast, $mdDialog) {

      self.createCli = Clifactory.createCli;
      self.updateCli = Clifactory.updateCli;
      self.Clients = Clifactory.getAll();

    })
})();
