'use strict';

var express = require('express');
var controller = require('./order.controller');

var router = express.Router();

router.get('/:userid/order/', controller.get);
// router.get('/', controller.show);
router.post('/:userid/order/:itemid', controller.addItem);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
router.delete('/:userid/order/:itemid', controller.removeItem);
router.delete('/:userid/order', controller.removeAllItems);

module.exports = router;
