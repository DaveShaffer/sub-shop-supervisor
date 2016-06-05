/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/users/:userId/order              ->  index
 * POST    /api/users/:userId/order              ->  create
 * GET     /api/users/:userId/order/:id          ->  show
 * PUT     /api/users/:userId/order/:id          ->  update
 * DELETE  /api/users/:userId/order/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import OrderItem from './orderitem.model';
import Menu from '../menu/menu.model';
import User from '../user/user.model';

function findItemInOrder(user, id) {
  // _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  return _.find(user.order, function(orderItem) {
    // return orderItem.item === id;    // does not work!
    console.log('Comparing ' + orderItem.item + ' to ' + id);
    return orderItem.item.equals(id) || orderItem._id.equals(id);
  });
}

// Get the order from the DB.
exports.get = function(req, res) {
  console.log('get, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  User.findById(userId)
  .populate('order.item')
  .exec(function(err, user) {
    console.log('user: ' + user.name);
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }
    console.log('returning order: ' + JSON.stringify(user.order));
    res.json(200, user.order);
  });
};

// Add a new item to the order or update the qty and return the order.
exports.addItem = function(req, res) {
  console.log('addItem, url = ' + req.url);
  var userId = req.params.userid.trim();
  var itemId = req.params.itemid.trim();
  console.log('userId: ' + userId + ', itemId: ' + itemId);

  Item.findById(itemId, function(err, item) {
    if (err) { return handleError(res, err); }
    if (!item) { return res.send(404); }
    User.findById(userId, function(err, user) {
      if (err) { return handleError(res, err); }
      if (!user) { return res.send(404); }

      // Check if item is already in order
      var found = findItemInOrder(user, item._id);
      if (found) {
        console.log('Found item ' + item.name + ' in order, therefore incrementing qty');
        found.qty = found.qty + 1;
      }
      else {
        console.log('Adding item to order: ' + item.name);
        user.order.push( new OrderItem( { item: item, qty: 1 } ) );
      }
      user.save(function() {
        user.populate('order.item', function(err, user) {
          return res.json(201, user.order );
        });
      });
    });
  });
};

// Remove an item from the order and return the order.
exports.removeItem = function(req, res) {
  console.log('removeItem, url = ' + req.url);
  var userId = req.params.userid;
  var orderItemId = req.params.itemid;
  console.log('userId: ' + userId + ', orderItemId: ' + orderItemId);

  // Remove the item, get the updated order, and return the order
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    // Check if item is already in order
    var found = findItemInOrder(user, orderItemId);
    if (found) {
      console.log('Removing item from order');
      user.order.pull(found._id);               // pull is a feature of MongooseArray!
    }
    else {
      return res.send(404);
    }
    user.save(function() {
      user.populate('order.item', function(err, user) {
        return res.json(201, user.order );
      });
    });
  });
};

// Remove all items from the order in the DB.
exports.removeAllItems = function(req, res) {
  console.log('removeAllItems, url = ' + req.url);
  var userId = req.params.userid;
  console.log('userId: ' + userId);

  // remove all items from order and return the order
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.send(404); }

    user.order = [];
    user.save(function() {
      user.populate('order.item', function(err, user) {
        return res.send(204, user.order);
      });
    });
  });
}

function handleError(res, err) {
  return res.send(500, err);
}

// function respondWithResult(res, statusCode) {
//   statusCode = statusCode || 200;
//   return function(entity) {
//     if (entity) {
//       res.status(statusCode).json(entity);
//     }
//   };
// }

// function saveUpdates(updates) {
//   return function(entity) {
//     var updated = _.merge(entity, updates);
//     return updated.save()
//       .then(updated => {
//         return updated;
//       });
//   };
// }

// function removeEntity(res) {
//   return function(entity) {
//     if (entity) {
//       return entity.remove()
//         .then(() => {
//           res.status(204).end();
//         });
//     }
//   };
// }

// function handleEntityNotFound(res) {
//   return function(entity) {
//     if (!entity) {
//       res.status(404).end();
//       return null;
//     }
//     return entity;
//   };
// }

// function handleError(res, statusCode) {
//   statusCode = statusCode || 500;
//   return function(err) {
//     res.status(statusCode).send(err);
//   };
// }

// // Gets a list of Orders
// export function index(req, res) {
//   return Order.find().exec()
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Gets a single Order from the DB
// export function show(req, res) {
//   return Order.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Creates a new Order in the DB
// export function create(req, res) {
//   return Order.create(req.body)
//     .then(respondWithResult(res, 201))
//     .catch(handleError(res));
// }

// // Updates an existing Order in the DB
// export function update(req, res) {
//   if (req.body._id) {
//     delete req.body._id;
//   }
//   return Order.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(saveUpdates(req.body))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Deletes a Order from the DB
// export function destroy(req, res) {
//   return Order.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(removeEntity(res))
//     .catch(handleError(res));
// }
