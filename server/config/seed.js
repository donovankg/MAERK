/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Employee from '../api/employee/employee.model';
import Report from '../api/report/report.model';

Report.find({}).remove()
  .then(() => {
    Report.create({
      year: 2007,
      january:[],
      february:[],
      march:[],
      april:[],
      may:[],
      june:[],
      july:[],
      august:[],
      september:[],
      october:[],
      november:[],
      december:[]
    },{
      year: 2008,
      january:[],
      february:[],
      march:[],
      april:[],
      may:[],
      june:[],
      july:[],
      august:[],
      september:[],
      october:[],
      november:[],
      december:[]
    },{
      year: 2009,
      january:[],
      february:[],
      march:[],
      april:[],
      may:[],
      june:[],
      july:[],
      august:[],
      september:[],
      october:[],
      november:[],
      december:[]
    },{
      year: 2010,
      january:[],
      february:[],
      march:[],
      april:[],
      may:[],
      june:[],
      july:[],
      august:[],
      september:[],
      october:[],
      november:[],
      december:[]
      },{
      year: 2011,
      january:[],
      february:[],
      march:[],
      april:[],
      may:[],
      june:[],
      july:[],
      august:[],
      september:[],
      october:[],
      november:[],
      december:[]
},{
      year: 2012,
      january:[],
      february:[],
      march:[],
      april:[],
      may:[],
      june:[],
      july:[],
      august:[],
      september:[],
      october:[],
      november:[],
      december:[]
      },{
      year: 2013,
      january:[],
      february:[],
      march:[],
      april:[],
      may:[],
      june:[],
      july:[],
      august:[],
      september:[],
      october:[],
      november:[],
      december:[]
      },{
      year: 2014,
      january:[],
      february:[],
      march:[],
      april:[],
      may:[],
      june:[],
      july:[],
      august:[],
      september:[],
      october:[],
      november:[],
      december:[]
      },{
      year: 2015,
      january: [],
      february: []
    }, {
      year: 2016,
      january: [],
      february: []
    });
  });

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
        'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
        'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
        'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
        'tests alongside code. Automatic injection of scripts and ' +
        'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
        'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
        'payload, minifies your scripts/css/images, and rewrites asset ' +
        'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
        'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });

Employee.find({}).remove()
  .then(() => {
    Employee.create({
      "first_name": "Adam",
      "last_name": "Griffin",
      "client": [
        "Mudo",
        "Dabtype"

      ],
      "skill": [
        "DDA"
      ],
      "recruiter": "Arnold",
      "placement_type": "project",
      "salary": 99895,
      "insurance": 1000,
      "relocation": 1715,
      "immigration": 8451,
      "pay_vacation_cost": 7072,
      "ksquare_hourly_cost": 50,
      "target_bill_rate": 104574,
      "client_bill_pay": 83784,
      "activate": false,
      "total_hour": 123,
      "off_set": 321

    }, {
      "first_name": "Patricia",
      "last_name": "Bradley",
      "client": [
        "Flashdog",
        "Dabtype",
        "Topicshots"
      ],
      "skill": [
        "Clinical Development"
      ],
      "recruiter": "Ricky",
      "placement_type": "part-time",
      "salary": 80613,
      "insurance": 611,
      "relocation": 3653,
      "immigration": 9005,
      "pay_vacation_cost": 6629,
      "ksquare_hourly_cost": 50,
      "target_bill_rate": 65990,
      "client_bill_pay": 111757,
      "activate": false
    });
  });
