'use strict';

angular.module('maerkApp', ['maerkApp.auth', 'maerkApp.admin', 'maerkApp.constants', 'maerkApp.employee', 'maerkApp.client', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'validation.match', 'ngMaterial', 'mdDataTable', 'ngMessages', 'googlechart', 'md.data.table']).config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/employee');

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map

'use strict';

angular.module('maerkApp.admin', ['maerkApp.auth', 'ui.router']);
//# sourceMappingURL=admin.module.js.map

'use strict';

angular.module('maerkApp.employee', ['maerkApp.auth', 'ui.router']);
//# sourceMappingURL=employee.module.js.map

'use strict';

angular.module('maerkApp.client', ['maerkApp.auth', 'ui.router']);
//# sourceMappingURL=client.module.js.map

'use strict';

angular.module('maerkApp.auth', ['maerkApp.constants', 'maerkApp.util', 'ngCookies', 'ui.router']).config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
//# sourceMappingURL=auth.module.js.map

'use strict';

angular.module('maerkApp.util', []);
//# sourceMappingURL=util.module.js.map

'use strict';

angular.module('maerkApp').constant("EmpService", "http://localhost:9000/api/employee").config(function ($stateProvider) {
  $stateProvider.state('login', {
    url: '/',
    templateUrl: 'app/account/login/login.html',
    controller: 'LoginController',
    controllerAs: 'vm'
  }).state('logout', {
    url: '/logout?referrer',
    referrer: 'login',
    template: '',
    controller: function controller($state, Auth) {
      var referrer = 'login';
      Auth.logout();
      console.log(referrer);
      $state.go(referrer);
    }
  }).state('signup', {
    url: '/signup',
    templateUrl: 'app/account/signup/signup.html',
    controller: 'SignupController',
    controllerAs: 'vm'
  }).state('main.settings', {
    url: '/settings',
    templateUrl: 'app/account/settings/settings.html',
    controller: 'SettingsController',
    controllerAs: 'vm',
    authenticate: true
  });
}).run(function ($rootScope) {
  $rootScope.$on('$stateChangeStart', function (event, next, nextParams, current) {
    if (next.name === 'logout' && current && current.name && !current.authenticate) {
      next.referrer = current.name;
    }
  });
});
//# sourceMappingURL=account.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginController = function () {
  function LoginController(Auth, $state) {
    _classCallCheck(this, LoginController);

    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  _createClass(LoginController, [{
    key: 'login',
    value: function login(form) {
      var _this = this;

      this.submitted = true;

      if (form.$valid) {
        this.Auth.login({
          email: this.user.email,
          password: this.user.password
        }).then(function () {
          // Logged in, redirect to home
          _this.$state.go('main.employee');
        }).catch(function (err) {
          _this.errors.other = err.message;
        });
      }
    }
  }]);

  return LoginController;
}();

angular.module('maerkApp').controller('LoginController', LoginController);
//# sourceMappingURL=login.controller.js.map

'use strict';
'user strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = function MainController() {
  _classCallCheck(this, MainController);

  this.errors = {};
  this.submitted = false;
};

angular.module('maerkApp').controller('MainController', MainController);
//# sourceMappingURL=main.controller.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsController = function () {
  function SettingsController(Auth) {
    _classCallCheck(this, SettingsController);

    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
  }

  _createClass(SettingsController, [{
    key: 'changePassword',
    value: function changePassword(form) {
      var _this = this;

      this.submitted = true;

      if (form.$valid) {
        this.Auth.changePassword(this.user.oldPassword, this.user.newPassword).then(function () {
          _this.message = 'Password successfully changed.';
        }).catch(function () {
          form.password.$setValidity('mongoose', false);
          _this.errors.other = 'Incorrect password';
          _this.message = '';
        });
      }
    }
  }]);

  return SettingsController;
}();

angular.module('maerkApp').controller('SettingsController', SettingsController);
//# sourceMappingURL=settings.controller.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignupController = function () {
  //end-non-standard

  function SignupController(Auth, $state) {
    _classCallCheck(this, SignupController);

    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }
  //start-non-standard


  _createClass(SignupController, [{
    key: 'register',
    value: function register(form) {
      var _this = this;

      this.submitted = true;

      if (form.$valid) {
        this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        }).then(function () {
          // Account created, redirect to home
          _this.$state.go('main');
        }).catch(function (err) {
          err = err.data;
          _this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function (error, field) {
            form[field].$setValidity('mongoose', false);
            _this.errors[field] = error.message;
          });
        });
      }
    }
  }]);

  return SignupController;
}();

angular.module('maerkApp').controller('SignupController', SignupController);
//# sourceMappingURL=signup.controller.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var AdminController = function () {
    function AdminController(User) {
      _classCallCheck(this, AdminController);

      // Use the User $resource to fetch all users
      this.users = User.query();
    }

    _createClass(AdminController, [{
      key: 'delete',
      value: function _delete(user) {
        user.$remove();
        this.users.splice(this.users.indexOf(user), 1);
      }
    }]);

    return AdminController;
  }();

  angular.module('maerkApp.admin').controller('AdminController', AdminController);
})();
//# sourceMappingURL=admin.controller.js.map

'use strict';

angular.module('maerkApp.admin').config(function ($stateProvider) {
  $stateProvider.state('admin', {
    url: '/admin',
    templateUrl: 'app/admin/admin.html',
    controller: 'AdminController',
    controllerAs: 'admin',
    authenticate: 'admin'
  });
});
//# sourceMappingURL=admin.router.js.map

"use strict";

(function (angular, undefined) {
	angular.module("maerkApp.constants", []).constant("appConfig", {
		"userRoles": ["guest", "user", "admin"]
	});
})(angular);
//# sourceMappingURL=app.constant.js.map

"use strict";

