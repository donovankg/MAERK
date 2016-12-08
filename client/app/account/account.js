'use strict';

angular.module('maerkApp')
  .constant("EmpService", "http://localhost:9000/api/employee")
  .constant("RegService","http://localhost:9000/api/register-month")
  .config(function($stateProvider) {
    $stateProvider.state('login', {
        url: '/',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout?referrer',
        referrer: 'login',
        template: '',
        controller: function($state, Auth) {
          var referrer = 'login';
          Auth.logout();
          console.log(referrer)
          $state.go(referrer);
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupController',
        controllerAs: 'vm'
      })
      .state('main.settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        authenticate: true
      })

  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, current) {
      if (next.name === 'logout' && current && current.name && !current.authenticate) {
        next.referrer = current.name;
      }
    });
  });
