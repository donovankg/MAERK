
//----------------------------------
'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth,$mdSidenav) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.$mdSidenav=$mdSidenav;
  }

  toggleLeft(){
    this.$mdSidenav("leftSideNav").toggle();
  }

}

angular.module('maerkApp')
  .controller('NavbarController', NavbarController)