function addEmplCtrl($mdDialog, Empfactory, editEmp, $mdToast) {
  var _this = this;

  this.newEmp = {};
  var newEmployee;
  var oldCopy = editEmp;
  this.newEmp.client = [];
  this.newEmp.skill = [];
  var err = "";
  // console.log(editEmp);
  if ($.isEmptyObject(editEmp)) {
    this.newEmp.activate = true;
    newEmployee = true;
  } else {
    angular.copy(editEmp, this.newEmp);
    newEmployee = false;
  }

  this.confirm = function () {

    if (newEmployee == true) {
      this.pushEmp(addNew);
      $mdDialog.hide();
    } else {
      confirmToast();
    }
  };
  var confirmToast = function confirmToast() {
    // console.log('toast opens');
    $mdToast.show({
      parent: document.getElementById('getToast'),
      hideDelay: 0,
      position: 'top right',
      controller: 'toastCtrl',
      controllerAs: 'vm',
      templateUrl: '/app/employee/toast/toast.html',
      locals: {
        // addNew: addNew,
        pushEmp: _this.pushEmp
      }
    });
  };

  this.pushEmp = function () {
    if (newEmployee === true) {
      // console.log(this.newEmp);
      Empfactory.createEmp(_this.newEmp);
    } else {
      Empfactory.updateEmp(_this.newEmp);
    }
  };
  this.submitted = function () {
    $mdDialog.hide();
  };
  this.cancel = function () {
    $mdDialog.hide();
  };
}
angular.module('maerkApp').controller('addEmplCtrl', addEmplCtrl);
//# sourceMappingURL=addemployee.controller.js.map

'use strict';

(function (Employee) {

  angular.module('maerkApp.employee').controller('EmployeeController', function (Empfactory, $mdToast, $mdDialog) {
    var errors = {};
    var submitted = false;
    var self = this;
    var empRows = {};
    var editEmp = {};
    self.createEmp = Empfactory.createEmp;
    self.updateEmp = Empfactory.updateEmp;
    self.employees = Empfactory.getAll();
    this.addEmp = function (ev) {
      for (var i = 0; i < self.employees.length; i++) {
        if (self.employees[i]._id == empRows[0]) {
          editEmp = self.employees[i];
          break;
        } else {
          editEmp = {};
        }
      }
      $mdDialog.show({
        controller: addEmplCtrl,
        controllerAs: 'aec',
        templateUrl: '/app/employee/addemployee/addemployee.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        escapeToClose: true,
        ok: 'Close',
        locals: {
          editEmp: editEmp
        }
      });
    };
    this.deleteRowCallBack = function (rows) {
      $mdToast.show($mdToast.simple().content('deleted row id(s): ' + rows).hideDelay(3000));
    };
    this.statusEmp = function (status) {
      for (var i = 0; i < empRows.length; i++) {
        for (var j = 0; j < self.employees.length; j++) {
          if (self.employees[j]._id == empRows[i]) {
            editEmp = self.employees[j];
            if (status === '1') {
              editEmp.activate = true;
            } else {
              editEmp.activate = false;
            }
            self.updateEmp(editEmp);
            break;
          }
        }
      }
    };

    this.showEdit;
    this.selectedRowCallback = function (rows) {
      if (rows.length == 0) {
        this.editBtn = false;
        this.deleteBtn = false;
        this.activeBtn = false;
        this.addBtn = false;
      } else if (rows.length == 1) {
        this.addBtn = true;
        this.editBtn = true;
        this.deleteBtn = true;
        this.activeBtn = true;
      } else {
        this.addBtn = true;
        this.editBtn = false;
        this.deleteBtn = true;
        this.activeBtn = true;
      }
      this.showEdit = true;
      empRows = rows;
    };
  });
})();
//# sourceMappingURL=employee.controller.js.map

'use strict';

angular.module('maerkApp.employee');
//# sourceMappingURL=employee.router.js.map

'use strict';

(function () {
  angular.module('maerkApp').factory('Empfactory', function ($resource, EmpService) {
    var EmpResource = $resource('/api/employee/:id', {
      id: '@_id'
    }, {
      getOne: {
        method: 'get',
        params: {
          id: '@_id'
        }
      },
      create: {
        method: 'post'
      },
      update: {
        method: 'put',
        params: {
          id: '@_id'
        }
      }
    });
    // resourceMethods
    // var EmpResource = $resource(EmpService + ":id", {
    //   id: "@_id"
    // });

    var emps = EmpResource.query();
    // spot to add delete emp later on

    var createEmp = function createEmp(newEmp) {
      new EmpResource(newEmp).$save().then(function (d) {
        emps.push(d);
      });
    };

    var updateEmp = function updateEmp(d) {
      // console.log('----->',d);

      EmpResource.update({
        _id: d._id
      }, d).$promise.then(function (newEmpUpdated) {
        // console.log(d);
        // console.log(newEmpUpdated.skill);
        for (var i = 0; i < emps.length; i++) {

          if (emps[i]._id == newEmpUpdated._id) {
            // emps[i].skill = newEmpUpdated.skill;
            // emps[i].skill = newEmpUpdated.client;
            emps[i] = newEmpUpdated;
          }
        }

        //  emps.push(d);
        // console.log(editEmp);
      });
    };

    var getAll = function getAll() {
      return emps;
    };
    return {
      createEmp: createEmp,
      updateEmp: updateEmp,
      getAll: getAll,
      EmpResource: EmpResource
    };
  });
})();
//# sourceMappingURL=employee.service.js.map

'use strict';

(function () {

  angular.module('maerkApp.employee').controller('toastCtrl', function ($mdToast, $mdDialog, pushEmp) {
    // console.log('toast controller ran');

    this.empConfirmed = function () {
      // console.log('emp confirmed');
      $mdToast.hide();
      $mdDialog.hide();
      pushEmp();
    };

    this.closeToast = function () {
      // console.log('close clicked');
      $mdToast.hide();
    };
  });
})();
//# sourceMappingURL=toast.controller.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MainController = function () {
    function MainController($http, $mdSidenav) {
      _classCallCheck(this, MainController);

      this.$http = $http;
      this.awesomeThings = [];
      this.$mdSidenav = $mdSidenav;
    }

    _createClass(MainController, [{
      key: '$onInit',
      value: function $onInit() {
        var _this = this;

        this.$http.get('/api/things').then(function (response) {
          _this.awesomeThings = response.data;
        });
      }
    }, {
      key: 'addThing',
      value: function addThing() {
        if (this.newThing) {
          this.$http.post('/api/things', {
            name: this.newThing
          });
          this.newThing = '';
        }
      }
    }, {
      key: 'deleteThing',
      value: function deleteThing(thing) {
        this.$http.delete('/api/things/' + thing._id);
      }
    }]);

    return MainController;
  }();

  angular.module('maerkApp').component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    controllerAs: 'vm'
  });
})();
//# sourceMappingURL=main.controller.js.map

'use strict';

angular.module('maerkApp').config(function ($stateProvider) {

  $stateProvider.state('main', {
    // url: '/main',
    abstract: true,
    template: '<main class ="flex layout-row"></main>',
    authenticate: true
    // may need to make it abstract

  }).state('main.employee', {
    url: '/employee',
    templateUrl: 'app/employee/employee.html',
    controller: 'EmployeeController',
    controllerAs: 'emp',
    authenticate: true
  }).state('main.client', {
    url: '/report-client',
    templateUrl: 'app/report/client/client.html',
    controller: 'ClientController',
    controllerAs: 'cli',
    authenticate: true
  });
});
//# sourceMappingURL=main.js.map

