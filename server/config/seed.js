/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import Menu from '../api/menu/menu.model';

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

  Menu.find({}).remove()
  .then(() => {
    return Menu.create(
      {
        name: 'Cheese Burger',
        price: 3.50,
        qty: 50,
        serving: 1,
        delDate: 1465100076000,
        age: 0,
        shelfLife: 7
      },
      {
        name: 'Chips',
        price: 1.00,
        qty: 200,
        serving: 1,
        delDate: 1465100076000,
        age: 0,
        shelfLife: 365
      },
      {
        name: 'Pepsi',
        price: 2.50,
        qty: 1000,
        serving: 1,
        delDate: 1465100076000,
        age: 0,
        shelfLife: 700
      }
    )
  })
  .then(() => {
    return Menu.find({});
  })
.then((menus) => {
  console.log('Populated ' + menus.length + ' dishes.');
})
.catch((err) => {
  console.log('Error: ', err);
});
