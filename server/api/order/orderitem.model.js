'use strict';

import mongoose from 'mongoose';

var OrderItemSchema = new mongoose.Schema({
  name : String,
  item : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Menu'
  },
  qty : Number
});

export default mongoose.model('OrderItem', OrderItemSchema);