'use strict';

(function (Client) {

  angular.module('maerkApp.client').controller('ClientController', function (Clifactory, $mdToast, $mdDialog) {

    self.createCli = Clifactory.createCli;
    self.updateCli = Clifactory.updateCli;
    self.Clients = Clifactory.getAll();

    function MainCtrl() {
      this.config = {
        title: 'Products',
        tooltips: true,
        labels: false,
        mouseover: function mouseover() {},
        mouseout: function mouseout() {},
        click: function click() {},
        legend: {
          display: true,
          //could be 'left, right'
          position: 'right'
        }
      };
    }
    var reports = {
      'count': 10,
      'jan': [{
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

    //pagination
    this.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
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
    };

    function createChartData(array, prop) {
      var arr = [];
      arr.push(['client', prop]);
      for (var i = 0; i < array.length; i++) {
        arr.push([array[i].name, array[i][prop]]);
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
    var month = 'jan';
    this.total = reports[month].length;
    chart1.formatters = {
      number: [{
        columnNum: 1,
        pattern: 'employees '
        // pattern: "$ #,##0.00"
      }]
    };
    this.monthSelect = function (month) {
      chart1.data = createChartData(reports[month], "count");
      this.tableData = reports[month];
      console.log(reports[month].length);
    };
    this.chart = chart1;
    this.monthSelect('jan');
    // console.log(this.chart);
    this.tableData = reports.jan;
  });
})();
//# sourceMappingURL=client.controller.js.map

'use strict';

angular.module('maerkApp.client');
//# sourceMappingURL=client.router.js.map

'use strict';

(function () {
  angular.module('maerkApp').factory('Clifactory', function ($resource) {
    var CliResource = $resource('/api/report/:id', {
      id: '@_id'
    }, {
      getOne: {
        method: 'get',
        params: {
          id: '@_id'
        }
      },
      create: {
        method: 'post'
      },
      update: {
        method: 'put',
        params: {
          id: '@_id'
        }
      },
      getAllYears: {
        method: 'get',
        params: {
          year: 'year'
        }
      },
      getMonth: {
        method: 'get',
        params: {
          month: 'month'
        }
      }
    });

    var Clis = CliResource.query();
    // spot to add delete Cli later on

    var createCli = function createCli(newCli) {
      new CliResource(newCli).$save().then(function (d) {
        Clis.push(d);
      });
    };

    var updateCli = function updateCli(d) {
      // console.log('----->',d);

      CliResource.update({
        _id: d._id
      }, d).$promise.then(function (newCliUpdated) {
        // console.log(d);
        // console.log(newCliUpdated.skill);
        for (var i = 0; i < Clis.length; i++) {

          if (Clis[i]._id == newCliUpdated._id) {
            // Clis[i].skill = newCliUpdated.skill;
            // Clis[i].skill = newCliUpdated.client;
            Clis[i] = newCliUpdated;
          }
        }

        //  Clis.push(d);
        // console.log(editCli);
      });
    };

    var getAll = function getAll() {
      return Clis;
    };
    return {
      createCli: createCli,
      updateCli: updateCli,
      getAll: getAll,
      CliResource: CliResource
    };
  });
})();
//# sourceMappingURL=client.service.js.map

'use strict';

(function () {

  function AuthService($location, $http, $cookies, $q, appConfig, Util, User) {
    var safeCb = Util.safeCb;
    var currentUser = {};
    var userRoles = appConfig.userRoles || [];

    if ($cookies.get('token') && $location.path() !== '/logout') {
      currentUser = User.get();
    }

    var Auth = {

      /**
       * Authenticate user and save token
       *
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional, function(error, user)
       * @return {Promise}
       */
      login: function login(_ref, callback) {
        var email = _ref.email,
            password = _ref.password;

        return $http.post('/auth/local', {
          email: email,
          password: password
        }).then(function (res) {
          $cookies.put('token', res.data.token);
          currentUser = User.get();
          return currentUser.$promise;
        }).then(function (user) {
          safeCb(callback)(null, user);
          return user;
        }).catch(function (err) {
          Auth.logout();
          safeCb(callback)(err.data);
          return $q.reject(err.data);
        });
      },


      /**
       * Delete access token and user info
       */
      logout: function logout() {
        $cookies.remove('token');
        currentUser = {};
      },


      /**
       * Create a new user
       *
       * @param  {Object}   user     - user info
       * @param  {Function} callback - optional, function(error, user)
       * @return {Promise}
       */
      createUser: function createUser(user, callback) {
        return User.save(user, function (data) {
          $cookies.put('token', data.token);
          currentUser = User.get();
          return safeCb(callback)(null, user);
        }, function (err) {
          Auth.logout();
          return safeCb(callback)(err);
        }).$promise;
      },


      /**
       * Change password
       *
       * @param  {String}   oldPassword
       * @param  {String}   newPassword
       * @param  {Function} callback    - optional, function(error, user)
       * @return {Promise}
       */
      changePassword: function changePassword(oldPassword, newPassword, callback) {
        return User.changePassword({
          id: currentUser._id
        }, {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function () {
          return safeCb(callback)(null);
        }, function (err) {
          return safeCb(callback)(err);
        }).$promise;
      },


      /**
       * Gets all available info on a user
       *   (synchronous|asynchronous)
       *
       * @param  {Function|*} callback - optional, funciton(user)
       * @return {Object|Promise}
       */
      getCurrentUser: function getCurrentUser(callback) {
        if (arguments.length === 0) {
          return currentUser;
        }

        var value = currentUser.hasOwnProperty('$promise') ? currentUser.$promise : currentUser;
        return $q.when(value).then(function (user) {
          safeCb(callback)(user);
          return user;
        }, function () {
          safeCb(callback)({});
          return {};
        });
      },


      /**
       * Check if a user is logged in
       *   (synchronous|asynchronous)
       *
       * @param  {Function|*} callback - optional, function(is)
       * @return {Bool|Promise}
       */
      isLoggedIn: function isLoggedIn(callback) {
        if (arguments.length === 0) {
          return currentUser.hasOwnProperty('role');
        }

        return Auth.getCurrentUser(null).then(function (user) {
          var is = user.hasOwnProperty('role');
          safeCb(callback)(is);
          return is;
        });
      },


      /**
       * Check if a user has a specified role or higher
       *   (synchronous|asynchronous)
       *
       * @param  {String}     role     - the role to check against
       * @param  {Function|*} callback - optional, function(has)
       * @return {Bool|Promise}
       */
      hasRole: function hasRole(role, callback) {
        var hasRole = function hasRole(r, h) {
          return userRoles.indexOf(r) >= userRoles.indexOf(h);
        };

        if (arguments.length < 2) {
          return hasRole(currentUser.role, role);
        }

        return Auth.getCurrentUser(null).then(function (user) {
          var has = user.hasOwnProperty('role') ? hasRole(user.role, role) : false;
          safeCb(callback)(has);
          return has;
        });
      },


      /**
       * Check if a user is an admin
       *   (synchronous|asynchronous)
       *
       * @param  {Function|*} callback - optional, function(is)
       * @return {Bool|Promise}
       */
      isAdmin: function isAdmin() {
        return Auth.hasRole.apply(Auth, [].concat.apply(['admin'], arguments));
      },


      /**
       * Get auth token
       *
       * @return {String} - a token string used for authenticating
       */
      getToken: function getToken() {
        return $cookies.get('token');
      }
    };

    return Auth;
  }

  angular.module('maerkApp.auth').factory('Auth', AuthService);
})();
//# sourceMappingURL=auth.service.js.map

'use strict';

(function () {

  function authInterceptor($rootScope, $q, $cookies, $injector, Util) {
    var state;
    return {
      // Add authorization token to headers
      request: function request(config) {
        config.headers = config.headers || {};
        if ($cookies.get('token') && Util.isSameOrigin(config.url)) {
          config.headers.Authorization = 'Bearer ' + $cookies.get('token');
        }
        return config;
      },


      // Intercept 401s and redirect you to login
      responseError: function responseError(response) {
        if (response.status === 401) {
          (state || (state = $injector.get('$state'))).go('login');
          // remove any stale tokens
          $cookies.remove('token');
        }
        return $q.reject(response);
      }
    };
  }

  angular.module('maerkApp.auth').factory('authInterceptor', authInterceptor);
})();
//# sourceMappingURL=interceptor.service.js.map

'use strict';

(function () {

  angular.module('maerkApp.auth').run(function ($rootScope, $state, Auth) {
    // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
    $rootScope.$on('$stateChangeStart', function (event, next) {
      if (!next.authenticate) {
        return;
      }

      if (typeof next.authenticate === 'string') {
        Auth.hasRole(next.authenticate, _.noop).then(function (has) {
          if (has) {
            return;
          }

          event.preventDefault();
          return Auth.isLoggedIn(_.noop).then(function (is) {
            $state.go(is ? 'main' : 'login');
          });
        });
      } else {
        Auth.isLoggedIn(_.noop).then(function (is) {
          if (is) {
            return;
          }

          event.preventDefault();
          $state.go('login');
        });
      }
    });
  });
})();
//# sourceMappingURL=router.decorator.js.map

'use strict';

(function () {

  function UserResource($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  }

  angular.module('maerkApp.auth').factory('User', UserResource);
})();
//# sourceMappingURL=user.service.js.map

'use strict';

angular.module('maerkApp').directive('footer', function () {
  return {
    templateUrl: 'components/footer/footer.html',
    restrict: 'E',
    link: function link(scope, element) {
      element.addClass('footer');
    }
  };
});
//# sourceMappingURL=footer.directive.js.map

'use strict';

/**
 * Removes server error when user updates input
 */

angular.module('maerkApp').directive('mongooseError', function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function link(scope, element, attrs, ngModel) {
      element.on('keydown', function () {
        return ngModel.$setValidity('mongoose', true);
      });
    }
  };
});
//# sourceMappingURL=mongoose-error.directive.js.map


//----------------------------------
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarController = function () {
  //end-non-standard

  //start-non-standard
  function NavbarController(Auth, $mdSidenav) {
    _classCallCheck(this, NavbarController);

    this.menu = [{
      'title': 'Home',
      'state': 'main'
    }];
    this.isCollapsed = true;

    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.$mdSidenav = $mdSidenav;
  }

  _createClass(NavbarController, [{
    key: 'toggleLeft',
    value: function toggleLeft() {
      this.$mdSidenav("leftSideNav").toggle();
    }
  }]);

  return NavbarController;
}();

angular.module('maerkApp').controller('NavbarController', NavbarController);
//# sourceMappingURL=navbar.controller.js.map

'use strict';

angular.module('maerkApp').directive('navbar', function () {
  return {
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  };
});
//# sourceMappingURL=navbar.directive.js.map

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var sideNavCtrl =
//end-non-standard

function sideNavCtrl() {
  _classCallCheck(this, sideNavCtrl);

  this.menu = [{
    'title': 'Home',
    'state': 'main'
  }];
  this.isCollapsed = true;
}
//start-non-standard
;

angular.module('maerkApp').controller('leftSideNavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = buildDelayedToggler('left');
  $scope.test = "You";

  /**
   * Supplies a function that will continue to operate until the
   * time is up.
   */
  function debounce(func, wait, context) {
    var timer;

    return function debounced() {
      var context = $scope,
          args = Array.prototype.slice.call(arguments);
      $timeout.cancel(timer);
      timer = $timeout(function () {
        timer = undefined;
        func.apply(context, args);
      }, wait || 10);
    };
  }

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildDelayedToggler(navID) {
    return debounce(function () {
      $mdSidenav(navID).toggle().then(function () {});
    }, 200);
  }
  function buildToggler(navID) {
    return function () {
      $mdSidenav(navID).toggle().then(function () {
        $log.debug("toggle " + navID + " is done");
      });
    };
  }
}).controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('left').close();
  };
});
//# sourceMappingURL=sideNavBar.controller.js.map

'use strict';

(function () {

  /**
   * The Util service is for thin, globally reusable, utility functions
   */
  function UtilService($window) {
    var Util = {
      /**
       * Return a callback or noop function
       *
       * @param  {Function|*} cb - a 'potential' function
       * @return {Function}
       */
      safeCb: function safeCb(cb) {
        return angular.isFunction(cb) ? cb : angular.noop;
      },


      /**
       * Parse a given url with the use of an anchor element
       *
       * @param  {String} url - the url to parse
       * @return {Object}     - the parsed url, anchor element
       */
      urlParse: function urlParse(url) {
        var a = document.createElement('a');
        a.href = url;

        // Special treatment for IE, see http://stackoverflow.com/a/13405933 for details
        if (a.host === '') {
          a.href = a.href;
        }

        return a;
      },


      /**
       * Test whether or not a given url is same origin
       *
       * @param  {String}           url       - url to test
       * @param  {String|String[]}  [origins] - additional origins to test against
       * @return {Boolean}                    - true if url is same origin
       */
      isSameOrigin: function isSameOrigin(url, origins) {
        url = Util.urlParse(url);
        origins = origins && [].concat(origins) || [];
        origins = origins.map(Util.urlParse);
        origins.push($window.location);
        origins = origins.filter(function (o) {
          var hostnameCheck = url.hostname === o.hostname;
          var protocolCheck = url.protocol === o.protocol;
          // 2nd part of the special treatment for IE fix (see above):  
          // This part is when using well-known ports 80 or 443 with IE,
          // when $window.location.port==='' instead of the real port number.
          // Probably the same cause as this IE bug: https://goo.gl/J9hRta
          var portCheck = url.port === o.port || o.port === '' && (url.port === '80' || url.port === '443');
          return hostnameCheck && protocolCheck && portCheck;
        });
        return origins.length >= 1;
      }
    };

    return Util;
  }

  angular.module('maerkApp.util').factory('Util', UtilService);
})();
//# sourceMappingURL=util.service.js.map

angular.module("maerkApp").run(["$templateCache", function($templateCache) {$templateCache.put("app/admin/admin.html","<div class=\"container\">\n  <p>The delete user and user index api routes are restricted to users with the \'admin\' role.</p>\n  <ul class=\"list-group user-list\">\n    <li class=\"list-group-item\" ng-repeat=\"user in admin.users\">\n	    <div class=\"user-info\">\n	        <strong>{{user.name}}</strong><br>\n	        <span class=\"text-muted\">{{user.email}}</span>\n	    </div>\n        <a ng-click=\"admin.delete(user)\" class=\"trash\"><span class=\"fa fa-trash fa-2x\"></span></a>\n    </li>\n  </ul>\n</div>\n");
$templateCache.put("app/employee/employee.html","<div layout-margin layout=\"column\" flex>\n\n  <!-- Menu -->\n  <!-- http://codepen.io/iamisti/pen/bEBKRj?editors=1010#0 -->\n  <div>\n    <label>Search Employee Table</label>\n    <input type=\"text\" name=\"name\" ng-model=\"filterName\" flex=\"50\">\n    <div ng-hide=\"true\">\n      {{(empfiltered = (emp.employees | filter: filterName))}}\n    </div>\n  </div>\n\n  <md-toolbar class=\"md-toolbar-tools\">\n    <md-button ng-hide=\"emp.addBtn\" ng-click=\"emp.addEmp(\'new\')\" class=\"sm-icon-button\" aria-label=\"Add Emp\">\n      <ng-md-icon icon=\"note_add\" size=\"24\"></ng-md-icon>\n    </md-button>\n    <md-button ng-show=\"emp.editBtn\" ng-click=\"emp.addEmp(\'edit\')\" class=\"sm-icon-button\" aria-label=\"edit Emp\">\n      <ng-md-icon icon=\"mode_edit\" size=\"24\"></ng-md-icon>\n    </md-button>\n    <md-button ng-show=\"emp.deleteBtn\" ng-click=\"\" class=\"sm-icon-button\" aria-label=\"delete Emp\">\n      <ng-md-icon icon=\"delete\" size=\"24\"></ng-md-icon>\n    </md-button>\n    <md-list-item ng-show=\"emp.activeBtn\">\n      <ng-md-icon icon=\"menu\" size=\"24\"></ng-md-icon>\n      <md-menu class=\"md-secondary\">\n        <md-button class=\"md-icon-button\">\n        </md-button>\n        <md-menu-content>\n          <md-menu-item>\n            <md-button ng-click=\"emp.statusEmp(\'1\')\">activate</md-button>\n          </md-menu-item>\n          <md-menu-item>\n            <md-button ng-click=\"emp.statusEmp(\'2\')\">deactivate</md-button>\n          </md-menu-item>\n        </md-menu-content>\n      </md-menu>\n    </md-list-item>\n  </md-toolbar>\n  <md-content flex layout=\"column\">\n\n    <mdt-table selectable-rows=\"true\" paginated-rows=\"{isEnabled: true, rowsPerPageValues: [5,10,20]}\" delete-row-callback=\"deleteRowCallBack(rows)\" selected-row-callback=\"emp.selectedRowCallback(rows)\" mdt-row=\"{\n                      data: empfiltered,\n                      \'table-row-id-key\': \'_id\',\n                      \'column-keys\': [\n                          \'first_name\',\n                          \'last_name\',\n                          \'activate\',\n                          \'client\',\n                          \'skill\',\n                          \'recruiter\',\n                          \'salary\'\n                            ]\n                      }\">\n      <mdt-header-row>\n        <mdt-column column-sort=\"true\" align-rule=\"right\">First Name</mdt-column>\n        <mdt-column column-sort=\"true\" align-rule=\"right\">Last Name</mdt-column>\n        <mdt-column column-sort=\"true\" align-rule=\"right\">active</mdt-column>\n        <mdt-column column-sort=\"true\" align-rule=\"right\">Client</mdt-column>\n        <mdt-column column-sort=\"true\" align-rule=\"left\">Skill</mdt-column>\n        <mdt-column column-sort=\"true\" align-rule=\"right\">Recruiter</mdt-column>\n        <mdt-column column-sort=\"true\" align-rule=\"right\">Salary</mdt-column>\n        <!-- salary is set rather than revenue because it hasn\'t been added yet -->\n      </mdt-header-row>\n      <mdt-custom-cell column-key=\"skill\">\n        <span ng-class=\"\">{{value}}</span>\n      </mdt-custom-cell>\n      <mdt-custom-cell column-key=\"client\">\n        <span ng-class=\"\">{{value}}</span>\n      </mdt-custom-cell>\n    </mdt-table>\n  </md-content>\n</div>\n");
$templateCache.put("app/main/main.html","<!--  Side Nav -->\n<!-- <div ng-controller=\"sideNavCtrl as sideBar\"  ng-cloak=\"\" class=\"sidenavdemoBasicUsage\" ng-app=\"MyApp\" flex layout=\"row\" layout-fill> -->\n\n<md-sidenav class=\"md-sidenav-left md-whiteframe-z2 navMargOff\" md-component-id=\"leftSideNav\" md-is-locked-open=\"$mdMedia(\'gt-md\')\">\n  <md-toolbar class=\"md-theme-indigo\">\n    <h1 class=\"md-toolbar-tools\">Future Story</h1>\n  </md-toolbar>\n  <md-list-item>\n    <p>Reports</p>\n    <md-menu class=\"md-secondary\">\n      <md-button class=\"md-icon-button\">\n      </md-button>\n      <md-menu-content width=\"4\">\n        <md-menu-item>\n          <md-button ui-sref=\".client\">\n            Skills\n          </md-button>\n        </md-menu-item>\n        <md-menu-item>\n          <md-button ui-sref=\".client\">\n            Clients\n          </md-button>\n        </md-menu-item>\n        <md-menu-item>\n          <md-button ui-sref=\".client\">\n            Recruiters\n          </md-button>\n        </md-menu-item>\n      </md-menu-content>\n    </md-menu>\n\n  </md-list-item>\n  <md-list-item ui-sref=\".employee\">\n    <p>Employees</p>\n\n\n\n  </md-list-item>\n\n\n\n</md-sidenav>\n\n\n\n\n\n<md-content layout=\"column\" flex>\n  <ui-view layout=\"column\" flex></ui-view>\n</md-content>\n");
$templateCache.put("app/report/report.html","<p>\n  report-client\n</p>\n");
$templateCache.put("components/footer/footer.html","<div class=\"container\">\n  <p>Angular Fullstack v3.7.6 |\n    <a href=\"https://twitter.com/tyhenkel\">@tyhenkel</a> |\n    <a href=\"https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open\">Issues</a>\n  </p>\n</div>\n");
$templateCache.put("components/navbar/navbar.html","<div class=\"\">\n  <div class=\"container\">\n    <!--toolbar added -->\n\n    <md-toolbar>\n      <div class=\"md-toolbar-tools\">\n\n        <i class=\"fa fa-bars pinkNav\" aria-hidden=\"true\" ng-click=\"nav.toggleLeft()\" aria-label=\"sideNav\"></i>\n\n        <!-- <p ng-show=\"nav.isAdmin()\" ui-sref-active=\"active\"><a ui-sref=\"admin\">Admin</a></p> -->\n        <span flex></span>\n        <a href=\"/main\">\n          <img src=\"assets/images/ksquare-logo-70fbe24e22.png\" alt=\"Ksquare Logo\" />\n        </a>\n        <span flex></span>\n        <!-- <ul class=\"nav navbar-nav navbar-right\" ng-controller=\"NavbarController\"> -->\n          <!-- <div ng-hide=\"nav.isLoggedIn()\" ui-sref-active=\"active\"><a ui-sref=\"login\">Login</a></div> -->\n          <!-- <li ng-show=\"nav.isLoggedIn()\" class=\"navbar-text\">Hello {{ nav.getCurrentUser().name }} </li> -->\n          <md-button ng-show=\"nav.isLoggedIn()\" class =\"md-icon-button\" aria-label=\"settings\">\n            <div>\n              <!-- Settings -->\n              <i class=\"fa fa-cogs\" aria-hidden=\"true\"></i>\n            </div>\n          </md-button>\n          <div ng-show=\"nav.isLoggedIn()\">\n            <md-button ui-sref=\"logout\"  class =\"md-icon-button\" aria-label=\"logout\">\n              <!-- Log-out -->\n              <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n            </md-button>\n          </div>\n\n      </div>\n\n    </md-toolbar>\n\n    <!-- toolbar closed -->\n    <!-- side Nav-->\n\n\n\n  </div>\n</div>\n");
$templateCache.put("app/account/login/login.html","\n\n<div flex=\"80\"  flex-gt-sm=\"40\" layout-align=\"center center\">\n  <md-content  layout-padding>\n      <div class=\"col-sm-12\">\n        <md-toolbar class=\"md-pirmary\">\n          <div class=\"md-toolbar-tools\">\n\n            <h1>Login</h1>\n          </div>\n        </md-toolbar>\n      </div>\n      <div>\n          <form class=\"form\" name=\"form\" ng-submit=\"vm.login(form)\" novalidate>\n\n            <md-input-container class=\"md-block\" flex-gt-sm>\n              <label>Email</label>\n\n              <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"vm.user.email\" required>\n            </md-input-container>\n\n            <md-input-container class=\"md-block\" flex-gt-sm>\n              <label>Password</label>\n\n              <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"vm.user.password\" required>\n            </md-input-container>\n\n            <div class=\"form-group has-error\">\n              <p class=\"help-block\" ng-show=\"form.email.$error.required && form.password.$error.required && vm.submitted\">\n                Please enter your email and password.\n              </p>\n              <p class=\"help-block\" ng-show=\"form.email.$error.email && vm.submitted\">\n                Please enter a valid email.\n              </p>\n\n              <p class=\"help-block\">{{ vm.errors.other }}</p>\n            </div>\n\n            <div>\n              <md-button class=\"md-raised md-primary\" type=\"submit\">\n                Login\n              </md-button>\n              <a class=\"btn btn-default btn-lg btn-register\" ui-sref=\"signup\">\n              Register\n            </a>\n            </div>\n\n          </form>\n\n      </div>\n  </md-content>\n</div>\n");
$templateCache.put("app/account/settings/settings.html","<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>Change Password</h1>\n    </div>\n    <div class=\"col-sm-12\">\n      <form class=\"form\" name=\"form\" ng-submit=\"vm.changePassword(form)\" novalidate>\n\n        <div class=\"form-group\">\n          <label>Current Password</label>\n\n          <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"vm.user.oldPassword\"\n                 mongoose-error/>\n          <p class=\"help-block\" ng-show=\"form.password.$error.mongoose\">\n              {{ vm.errors.other }}\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>New Password</label>\n\n          <input type=\"password\" name=\"newPassword\" class=\"form-control\" ng-model=\"vm.user.newPassword\"\n                 ng-minlength=\"3\"\n                 required/>\n          <p class=\"help-block\"\n             ng-show=\"(form.newPassword.$error.minlength || form.newPassword.$error.required) && (form.newPassword.$dirty || vm.submitted)\">\n            Password must be at least 3 characters.\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Confirm New Password</label>\n\n          <input type=\"password\" name=\"confirmPassword\" class=\"form-control\" ng-model=\"vm.user.confirmPassword\"\n                 match=\"vm.user.newPassword\"\n                 ng-minlength=\"3\"\n                 required=\"\"/>\n          <p class=\"help-block\"\n             ng-show=\"form.confirmPassword.$error.match && vm.submitted\">\n            Passwords must match.\n          </p>\n\n        </div>\n\n        <p class=\"help-block\"> {{ vm.message }} </p>\n\n        <button class=\"btn btn-lg btn-primary\" type=\"submit\">Save changes</button>\n      </form>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("app/account/signup/signup.html","<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <h1>Sign up</h1>\n    </div>\n    <div class=\"col-sm-12\">\n      <form class=\"form\" name=\"form\" ng-submit=\"vm.register(form)\" novalidate>\n\n        <div class=\"form-group\" ng-class=\"{ \'has-success\': form.name.$valid && vm.submitted,\n                                            \'has-error\': form.name.$invalid && vm.submitted }\">\n          <label>Name</label>\n\n          <input type=\"text\" name=\"name\" class=\"form-control\" ng-model=\"vm.user.name\"\n                 required/>\n          <p class=\"help-block\" ng-show=\"form.name.$error.required && vm.submitted\">\n            A name is required\n          </p>\n        </div>\n\n        <div class=\"form-group\" ng-class=\"{ \'has-success\': form.email.$valid && vm.submitted,\n                                            \'has-error\': form.email.$invalid && vm.submitted }\">\n          <label>Email</label>\n\n          <input type=\"email\" name=\"email\" class=\"form-control\" ng-model=\"vm.user.email\"\n                 required\n                 mongoose-error/>\n          <p class=\"help-block\" ng-show=\"form.email.$error.email && vm.submitted\">\n            Doesn\'t look like a valid email.\n          </p>\n          <p class=\"help-block\" ng-show=\"form.email.$error.required && vm.submitted\">\n            What\'s your email address?\n          </p>\n          <p class=\"help-block\" ng-show=\"form.email.$error.mongoose\">\n            {{ vm.errors.email }}\n          </p>\n        </div>\n\n        <div class=\"form-group\" ng-class=\"{ \'has-success\': form.password.$valid && vm.submitted,\n                                            \'has-error\': form.password.$invalid && vm.submitted }\">\n          <label>Password</label>\n\n          <input type=\"password\" name=\"password\" class=\"form-control\" ng-model=\"vm.user.password\"\n                 ng-minlength=\"3\"\n                 required\n                 mongoose-error/>\n          <p class=\"help-block\"\n             ng-show=\"(form.password.$error.minlength || form.password.$error.required) && vm.submitted\">\n            Password must be at least 3 characters.\n          </p>\n          <p class=\"help-block\" ng-show=\"form.password.$error.mongoose\">\n            {{ vm.errors.password }}\n          </p>\n        </div>\n\n        <div class=\"form-group\" ng-class=\"{ \'has-success\': form.confirmPassword.$valid && vm.submitted,\n                                            \'has-error\': form.confirmPassword.$invalid && vm.submitted }\">\n          <label>Confirm Password</label>\n          <input type=\"password\" name=\"confirmPassword\" class=\"form-control\" ng-model=\"vm.user.confirmPassword\"\n                 match=\"vm.user.password\"\n                 ng-minlength=\"3\" required/>\n          <p class=\"help-block\"\n             ng-show=\"form.confirmPassword.$error.match && vm.submitted\">\n            Passwords must match.\n          </p>\n        </div>\n\n        <div>\n          <button class=\"btn btn-inverse btn-lg btn-register\" type=\"submit\">\n            Sign up\n          </button>\n          <a class=\"btn btn-default btn-lg btn-login\" ui-sref=\"login\">\n            Login\n          </a>\n        </div>\n\n      </form>\n    </div>\n  </div>\n  <hr>\n</div>\n");
$templateCache.put("app/employee/addemployee/addemployee.html","<md-dialog aria-label=\"test\" flex=\"90\">\n  <feature></feature>\n  <form class=\"form\" name=\"addNew\" novalidate>\n    <!-- ng-submit=\"aec.pushEmp(addNew)\" -->\n    <md-toolbar>\n      <div class=\"md-toolbar\">\n        <h2></h2>\n        <span flex>Add Employee</span>\n        </md-button>\n      </div>\n    </md-toolbar>\n    <div layout=\"row\" layout-xs=\"column\" flex layout-align=\"center start\" layout-padding>\n      <div layout=\"column\" flex>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">first name</label>\n          <input type=\"text\" id=\"first_name\" name=\"first_name\" ng-model=\"aec.newEmp.first_name\" ng-pattern=\"/^[^\\W\\d_]+$/\" required>\n          <div ng-messages=\"addNew.first_name.$error\">\n            <div ng-message=\"required\">please enter the first name of the employee</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">last name</label>\n          <input type=\"text\" name=\"last_name\" ng-model=\"aec.newEmp.last_name\" ng-pattern=\"/^[^\\W\\d_]+$/\" required>\n          <div ng-messages=\"addNew.last_name.$error\">\n            <div ng-message=\"required\">please enter the last name of the employee</div>\n          </div>\n        </md-input-container>\n        <label for=\"\">Clients(s)</label>\n        <md-chips ng-model=\"aec.newEmp.client\" placeholder=\"Enter Clients (type their name and hit enter for each)\" delete-button-label=\"Remove Tag\" delete-hint=\"Press delete to remove tag\" secondary-placeholder=\"+Enter Clients\" required></md-chips>\n        <label for=\"\">skill(s)</label>\n        <md-chips ng-model=\"aec.newEmp.skill\" placeholder=\"Enter skills\" delete-button-label=\"Remove Tag\" delete-hint=\"Press delete to remove tag\" secondary-placeholder=\"+Enter skills\" required></md-chips>\n\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">recruiter</label>\n          <input type=\"text\" name=\"recruiter\" ng-model=\"aec.newEmp.recruiter\" ng-pattern=\"/^[^\\W\\d_]+$/\" required>\n          <div ng-messages=\"addNew.recruiter.$error\">\n            <div ng-message=\"required\">please enter the recruiter\'s name</div>\n          </div>\n        </md-input-container>\n\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">placement type</label>\n          <input type=\"text\" name=\"placement_type\" ng-model=\"aec.newEmp.placement_type\" ng-pattern=\"/(fulltime|part-time|project|parttime|full-time)/\" required>\n          <div ng-messages=\"addNew.placement_type.$error\">\n            <div ng-message=\"required\">please enter fulltime, part-time, or project</div>\n          </div>\n        </md-input-container>\n\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">salary</label>\n          <input type=\"number\" name=\"salary\" ng-model=\"aec.newEmp.salary\" required>\n          <div ng-messages=\"addNew.salary.$error\">\n            <div ng-message=\"required\">please enter the salary</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">Insurance</label>\n          <input type=\"number\" name=\"insurance\" ng-model=\"aec.newEmp.insurance\" required>\n          <div ng-messages=\"addNew.insurance.$error\">\n            <div ng-message=\"required\">please enter the insurance cost</div>\n          </div>\n        </md-input-container>\n      </div>\n      <div layout=\"column\" flex>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">relocation</label>\n          <input type=\"number\" name=\"relocation\" ng-model=\"aec.newEmp.relocation\" required>\n          <div ng-messages=\"addNew.relocation.$error\">\n            <div ng-message=\"required\">please enter the relocation cost</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">immigration</label>\n          <input type=\"number\" name=\"immigration\" ng-model=\"aec.newEmp.immigration\" required>\n          <div ng-messages=\"addNew.immigration.$error\">\n            <div ng-message=\"required\">Please enter the immigrtion cost</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">pay vacation cost</label>\n          <input type=\"number\" name=\"pay_vacation_cost\" ng-model=\"aec.newEmp.pay_vacation_cost\" required>\n          <div ng-messages=\"addNew.pay_vacation_cost.$error\">\n            <div ng-message=\"required\">please enter the paid vacation cost</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">ksquare hourly cost</label>\n          <input type=\"number\" name=\"ksquare_hourly_cost\" ng-model=\"aec.newEmp.ksquare_hourly_cost\" required>\n          <div ng-messages=\"addNew.ksquare_hourly_cost.$error\">\n            <div ng-message=\"required\">please enter Ksquare\'s hourly cost</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">target bill rate</label>\n          <input type=\"number\" name=\"target_bill_rate\" ng-model=\"aec.newEmp.target_bill_rate\" required>\n          <div ng-messages=\"addNew.target_bill_rate.$error\">\n            <div ng-message=\"required\">Please enter the target bill rate</div>\n          </div>\n        </md-input-container>\n        <md-input-container class=\"md-block\" flex>\n          <label for=\"\">client bill pay</label>\n          <input type=\"number\" name=\"client_bill_pay\" ng-model=\"aec.newEmp.client_bill_pay\" required>\n          <div ng-messages=\"addNew.client_bill_pay.$error\">\n            <div ng-message=\"required\">please enter the client bill pay amount</div>\n          </div>\n        </md-input-container>\n        <md-dialog-content>\n          <div class=\"md-dialog-content\">\n          </div>\n        </md-dialog-content>\n        <md-dialog-actions id=\'getToast\'>\n          <md-button class=\"md-primary md-raised\" ng-click=\"aec.confirm()\" ng-disabled=\"addNew.$invalid\" type=\"submit\">\n            Add Employee\n          </md-button>\n          <md-button class=\"md-primary md-raised\" ng-click=\"aec.cancel()\">\n            Cancel\n          </md-button>\n        </md-dialog-actions>\n      </div>\n    </div>\n    <span flex></span>\n    </md-dialog-actions>\n  </form>\n</md-dialog>\n");
$templateCache.put("app/employee/toast/toast.html","\n<md-toast>\n  <span class=\"md-toast-text\" flex>save editted Employee?</span>\n  <md-button ng-click=\"vm.empConfirmed()\">Save</md-button>\n  <md-button ng-click=\"vm.closeToast()\">Cancel</md-button>\n</md-toast>\n");
$templateCache.put("app/report/client/client.html","<md-content>\n  <md-content>\n    <md-tabs>\n      <md-tab label=\"Jan\" ng-click=\"cli.monthSelect(\'jan\')\"></md-tab>\n      <md-tab label=\"Feb\" ng-click=\"cli.monthSelect(\'feb\')\"></md-tab>\n      <md-tab label=\"Mar\" ng-click=\"cli.monthSelect(\'mar\')\"></md-tab>\n      <md-tab label=\"Apr\" ng-click=\"cli.monthSelect(\'apr\')\"></md-tab>\n      <md-tab label=\"May\" ng-click=\"cli.monthSelect(\'may\')\"></md-tab>\n      <md-tab label=\"Jun\" ng-click=\"cli.monthSelect(\'jun\')\"></md-tab>\n      <md-tab label=\"Jul\" ng-click=\"cli.monthSelect(\'jul\')\"></md-tab>\n      <md-tab label=\"Aug\" ng-click=\"cli.monthSelect(\'aug\')\"></md-tab>\n      <md-tab label=\"Sept\" ng-click=\"cli.monthSelect(\'sept\')\"></md-tab>\n      <md-tab label=\"Oct\" ng-click=\"cli.monthSelect(\'oct\')\"></md-tab>\n      <md-tab label=\"Nov\" ng-click=\"cli.monthSelect(\'nov\')\"></md-tab>\n      <md-tab label=\"Dec\" ng-click=\"cli.monthSelect(\'dec\')\"></md-tab>\n    </md-tabs>\n  </md-content>\n</md-content>\n<md-toolbar >\n  <div class=\"md-toolbar-tools\">\n    <div class=\"md-title\">Client Report</div>\n  </div>\n</md-toolbar>\n<div layout=\"column\" layout-gt-sm=\"row\" class=\"md-whiteframe-11dp\">\n  <!-- table -->\n  <md-content flex layout=\"column\">\n    <md-table-container>\n      <table md-table ng-model=\"cli.client\">\n        <thead md-head md-order=\"cli.query.order\">\n          <tr md-row>\n            <th md-column md-numeric>client</th>\n            <th md-column md-numeric>count</th>\n            <th md-column md-numeric>rev</th>\n          </tr>\n        </thead>\n        <tbody md-body>\n\n          <tr md-row md-select=\"client\" ng-repeat=\"client in cli.tableData\n          | filter: cli.filter.search | orderBy: cli.query.order | limitTo: cli.query.limit\n          : (cli.query.page -1) * cli.query.limit\">\n            <td md-cell>{{client.name}}</td>\n            <td md-cell>{{client.count}}</td>\n            <td md-cell>{{client.rev}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </md-table-container>\n        <md-table-pagination layout = \"row\" md-limit=\"cli.query.limit\"  md-limit-options=\"cli.limitOptions\"\n        md-page=\"cli.query.page\" md-total=\"{{cli.total}}\" md-page-select=\"cli.options.pageSelect\"\n        md-boundary-links=\"cli.options.boundaryLinks\" md-on-paginate=\"cli.logPagination\">\n      </md-table-pagination>\n  </md-content>\n  <!-- chart -->\n  <div flex>\n    <div google-chart chart=\"cli.chart\">\n\n    </div>\n    <!-- https://github.com/angular-google-chart/angular-google-chart -->\n\n\n  </div>\n</div>\n");}]);